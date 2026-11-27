import type { Page } from "../../../types";

const page: Page = {
  path: "/products/jackpots/",
  label: "Jackpots",
  blurb: "Brand-level jackpots you fund and configure.",
  seo: { title: "Jackpots", description: "Brand-level jackpots you configure yourself. Fund them, set the tiers and choose which games feed them." },
  hero: {
    kind: "page",
    title: "Jackpots that pay out across your whole lobby.",
    lead: "Brand-level jackpots you configure yourself. Fund them, set the tiers and choose which games feed them. Players see the number move; you see exactly what it costs.",
    image: { src: "/brand/glass-x.jpg" },
    actions: [
      { label: "Book a demo", href: "#demo" },
      { label: "Ask a question", href: "/contact/", variant: "outline" },
    ],
  },
  sections: [
    {
      type: "featureGrid",
      variant: "open",
      items: [
        { icon: "trophy", title: "Multi-tier", text: "Mini, major, mega, or names that suit your brand." },
        { icon: "calculator", title: "Cost you can model", text: "Seed, contribution and cap are yours to set. The maths is in the back office." },
        { icon: "dice", title: "Any studio", text: "Attach jackpots to games across studios, not just one provider's titles." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Jackpots", index: "01", title: "Configuration" },
      items: [
        { title: "Tiers", text: "As many tiers as you want, each with its own seed, cap and odds." },
        { title: "Contribution rules", text: "A percentage of stakes, by game, by currency, by segment." },
        { title: "Must-drop jackpots", text: "Guaranteed to drop by a time or an amount you set." },
        { title: "Live ticker widget", text: "The running total on your lobby, game pages and in app." },
        { title: "Winner feed", text: "Recent wins shown on site, anonymised the way you choose." },
        { title: "Reporting", text: "Contributions, payouts and net cost per jackpot, per day." },
      ],
    },
    {
      type: "steps",
      heading: { eyebrow: "How it works", index: "02", title: "Setting one up" },
      items: [
        { title: "Pick the games", text: "Any mix of studios and titles." },
        { title: "Set seed and contribution", text: "How it starts and how fast it grows." },
        { title: "Design the tiers", text: "Names, caps, odds and drop rules." },
        { title: "Switch it on", text: "Live on every brand you choose." },
      ],
    },
    {
      type: "faq",
      eyebrow: "Jackpots",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Can a jackpot run across several of our brands?", answer: "Yes, as a shared pool across your own brands, or keep each brand separate." },
        { question: "Who funds the jackpot?", answer: "You do, through the seed and contribution rate you set. No network fee on top." },
        { question: "Can we run must-drop jackpots?", answer: "Yes, by time or by amount." },
      ],
    },
    { type: "related" },
  ],
};

export default page;
