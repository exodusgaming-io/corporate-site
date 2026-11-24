import { loadSiteSettings } from "@/lib/sanity";
import { HomeContent } from "./home-content";

export default async function Home() {
  return <HomeContent initial={await loadSiteSettings()} />;
}
