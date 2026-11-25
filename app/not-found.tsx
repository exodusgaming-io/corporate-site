import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

// Written to out/404.html by the static export; GitHub Pages serves it for unknown paths.
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto flex min-h-[80svh] max-w-page flex-col justify-center gap-6 px-gutter pt-35 pb-20">
          <Eyebrow>404</Eyebrow>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] font-semibold tracking-[-0.03em]">
            This page doesn&apos;t exist.
            <br />
            Yet.
          </h1>
          <Button href="/" variant="outline" size="md" className="self-start">
            Back to home
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
