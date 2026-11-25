# Fonts

Self-hosted through `next/font/local` (see `app/fonts.ts`). The build copies the files to `/_next/static/media/`,
so pages load no font from Google or Fontshare.

| Font | Use | File | Source | Licence |
|---|---|---|---|---|
| Mona Sans | headlines | `MonaSans-Latin.woff2` (variable, weight 200–900, Latin) | Google Fonts | SIL OFL 1.1, `OFL-MonaSans.txt` |
| General Sans | body | `general-sans/GeneralSans-Variable.woff2` (variable, weight 200–700) | Fontshare | ITF Free Font License, `FFL-GeneralSans.txt` |
| Inter | Cyrillic for both, the Style Book fallback (p. 17) | `Inter-Cyrillic.woff2` (variable, weight 100–900, Cyrillic only) | Google Fonts | SIL OFL 1.1, `OFL-Inter.txt` |

Mona Sans and General Sans have no Cyrillic, so Russian text falls through to Inter. Inter is declared with a Cyrillic
`unicode-range`, so a page without Cyrillic never downloads it.

## General Sans is not in git

The ITF Free Font License allows self-hosting the font on our own site but not distributing the file through a public
repository (section 02), and this repo is public. `scripts/fetch-fonts.mts` downloads the official file from Fontshare
before `npm run dev` and `npm run build`, checks its SHA-256 and puts it in `app/fonts/general-sans/` (ignored by git).
The licence also forbids subsetting or converting the file, so it is used exactly as Fontshare serves it.

The script pins one file on Fontshare's CDN, so a new release doesn't change the build; CI caches it between runs.
To move to a new version, take the woff2 URL from Fontshare's CSS (link in the script), check it, then update
`FONT_URL` and `SHA256`.
