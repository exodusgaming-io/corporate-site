"use client";

import { useQuery, type QueryResponseInitial } from "@sanity/react-loader";
import { SITE_SETTINGS_QUERY, type SiteSettings } from "@/lib/queries";
import { HomeView } from "./home-view";

export default function HomeLive({ initial }: { initial: QueryResponseInitial<SiteSettings | null> }) {
  const { data } = useQuery<SiteSettings | null>(SITE_SETTINGS_QUERY, {}, { initial });
  return <HomeView data={data} />;
}
