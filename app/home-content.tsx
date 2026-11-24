"use client";

import { useQuery, type QueryResponseInitial } from "@sanity/react-loader";
import { SITE_SETTINGS_QUERY, type SiteSettings } from "@/lib/sanity";

// Shows the published settings baked in at build; in the Studio's Presentation tool
// useQuery switches to the draft the editor is typing.
export function HomeContent({ initial }: { initial: QueryResponseInitial<SiteSettings | null> }) {
  const { data } = useQuery<SiteSettings | null>(SITE_SETTINGS_QUERY, {}, { initial });
  const title = data?.title || "Exodus Gaming";
  const tagline = data?.tagline || "The new exodusgaming.io is on its way.";

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="text-lg text-zinc-500">{tagline}</p>
    </main>
  );
}
