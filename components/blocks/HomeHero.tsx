import Image from "next/image";
import type { ReactNode } from "react";
import { Gradient } from "./Gradient";

type HomeHeroProps = {
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  // Short proof points along the bottom edge.
  points?: string[];
};

// Full-screen opening of the home page: huge headline over the animated gradient.
export function HomeHero({ title, lead, actions, points }: HomeHeroProps) {
  return (
    <section
      data-tone="dark"
      className="relative flex min-h-[max(680px,100svh)] flex-col justify-end overflow-hidden bg-hero-home text-fg"
    >
      <Gradient variant="hero" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-fade-up opacity-90" />
      <div className="relative mx-auto flex w-full max-w-page flex-col gap-[clamp(28px,3vw,44px)] px-gutter pt-35 pb-[clamp(32px,4vw,56px)]">
        <h1 className="font-display text-display-xl">{title}</h1>
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-7">
          <p className="max-w-[34rem] text-lead text-pretty text-fg-soft">{lead}</p>
          {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
        </div>
        {points && points.length > 0 && (
          <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-fg/16 pt-6 text-caption leading-[1.3] font-medium tracking-[0.08em] text-fg-soft uppercase">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2.5">
                <Image src="/brand/exodus-mark.svg" alt="" width={10} height={10} />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
