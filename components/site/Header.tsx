"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { headerLinks } from "@/content/navigation";
import { cn } from "@/lib/cn";
import { DemoDrawer } from "./DemoDrawer";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

// Bar over the top of every page: transparent over the hero, frosted glass once the page scrolls.
// The menu button opens the full-screen menu; "Book a demo" opens the drawer.
export function Header() {
  const pathname = usePathname();
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
      <header
        data-tone="dark"
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex h-header items-center gap-[clamp(12px,2vw,28px)] border-b px-gutter text-fg transition-[background-color,border-color] duration-300",
          scrolled ? "border-line bg-onyx/82 backdrop-blur-[16px]" : "border-transparent bg-transparent",
        )}
      >
        <Logo />
        <nav aria-label="Main" className="hidden min-w-0 flex-1 justify-end gap-8 min-[52rem]:flex">
          {headerLinks.map((link) => {
            const current = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
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
            Book a demo
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            className="flex size-11 flex-none flex-col items-center justify-center gap-[5px] rounded-full border border-fg/30 transition-colors hover:border-fg md:size-10"
          >
            <span className="h-[1.5px] w-4 bg-fg" />
            <span className="h-[1.5px] w-4 bg-fg" />
          </button>
        </div>
      </header>
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <DemoDrawer />
    </>
  );
}
