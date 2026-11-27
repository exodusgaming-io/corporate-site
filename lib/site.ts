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
  href: (path: string) => string;
  hubOf: (path: PagePath) => PagePath | undefined;
  crumbs: (path: PagePath) => { label: string; href?: string }[];
};

const cache = new Map<SiteLang, Site>();

// Mistakes a content file can make that would still build into a wrong page.
function checkPage(lang: SiteLang, page: Page) {
  const where = `content/${lang}: ${page.path}`;
  // A page under a hub must be listed there: that list drives the menu, the footer, the breadcrumbs and
  // the "More in …" cards.
  for (const [hub, children] of Object.entries(hubs)) {
    if (page.path !== hub && page.path.startsWith(hub)) {
      if (!children.includes(page.path)) throw new Error(`${where} is under ${hub} but missing from hubs in content/navigation.ts`);
      if (!page.blurb) throw new Error(`${where} needs a blurb: the menu and the "More in" cards show it`);
    }
  }
  // Section numbers (01, 02…) are written by hand; after sections move they must still count up from 01.
  const numbers = page.sections
    .map((section) => ("heading" in section && section.heading?.index) || ("index" in section && section.index))
    .filter((index): index is string => typeof index === "string" && /^\d+$/.test(index));
  numbers.forEach((index, i) => {
    const expected = String(i + 1).padStart(2, "0");
    if (index !== expected) throw new Error(`${where}: section number ${index} should be ${expected}; renumber after moving sections`);
  });
}

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
    checkPage(lang, page);
  }

  const page = (path: string) => {
    const found = byPath.get(path);
    if (!found) throw new Error(`content/${lang}: a link points to ${path}, which has no page`);
    return found;
  };
  const hubOf = (path: PagePath) => (Object.keys(hubs) as PagePath[]).find((hub) => hubs[hub].includes(path));

  const site: Site = {
    lang,
    dictionary,
    pages,
    page,
    // Site paths are checked and localised; #anchors, mailto:, tel: and full addresses pass through.
    // Anything else ("contact/", "www.x.com") would resolve against the current page, so it fails the build.
    href: (path) => {
      if (/^(#|mailto:|tel:|https?:\/\/)/.test(path)) return path;
      if (!path.startsWith("/") || path.startsWith("//")) {
        throw new Error(`content/${lang}: "${path}" must be a site path (/about/), #anchor, mailto:, tel: or https:// address`);
      }
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
