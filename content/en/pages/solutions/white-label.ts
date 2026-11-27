import type { Page } from "../../../types";

const page: Page = {
  path: "/solutions/white-label/",
  label: "White Label",
  blurb: "Launch under our licence while you build your own.",
  seo: { title: "White Label", description: "White Label gets your brand live on our licence, our payment setup and our platform. It's the fastest way in." },
  hero: {
    kind: "page",
    title: "Launch under our licence while you build your own.",
    lead: "White Label gets your brand live on our licence, our payment setup and our platform. It's the fastest way in. White Label Plus is the same foundation with custom development and a dedicated team on top.",
    image: { src: "/brand/glass-chevrons.jpg" },
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
        { icon: "bolt", title: "Fastest route to live", text: "No licence application or banking setup standing between you and launch." },
        { icon: "shield", title: "Licence covered", text: "You operate under ours while you work on your own." },
        { icon: "card", title: "Payments ready", text: "Our providers, already connected and routed." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "White Label", index: "01", title: "What's included" },
      items: [
        { title: "Licence and compliance", text: "Operate under our licence, with compliance checks handled at platform level." },
        { title: "Payments", text: "Cards, crypto and local methods through our cashier." },
        { title: "Your brand on the front end", text: "Your name, your look, your domain. Players never see ours." },
        { title: "Game library", text: "Studios from the Aggregator, available from day one." },
        { title: "Back office access", text: "Your team runs bonuses, players and reports." },
        { title: "Operations support", text: "Player support and payments ops from us, or from your own team." },
      ],
    },
    {
      type: "steps",
      heading: { eyebrow: "How it works", index: "02", title: "Getting live" },
      items: [
        { title: "Brand and scope", text: "Your brand, your markets, your offer." },
        { title: "Front end", text: "Your design on our front end." },
        { title: "Games and payments", text: "Switched on and tested." },
        { title: "Launch", text: "Live, with us on the call." },
      ],
    },
    {
      type: "callout",
      kicker: "White Label vs. White Label Plus",
      title: "Same foundation. Plus adds custom builds and a dedicated team.",
      text: "Start on White Label and move up when you need features built for your setup.",
      link: { label: "See White Label Plus", href: "/solutions/white-label-plus/" },
    },
    {
      type: "faq",
      eyebrow: "White Label",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Can we move to turnkey later?", answer: "Yes. Once you hold your own licence, we move your brand over with players, balances and history intact." },
        { question: "Who handles player support?", answer: "Your call. We can run it, or your team runs it from our back office." },
        { question: "How are white label commercials structured?", answer: "Revenue share, stated up front. It stays where we said it would." },
      ],
    },
    { type: "related" },
  ],
};

export default page;
