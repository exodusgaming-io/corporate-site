import type { IconName } from "@/components/ui/icon-names";

// The shape of every content file. A page is a hero plus a list of sections; each section is one of the
// types below and renders with its component in components/sections/. Add, remove or reorder sections in a
// page file and the page follows. A typo in a type or a field fails the build.

// Copy. Wrap words in **double asterisks** for the bright, slightly bolder emphasis the mockups use.
export type Text = string;

// A page of this site by its path ("/solutions/turnkey-casino/"). The build fails if no such page exists.
export type PagePath = `/${string}`;

export type Action = { label: string; href: string; variant?: "primary" | "outline" };
export type LinkTo = { label: string; href: string };
// Decorative pictures have no alt text; anything that carries meaning must have one.
export type Picture = { src: string; alt?: string; position?: string };

// Vertical padding of a section, top and bottom separately: the mockups use these steps.
export type Pad = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type Tone = "dark" | "surface" | "light";

// Eyebrow with the section number, heading, and text or a link on the right.
export type Heading = {
  eyebrow?: string;
  index?: string;
  title: string;
  aside?: Text;
  link?: LinkTo;
  action?: Action;
};

type Common = { id?: string; tone?: Tone; pt?: Pad; pb?: Pad };

export type Section = Common &
  (
    | { type: "statement"; eyebrow: string; index?: string; bright: string; muted: string; image: Picture; paragraphs: Text[]; link?: LinkTo }
    | { type: "linkList"; heading: Heading; items: { page: PagePath; text: string }[] }
    | { type: "featureGrid"; heading?: Heading; variant?: "panel" | "open"; items: { icon: IconName; title: string; text: string }[] }
    | { type: "productTabs"; heading: Heading; explore: string; items: { page: PagePath; shot: string; text: string }[] }
    | { type: "cards"; heading?: Heading; minWidth?: number; card?: "status" | "numbered" | "icon" | "feature" | "integration"; items: CardItem[]; extra?: { icon: IconName; title: string; text: string; link: LinkTo } }
    | { type: "tiles"; heading: Heading & { lead?: Text }; items: { page: PagePath; icon: IconName }[] }
    // A full-bleed band of its own: it takes no tone or padding.
    | { type: "quote"; text: string; image?: Picture; link?: LinkTo; eyebrow?: string; index?: string; tone?: never; pt?: never; pb?: never }
    | { type: "mediaSplit"; image: Picture; eyebrow: string; index?: string; title: string; paragraphs: Text[] }
    | { type: "numberedRows"; heading: Heading; items: { title: string; text: string }[] }
    | { type: "markerList"; eyebrow: string; index?: string; title: string; lead: Text; label?: string; marker: "check" | "cross"; items: { title: string; text?: string }[] }
    | { type: "team"; heading: Heading; people: { name: string; role: string; photo?: string }[] }
    | { type: "productCards"; featured: { page: PagePath; icon: IconName; kicker: string; text: string; tags: string[]; image: Picture; cta: string }; items: { page: PagePath; icon: IconName; text: string }[]; cta: string }
    | { type: "stack"; heading: Heading; brand: { title: string; text: string }; top: PagePath[]; core: { page: PagePath; parts: string[] }; bottom: { page: PagePath; title?: string; text: string }[] }
    | { type: "compare"; items: { eyebrow: string; title: string; text: string; page?: PagePath }[] }
    | { type: "plans"; heading: Heading; items: { page: PagePath; text: string; specs: { term: string; value: string }[]; cta: string }[] }
    | { type: "imageCards"; heading?: Heading; items: { page: PagePath; image: Picture; text: string; cta: string }[] }
    | { type: "rowCards"; heading?: Heading; items: { page: PagePath; icon: IconName; text: string; cta: string }[] }
    | { type: "callout"; kicker?: string; title: string; text: string; link?: LinkTo }
    | { type: "codeSplit"; eyebrow: string; index?: string; title: string; lead: Text; checks: string[]; code: { caption: string; text: string } }
    | { type: "methodTabs"; heading: Heading; items: Method[] }
    | { type: "flow"; heading: Heading; steps: FlowStep[] }
    | { type: "crossLinks"; items: { kicker: string; page: PagePath }[] }
    | {
        type: "studios";
        // Filter chips: everything, each category, sweeps-ready only. {shown} and {total} fill the count line.
        filterLabel: string;
        all: string;
        categories: string[];
        sweepsFilter: string;
        search: string;
        count: string;
        studios: { name: string; category: string; sweeps?: boolean }[];
        sweepsLabel: string;
        logo: string;
        empty: { text: string; action: Action };
      }
    | { type: "steps"; heading: Heading; items: { title: string; text: string }[] }
    | { type: "wallet"; eyebrow: string; index?: string; title: string; lead: Text; left: string; middle: string; right: string }
    | { type: "faq"; eyebrow: string; index?: string; title: string; link?: LinkTo; items: { question: string; answer: string }[] }
    | { type: "shot"; label: string }
    | { type: "code"; icon?: IconName; title: string; text: string; code: string }
    | { type: "related"; title: string; all: string }
    | { type: "richText"; blocks: RichBlock[] }
  );

export type CardItem = {
  title?: string;
  page?: PagePath;
  text: string;
  icon?: IconName;
  status?: string;
  meta?: string;
  tags?: string[];
};

export type Method = {
  id: string;
  label: string;
  icon: IconName;
  text: string;
  points: string[];
  gridLabel: string;
  tiles: string[];
  // Logos on stripes until they arrive; tickers are set as text.
  tileStyle: "logo" | "ticker";
};

export type FlowStep =
  | { title: string; text: string; style: "dashed" | "surface" | "gradient" | "light" }
  | { pair: [{ title: string; text: string }, { title: string; text: string }] };

export type RichBlock = { h2: string } | { h3: string } | { p: Text } | { ul: Text[] };

export type Hero =
  | { kind: "home"; title: string[]; lead: Text; actions: Action[]; points: string[] }
  | {
      kind: "page";
      title: string;
      lead?: Text;
      actions?: Action[];
      // Picture on the right on wide screens (detail pages).
      image?: Picture;
      stats?: { value: string; label: string; note?: string }[];
      // About: taller, text sitting at the bottom; titles wider than the usual 14 characters.
      tall?: boolean;
      titleWidth?: number;
      // Sportsbook: the brighter home gradient and a screenshot on the hero's bottom edge.
      bright?: boolean;
      shot?: string;
    }
  | {
      kind: "contact";
      title: string;
      lead: Text;
      methods: { label: string; value: string; href: string }[];
      demo: { text: string; label: string };
      form: ContactForm;
    };

export type ContactForm = {
  name: { label: string; placeholder: string };
  email: { label: string; placeholder: string };
  company: { label: string; placeholder: string };
  role: { label: string; options: string[] };
  interests: { label: string; options: string[] };
  message: { label: string; placeholder: string };
  captcha: string;
  submit: string;
  note: string;
};

export type Page = {
  path: PagePath;
  // Name in the menu, footer, breadcrumbs and cards that link here.
  label: string;
  // One line under the name in the menu and on "More in …" cards.
  blurb?: string;
  // <title> ("{title} | Exodus Gaming") and meta description; more SEO fields come with #6544.
  seo: { title: string; description: string };
  hero: Hero;
  sections: Section[];
  // The closing "Come and talk to us" band; every page has it except Contact.
  cta?: boolean;
};

// Words the site's frame uses on every page: header, menu, footer, closing band, demo panel, 404.
export type Dictionary = {
  skipToContent: string;
  home: string;
  // Accessible names: the header's link list and the logo link.
  mainNav: string;
  logo: string;
  bookDemo: string;
  menu: { open: string; close: string; title: string; sections: string };
  breadcrumb: string;
  footer: { blurb: string; company: string; legal: string; rights: string };
  cta: { title: string; text: string; message: string };
  demo: { text: string; placeholder: string; close: string };
  notFound: { eyebrow: string; title: string[]; back: string; seo: string };
};

export type Locale = { dictionary: Dictionary; pages: Page[] };
