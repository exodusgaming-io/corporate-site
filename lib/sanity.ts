import { createClient } from "@sanity/client";
import type { QueryResponseInitial } from "@sanity/react-loader";
import { SITE_SETTINGS_QUERY, type SiteSettings } from "./queries.ts";

// Used at build time (static export) and by the preview bridge (app/preview/live-mode.tsx),
// which loads only inside the Studio. Never import this module from a component every
// visitor loads: it would ship the Sanity client to them; use lib/queries.ts there.
// The dataset is public, so no token: only published documents are visible here. Drafts
// reach the preview through the Studio, which runs the queries with the editor's session.
export const sanity = createClient({
  projectId: "a1r4gwxv",
  dataset: "production",
  apiVersion: "2026-11-20",
  // Every build must see the content just published, not the CDN's cached copy.
  useCdn: false,
  perspective: "published",
});

export type Redirect = {
  from: string;
  to: string;
};

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
