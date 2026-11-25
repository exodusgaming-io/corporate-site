// Downloads General Sans from Fontshare into app/fonts/general-sans/ (ignored by git).
// Its licence allows self-hosting on our site but not publishing the file in a public repository,
// so the file is fetched at build time instead of being committed. See app/fonts/README.md.
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

// The exact file we checked (variable, weight 200–700, 38 KB). The path names one version, so a new release
// on Fontshare doesn't change our build. To update, take the woff2 URL from CSS_URL, check it, change both.
const FONT_URL =
  "https://cdn.fontshare.com/wf/LHQJ5KSAL7VGAEIDSTEXCCOIUKFLT2I6/GW57XUEG4ZBVMLZZTQZTGYPROITRRQ5W/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2";
const SHA256 = "49d3fbd2f1bcc9850d8d939cabf107d6ade508ce08419fca466b06879e4a0a8e";
const CSS_URL = "https://api.fontshare.com/v2/css?f[]=general-sans@1&display=swap";
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

const font = new Uint8Array(await (await get(FONT_URL)).arrayBuffer());
const actual = sha256(font);
if (actual !== SHA256) {
  fail(`General Sans at ${FONT_URL} has changed (${actual}). Find the current file in ${CSS_URL}, check it, then update FONT_URL and SHA256 in scripts/fetch-fonts.mts`);
}

await mkdir(dirname(TARGET), { recursive: true });
await writeFile(TARGET, font);
console.log(`fonts: downloaded ${TARGET}`);
