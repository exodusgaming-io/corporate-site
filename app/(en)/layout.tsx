import type { Metadata } from "next";
import { Document } from "@/components/site/Document";
import { site } from "@/content/site";
import { indexable } from "@/lib/indexing";
import "../globals.css";

// Root layout of the English site. Each language has its own, so <html lang> is right on every page.
export const metadata: Metadata = {
  title: { default: site.title, template: `%s | ${site.title}` },
  description: site.description,
  robots: indexable ? undefined : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <Document lang="en">{children}</Document>;
}
