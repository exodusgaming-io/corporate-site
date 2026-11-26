// Languages of the site. English lives at the root (/products/); every other language sits under its
// own prefix with the same slugs (/es/products/). A language is built once it has content/<lang>/ and its
// route group in app/ (lib/site.ts lists the ones that exist).
export type Lang = "en" | "es" | "ru";

export function localize(lang: Lang, path: string): string {
  return lang === "en" ? path : `/${lang}${path}`;
}
