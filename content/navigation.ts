// Site navigation: header, full-screen menu and footer. Changes go through a PR.
// Paths end with a slash, as the static export writes every page to <path>/index.html.

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; href?: string; links: NavLink[] };

export const contactEmail = "hello@exodusgaming.io";

// Short list in the header bar (hidden on narrow screens; the menu button opens everything).
export const headerLinks: NavLink[] = [
  { label: "Solutions", href: "/solutions/" },
  { label: "Products", href: "/products/" },
  { label: "Integrations", href: "/integrations/" },
  { label: "About", href: "/about/" },
];

// Numbered list in the full-screen menu.
export const menuLinks: NavLink[] = [
  { label: "About", href: "/about/" },
  { label: "Products", href: "/products/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Payment Solutions", href: "/payment-solutions/" },
  { label: "Game Providers", href: "/game-providers/" },
  { label: "Sportsbook", href: "/sportsbook/" },
  { label: "Integrations", href: "/integrations/" },
  { label: "Contact", href: "/contact/" },
];

export const productGroups: NavGroup[] = [
  {
    title: "Products",
    href: "/products/",
    links: [
      { label: "Platform", href: "/products/platform/" },
      { label: "Exodus AI", href: "/products/exodus-ai/" },
      { label: "Exodus Engine", href: "/products/exodus-engine/" },
      { label: "Aggregator", href: "/products/aggregator/" },
      { label: "Jackpots", href: "/products/jackpots/" },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions/",
    links: [
      { label: "Turnkey Casino", href: "/solutions/turnkey-casino/" },
      { label: "White Label", href: "/solutions/white-label/" },
      { label: "White Label Plus", href: "/solutions/white-label-plus/" },
      { label: "Sweepstakes", href: "/solutions/sweepstakes/" },
      { label: "Crypto Casino", href: "/solutions/crypto-casino/" },
      { label: "Game Aggregation", href: "/solutions/game-aggregation/" },
      { label: "Licensing & Banking", href: "/solutions/licensing-and-banking/" },
    ],
  },
  {
    title: "Integrations",
    href: "/integrations/",
    links: [
      { label: "CRM", href: "/integrations/crm/" },
      { label: "Affiliate Systems", href: "/integrations/affiliate-systems/" },
      { label: "Analytics & Tracking", href: "/integrations/analytics-and-tracking/" },
      { label: "Risk & Fraud", href: "/integrations/risk-and-fraud/" },
      { label: "Communication", href: "/integrations/communication/" },
    ],
  },
];

export const companyGroup: NavGroup = {
  title: "Company",
  links: [
    { label: "About", href: "/about/" },
    { label: "Payment Solutions", href: "/payment-solutions/" },
    { label: "Game Providers", href: "/game-providers/" },
    { label: "Sportsbook", href: "/sportsbook/" },
    { label: "Contact", href: "/contact/" },
  ],
};

// TODO(#6542): real profile URLs from marketing; the mockup links to the site roots.
export const socialLinks: NavLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Telegram", href: "https://t.me/" },
];
