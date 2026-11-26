import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Band, SplitIntro, type SectionProps } from "./shared";

// Heading and text on the left, small icon links to pages on the right (Home: coverage).
export function TilesSection({ section, site }: SectionProps<"tiles">) {
  const { heading } = section;
  return (
    <Band
      section={section}
      defaults={{ pt: "md", pb: "xl" }}
      innerClassName="flex flex-wrap items-start gap-x-[clamp(40px,6vw,96px)] gap-y-12"
    >
      <SplitIntro eyebrow={heading.eyebrow} index={heading.index} title={heading.title} lead={heading.lead} className="flex-[1_1_360px]" />
      <ul className="grid flex-[1.3_1_480px] grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-3">
        {section.items.map((item) => (
          <li key={item.page}>
            <Link
              href={site.href(item.page)}
              className="flex h-full items-center gap-4 rounded-md border border-line bg-surface p-5.5 text-body leading-[1.2] font-medium transition-colors hover:border-pure-red"
            >
              <Icon name={item.icon} size={24} />
              {site.page(item.page).label}
            </Link>
          </li>
        ))}
      </ul>
    </Band>
  );
}
