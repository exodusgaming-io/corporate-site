import type { Page } from "../../types";

const page: Page = {
  path: "/solutions/",
  label: "Solutions",
  seo: {
    title: "Solutions",
    description: "Turnkey casino, white label, white label plus, sweepstakes, crypto casino, game aggregation and licensing: pick the model, we build the rest.",
  },
  hero: {
    kind: "page",
    title: "Pick the model. We build the rest with you.",
    titleWidth: 15,
    lead: "Three ways to launch, two verticals that need their own setup, and help with the two things that usually slow launches down.",
  },
  sections: [
    {
      type: "plans",
      heading: { eyebrow: "Launch models", index: "01", title: "Same core. Different deal." },
      items: [
        {
          page: "/solutions/turnkey-casino/",
          text: "Your licence and payments. Our platform underneath.",
          specs: [
            { term: "Licence", value: "Yours" },
            { term: "Payments", value: "Your providers, wired in by us" },
            { term: "Front end", value: "Ours, or yours on our API" },
            { term: "Custom development", value: "On request" },
            { term: "Right if", value: "You hold a licence and want full control" },
          ],
          cta: "Explore Turnkey",
        },
        {
          page: "/solutions/white-label/",
          text: "Launch under our licence while you build your own.",
          specs: [
            { term: "Licence", value: "Ours" },
            { term: "Payments", value: "Ours, already connected" },
            { term: "Front end", value: "Ours, in your brand" },
            { term: "Custom development", value: "Standard feature set" },
            { term: "Right if", value: "You want to be live before your licence is" },
          ],
          cta: "Explore White Label",
        },
        {
          page: "/solutions/white-label-plus/",
          text: "White label, with a team building features for you.",
          specs: [
            { term: "Licence", value: "Ours" },
            { term: "Payments", value: "Ours, plus yours where needed" },
            { term: "Front end", value: "Built from your designs" },
            { term: "Custom development", value: "Dedicated team, scoped up front" },
            { term: "Right if", value: "You want speed and features built for you" },
          ],
          cta: "Explore White Label Plus",
        },
      ],
    },
    {
      type: "imageCards",
      heading: { eyebrow: "Verticals", index: "02", title: "Models that need their own plumbing." },
      items: [
        {
          page: "/solutions/sweepstakes/",
          image: { src: "/brand/glass-x.jpg" },
          text: "Dual-currency wallets, redemptions and free entry handled at platform level.",
          cta: "Explore",
        },
        {
          page: "/solutions/crypto-casino/",
          image: { src: "/brand/glass-chevrons.jpg", position: "50% 75%" },
          text: "Multi-coin wallets, crypto-native games and withdrawals that don't wait for Monday.",
          cta: "Explore",
        },
      ],
    },
    {
      type: "rowCards",
      heading: { eyebrow: "Services", index: "03", title: "The parts that usually slow launches down." },
      items: [
        {
          page: "/solutions/game-aggregation/",
          icon: "handshake",
          text: "Every studio, one contract, one conversation. Contracts, terms and certification handled by us.",
          cta: "Explore",
        },
        {
          page: "/solutions/licensing-and-banking/",
          icon: "bank",
          text: "Licence applications and bank introductions, sorted before launch day instead of after.",
          cta: "Explore",
        },
      ],
    },
    {
      type: "callout",
      title: "Not sure which one fits?",
      text: "Tell us what you're launching. We'll tell you which model makes sense, even when it's the smaller contract.",
      link: { label: "Tell us what you're launching", href: "/contact/" },
    },
  ],
};

export default page;
