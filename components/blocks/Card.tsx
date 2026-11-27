import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/icon-names";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";

type CardProps = {
  title: string;
  text?: ReactNode;
  // Makes the whole card a link with a red border on hover.
  href?: string;
  // Call to action at the bottom of a linked card ("Explore →"); `arrow={false}` drops the bare arrow.
  cta?: string;
  arrow?: boolean;
  icon?: IconName;
  iconSize?: number;
  // Number in the corner (01, 02…) for feature lists; muted when it only counts (integration cards).
  index?: string;
  indexTone?: "accent" | "muted";
  // Red status label with a dot ("Shipped") and grey meta on the right.
  status?: string;
  meta?: string;
  tags?: string[];
  size?: "sm" | "md" | "tall" | "lg";
  // Title right under the icon instead of pushed to the bottom, and no minimum height.
  compact?: boolean;
  // Overrides the size's minimum height (Tailwind class).
  minHeight?: string;
  // Dashed border and no fill: the "Don't see yours?" card at the end of a grid.
  dashed?: boolean;
  as?: "h2" | "h3";
  className?: string;
};

const sizes = {
  sm: { box: "gap-3 rounded-md p-6", minHeight: "min-h-[150px]", title: "text-[1.25rem] leading-[1.15] font-semibold tracking-[-0.015em]" },
  md: { box: "gap-4 rounded-lg p-8", minHeight: "min-h-[220px]", title: "text-title" },
  tall: { box: "gap-5 rounded-lg p-8", minHeight: "min-h-[320px]", title: "text-heading-sm" },
  lg: { box: "gap-4 rounded-xl p-[clamp(28px,3vw,40px)]", minHeight: "min-h-[340px]", title: "text-heading-md" },
};

// Box on a dark surface. Feature, product, "shipped" and related-page cards are all this one component.
export function Card({
  title,
  text,
  href,
  cta,
  arrow = true,
  icon,
  iconSize,
  index,
  indexTone = "accent",
  status,
  meta,
  tags,
  size = "md",
  compact,
  minHeight,
  dashed,
  as: Title = "h3",
  className,
}: CardProps) {
  const style = sizes[size];
  const hasTop = Boolean(icon || index || status || meta);
  const body = (
    <>
      {hasTop && (
        <div className="flex items-center justify-between gap-3">
          {icon && <Icon name={icon} size={iconSize ?? (size === "sm" ? 24 : 32)} />}
          {index && (
            <span className={cn("font-display text-index", indexTone === "accent" ? "text-accent" : "text-fg-muted")}>
              {index}
            </span>
          )}
          {status && (
            <span className="flex items-center gap-2 text-eyebrow text-accent uppercase">
              <span className="size-1.5 rounded-full bg-pure-red" />
              {status}
            </span>
          )}
          {meta && <span className="text-caption leading-none text-fg-muted">{meta}</span>}
        </div>
      )}
      <Title className={cn("font-display", compact ? hasTop && "mt-3" : "mt-auto", style.title)}>{title}</Title>
      {text && <p className={cn(size === "sm" ? "text-small" : "text-body", "text-pretty text-fg-soft")}>{text}</p>}
      {tags && tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag size="sm">{tag}</Tag>
            </li>
          ))}
        </ul>
      )}
      {href && (cta || arrow) && (
        <span aria-hidden={!cta} className={cn("text-small leading-none font-medium text-accent", compact && "mt-auto")}>
          {cta ? `${cta} →` : "→"}
        </span>
      )}
    </>
  );
  const classes = cn(
    "flex flex-col border text-fg transition-colors duration-250",
    dashed ? "border-dashed border-fg/30 bg-transparent" : "border-line bg-surface",
    style.box,
    minHeight ?? (!compact && style.minHeight),
    href ? "hover:border-pure-red" : "hover:border-molten-lava",
    className,
  );
  return href ? (
    <Link href={href} className={classes}>
      {body}
    </Link>
  ) : (
    <article className={classes}>{body}</article>
  );
}
