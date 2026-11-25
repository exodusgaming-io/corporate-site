// Downloads General Sans from Fontshare into app/fonts/general-sans/ (ignored by git).
// Its licence allows self-hosting on our site but not publishing the file in a public repository,
// so the file is fetched at build time instead of being committed. See app/fonts/README.md.
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const CSS_URL = "https://api.fontshare.com/v2/css?f[]=general-sans@1&display=swap";
const SHA256 = "49d3fbd2f1bcc9850d8d939cabf107d6ade508ce08419fca466b06879e4a0a8e";
const TARGET = "app/fonts/general-sans/GeneralSans-Variable.woff2";

const sha256 = (data: Uint8Array) => createHash("sha256").update(data).digest("hex");

function fail(message: string): never {
  console.error(`fonts: ${message}`);
  process.exit(1);
}

async function get(url: string): Promise<Response> {
  const response = await fetch(url).catch((error: unknown) => fail(`${url}: ${String(error)}`));
  if (!response.ok) fail(`${url}: HTTP ${response.status}`);
  return response;
}

const existing = await readFile(TARGET).catch(() => null);
if (existing && sha256(existing) === SHA256) process.exit(0);

// The CSS API names the current file; the CDN path is opaque and may change between versions.
const css = await (await get(CSS_URL)).text();
const match = css.match(/url\(['"]?([^'")]+\.woff2)['"]?\)/);
if (!match) fail(`no woff2 in ${CSS_URL}`);
const fontUrl = new URL(match[1], "https://cdn.fontshare.com").href;

const font = new Uint8Array(await (await get(fontUrl)).arrayBuffer());
const actual = sha256(font);
if (actual !== SHA256) {
  fail(`General Sans checksum changed (${actual}). Check the new file from ${fontUrl}, then update SHA256 in scripts/fetch-fonts.mts`);
}

await mkdir(dirname(TARGET), { recursive: true });
await writeFile(TARGET, font);
console.log(`fonts: downloaded ${TARGET}`);
