import en from "@/content/en";
import { companyNav, contactEmail, headerNav, hubs, legalNav, menuNav, socialLinks } from "@/content/navigation";
import type { Dictionary, Page, PagePath } from "@/content/types";
import { type Lang, localize } from "./i18n";

// Every language's content. A language appears here once content/<lang>/ exists.
const locales = { en } satisfies Partial<Record<Lang, unknown>>;

export type SiteLang = keyof typeof locales;

// Reads one language's pages: look a page up by path, link to it, find its hub and breadcrumbs.
// Asking for a path that has no page throws, so a broken internal link fails the build.
export type Site = {
  lang: SiteLang;
  dictionary: Dictionary;
  pages: Page[];
  page: (path: string) => Page;
  find: (path: string) => Page | undefined;
  href: (path: string) => string;
  hubOf: (path: string) => PagePath | undefined;
  crumbs: (path: string) => { label: string; href?: string }[];
};

const cache = new Map<SiteLang, Site>();

export function getSite(lang: SiteLang): Site {
  const cached = cache.get(lang);
  if (cached) return cached;

  const { dictionary, pages } = locales[lang];
  const byPath = new Map<string, Page>();
  for (const page of pages) {
    if (!/^\/([a-z0-9]+(-[a-z0-9]+)*\/)*$/.test(page.path)) {
      throw new Error(`content/${lang}: "${page.path}" must be lowercase words joined by hyphens, ending with a slash`);
    }
    if (byPath.has(page.path)) throw new Error(`content/${lang}: two pages at ${page.path}`);
    byPath.set(page.path, page);
  }

  const page = (path: string) => {
    const found = byPath.get(path);
    if (!found) throw new Error(`content/${lang}: a link points to ${path}, which has no page`);
    return found;
  };
  const hubOf = (path: string) =>
    (Object.keys(hubs) as PagePath[]).find((hub) => hubs[hub].includes(path));

  const site: Site = {
    lang,
    dictionary,
    pages,
    page,
    find: (path) => byPath.get(path),
    // Site paths are checked and localised; #anchors, mailto: and other sites pass through.
    href: (path) => {
      if (!path.startsWith("/")) return path;
      const [bare, anchor] = path.split("#");
      page(bare);
      return localize(lang, bare) + (anchor ? `#${anchor}` : "");
    },
    hubOf,
    crumbs: (path) => {
      if (path === "/") return [];
      const hub = hubOf(path);
      return [
        { label: dictionary.home, href: localize(lang, "/") },
        ...(hub ? [{ label: page(hub).label, href: localize(lang, hub) }] : []),
        { label: page(path).label },
      ];
    },
  };
  cache.set(lang, site);
  return site;
}

// Header, menu and footer links for one language, as plain data for the client components.
export type NavLink = { label: string; href: string; blurb?: string };
export type NavGroup = { title: string; href?: string; links: NavLink[] };
export type Nav = {
  home: string;
  email: string;
  header: NavLink[];
  menu: NavLink[];
  groups: NavGroup[];
  company: NavGroup;
  legal: NavLink[];
  social: NavLink[];
  dictionary: Dictionary;
};

export function getNav(lang: SiteLang): Nav {
  const site = getSite(lang);
  const link = (path: string): NavLink => {
    const page = site.page(path);
    return { label: page.label, href: site.href(path), blurb: page.blurb };
  };
  return {
    home: site.href("/"),
    email: contactEmail,
    header: headerNav.map(link),
    menu: menuNav.map(link),
    groups: Object.entries(hubs).map(([hub, children]) => ({
      title: site.page(hub).label,
      href: site.href(hub),
      links: children.map(link),
    })),
    company: { title: site.dictionary.footer.company, links: companyNav.map(link) },
    legal: legalNav.map(link),
    social: socialLinks,
    dictionary: site.dictionary,
  };
}
