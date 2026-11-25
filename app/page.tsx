import { site } from "@/content/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">{site.title}</h1>
      <p className="text-lg text-zinc-500">{site.tagline}</p>
    </main>
  );
}
