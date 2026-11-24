// Queries and result types shared by the build (lib/sanity.ts) and client components.
// No Sanity client here, so importing this module adds nothing to a page's JavaScript.
export const SITE_SETTINGS_QUERY = `*[_id == "siteSettings"][0]{title, tagline}`;

export type SiteSettings = {
  title: string | null;
  tagline: string | null;
};
