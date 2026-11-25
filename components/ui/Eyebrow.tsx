import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = { children: ReactNode; index?: string; plain?: boolean; className?: string };

// Small uppercase label above a heading. `index` adds the section number (01, 02…);
// `plain` is the hero variant in the main text colour.
export function Eyebrow({ children, index, plain, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-4 text-eyebrow uppercase",
        plain ? "text-fg" : "text-accent",
        className,
      )}
    >
      {index && <span className="font-display text-index tracking-normal text-fg-muted">{index}</span>}
      {children}
    </p>
  );
}
