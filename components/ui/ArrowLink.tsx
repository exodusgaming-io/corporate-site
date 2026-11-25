import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ArrowLinkProps = { href: string; children: ReactNode; className?: string };

// Text link with a Pure Red underline and an arrow, used under section text ("How we work →").
export function ArrowLink({ href, children, className }: ArrowLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-2.5 self-start border-b border-pure-red py-3.5 text-body leading-none font-medium text-fg transition-colors hover:text-accent",
    className,
  );
  const content = (
    <>
      {children}
      <span aria-hidden="true">→</span>
    </>
  );
  return href.startsWith("/") ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}
