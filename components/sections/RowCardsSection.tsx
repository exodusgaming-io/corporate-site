import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Band, SectionHeading, type SectionProps } from "./shared";

// Wide cards with the icon on the left (Solutions: services).
export function RowCardsSection({ section, site }: SectionProps<"rowCards">) {
  return (
    <Band section={section} defaults={{ pt: "none", pb: "lg" }} innerClassName="flex flex-col gap-[clamp(40px,5vw,64px)]">
      {section.heading && <SectionHeading heading={section.heading} site={site} />}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-4">
        {section.items.map((item) => (
          <Link
            key={item.page}
            href={site.href(item.page)}
            className="flex flex-wrap items-start gap-6 rounded-xl border border-line bg-surface p-[clamp(28px,3vw,44px)] transition-colors duration-250 hover:border-pure-red"
          >
            <Icon name={item.icon} size={36} />
            <span className="flex flex-[1_1_260px] flex-col gap-3">
              <h3 className="font-display text-[clamp(1.625rem,2.6vw,2.25rem)] leading-[1.05] font-semibold tracking-[-0.025em]">
                {site.page(item.page).label}
              </h3>
              <span className="text-body text-fg-soft">{item.text}</span>
              <span className="mt-2 text-small leading-none font-medium text-accent">{item.cta} →</span>
            </span>
          </Link>
        ))}
      </div>
    </Band>
  );
}
