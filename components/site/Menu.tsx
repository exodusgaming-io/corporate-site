"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CloseButton, Dialog } from "@/components/ui/Dialog";
import { contactEmail, menuLinks, productGroups } from "@/content/navigation";
import { Logo } from "./Logo";

// Full-screen menu behind the header button, on every screen width: numbered sections on the left,
// every product, solution and integration on the right. Stands in for a mega-menu and a mobile drawer.
export function Menu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      label="Menu"
      className="h-dvh w-full -translate-y-3 overflow-x-hidden overflow-y-auto bg-onyx open:translate-y-0 starting:open:-translate-y-3"
    >
      {/* Any link click closes the menu; the page changes behind it. */}
      <div
        className="relative flex min-h-full flex-col px-gutter pb-10"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) onClose();
        }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-[auto_-10%_-40%_30%] h-4/5 bg-glow" />
        <div className="relative flex h-header items-center justify-between gap-4">
          <Logo />
          <CloseButton onClick={onClose} label="Close menu" />
        </div>
        <div className="relative mx-auto grid w-full max-w-page flex-1 grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-x-[clamp(32px,6vw,96px)] gap-y-12 pt-[clamp(24px,5vw,72px)]">
          <nav aria-label="Sections">
            <ol>
              {menuLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-baseline gap-5 border-b border-line py-2.5 text-fg transition-colors hover:text-accent"
                  >
                    <span className="w-5.5 font-display text-caption leading-none font-light text-fg-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-menu">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,170px),1fr))] content-start gap-x-8 gap-y-10 pt-3">
            {productGroups.map((group) => (
              <nav key={group.title} aria-label={group.title} className="flex flex-col md:gap-3.5">
                <Link
                  href={group.href ?? "/"}
                  className="inline-flex min-h-11 items-center self-start text-eyebrow text-accent uppercase md:min-h-0"
                >
                  {group.title}
                </Link>
                <ul className="flex flex-col md:gap-3.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center text-body leading-[1.3] text-fg-soft transition-colors hover:text-fg md:min-h-0"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-page flex-wrap items-center justify-between gap-5 pt-10">
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex min-h-11 items-center text-body text-fg-soft transition-colors hover:text-fg"
          >
            {contactEmail}
          </a>
          <Button href="#demo" size="md">
            Book a demo
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
