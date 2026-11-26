"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Studio = { name: string; category: string; sweeps?: boolean };

export type StudioDirectoryProps = {
  all: string;
  categories: string[];
  sweepsFilter: string;
  search: string;
  count: string;
  studios: Studio[];
  sweepsLabel: string;
  logo: string;
  empty: { text: string; label: string; href: string };
};

// Game Providers: every studio as a card, filtered by category or sweeps-ready, and searched by name.
export function StudioDirectory({ all, categories, sweepsFilter, search, count, studios, sweepsLabel, logo, empty }: StudioDirectoryProps) {
  const [filter, setFilter] = useState(all);
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const shown = studios.filter(
    (studio) =>
      (filter === all || (filter === sweepsFilter ? studio.sweeps : studio.category === filter)) &&
      studio.name.toLowerCase().includes(needle),
  );

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label={search} className="flex flex-wrap gap-2">
          {[all, ...categories, sweepsFilter].map((label) => (
            <button
              key={label}
              type="button"
              aria-pressed={label === filter}
              onClick={() => setFilter(label)}
              className={cn(
                "h-11 rounded-full border px-4.5 text-nav leading-none font-medium transition-colors",
                label === filter ? "border-platinum bg-platinum text-onyx" : "border-fg/25 text-fg hover:border-fg",
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <label className="flex h-12 flex-[0_1_320px] items-center gap-2.5 rounded-full border border-line bg-surface px-4.5 focus-within:border-cinnabar">
          <Icon name="search" size={18} />
          <span className="sr-only">{search}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={search}
            className="h-full min-w-0 flex-1 bg-transparent text-small text-fg outline-none placeholder:text-fg-muted"
          />
        </label>
      </div>
      <p aria-live="polite" className="text-nav leading-none text-fg-muted">
        {count.replace("{shown}", String(shown.length)).replace("{total}", String(studios.length))}
      </p>
      {shown.length > 0 ? (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,150px),1fr))] gap-3 md:grid-cols-[repeat(auto-fill,minmax(min(100%,200px),1fr))]">
          {shown.map((studio) => (
            <li
              key={studio.name}
              className="flex flex-col gap-3.5 rounded-md border border-line bg-surface px-3.5 pt-3.5 pb-4.5 transition-colors hover:border-molten-lava"
            >
              <div className="flex aspect-video items-center justify-center rounded-[10px] bg-[repeating-linear-gradient(135deg,#0f0d0d_0_10px,#171413_10px_20px)] font-mono text-[0.6875rem] leading-none tracking-[0.04em] text-fg-muted">
                {logo}
              </div>
              <div className="flex items-center justify-between gap-2 px-1">
                <span className="font-display text-[1.0625rem] leading-[1.2] font-semibold">{studio.name}</span>
                {studio.sweeps && (
                  <span className="text-[0.6875rem] leading-none font-medium tracking-[0.1em] text-accent uppercase">{sweepsLabel}</span>
                )}
              </div>
              <span className="px-1 text-caption leading-[1.3] text-fg-soft">{studio.category}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-lg border border-dashed border-fg/25 p-12">
          <span className="text-[1.125rem] leading-[1.4] font-medium">{empty.text}</span>
          <Link href={empty.href} className={buttonClasses("primary", "md")}>
            {empty.label}
          </Link>
        </div>
      )}
    </div>
  );
}
