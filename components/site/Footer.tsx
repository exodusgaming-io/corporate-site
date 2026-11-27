import Image from "next/image";
import Link from "next/link";
import type { Nav, NavGroup } from "@/lib/site";

function FooterGroup({ group }: { group: NavGroup }) {
  // Links are 44px tall below md (768px) for fingers and keep the mockup's spacing from md up.
  const title = "inline-flex min-h-11 items-center self-start text-eyebrow text-fg-muted uppercase md:mb-1.5 md:min-h-0";
  return (
    <nav aria-label={group.title} className="flex flex-col md:gap-3">
      {group.href ? (
        <Link href={group.href} className={`${title} transition-colors hover:text-fg`}>
          {group.title}
        </Link>
      ) : (
        <span className={title}>{group.title}</span>
      )}
      <ul className="flex flex-col md:gap-3">
        {group.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex min-h-11 w-fit items-center text-small leading-[1.3] text-fg-soft transition-colors hover:text-fg md:min-h-0"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Link columns, the giant wordmark, the legal links and the copyright line.
export function Footer({ nav }: { nav: Nav }) {
  const { dictionary: t } = nav;
  return (
    <footer data-tone="dark" className="border-t border-line bg-onyx px-gutter pt-[clamp(56px,7vw,96px)] pb-7 text-fg">
      <div className="mx-auto flex max-w-page flex-col gap-[clamp(48px,6vw,80px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,170px),1fr))] gap-x-8 gap-y-10">
          <div className="flex flex-col gap-4.5">
            <Image src="/brand/exodus-mark.svg" alt="" width={36} height={36} />
            <p className="max-w-60 text-small text-fg-soft">{t.footer.blurb}</p>
            <a href={`mailto:${nav.email}`} className="inline-flex min-h-11 items-center self-start text-small leading-none font-medium transition-colors hover:text-accent md:min-h-0">
              {nav.email}
            </a>
          </div>
          {[...nav.groups, nav.company].map((group) => (
            <FooterGroup key={group.title} group={group} />
          ))}
        </div>
        <div aria-hidden="true" className="aspect-[538/98] w-full bg-wordmark mask-wordmark" />
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-caption text-fg-muted">
          <span className="py-3 md:py-0">
            © {new Date().getFullYear()} Exodus. {t.footer.rights}
          </span>
          <nav aria-label={t.footer.legal} className="md:mr-auto">
            <ul className="flex flex-wrap gap-x-6">
              {nav.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-11 items-center text-fg-soft transition-colors hover:text-fg md:min-h-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-6">
            {nav.social.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="flex min-h-11 items-center text-fg-soft transition-colors hover:text-fg md:min-h-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
