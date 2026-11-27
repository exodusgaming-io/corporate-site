import Link from "next/link";
import { Band, type SectionProps } from "./shared";

// Pointers to the pages a reader of this one might want next ("Running crypto-first? Crypto Casino →").
export function CrossLinksSection({ section, site }: SectionProps<"crossLinks">) {
  return (
    <Band
      section={section}
      defaults={{ pt: "none", pb: "lg" }}
      innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-4"
    >
      {section.items.map((item) => (
        <Link
          key={item.page}
          href={site.href(item.page)}
          className="flex items-center justify-between gap-6 rounded-xl border border-line p-[clamp(24px,3vw,40px)] transition-colors duration-250 hover:border-pure-red"
        >
          <span className="flex flex-col gap-2">
            <span className="text-eyebrow text-fg-muted uppercase">{item.kicker}</span>
            <span className="font-display text-[clamp(1.375rem,2.2vw,1.875rem)] leading-[1.1] font-semibold">
              {site.page(item.page).label}
            </span>
          </span>
          <span aria-hidden="true" className="text-[1.375rem] text-accent">
            →
          </span>
        </Link>
      ))}
    </Band>
  );
}
