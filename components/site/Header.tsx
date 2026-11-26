"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { Nav } from "@/lib/site";
import { DemoDrawer } from "./DemoDrawer";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

// A path with its trailing slash, as the links are written: usePathname drops it.
const withSlash = (path: string) => (path.endsWith("/") ? path : `${path}/`);

// Bar over the top of every page: transparent over the hero, frosted glass once the page scrolls.
// The menu button opens the full-screen menu; "Book a demo" opens the drawer.
export function Header({ nav }: { nav: Nav }) {
  const pathname = withSlash(usePathname());
  const { dictionary: t } = nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-full bg-platinum px-5 py-3 text-small font-medium text-onyx focus:translate-y-0"
      >
        {t.skipToContent}
      </a>
      <header
        data-tone="dark"
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex h-header items-center gap-[clamp(12px,2vw,28px)] border-b px-gutter text-fg transition-[background-color,border-color] duration-300",
          scrolled ? "border-line bg-onyx/82 backdrop-blur-[16px]" : "border-transparent bg-transparent",
        )}
      >
        <Logo href={nav.home} label={t.logo} />
        <nav aria-label={t.mainNav} className="hidden min-w-0 flex-1 justify-end gap-8 min-[52rem]:flex">
          {nav.header.map((link) => {
            // The section's own page is the current page; on a page under it the link is only marked as current.
            const current = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : current ? "true" : undefined}
                className={cn(
                  "text-nav leading-6 font-medium whitespace-nowrap transition-colors hover:text-fg",
                  current ? "text-fg" : "text-fg-soft",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-[clamp(12px,2vw,28px)] min-[52rem]:ml-0">
          <Button href="#demo" size="sm">
            {t.bookDemo}
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t.menu.open}
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            className="flex size-11 flex-none flex-col items-center justify-center gap-[5px] rounded-full border border-fg/30 transition-colors hover:border-fg md:size-10"
          >
            <span className="h-[1.5px] w-4 bg-fg" />
            <span className="h-[1.5px] w-4 bg-fg" />
          </button>
        </div>
      </header>
      <Menu nav={nav} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <DemoDrawer dictionary={t} />
    </>
  );
}
