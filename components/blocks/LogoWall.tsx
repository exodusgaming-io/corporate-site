import Image from "next/image";
import { cn } from "@/lib/cn";

// src: a logo file in any colours; it is shown monochrome Platinum. Without src the name is set as a wordmark.
export type Logo = { name: string; src?: string; href?: string };

export function LogoWall({ logos, className }: { logos: Logo[]; className?: string }) {
  return (
    <ul
      className={cn(
        "grid grid-cols-[repeat(auto-fill,minmax(min(100%,10rem),1fr))] gap-px overflow-hidden rounded-lg border border-line",
        className,
      )}
    >
      {logos.map((logo) => {
        const mark = logo.src ? (
          // brightness(0) invert(1) turns any logo white; opacity brings it down to the Platinum/Silver range.
          <Image
            src={logo.src}
            alt={logo.name}
            width={140}
            height={48}
            className="h-8 w-auto max-w-[70%] object-contain opacity-70 brightness-0 invert transition-opacity group-hover:opacity-100"
          />
        ) : (
          <span className="font-display text-[1.125rem] font-semibold tracking-[-0.01em] text-fg-soft transition-colors group-hover:text-fg">
            {logo.name}
          </span>
        );
        return (
          <li key={logo.name} className="group flex h-28 items-center justify-center bg-tone px-5 hairline-cell">
            {logo.href ? (
              <a href={logo.href} className="flex size-full items-center justify-center" target="_blank" rel="noopener">
                {mark}
              </a>
            ) : (
              mark
            )}
          </li>
        );
      })}
    </ul>
  );
}
