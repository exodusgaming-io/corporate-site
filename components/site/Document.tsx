import type { ReactNode } from "react";
import { fontVariables } from "@/app/fonts";

// <html> and <body> for every root layout (one per language) and the 404 page.
export function Document({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang} className={`${fontVariables} h-full scroll-pt-header`}>
      <body className="flex min-h-full flex-col bg-onyx text-platinum">{children}</body>
    </html>
  );
}
