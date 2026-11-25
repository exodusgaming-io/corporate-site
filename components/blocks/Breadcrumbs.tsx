import Link from "next/link";
import { Fragment } from "react";

export type Crumb = { label: string; href?: string };

// Path above a detail-page title. The last crumb is the current page (no link, red diamond).
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-eyebrow uppercase">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={item.label}>
              <li>
                {last || !item.href ? (
                  <span aria-current={last ? "page" : undefined} className="flex items-center gap-2 text-fg">
                    {last && <span aria-hidden="true" className="size-1.5 rotate-45 bg-pure-red" />}
                    {item.label}
                  </span>
                ) : (
                  // -my-4 py-4: a 44px tap area without moving the line.
                  <Link href={item.href} className="-my-4 inline-block py-4 text-fg-soft transition-colors hover:text-fg">
                    {item.label}
                  </Link>
                )}
              </li>
              {!last && (
                <li aria-hidden="true" className="text-fg-muted">
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
