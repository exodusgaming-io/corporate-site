import type { Metadata } from "next";
import { CtaBand } from "@/components/blocks/CtaBand";
import { Hero } from "@/components/sections/Hero";
import { Sections } from "@/components/sections/Sections";
import { Button } from "@/components/ui/Button";
import { getNav, getSite, type SiteLang } from "@/lib/site";
import { Footer } from "./Footer";
import { Header } from "./Header";

// The URL segments of every page in a language, for generateStaticParams: "/" is [], "/a/b/" is ["a", "b"].
export function pageParams(lang: SiteLang) {
  return getSite(lang).pages.map((page) => ({ path: page.path.split("/").filter(Boolean) }));
}

const pathOf = (segments: string[] = []) => (segments.length ? `/${segments.join("/")}/` : "/");

export function pageMetadata(lang: SiteLang, segments?: string[]): Metadata {
  const page = getSite(lang).page(pathOf(segments));
  return { title: page.seo.title, description: page.seo.description };
}

// Any page of the site: header, the page's hero and sections, the closing band, footer.
export function PageView({ lang, segments }: { lang: SiteLang; segments?: string[] }) {
  const site = getSite(lang);
  const nav = getNav(lang);
  const page = site.page(pathOf(segments));
  const t = site.dictionary;
  return (
    <>
      <Header nav={nav} />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero page={page} site={site} />
        <Sections page={page} site={site} />
        {page.cta !== false && (
          <CtaBand
            title={t.cta.title}
            text={t.cta.text}
            actions={
              <>
                <Button href="#demo">{t.bookDemo}</Button>
                <Button href={site.href("/contact/")} variant="outline">
                  {t.cta.message}
                </Button>
              </>
            }
          />
        )}
      </main>
      <Footer nav={nav} />
    </>
  );
}
