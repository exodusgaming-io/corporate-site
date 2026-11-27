import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/blocks/Card";
import { Icon } from "@/components/ui/Icon";
import { Tag } from "@/components/ui/Tag";
import { Band, type SectionProps } from "./shared";

// Products hub: the platform as a wide card with a picture, the other products as cards below.
export function ProductCardsSection({ section, site }: SectionProps<"productCards">) {
  const { featured } = section;
  const core = site.page(featured.page);
  return (
    <Band
      section={section}
      defaults={{ pt: "xs", pb: "lg" }}
      innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4"
    >
      <Link
        href={site.href(featured.page)}
        className="col-span-full flex flex-wrap overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-250 hover:border-pure-red"
      >
        <div className="flex flex-[1_1_420px] flex-col gap-5 p-[clamp(28px,4vw,56px)]">
          <div className="flex items-center justify-between gap-4">
            <Icon name={featured.icon} />
            <span className="text-eyebrow text-fg-muted uppercase">{featured.kicker}</span>
          </div>
          <h2 className="mt-6 font-display text-heading-lg">{core.label}</h2>
          <p className="max-w-[32.5rem] text-body-lg text-pretty text-fg-soft">{featured.text}</p>
          <ul className="flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
          <span className="mt-3 text-body leading-none font-medium text-accent">{featured.cta} →</span>
        </div>
        <div className="relative min-h-[320px] flex-[1_1_380px] bg-rich-mahogany">
          <Image
            src={featured.image.src}
            alt={featured.image.alt ?? ""}
            fill
            sizes="(min-width: 900px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </Link>
      {section.items.map((item) => (
        <Card
          key={item.page}
          as="h2"
          size="lg"
          icon={item.icon}
          title={site.page(item.page).label}
          text={item.text}
          href={site.href(item.page)}
          cta={section.cta}
        />
      ))}
    </Band>
  );
}
