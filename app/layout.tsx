import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { indexable } from "@/lib/indexing";
import { Preview } from "./preview/preview";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exodus Gaming",
  description: "Exodus Gaming — iGaming platform.",
  robots: indexable ? undefined : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Preview />
      </body>
    </html>
  );
}
