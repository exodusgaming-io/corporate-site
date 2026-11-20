# exodusgaming.io

The company site. Trello: epic #6539, this setup #6540.

## Stack

- **Next.js 16, static export** (`output: "export"`). The build is plain HTML/CSS/JS in `out/`; nothing runs on a server.
- **GitHub Pages** hosts the build, published by `.github/workflows/deploy.yml` on every push to `main`. Pull requests build and lint only.
- **Cloudflare** stays in front for DNS (zone `exodusgaming.io`).
- **CMS: Sanity** (hosted). The site reads published content at build time with `@sanity/client` (`lib/sanity.ts`); there are no runtime requests to Sanity. A publish in Sanity will rebuild the site through the `repository_dispatch` event `content-published`.

Why Sanity: nothing to host or patch (Payload needs its own server and Postgres), editors sign in with Google and its 2FA, and Contentful's free plan does not allow commercial use (Lite is €300/month).

Why this and not Cloudflare Workers or a container: the zone lives in a Cloudflare account where we cannot deploy Workers, and the site needs no server. GitHub Pages is how the current exodusgaming.io is already hosted (`exodusgaming-io/website`), so it adds no new infrastructure. Pages on our GitHub plan needs a public repository, so nothing secret goes into this repo: keys live in Actions secrets.

What a static export cannot do (Next.js docs, "Static Exports — Unsupported Features"): redirects, headers, draft mode, ISR, image optimization. Redirects will be Cloudflare rules; CMS draft preview needs a separate runtime and is decided with the CMS.

## Environments

| | URL | Indexing |
|---|---|---|
| Staging (now) | https://staging.exodusgaming.io | `noindex`, `robots.txt` disallows all |
| Production (after approval) | https://exodusgaming.io | on, via repo variable `SITE_INDEXABLE=true` |

The live exodusgaming.io is still served by `exodusgaming-io/website` until the DNS switch (#6545).

## CMS (Sanity)

| | |
|---|---|
| Studio | https://exodusgaming.sanity.studio |
| Project | `a1r4gwxv`, dataset `production` (public read: only published documents) |
| Manage | https://www.sanity.io/organizations/ohbjl1i3u/project/a1r4gwxv |

Editors get access by invitation to the Sanity project and sign in with their company Google account.

Content types: **Site settings** (singleton: title, tagline), **Blog post**, **News item**, **Author**; posts and news carry an **SEO** block (meta title, description, share image, noindex).

The Studio lives in `studio/` with its own `package.json`:

```bash
cd studio
npm ci
npm run dev       # http://localhost:3333
npm run lint && npm run typecheck
npm run deploy    # rebuilds and publishes https://exodusgaming.sanity.studio
```

## Develop

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # static site in out/
npm run lint
```
