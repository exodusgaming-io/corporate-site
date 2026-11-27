// Runs after the build over every page in out/:
// - every link and file a page points to on this site exists, #anchors included;
// - no "**" is left in the visible text (emphasis marks in a field that doesn't support them).
// Content links already go through the page registry (lib/site.ts); this catches the rest, such as
// hand-written paths, images and the redirect pages. Any problem fails the build.
import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const OUT = "out";
const ORIGIN = "https://site.invalid";
// Links that point nowhere on purpose: the style guide's sample of the 404 page.
const expectedMissing = new Set(["/styleguide/missing-page/"]);

async function htmlFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return entry.name === "_next" ? [] : htmlFiles(path);
      return entry.name.endsWith(".html") ? [path] : [];
    }),
  );
  return nested.flat();
}

async function isFile(path: string): Promise<boolean> {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

// /a/b/ -> out/a/b/index.html; /brand/x.svg -> out/brand/x.svg. Null when nothing is there.
async function fileFor(pathname: string): Promise<string | null> {
  const path = decodeURIComponent(pathname);
  if (path.endsWith("/")) return (await isFile(join(OUT, path, "index.html"))) ? join(OUT, path, "index.html") : null;
  if (await isFile(join(OUT, path))) return join(OUT, path);
  return (await isFile(join(OUT, path, "index.html"))) ? join(OUT, path, "index.html") : null;
}

// The URL a page is served at: out/a/b/index.html -> /a/b/, out/404.html -> /404.html.
function urlOf(file: string): string {
  const path = "/" + relative(OUT, file).split(sep).join("/");
  return path.endsWith("/index.html") ? path.slice(0, -"index.html".length) : path;
}

const problems = new Map<string, Set<string>>();
const report = (problem: string, file: string) => {
  if (!problems.has(problem)) problems.set(problem, new Set());
  problems.get(problem)!.add(file);
};
const html = new Map<string, string>();
const read = async (file: string) => html.get(file) ?? html.set(file, await readFile(file, "utf8")).get(file)!;

for (const file of await htmlFiles(OUT)) {
  const page = await read(file);
  const base = new URL(urlOf(file), ORIGIN);

  for (const [, raw] of page.matchAll(/\s(?:href|src)="([^"]*)"/g)) {
    const value = raw.replace(/&amp;/g, "&");
    if (/^[a-z][a-z0-9+.-]*:/i.test(value) || value.startsWith("//")) continue; // other sites, mailto:, tel:
    const url = new URL(value, base);
    if (url.pathname.startsWith("/_next/") || expectedMissing.has(url.pathname)) continue;
    const target = value.startsWith("#") ? file : await fileFor(url.pathname);
    if (!target) {
      report(`${value} is missing`, file);
      continue;
    }
    const anchor = decodeURIComponent(url.hash.slice(1));
    if (anchor && !["demo", "main"].includes(anchor) && !(await read(target)).includes(`id="${anchor}"`)) {
      report(`${value}: no element with id="${anchor}"`, file);
    }
  }

  const text = page.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  if (text.includes("**")) report(`"**" shows on the page: emphasis works only in fields typed Text`, file);
}

if (problems.size > 0) {
  for (const [problem, files] of problems) console.error(`links: ${problem} (in ${[...files].join(", ")})`);
  process.exit(1);
}
console.log("links: all internal links, anchors and emphasis marks check out");
