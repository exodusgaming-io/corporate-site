// Runs after the build: every link and file a page points to on this site must exist in out/.
// Content links already go through the page registry (lib/site.ts); this catches the rest, such as
// hand-written paths, images and the redirect pages. A broken link fails the build.
import { readdir, readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const OUT = "out";
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

async function exists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

// /a/b/ -> out/a/b/index.html; /brand/x.svg -> out/brand/x.svg. Query and #anchor are dropped.
async function resolves(url: string): Promise<boolean> {
  const path = decodeURI(url.split(/[?#]/)[0]);
  if (path.endsWith("/")) return exists(join(OUT, path, "index.html"));
  return (await exists(join(OUT, path))) || exists(join(OUT, path, "index.html"));
}

const broken = new Map<string, Set<string>>();
for (const file of await htmlFiles(OUT)) {
  const html = await readFile(file, "utf8");
  for (const [, url] of html.matchAll(/\s(?:href|src)="(\/(?!\/)[^"]*)"/g)) {
    if (url.startsWith("/_next/") || expectedMissing.has(url) || (await resolves(url))) continue;
    if (!broken.has(url)) broken.set(url, new Set());
    broken.get(url)!.add(file);
  }
}

if (broken.size > 0) {
  for (const [url, files] of broken) console.error(`links: ${url} is missing (in ${[...files].join(", ")})`);
  process.exit(1);
}
console.log("links: all internal links resolve");
