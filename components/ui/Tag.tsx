import type { ReactNode } from "react";

// Pill label for features of a product ("Wallet & cashier").
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-line px-3.5 py-2 text-caption leading-none font-medium text-fg-soft">
      {children}
    </span>
  );
}
