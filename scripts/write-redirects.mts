// Runs after `next build`: writes a redirect page into out/ for every entry in
// content/redirects.ts. GitHub Pages cannot answer with a real 301; an instant meta
// refresh is what search engines treat as a permanent redirect. Real 301s move to
// Cloudflare at the domain switch (#6545).
//
// Any bad entry fails the build, so the PR check catches it before merge.
import { mkdir, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { redirects } from "../content/redirects.ts";

const OUT = "out";
const PATH = /^\/(?!\/)[^\s?#\\]*$/;

// Path without query, hash, index.html or trailing slash: /a/ = /a = /a/index.html = /a?x#y.
function normalize(path: string): string {
  const bare = path.split(/[?#]/)[0].replace(/\/index\.html?$/i, "/");
  return bare.length > 1 ? bare.replace(/\/+$/, "") : bare;
}

// The path segments of `from`, or null if no page may be written for it.
function segmentsOf(from: string): string[] | null {
  if (!PATH.test(from)) return null;
  const segments = from.split("/").filter(Boolean);
  if (segments.length === 0) return null; // the home page
  if (segments[0] === "_next" || segments.some((s) => s === "." || s === "..")) return null;
  return segments;
}

// /old.html is served as that file. Anything else, /deck.pdf included, gets a folder
// with index.html, which Pages serves for /old/ and reaches from /old with its own 301
// (next.config.ts: trailingSlash). A page named deck.pdf would be served as a PDF.
function fileFor(from: string, segments: string[]): string {
  return /\.html?$/i.test(segments.at(-1)!) && !from.endsWith("/")
    ? join(OUT, ...segments)
    : join(OUT, ...segments, "index.html");
}

// `to` as it goes into the page, or null unless it is a site path or an http(s) URL.
function targetFor(to: string): string | null {
  if (PATH.test(to.split(/[?#]/)[0])) return to;
  try {
    const url = new URL(to);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function page(to: string): string {
  const href = escapeHtml(to);
  const js = JSON.stringify(to).replace(/</g, "\\u003c");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${href}">
<meta http-equiv="refresh" content="0; url=${href}">
<script>location.replace(${js})</script>
</head>
<body><p><a href="${href}">This page has moved.</a></p></body>
</html>
`;
}

async function isFile(path: string): Promise<boolean> {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

// Where each site path sends visitors, to catch /a -> /a/#x and /a -> /b -> /a.
const next = new Map<string, string>();
for (const { from, to } of redirects) {
  const target = targetFor(to);
  if (segmentsOf(from) && target?.startsWith("/")) next.set(normalize(from), normalize(target));
}

function loops(from: string): boolean {
  const seen = new Set<string>();
  for (let at = normalize(from); next.has(at); at = next.get(at)!) {
    if (seen.has(at)) return true;
    seen.add(at);
  }
  return false;
}

const problems: string[] = [];
const pages = new Map<string, string>();

for (const { from, to } of redirects) {
  const segments = segmentsOf(from);
  const target = targetFor(to);
  if (!segments || !target) {
    problems.push(`${from} -> ${to}: not a valid path or address`);
  } else if (loops(from)) {
    problems.push(`${from} -> ${to}: ends in a redirect loop`);
  } else {
    const file = fileFor(from, segments);
    if (pages.has(file)) {
      problems.push(`${from}: another redirect already starts there`);
    } else if ((await isFile(file)) || (await isFile(join(OUT, ...segments)))) {
      // A page at this path, or a file where the folder would go (/robots.txt).
      problems.push(`${from}: a page exists at this path`);
    } else {
      pages.set(file, target);
    }
  }
}

if (problems.length > 0) {
  for (const problem of problems) console.error(`redirects: ${problem}`);
  console.error("redirects: fix content/redirects.ts");
  process.exit(1);
}

for (const [file, target] of pages) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page(target));
}

console.log(`redirects: wrote ${pages.size}`);
