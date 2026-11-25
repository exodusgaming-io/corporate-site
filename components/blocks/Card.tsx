import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/icon-names";
import { cn } from "@/lib/cn";

type CardProps = {
  title: string;
  text?: ReactNode;
  // Makes the whole card a link with a red border on hover.
  href?: string;
  // Call to action at the bottom of a linked card ("Explore →").
  cta?: string;
  icon?: IconName;
  // Number in the corner (01, 02…) for feature lists.
  index?: string;
  // Red status label with a dot ("Shipped") and grey meta on the right.
  status?: string;
  meta?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { box: "min-h-[150px] gap-3 rounded-md p-6", title: "text-[1.25rem] leading-[1.15] font-semibold tracking-[-0.015em]" },
  md: { box: "min-h-[220px] gap-4 rounded-lg p-8", title: "text-title" },
  lg: { box: "min-h-[340px] gap-4 rounded-xl p-[clamp(28px,3vw,40px)]", title: "text-heading-md" },
};

// Box on a dark surface. Feature, product, "shipped" and related-page cards are all this one component.
export function Card({ title, text, href, cta, icon, index, status, meta, size = "md", className }: CardProps) {
  const style = sizes[size];
  const body = (
    <>
      {(icon || index || status || meta) && (
        <div className="flex items-center justify-between gap-3">
          {icon && <Icon name={icon} size={size === "sm" ? 24 : 32} />}
          {index && <span className="font-display text-index text-accent">{index}</span>}
          {status && (
            <span className="flex items-center gap-2 text-eyebrow text-accent uppercase">
              <span className="size-1.5 rounded-full bg-pure-red" />
              {status}
            </span>
          )}
          {meta && <span className="text-caption leading-none text-fg-muted">{meta}</span>}
        </div>
      )}
      <h3 className={cn("mt-auto font-display", style.title)}>{title}</h3>
      {text && <p className={cn(size === "sm" ? "text-small" : "text-body", "text-pretty text-fg-soft")}>{text}</p>}
      {href && (
        <span aria-hidden={!cta} className="text-small leading-none font-medium text-accent">
          {cta ? `${cta} →` : "→"}
        </span>
      )}
    </>
  );
  const classes = cn(
    "flex flex-col border border-line bg-surface text-fg transition-colors duration-250",
    style.box,
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
