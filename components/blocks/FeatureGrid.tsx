import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/icon-names";

export type Feature = { icon: IconName; title: string; text: string };

// Icon, title and text in an even grid. "panel" is the joined grid with hairlines (light "How we work");
// "open" has no boxes, just a line on top ("at a glance" under a detail hero).
// `titleAs`: h2 when the grid has no section heading above it, so the page outline doesn't skip a level.
export function FeatureGrid({
  items,
  variant = "panel",
  titleAs: Title = "h3",
}: {
  items: Feature[];
  variant?: "panel" | "open";
  titleAs?: "h2" | "h3";
}) {
  if (variant === "open") {
    return (
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] border-t border-line">
        {items.map((item) => (
          <li key={item.title} className="flex flex-col gap-3.5 py-9 pr-8">
            <Icon name={item.icon} size={28} />
            <Title className="mt-2 font-display text-title">{item.title}</Title>
            <p className="text-body text-pretty text-fg-soft">{item.text}</p>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-px overflow-hidden rounded-lg border border-line">
      {items.map((item) => (
        <li key={item.title} className="flex min-h-[300px] flex-col gap-5 bg-tone p-[clamp(28px,3vw,40px)] hairline-cell">
          <Icon name={item.icon} />
          <Title className="mt-auto font-display text-[1.75rem] leading-[1.1] font-semibold tracking-[-0.02em]">
            {item.title}
          </Title>
          <p className="text-body text-pretty text-fg-soft">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
