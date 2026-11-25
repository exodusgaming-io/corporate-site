import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Gradient } from "./Gradient";

type PageHeroProps = {
  // Section name above the title, or breadcrumbs on detail pages.
  eyebrow?: string;
  breadcrumbs?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  // Proof stats (<Stats />) under the text.
  stats?: ReactNode;
  // Picture on the right on wide screens (detail pages).
  image?: { src: string; alt: string };
  // h1 on a real page; h2 when shown as a sample.
  as?: "h1" | "h2";
};

// Opening of inner pages: title over the dark red gradient that fades into the page.
export function PageHero({ eyebrow, breadcrumbs, title, lead, actions, stats, image, as: Heading = "h1" }: PageHeroProps) {
  return (
    <section
      data-tone="dark"
      className="relative overflow-hidden bg-hero px-gutter pt-[clamp(140px,15vw,200px)] pb-section-sm text-fg"
    >
      <Gradient variant="deep" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-fade-up" />
      <div className="relative mx-auto flex max-w-page flex-wrap items-end gap-x-[clamp(40px,6vw,96px)] gap-y-12">
        <div className="flex min-w-[min(100%,520px)] flex-[1.4_1_520px] flex-col gap-8">
          {breadcrumbs ?? (eyebrow && <Eyebrow plain>{eyebrow}</Eyebrow>)}
          <Heading className={image ? "font-display text-display-sm text-balance" : "max-w-[14ch] font-display text-display"}>
            {title}
          </Heading>
          {(lead || actions) && (
            <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
              {lead && <p className="max-w-[36rem] text-lead text-pretty text-fg-soft">{lead}</p>}
              {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
            </div>
          )}
          {stats}
        </div>
        {image && (
          <div className="relative aspect-[4/5] max-h-[560px] min-w-[min(100%,300px)] flex-[1_1_300px] overflow-hidden rounded-xl border border-fg/8 bg-rich-mahogany">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 900px) 40vw, 100vw" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
