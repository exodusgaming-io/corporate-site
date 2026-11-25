import type { Metadata } from "next";
import { site } from "@/content/site";
import { indexable } from "@/lib/indexing";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  robots: indexable ? undefined : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col bg-onyx text-platinum">{children}</body>
    </html>
  );
}
