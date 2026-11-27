"use client";

import Link from "next/link";
import { useId, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";
import { ShotPlaceholder } from "./ShotPlaceholder";

export type ProductTab = { name: string; href: string; shot: string; text: string };

// Home: products as a vertical tab list; the panel shows the screenshot, a line about it and a link.
// Arrow keys move between tabs (WAI-ARIA tabs pattern). `explore` is the link text, {name} the product.
export function ProductTabs({ items, explore, label }: { items: ProductTab[]; explore: string; label: string }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const current = items[active];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next = active;
    if (event.key in keys) next = (active + keys[event.key] + items.length) % items.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div className="flex flex-wrap items-stretch gap-x-[clamp(32px,4vw,64px)] gap-y-8">
      <div role="tablist" aria-label={label} aria-orientation="vertical" onKeyDown={onKeyDown} className="flex flex-[1_1_300px] flex-col">
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.name}
              id={`${id}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "flex items-center gap-4.5 border-t border-line px-1 py-5.5 text-left transition-colors hover:text-fg",
                selected ? "text-fg" : "text-fg-muted",
              )}
            >
              <span className={cn("w-6 font-display text-index", selected ? "text-accent" : "text-fg-muted")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-display text-[clamp(1.375rem,2.2vw,2rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
                {item.name}
              </span>
              <span aria-hidden="true" className={cn("size-2 rotate-45 rounded-[2px]", selected ? "bg-pure-red" : "bg-transparent")} />
            </button>
          );
        })}
      </div>
      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
        className="flex min-w-[min(100%,520px)] flex-[2_1_520px] flex-col gap-7"
      >
        <ShotPlaceholder label={current.shot} className="aspect-[16/10] rounded-lg" />
        <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-5">
          <p className="flex-[1_1_320px] text-[clamp(1.0625rem,1.4vw,1.1875rem)] leading-[1.6] text-pretty text-fg-soft">
            <strong className="font-medium text-fg">{current.name}.</strong> {current.text}
          </p>
          <Link
            href={current.href}
            className="inline-flex items-center gap-2.5 border-b border-pure-red py-3.5 text-body leading-none font-medium whitespace-nowrap transition-colors hover:text-accent"
          >
            {explore.replace("{name}", current.name)} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
