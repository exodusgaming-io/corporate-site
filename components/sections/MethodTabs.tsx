"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/icon-names";
import { cn } from "@/lib/cn";

export type MethodPanel = {
  id: string;
  label: string;
  icon: IconName;
  text: string;
  points: string[];
  gridLabel: string;
  tiles: string[];
  tileStyle: "logo" | "ticker";
};

// Payment methods as pill tabs. Each method has its own #anchor (/payment-solutions/#crypto): a link with
// it opens that tab and scrolls to it, and picking a tab puts its anchor in the address to share.
export function MethodTabs({ items }: { items: MethodPanel[] }) {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fromHash = () => {
      const i = items.findIndex((item) => `#${item.id}` === window.location.hash);
      if (i < 0) return;
      setActive(i);
      requestAnimationFrame(() => root.current?.scrollIntoView({ block: "start" }));
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [items]);

  const select = (i: number, focus = false) => {
    setActive(i);
    history.replaceState(history.state, "", `#${items[i].id}`);
    if (focus) document.getElementById(`${items[i].id}-tab`)?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (event.key in keys) select((active + keys[event.key] + items.length) % items.length, true);
    else if (event.key === "Home") select(0, true);
    else if (event.key === "End") select(items.length - 1, true);
    else return;
    event.preventDefault();
  };

  return (
    <div ref={root} className="flex scroll-mt-[calc(var(--spacing-header)+24px)] flex-col gap-[clamp(32px,4vw,48px)]">
      <div role="tablist" onKeyDown={onKeyDown} className="flex flex-wrap gap-2">
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.id}
              id={`${item.id}-tab`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={item.id}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              className={cn(
                "flex h-12 items-center rounded-full border px-5.5 text-small leading-none font-medium transition-colors",
                selected ? "border-platinum bg-platinum text-onyx" : "border-fg/25 text-fg hover:border-fg",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item, i) => (
        <div
          key={item.id}
          id={item.id}
          role="tabpanel"
          aria-labelledby={`${item.id}-tab`}
          hidden={i !== active}
          className="flex-wrap gap-x-[clamp(32px,5vw,80px)] gap-y-8 rounded-xl border border-line bg-surface p-[clamp(28px,4vw,56px)] [&:not([hidden])]:flex"
        >
          <div className="flex flex-[1_1_360px] flex-col gap-5">
            <Icon name={item.icon} size={36} />
            <h3 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.025em]">
              {item.label}
            </h3>
            <p className="text-body-lg text-pretty text-fg-soft">{item.text}</p>
            <ul className="flex flex-col">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3.5 border-t border-line py-3.5 text-body leading-[1.4] font-medium">
                  <span aria-hidden="true" className="mt-[7px] size-[7px] flex-none rotate-45 bg-pure-red" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-[1_1_320px] flex-col gap-3.5">
            <p className="text-eyebrow text-fg-muted uppercase">{item.gridLabel}</p>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,120px),1fr))] gap-2">
              {item.tiles.map((tile, j) => (
                <li
                  key={`${tile}-${j}`}
                  className={cn(
                    "flex aspect-[3/2] items-center justify-center rounded-sm border border-line tracking-[0.04em]",
                    item.tileStyle === "ticker"
                      ? "bg-onyx font-display text-[1.125rem] leading-none font-semibold"
                      : "bg-[repeating-linear-gradient(135deg,#141211_0_10px,var(--color-surface-raised)_10px_20px)] font-mono text-[0.6875rem] leading-none text-fg-muted",
                  )}
                >
                  {tile}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
