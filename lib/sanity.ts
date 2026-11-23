import { createClient } from "@sanity/client";

// Read at build time only (static export). The dataset is public, so no token:
// only published documents are visible.
const sanity = createClient({
  projectId: "a1r4gwxv",
  dataset: "production",
  apiVersion: "2026-11-20",
  // Every build must see the content just published, not the CDN's cached copy.
  useCdn: false,
  perspective: "published",
});

export type SiteSettings = {
  title: string | null;
  tagline: string | null;
};

export type Redirect = {
  from: string;
  to: string;
};

// A failed request fails the build, so a Sanity outage keeps the last deploy
// live instead of publishing a page without content.
export function getSiteSettings(): Promise<SiteSettings | null> {
  return sanity.fetch<SiteSettings | null>(
    `*[_id == "siteSettings"][0]{title, tagline}`,
  );
}

export function getRedirects(): Promise<Redirect[]> {
  return sanity.fetch<Redirect[]>(
    `*[_type == "redirect" && defined(from) && defined(to)] | order(from asc){from, to}`,
  );
}
