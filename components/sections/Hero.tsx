import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { HomeHero } from "@/components/blocks/HomeHero";
import { PageHero } from "@/components/blocks/PageHero";
import { Stats } from "@/components/blocks/Stats";
import type { Page } from "@/content/types";
import { rich } from "@/lib/rich";
import type { Site } from "@/lib/site";
import { ContactHero } from "./ContactHero";
import { ActionList } from "./shared";
import { ShotPlaceholder } from "./ShotPlaceholder";

// The opening of a page. Every page below Home starts with its breadcrumbs.
export function Hero({ page, site }: { page: Page; site: Site }) {
  const { hero } = page;
  const crumbs = page.path === "/" ? undefined : <Breadcrumbs label={site.dictionary.breadcrumb} items={site.crumbs(page.path)} />;

  switch (hero.kind) {
    case "home":
      return (
        <HomeHero
          title={hero.title.map((line, i) => (
            <span key={line} className="block">
              {line}
              {i < hero.title.length - 1 && " "}
            </span>
          ))}
          lead={rich(hero.lead)}
          actions={<ActionList actions={hero.actions} site={site} />}
          points={hero.points}
        />
      );
    case "contact":
      return <ContactHero hero={hero} breadcrumbs={crumbs} />;
    default:
      return (
        <PageHero
          breadcrumbs={crumbs}
          title={hero.title}
          lead={hero.lead && rich(hero.lead)}
          actions={hero.actions?.length ? <ActionList actions={hero.actions} site={site} /> : undefined}
          image={hero.image && { src: hero.image.src, alt: hero.image.alt ?? "" }}
          stats={hero.stats && <Stats items={hero.stats} />}
          tall={hero.tall}
          titleWidth={hero.titleWidth}
          bright={hero.bright}
          media={
            hero.shot && (
              <ShotPlaceholder label={hero.shot} className="aspect-[16/8] min-h-[300px] rounded-t-xl border-b-0" />
            )
          }
        />
      );
  }
}
