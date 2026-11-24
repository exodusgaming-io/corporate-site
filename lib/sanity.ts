import { createClient } from "@sanity/client";
import type { QueryResponseInitial } from "@sanity/react-loader";

// Used at build time (static export) and, inside the Studio's Presentation tool, by
// the preview bridge (app/preview/live-mode.tsx). The dataset is public, so no token:
// only published documents are visible here. Drafts reach the preview through the
// Studio, which runs the queries with the editor's own session.
export const sanity = createClient({
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

export const SITE_SETTINGS_QUERY = `*[_id == "siteSettings"][0]{title, tagline}`;

// A failed request fails the build, so a Sanity outage keeps the last deploy
// live instead of publishing a page without content.
export async function loadSiteSettings(): Promise<QueryResponseInitial<SiteSettings | null>> {
  const data = await sanity.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY);
  return { data, sourceMap: undefined, perspective: "published" };
}

export function getRedirects(): Promise<Redirect[]> {
  return sanity.fetch<Redirect[]>(
    `*[_type == "redirect" && defined(from) && defined(to)] | order(from asc){from, to}`,
  );
}
