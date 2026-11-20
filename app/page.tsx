import { getSiteSettings } from "@/lib/sanity";

export default async function Home() {
  const settings = await getSiteSettings();
  const title = settings?.title || "Exodus Gaming";
  const tagline = settings?.tagline || "The new exodusgaming.io is on its way.";

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="text-lg text-zinc-500">{tagline}</p>
    </main>
  );
}
