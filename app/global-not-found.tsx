import type { Metadata } from "next";
import { Document } from "@/components/site/Document";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";
import { getNav } from "@/lib/site";
import "./globals.css";

const nav = getNav("en");
const t = nav.dictionary.notFound;

export const metadata: Metadata = { title: `${t.seo} | ${site.title}` };

// GitHub Pages matches paths case-sensitively; a visitor who typed /About/ lands here and is sent on to
// /about/. If that doesn't exist either, this page stays. Real 301s move to Cloudflare at launch (#6545).
// Leading slashes collapse to one and the origin is spelled out: //Evil.com/ must not become a link to
// another site.
const lowercase = `(function(){var p=location.pathname,l=p.toLowerCase().replace(/^[\\/\\\\]+/,"/");if(p!==l)location.replace(location.origin+l+location.search+location.hash)})()`;

// The 404 page for every unknown path, written to out/404.html. It has no layout of its own, so it
// loads the styles and fonts itself (app/global-not-found.js, next.config.ts experimental.globalNotFound).
export default function GlobalNotFound() {
  return (
    <Document lang="en">
      <script dangerouslySetInnerHTML={{ __html: lowercase }} />
      <Header nav={nav} />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <section className="mx-auto flex min-h-[80svh] w-full max-w-page flex-col justify-center gap-6 px-gutter pt-35 pb-20">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] font-semibold tracking-[-0.03em]">
            {t.title[0]}
            <br />
            {t.title[1]}
          </h1>
          <Button href={nav.home} variant="outline" size="md" className="self-start">
            {t.back}
          </Button>
        </section>
      </main>
      <Footer nav={nav} />
    </Document>
  );
}
