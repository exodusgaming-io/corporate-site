"use client";

import { useSyncExternalStore } from "react";
import { contrastLevel, contrastRatio } from "@/lib/contrast";
import { cn } from "@/lib/cn";

// Reads the colour tokens from the stylesheet, so the hex values and ratios shown are the ones the site uses.

type Token = { name: string; label: string; source: "Style Book" | "Mockups" };

export const colourTokens: Token[] = [
  { name: "pure-red", label: "Pure Red — accent", source: "Style Book" },
  { name: "onyx", label: "Onyx — page background", source: "Style Book" },
  { name: "platinum", label: "Platinum — text", source: "Style Book" },
  { name: "cinnabar", label: "Cinnabar", source: "Style Book" },
  { name: "molten-lava", label: "Molten Lava", source: "Style Book" },
  { name: "rich-mahogany", label: "Rich Mahogany", source: "Style Book" },
  { name: "shadow-grey", label: "Shadow Grey — lines", source: "Style Book" },
  { name: "silver", label: "Silver — secondary text", source: "Style Book" },
  { name: "muted", label: "Muted — numbers, meta", source: "Mockups" },
  { name: "surface", label: "Surface — cards", source: "Mockups" },
  { name: "surface-raised", label: "Surface raised", source: "Mockups" },
  { name: "wordmark", label: "Footer wordmark", source: "Mockups" },
  { name: "disabled", label: "Disabled controls", source: "Mockups" },
];

// Text on background pairs the components use, and the ones the card rules out.
const pairs: [string, string, string][] = [
  ["platinum", "onyx", "Headings and body"],
  ["silver", "onyx", "Secondary text"],
  ["muted", "onyx", "Numbers, meta, placeholders"],
  ["cinnabar", "onyx", "Eyebrows, links, errors"],
  ["pure-red", "onyx", "Icons and large text"],
  ["platinum", "surface", "Text on cards"],
  ["silver", "surface", "Secondary text on cards"],
  ["muted", "surface", "Meta on cards"],
  ["cinnabar", "surface", "Eyebrows on cards"],
  ["silver", "rich-mahogany", "Text on mahogany sections"],
  ["onyx", "platinum", "Text on light sections"],
  ["shadow-grey", "platinum", "Secondary text on light sections"],
  ["molten-lava", "platinum", "Eyebrows on light sections"],
  ["pure-red", "platinum", "Icons on light sections, large text only"],
  ["onyx", "pure-red", "Label on red buttons"],
  ["onyx", "cinnabar", "Label on red buttons, hover"],
  ["platinum", "molten-lava", "Label on light-section buttons, hover"],
  ["platinum", "pure-red", "Large bold text only, never a button label"],
  ["pure-red", "shadow-grey", "Never for body text"],
];

// Lightning CSS may shorten #cccccc to #ccc; both forms are read.
function toHex(value: string): string | null {
  const v = value.trim().toLowerCase();
  if (/^#[0-9a-f]{6}$/.test(v)) return v;
  if (/^#[0-9a-f]{3}$/.test(v)) return `#${[...v.slice(1)].map((c) => c + c).join("")}`;
  return null;
}

function readTokens(): string {
  const style = getComputedStyle(document.documentElement);
  const read: Record<string, string> = {};
  for (const { name } of colourTokens) {
    const hex = toHex(style.getPropertyValue(`--color-${name}`));
    if (hex) read[name] = hex;
  }
  return JSON.stringify(read);
}

// The stylesheet doesn't change after load, so there is nothing to subscribe to.
const subscribe = () => () => {};

function useTokenValues(): Record<string, string> {
  const json = useSyncExternalStore(subscribe, readTokens, () => "{}");
  return JSON.parse(json) as Record<string, string>;
}

export function Swatches() {
  const values = useTokenValues();
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,13rem),1fr))] gap-4">
      {colourTokens.map((token) => (
        <li key={token.name} className="flex flex-col overflow-hidden rounded-md border border-line">
          <span className="h-24" style={{ background: `var(--color-${token.name})` }} />
          <span className="flex flex-col gap-1 bg-surface p-4">
            <span className="text-small font-medium text-fg">{token.label}</span>
            <code className="font-mono text-caption text-fg-soft">
              {token.name} · {values[token.name] ?? "…"}
            </code>
            <span className="text-caption text-fg-muted">{token.source}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ContrastTable() {
  const values = useTokenValues();
  return (
    // Scrolls sideways on phones; focusable so keyboard users can scroll it too.
    <div tabIndex={0} role="region" aria-label="Contrast pairs" className="overflow-x-auto rounded-md border border-line">
      <table className="w-full min-w-[40rem] border-collapse text-left text-small">
        <thead className="bg-surface text-caption text-fg-muted uppercase">
          <tr>
            <th className="px-4 py-3 font-medium">Sample</th>
            <th className="px-4 py-3 font-medium">Text / background</th>
            <th className="px-4 py-3 font-medium">Ratio</th>
            <th className="px-4 py-3 font-medium">Level</th>
            <th className="px-4 py-3 font-medium">Use</th>
          </tr>
        </thead>
        <tbody>
          {pairs.map(([fg, bg, use]) => {
            const ratio = values[fg] && values[bg] ? contrastRatio(values[fg], values[bg]) : null;
            const level = ratio ? contrastLevel(ratio) : null;
            return (
              <tr key={`${fg}-${bg}`} className="border-t border-line">
                <td className="px-4 py-3">
                  {/* Large bold sample: rated against 3:1, so it stays legible for every row. */}
                  <span
                    className="inline-flex h-12 w-16 items-center justify-center rounded-sm font-display text-heading-sm"
                    style={{ color: `var(--color-${fg})`, background: `var(--color-${bg})` }}
                  >
                    Aa
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-caption text-fg-soft">
                  {fg} / {bg}
                </td>
                <td className="px-4 py-3 text-fg">{ratio ? `${ratio.toFixed(2)}:1` : "…"}</td>
                <td
                  className={cn(
                    "px-4 py-3 font-medium",
                    level === "AA" ? "text-fg" : level === "AA large" ? "text-silver" : "text-cinnabar",
                  )}
                >
                  {level ?? "…"}
                </td>
                <td className="px-4 py-3 text-fg-soft">{use}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
