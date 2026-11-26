import { Card } from "@/components/blocks/Card";
import type { CardItem } from "@/content/types";
import type { Site } from "@/lib/site";
import { Band, SectionHeading, type SectionProps } from "./shared";

const pad = (i: number) => String(i + 1).padStart(2, "0");

function ItemCard({ item, i, kind, site }: { item: CardItem; i: number; kind: SectionProps<"cards">["section"]["card"]; site: Site }) {
  const title = item.title ?? (item.page ? site.page(item.page).label : "");
  const href = item.page ? site.href(item.page) : undefined;
  switch (kind) {
    case "numbered":
      return <Card size="md" index={pad(i)} title={title} text={item.text} href={href} />;
    case "status":
      return <Card size="tall" status={item.status} meta={item.meta} title={title} text={item.text} href={href} />;
    case "integration":
      return (
        <Card
          as="h2"
          size="lg"
          icon={item.icon}
          index={pad(i)}
          indexTone="muted"
          title={title}
          text={item.text}
          tags={item.tags}
          href={href}
          arrow={false}
          minHeight="min-h-[360px]"
        />
      );
    case "feature":
      return <Card size="md" icon={item.icon} iconSize={28} title={title} text={item.text} href={href} />;
    default:
      return <Card size="md" compact icon={item.icon} iconSize={28} title={title} text={item.text} href={href} />;
  }
}

// Grid of cards: numbered features, "shipped" stories, icon features (title under the icon, or pushed to
// the bottom of a taller card) or integration categories.
// `extra` adds the dashed "Don't see yours?" card at the end.
export function CardsSection({ section, site }: SectionProps<"cards">) {
  const min = section.minWidth ?? 300;
  return (
    <Band section={section} defaults={{ pt: "lg", pb: "sm" }} innerClassName="flex flex-col gap-[clamp(40px,5vw,64px)]">
      {section.heading && <SectionHeading heading={section.heading} site={site} />}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))` }}
      >
        {section.items.map((item, i) => (
          <ItemCard key={item.title ?? item.page} item={item} i={i} kind={section.card} site={site} />
        ))}
        {section.extra && (
          <Card
            as="h2"
            size="lg"
            dashed
            icon={section.extra.icon}
            title={section.extra.title}
            text={section.extra.text}
            href={site.href(section.extra.link.href)}
            cta={section.extra.link.label}
            minHeight="min-h-[360px]"
          />
        )}
      </div>
    </Band>
  );
}
