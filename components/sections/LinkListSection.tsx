import Link from "next/link";
import { Band, SectionHeading, type SectionProps } from "./shared";

// Numbered rows, each a link to a page with its one-line pitch (Home: solutions).
export function LinkListSection({ section, site }: SectionProps<"linkList">) {
  return (
    <Band section={section} defaults={{ pt: "md", pb: "md" }} innerClassName="flex flex-col gap-[clamp(40px,5vw,72px)]">
      <SectionHeading heading={section.heading} site={site} />
      <ol className="flex flex-col border-b border-line">
        {section.items.map((item, i) => (
          <li key={item.page}>
            <Link
              href={site.href(item.page)}
              className="group grid grid-cols-[48px_minmax(0,1fr)_44px] items-center gap-x-[clamp(12px,2vw,24px)] gap-y-2 border-t border-line px-2 py-6.5 transition-[background] duration-250 hover:bg-[linear-gradient(90deg,rgb(121_0_4/0.4),rgb(11_10_10/0)_75%)]"
            >
              <span className="font-display text-index text-fg-muted">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex flex-wrap items-baseline gap-x-8 gap-y-1.5">
                <span className="min-w-[min(100%,340px)] font-display text-[clamp(1.5rem,2.6vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
                  {site.page(item.page).label}
                </span>
                <span className="text-body leading-[1.4] text-fg-soft">{item.text}</span>
              </span>
              <span
                aria-hidden="true"
                className="flex size-11 items-center justify-center rounded-full border border-fg/25 transition-colors group-hover:border-pure-red"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </Band>
  );
}
