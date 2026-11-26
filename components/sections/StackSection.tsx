import Link from "next/link";
import { Band, SectionHeading, type SectionProps } from "./shared";

const box = "rounded-md border border-line bg-surface px-6 py-5.5 transition-colors hover:border-pure-red";
const Joint = () => <div aria-hidden="true" className="mx-auto h-7 w-px bg-disabled" />;

// Products hub diagram: your brand on top, the products under it, the platform core, and what plugs in
// below. Every block links to its page.
export function StackSection({ section, site }: SectionProps<"stack">) {
  return (
    <Band section={section} defaults={{ pt: "none", pb: "lg" }} innerClassName="flex flex-col gap-[clamp(40px,5vw,64px)]">
      <SectionHeading heading={section.heading} site={site} />
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-md border border-dashed border-fg/30 px-7 py-5.5">
          <span className="font-display text-[1.25rem] leading-[1.2] font-semibold">{section.brand.title}</span>
          <span className="text-small text-fg-soft">{section.brand.text}</span>
        </div>
        <Joint />
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-3">
          {section.top.map((path) => (
            <li key={path}>
              <Link
                href={site.href(path)}
                className={`${box} flex items-center justify-between gap-3 font-display text-[1.125rem] leading-[1.2] font-semibold`}
              >
                {site.page(path).label}
                <span aria-hidden="true" className="text-accent">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Joint />
        <Link
          href={site.href(section.core.page)}
          className="flex flex-col gap-4.5 rounded-lg border border-molten-lava bg-[linear-gradient(120deg,var(--color-rich-mahogany),var(--color-molten-lava)_60%,var(--color-rich-mahogany))] p-7 transition-colors hover:border-pure-red"
        >
          <span className="flex items-center justify-between gap-3">
            <span className="font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
              {site.page(section.core.page).label}
            </span>
            <span aria-hidden="true">→</span>
          </span>
          <span className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-2">
            {section.core.parts.map((part) => (
              <span key={part} className="rounded-sm bg-onyx/45 px-4 py-3.5 text-nav leading-[1.2] font-medium">
                {part}
              </span>
            ))}
          </span>
        </Link>
        <Joint />
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-3">
          {section.bottom.map((item) => (
            <li key={item.page}>
              <Link href={site.href(item.page)} className={`${box} flex flex-col gap-2`}>
                <span className="font-display text-[1.125rem] leading-[1.2] font-semibold">
                  {item.title ?? site.page(item.page).label}
                </span>
                <span className="text-nav leading-[1.4] text-fg-soft">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}
