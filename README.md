# exodusgaming.io

The company site. Trello: epic #6539, this setup #6540.

## Stack

- **Next.js 16, static export** (`output: "export"`). The build is plain HTML/CSS/JS in `out/`; nothing runs on a server.
- **GitHub Pages** hosts the build, published by `.github/workflows/deploy.yml` on every push to `main`. Pull requests build and lint only.
- **Cloudflare** stays in front for DNS (zone `exodusgaming.io`).
- **No CMS: content lives in the repo** (`content/`). A new page or a copy change is a pull request; the merge to `main` rebuilds and deploys the site.

Why no CMS (leadership decision, 25 Nov 2026): the site is static and changes rarely, so a paid CMS isn't worth it. Sanity was set up first and removed; Payload needs its own server and Postgres, and Contentful's free plan does not allow commercial use.

Why this and not Cloudflare Workers or a container: the zone lives in a Cloudflare account where we cannot deploy Workers, and the site needs no server. GitHub Pages is how the current exodusgaming.io is already hosted (`exodusgaming-io/website`), so it adds no new infrastructure. Pages on our GitHub plan needs a public repository, so nothing secret goes into this repo: keys live in Actions secrets.

What a static export cannot do (Next.js docs, "Static Exports — Unsupported Features"): redirects, headers, draft mode, ISR, image optimization. Redirects are pages written at build (see "Redirects" below) until the domain switch moves them to Cloudflare rules.

## Environments

| | URL | Indexing |
|---|---|---|
| Staging (now) | https://staging.exodusgaming.io | `noindex`, `robots.txt` disallows all |
| Production (after approval) | https://exodusgaming.io | on, via repo variable `SITE_INDEXABLE=true` |

The live exodusgaming.io is still served by `exodusgaming-io/website` until the DNS switch (#6545).

## Content

Everything the site says lives in `content/`; pages import it. To change copy or add a page, open a pull request: the PR check builds the site, and the merge to `main` deploys staging.

| File | What |
|---|---|
| `content/site.ts` | site title, tagline and meta description |
| `content/navigation.ts` | header, menu and footer links, contact email |
| `content/redirects.ts` | redirects (below) |

### Redirects

Add `{ from: "/old-path", to: "/new-path" }` (or `to: "https://…"`) to `content/redirects.ts`. After `next build`, `scripts/write-redirects.mts` writes a page at each `from` path that sends visitors on at once (meta refresh + `location.replace`, with a canonical link). GitHub Pages cannot answer with a real 301; search engines treat an instant meta refresh as a permanent redirect. At the domain switch (#6545) redirects move to Cloudflare rules for real 301s.

The build fails, naming the entry, when a path or address is not valid (only site paths and http(s) addresses), when a redirect leads back to itself (`/a` → `/a/#x`, or `/a` → `/b` → `/a`), when two redirects start at the same path or clash (`/old.html` and `/old.html/`), or when a page or file already exists there.

A `from` ending in `.html` becomes that file; any other `from` (`/old`, `/old/`, `/deck.pdf`) becomes `…/index.html`, which GitHub Pages serves at `/old/` and reaches from `/old` with its own 301.

## Design system

Built from the Claude Design mockups (Daria, Nov 2026) and the Style Book; #6541. Every token and component is on
https://staging.exodusgaming.io/styleguide/ (never indexed, not linked from the site).

- **Tokens** — `app/globals.css`. Brand colours, type scale, radii, gutter and section spacing as Tailwind 4 theme
  variables; Tailwind's default palette and sizes are cleared, so `bg-onyx`, `text-display`, `rounded-xl`, `px-gutter`
  exist and `bg-zinc-500` doesn't.
- **Dark and light sections** — a section sets `data-tone="dark"` or `"light"`, and `text-fg`, `text-fg-soft`,
  `text-accent`, `border-line` and the button colours follow. Use those inside components, not fixed colours.
- **Components** — `components/ui` (buttons, section, eyebrow, dialog), `components/blocks` (heroes, cards, grids,
  quote, FAQ…), `components/forms`, `components/site` (header, menu, Book a demo drawer, footer, cookie banner).
  Any link to `#demo` opens the Book a demo drawer.
- **Fonts** — self-hosted, see `app/fonts/README.md`. General Sans is downloaded at build (`scripts/fetch-fonts.mts`)
  because its licence doesn't allow publishing the file in a public repository.
- **Motion** — the animated hero gradient and every transition stop under `prefers-reduced-motion`.

## Develop

```bash
npm ci
npm run dev      # http://localhost:3000; downloads General Sans on first run
npm run build    # static site in out/
npm run lint
```
