// Runs after `next build`: writes a redirect page into out/ for every Redirect
// document in Sanity. GitHub Pages cannot answer with a real 301; an instant meta
// refresh is what search engines treat as a permanent redirect. Real 301s move to
// Cloudflare at the domain switch (#6545).
import { access, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { getRedirects } from "../lib/sanity.ts";

const OUT = "out";
// Same rules as the Redirect schema in studio/schemaTypes/redirect.ts.
const PATH = /^\/(?!\/)[^\s?#]*$/;

// The file GitHub Pages serves for `from`, or null if `from` is not a safe path.
function fileFor(from: string): string | null {
  if (!PATH.test(from)) return null;
  const segments = from.split("/").filter(Boolean);
  if (segments.length === 0) return null; // the home page
  if (segments[0] === "_next" || segments.some((s) => s === "." || s === "..")) return null;
  // /old.html is a file; /old and /old/ are a folder (next.config.ts: trailingSlash).
  return segments.at(-1)!.includes(".")
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

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

const redirects = await getRedirects();
const written = new Set<string>();

for (const { from, to } of redirects) {
  const file = fileFor(from);
  const target = targetFor(to);
  if (!file || !target) {
    console.warn(`redirects: skipped ${from} -> ${to}: not a valid path or address`);
  } else if (written.has(file)) {
    console.warn(`redirects: skipped ${from}: another redirect already starts there`);
  } else if (await exists(file)) {
    console.warn(`redirects: skipped ${from}: a page exists at this path`);
  } else {
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, page(target));
    written.add(file);
  }
}

console.log(`redirects: wrote ${written.size} of ${redirects.length}`);
