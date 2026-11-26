// Site structure: which pages go in the header, the menu and the footer, and which pages sit under which hub.
// Paths only; every label and one-line description comes from the page's own content file, in each language.
// Paths end with a slash, as the static export writes every page to <path>/index.html.

export const contactEmail = "hello@exodusgaming.io";

// Short list in the header bar (hidden on narrow screens; the menu button opens everything).
export const headerNav = ["/solutions/", "/products/", "/integrations/", "/about/"];

// Numbered list in the full-screen menu.
export const menuNav = [
  "/about/",
  "/products/",
  "/solutions/",
  "/payment-solutions/",
  "/game-providers/",
  "/sportsbook/",
  "/integrations/",
  "/contact/",
];

// Hub pages and their children, in order. Drives the menu and footer columns, the breadcrumbs and the
// "More in …" cards at the bottom of every child page.
export const hubs: Record<string, string[]> = {
  "/products/": [
    "/products/platform/",
    "/products/exodus-ai/",
    "/products/exodus-engine/",
    "/products/aggregator/",
    "/products/jackpots/",
  ],
  "/solutions/": [
    "/solutions/turnkey-casino/",
    "/solutions/white-label/",
    "/solutions/white-label-plus/",
    "/solutions/sweepstakes/",
    "/solutions/crypto-casino/",
    "/solutions/game-aggregation/",
    "/solutions/licensing-and-banking/",
  ],
  "/integrations/": [
    "/integrations/crm/",
    "/integrations/affiliate-systems/",
    "/integrations/analytics-and-tracking/",
    "/integrations/risk-and-fraud/",
    "/integrations/communication/",
  ],
};

// The footer's last column.
export const companyNav = ["/about/", "/payment-solutions/", "/game-providers/", "/sportsbook/", "/contact/"];

// Under the wordmark in the footer.
export const legalNav = ["/privacy-policy/", "/cookie-policy/", "/terms/"];

// TODO(#6545): real profile URLs from marketing; the mockup links to the site roots.
export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Telegram", href: "https://t.me/" },
];
