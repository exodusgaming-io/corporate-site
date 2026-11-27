import { contactEmail } from "../../navigation";
import type { Page } from "../../types";

const page: Page = {
  path: "/contact/",
  label: "Contact",
  seo: {
    title: "Contact",
    description: "Talk to the people who decide. Email, Telegram, LinkedIn or the form: someone who can make a decision reads every message.",
  },
  cta: false,
  hero: {
    kind: "contact",
    title: "Come and talk to us.",
    lead: "Someone who can make a decision reads every message. Expect a reply from a person, not a sequence.",
    methods: [
      { label: "Email", value: contactEmail, href: `mailto:${contactEmail}` },
      // TODO(#6545): the real Telegram handle and LinkedIn page from marketing.
      { label: "Telegram", value: "Handle to confirm", href: "https://t.me/" },
      { label: "LinkedIn", value: "Exodus", href: "https://www.linkedin.com/" },
    ],
    demo: { text: "Rather book a call?", label: "Book a demo" },
    form: {
      name: { label: "Name", placeholder: "Your name" },
      email: { label: "Work email", placeholder: "you@company.com" },
      company: { label: "Company", placeholder: "Company or brand" },
      role: {
        label: "You are",
        options: ["An operator", "Launching a new brand", "An affiliate moving into operating", "An investor", "Something else"],
      },
      interests: {
        label: "Interested in",
        options: ["Turnkey", "White Label", "Sweepstakes", "Crypto", "Sportsbook", "Integrations", "Licensing & Banking"],
      },
      message: { label: "What are you working on?", placeholder: "The short version is fine." },
      captcha: "Captcha goes here (#6543)",
      submit: "Send message",
      note: `The form isn't connected yet. Until it is, write to ${contactEmail}.`,
    },
  },
  sections: [],
};

export default page;
