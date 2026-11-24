import type { SiteSettings } from "@/lib/queries";

export function HomeView({ data }: { data: SiteSettings | null }) {
  const title = data?.title || "Exodus Gaming";
  const tagline = data?.tagline || "The new exodusgaming.io is on its way.";

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="text-lg text-zinc-500">{tagline}</p>
    </main>
  );
}
