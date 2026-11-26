import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";
import { Gradient } from "./Gradient";

type PageHeroProps = {
  // Section name above the title, or breadcrumbs on inner pages.
  eyebrow?: string;
  breadcrumbs?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  // Proof stats (<Stats />) under the text.
  stats?: ReactNode;
  // Picture on the right on wide screens (detail pages).
  image?: { src: string; alt: string };
  // About: most of the screen tall, the text at the bottom.
  tall?: boolean;
  // Title width in characters; long titles get more than the usual 14.
  titleWidth?: number;
  // Sportsbook: the brighter gradient from the top right and something (a screenshot) on its bottom edge.
  bright?: boolean;
  media?: ReactNode;
  // h1 on a real page; h2 when shown as a sample.
  as?: "h1" | "h2";
};

// Opening of inner pages: title over the dark red gradient that fades into the page.
export function PageHero({
  eyebrow,
  breadcrumbs,
  title,
  lead,
  actions,
  stats,
  image,
  tall,
  titleWidth = 14,
  bright,
  media,
  as: Heading = "h1",
}: PageHeroProps) {
  return (
    <section
      data-tone="dark"
      className={cn(
        "relative overflow-hidden px-gutter pt-[clamp(140px,15vw,200px)] text-fg",
        bright ? "bg-[radial-gradient(90%_90%_at_100%_0%,var(--color-molten-lava)_0%,var(--color-rich-mahogany)_35%,var(--color-onyx)_70%)]" : "bg-hero",
        media ? "pb-0" : tall ? "pb-[clamp(56px,6vw,88px)]" : "pb-section-sm",
        tall && "flex min-h-[min(92vh,900px)] flex-col justify-end",
      )}
    >
      <Gradient variant={bright ? "hero" : "deep"} />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0",
          bright ? "h-[70%] bg-[linear-gradient(to_top,var(--color-onyx)_30%,rgb(11_10_10/0))]" : "h-1/2 bg-fade-up",
        )}
      />
      <div className="relative mx-auto flex w-full max-w-page flex-wrap items-end gap-x-[clamp(40px,6vw,96px)] gap-y-12">
        <div className="flex min-w-[min(100%,520px)] flex-[1.4_1_520px] flex-col gap-8">
          {breadcrumbs ?? (eyebrow && <Eyebrow plain>{eyebrow}</Eyebrow>)}
          <Heading
            className={image ? "font-display text-display-sm text-balance" : "font-display text-display"}
            style={image ? undefined : { maxWidth: `${titleWidth}ch` }}
          >
            {title}
          </Heading>
          {(lead || actions) && (
            <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
              {lead && (
                <p className={cn("text-lead text-pretty", image ? "max-w-[40rem]" : "max-w-[38.75rem]", bright ? "text-fg" : "text-fg-soft")}>{lead}</p>
              )}
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
        {media && <div className="mt-[clamp(24px,4vw,56px)] w-full">{media}</div>}
      </div>
    </section>
  );
}
