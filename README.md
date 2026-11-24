# exodusgaming.io

The company site. Trello: epic #6539, this setup #6540.

## Stack

- **Next.js 16, static export** (`output: "export"`). The build is plain HTML/CSS/JS in `out/`; nothing runs on a server.
- **GitHub Pages** hosts the build, published by `.github/workflows/deploy.yml` on every push to `main`. Pull requests build and lint only.
- **Cloudflare** stays in front for DNS (zone `exodusgaming.io`).
- **CMS: Sanity** (hosted). The site reads published content at build time with `@sanity/client` (`lib/sanity.ts`); there are no runtime requests to Sanity. A publish in Sanity will rebuild the site through the `repository_dispatch` event `content-published`.

Why Sanity: nothing to host or patch (Payload needs its own server and Postgres), editors can sign in with their Google account, and Contentful's free plan does not allow commercial use (Lite is €300/month).

Why this and not Cloudflare Workers or a container: the zone lives in a Cloudflare account where we cannot deploy Workers, and the site needs no server. GitHub Pages is how the current exodusgaming.io is already hosted (`exodusgaming-io/website`), so it adds no new infrastructure. Pages on our GitHub plan needs a public repository, so nothing secret goes into this repo: keys live in Actions secrets.

What a static export cannot do (Next.js docs, "Static Exports — Unsupported Features"): redirects, headers, draft mode, ISR, image optimization. Redirects are pages written at build (see "Redirects" below) until the domain switch moves them to Cloudflare rules; draft preview runs through the Studio (see "Draft preview" below), so it needs no Next.js draft mode.

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

Access is by invitation to the Sanity project: only members can open the Studio or edit content. Invite editors by their company e-mail and have them sign in with Google. The hosted Studio signs in through the Sanity Dashboard, which also offers GitHub and e-mail/password, so the Google-only setting in `studio/sanity.config.ts` does not restrict it; check how members signed in under Manage → Members.

Content types: **Site settings** (singleton: title, tagline), **Blog post**, **News item**, **Author**, **Redirect**; posts and news carry an **SEO** block (meta title, description, share image, noindex).

### Redirects

Editors add a **Redirect** (from `/old-path`, to `/new-path` or `https://…`) and publish. After `next build`, `scripts/write-redirects.mts` writes a page at each `from` path that sends visitors on at once (meta refresh + `location.replace`, with a canonical link). GitHub Pages cannot answer with a real 301; search engines treat an instant meta refresh as a permanent redirect. At the domain switch (#6545) redirects move to Cloudflare rules for real 301s.

A bad redirect never fails the build; the script skips it with a warning in the build log (GitHub Actions) when the path or address is not valid (only site paths and http(s) addresses), when it leads back to itself (`/a` → `/a/#x`, or `/a` → `/b` → `/a`), when another redirect already starts there, or when a page exists at that path. The Studio blocks these before publishing too, except loops across several redirects and existing pages, which only the build can see.

A `from` ending in `.html` becomes that file; any other `from` (`/old`, `/old/`, `/deck.pdf`) becomes `…/index.html`, which GitHub Pages serves at `/old/` and reaches from `/old` with its own 301.

### Draft preview

In the Studio, **Preview** (the Presentation tool) shows the staging site with the editor's unpublished changes as they type. The site is static, so the drafts come from the Studio itself: it runs the page's queries with the editor's session and passes the results into the page (`app/preview/`). The site holds no token. Visitors get the build-time HTML and none of the Sanity or preview code: it loads only when the page runs inside the Studio (framed, or in a tab opened with "Open preview").

How a page joins preview (the home page is the example):
- a plain view component renders the data (`app/home-view.tsx`);
- a client wrapper renders that view with the build-time data, and inside the Studio lazy-loads the live version (`app/home-content.tsx`);
- the live version reads the same query through `useQuery` from `@sanity/react-loader` with the build-time data as `initial` (`app/home-live.tsx`);
- queries and types live in `lib/queries.ts`; never import `lib/sanity.ts` from code every visitor loads, it would ship the Sanity client;
- the document type gets a location in `presentationTool` (`studio/sanity.config.ts`).

The Studio lives in `studio/` with its own `package.json`:

```bash
cd studio
npm ci
npm run dev       # http://localhost:3333; SANITY_STUDIO_PREVIEW_URL=http://localhost:3000 previews a local site
npm run lint && npm run typecheck   # also run on every PR
npm run deploy    # rebuilds and publishes https://exodusgaming.sanity.studio
```

## Develop

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # static site in out/
npm run lint
```
