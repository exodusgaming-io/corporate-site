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
| `content/redirects.ts` | redirects (below) |

### Redirects

Add `{ from: "/old-path", to: "/new-path" }` (or `to: "https://…"`) to `content/redirects.ts`. After `next build`, `scripts/write-redirects.mts` writes a page at each `from` path that sends visitors on at once (meta refresh + `location.replace`, with a canonical link). GitHub Pages cannot answer with a real 301; search engines treat an instant meta refresh as a permanent redirect. At the domain switch (#6545) redirects move to Cloudflare rules for real 301s.

The build fails, naming the entry, when a path or address is not valid (only site paths and http(s) addresses), when a redirect leads back to itself (`/a` → `/a/#x`, or `/a` → `/b` → `/a`), when two redirects start at the same path or clash (`/old.html` and `/old.html/`), or when a page or file already exists there.

A `from` ending in `.html` becomes that file; any other `from` (`/old`, `/old/`, `/deck.pdf`) becomes `…/index.html`, which GitHub Pages serves at `/old/` and reaches from `/old` with its own 301.

## Develop

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # static site in out/
npm run lint
```
