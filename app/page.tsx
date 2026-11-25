import { site } from "@/content/site";

// Placeholder until the page templates (#6542).
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-hero p-8 text-center">
      <h1 className="font-display text-heading-xl">{site.title}</h1>
      <p className="text-lead text-silver">{site.tagline}</p>
    </main>
  );
}
