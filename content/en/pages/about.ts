import type { Page } from "../../types";

const page: Page = {
  path: "/about/",
  label: "About",
  seo: {
    title: "About",
    description: "Exodus is a platform provider for casino, sweepstakes and sportsbook brands: a small team that builds what operators ask for.",
  },
  hero: {
    kind: "page",
    tall: true,
    titleWidth: 16,
    title: "A small team that builds what operators ask for.",
    lead: "**Exodus is a platform provider for casino, sweepstakes and sportsbook brands.** We sell turnkey and white label, and we earn from your revenue, not from fees you find out about later.",
  },
  sections: [
    {
      type: "mediaSplit",
      image: { src: "/brand/glass-x.jpg" },
      eyebrow: "Why we exist",
      index: "01",
      title: "Partnership is easy to say. We'd rather it cost us something.",
      paragraphs: [
        "Plenty of platforms talk partnership at the front, then wait for the operator to deliver revenue with nothing invested back. We do it the other way round.",
        "We take on fewer brands, put real people behind each one, and build features with operators rather than shipping a catalogue at them. You set the direction. We build to get you there.",
      ],
    },
    {
      type: "numberedRows",
      heading: { eyebrow: "How decisions get made", index: "02", title: "Fewer layers. Faster answers." },
      items: [
        {
          title: "No relay of account managers",
          text: "You talk to the people who decide. The CEO, the commercial director and the commercial manager are the faces you'll see, and they answer.",
        },
        {
          title: "Requests skip the queue",
          text: "There's no roadmap review between your request and a developer. If it makes sense for your setup, we build it, and we tell you when.",
        },
        {
          title: "Commercials that stay put",
          text: "One revenue share. No setup surprises and no fees that appear at renewal. We're the one you can do the maths on.",
        },
      ],
    },
    {
      type: "markerList",
      eyebrow: "Who we work with",
      index: "03",
      title: "We don't sign everyone.",
      lead: "It's the only way we can build what the operators we do sign actually need. If this sounds like you, we should talk.",
      marker: "check",
      items: [
        { title: "You know your market", text: "You understand your players better than we do, and you're happy to say so." },
        { title: "You want to build, not just license", text: "You have ideas for the product and want a team that ships them." },
        {
          title: "You've launched something before",
          text: "Operators, former C-level people starting their own brand, affiliates moving into operating.",
        },
        { title: "You'll tell us when something's wrong", text: "Partnership works both ways. So does honesty." },
      ],
    },
    {
      type: "team",
      heading: {
        eyebrow: "The people",
        index: "04",
        title: "The faces you'll actually talk to.",
        aside: "We've been told we're quite nice people to talk to. Come and see for yourself.",
      },
      // TODO(#6545): names and portraits from marketing.
      people: [
        { name: "Full Name", role: "CEO" },
        { name: "Full Name", role: "Commercial Director" },
        { name: "Full Name", role: "Commercial Manager" },
      ],
    },
    {
      type: "quote",
      eyebrow: "What we're building",
      index: "05",
      text: "A platform where the operator sets the direction and the technology keeps up. Fewer layers, faster answers, and features that exist because someone needed them.",
    },
  ],
};

export default page;
