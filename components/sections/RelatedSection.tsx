import Link from "next/link";
import { Card } from "@/components/blocks/Card";
import { hubs } from "@/content/navigation";
import { Band, type SectionProps } from "./shared";

// "More in Products": the other pages under the same hub, from content/navigation.ts.
export function RelatedSection({ section, site, page }: SectionProps<"related">) {
  const hub = site.hubOf(page.path);
  if (!hub) return null;
  const siblings = hubs[hub].filter((path) => path !== page.path).map((path) => site.page(path));
  return (
    <Band section={section} defaults={{ pt: "none", pb: "lg" }} innerClassName="flex flex-col gap-8">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-10">
        <h2 className="font-display text-[clamp(1.625rem,2.6vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
          {section.title}
        </h2>
        <Link href={site.href(hub)} className="flex items-center gap-2.5 py-3 text-body leading-none font-medium transition-colors hover:text-accent">
          {section.all} <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-3">
        {siblings.map((sibling) => (
          <Card key={sibling.path} size="sm" compact title={sibling.label} text={sibling.blurb} href={site.href(sibling.path)} />
        ))}
      </div>
    </Band>
  );
}
