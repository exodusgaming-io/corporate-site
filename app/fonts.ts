import localFont from "next/font/local";

// Self-hosted fonts; sources and licences in app/fonts/README.md.

// Headlines. Latin only: Mona Sans has no Cyrillic.
export const monaSans = localFont({
  src: "./fonts/MonaSans-Latin.woff2",
  weight: "200 900",
  variable: "--font-mona-sans",
});

// Body. Downloaded at build by scripts/fetch-fonts.mts; its licence keeps it out of git.
export const generalSans = localFont({
  src: "./fonts/general-sans/GeneralSans-Variable.woff2",
  weight: "200 700",
  variable: "--font-general-sans",
});

// Cyrillic for headlines and body, the Style Book fallback (p. 17). The unicode-range means browsers
// fetch it only for pages with Cyrillic text, so it is listed first in the font stacks in globals.css.
export const interCyrillic = localFont({
  src: "./fonts/Inter-Cyrillic.woff2",
  weight: "100 900",
  variable: "--font-inter-cyrillic",
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: "unicode-range", value: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116" }],
});

export const fontVariables = [monaSans.variable, generalSans.variable, interCyrillic.variable].join(" ");
