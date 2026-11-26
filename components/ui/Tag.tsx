import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

// Pill label for features of a product ("Wallet & cashier"); sm sits inside cards.
export function Tag({ children, size = "md" }: { children: ReactNode; size?: "sm" | "md" }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-line leading-none font-medium text-fg-soft",
        size === "md" ? "px-3.5 py-2 text-caption" : "px-3 py-1.5 text-[0.75rem]",
      )}
    >
      {children}
    </span>
  );
}
