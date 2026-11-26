import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/blocks/Breadcrumbs";
import { Card } from "@/components/blocks/Card";
import { CtaBand } from "@/components/blocks/CtaBand";
import { Faq } from "@/components/blocks/Faq";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { HomeHero } from "@/components/blocks/HomeHero";
import { LogoWall } from "@/components/blocks/LogoWall";
import { PageHero } from "@/components/blocks/PageHero";
import { Quote } from "@/components/blocks/Quote";
import { ScreenshotFrame } from "@/components/blocks/ScreenshotFrame";
import { Stats } from "@/components/blocks/Stats";
import { TeamCard } from "@/components/blocks/TeamCard";
import { Checkbox, ChoiceChips, SelectField, TextArea, TextField } from "@/components/forms/Field";
import { CookieBanner, CookieBannerView, ShowCookieBannerButton } from "@/components/site/CookieBanner";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { getNav } from "@/lib/site";
import { Button, buttonClasses } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { iconNames } from "@/components/ui/icon-names";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { ContrastTable, Swatches } from "./ColourTokens";

// Every token and component with placeholder copy. Not linked from the site and never indexed.
export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

const contents = [
  ["colours", "Colours and contrast"],
  ["type", "Typography"],
  ["space", "Spacing and radius"],
  ["icons", "Icons"],
  ["buttons", "Buttons and links"],
  ["headings", "Section headings"],
  ["cards", "Cards"],
  ["features", "Feature grid"],
  ["page-hero", "Inner-page hero and stats"],
  ["detail-hero", "Detail hero and breadcrumbs"],
  ["quote", "Quote"],
  ["team", "Team cards"],
  ["rich-text", "Rich text"],
  ["logos", "Logo wall"],
  ["screenshot", "Screenshot and lightbox"],
  ["faq", "FAQ accordion"],
  ["forms", "Form fields"],
  ["overlays", "Menu, Book a demo, cookie banner, 404"],
  ["cta", "CTA band and footer"],
] as const;

type SpecimenProps = { id: string; title: string; notInMockups?: boolean; note?: ReactNode; children: ReactNode };

// One block of the guide: a numbered title, a note on where it comes from, the component.
function Specimen({ id, title, notInMockups, note, children }: SpecimenProps) {
  const index = String(contents.findIndex(([key]) => key === id) + 1).padStart(2, "0");
  return (
    <div id={id} className="flex scroll-mt-28 flex-col gap-8 border-t border-line pt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <Eyebrow index={index}>{title}</Eyebrow>
        {notInMockups && (
          <span className="rounded-full border border-line px-3 py-1.5 text-caption leading-none text-fg-muted">
            Not in the mockups — built in their style
          </span>
        )}
      </div>
      {note && <p className="max-w-[46rem] text-small text-fg-muted">{note}</p>}
      {children}
    </div>
  );
}

const typeScale = [
  ["display-xl", "Home hero", "font-display text-display-xl", "Launch."],
  ["display", "Page hero", "font-display text-display", "Products"],
  ["display-sm", "Detail hero, CTA", "font-display text-display-sm", "White Label Plus"],
  ["heading-xl", "Section heading", "font-display text-heading-xl", "Five products. One clean core."],
  ["heading-lg", "Split-section heading", "font-display text-heading-lg", "Partnership is easy to say."],
  ["heading-md", "Card heading, large", "font-display text-heading-md", "Exodus Engine"],
  ["heading-sm", "Card heading", "font-display text-heading-sm", "Self-serve free rounds"],
  ["title", "Small card heading", "font-display text-title", "Limits by segment"],
  ["statement", "Quote, statement", "font-display text-statement", "We don't sign everyone."],
  ["stat", "Proof numbers", "font-display text-stat", "150+"],
  ["lead", "Intro paragraph", "text-lead text-fg-soft", "Exodus is the platform provider behind operators who want to launch fast."],
  ["body-lg", "Body, long text", "text-body-lg text-fg-soft", "We take on fewer brands and put real people behind each one."],
  ["body", "Body", "text-body text-fg-soft", "One revenue share. No setup surprises, no fees at renewal."],
  ["small", "Small text", "text-small text-fg-soft", "Platform provider for casino, sweepstakes and sportsbook brands."],
  ["caption", "Captions, legal line", "text-caption text-fg-muted", "© 2026 Exodus. Technology for .com and offshore operators."],
  ["eyebrow", "Eyebrow", "text-eyebrow uppercase text-accent", "How we work"],
] as const;

const features = [
  { icon: "bolt", title: "Fast", text: "No unnecessary layers of decision makers. Requests don't queue behind a roadmap review." },
  { icon: "calculator", title: "Transparent", text: "One revenue share. No setup surprises, no fees that appear at renewal." },
  { icon: "tools", title: "Built with you", text: "We build features with our operators, not a catalogue at them." },
  { icon: "handshake", title: "Selective", text: "We don't sign everyone. When we take a brand on, our people stay behind its roadmap." },
] as const;

const faq = [
  {
    question: "How long does a launch take?",
    answer: "Placeholder answer. Most brands go live in eight to twelve weeks, depending on licensing and payments.",
  },
  {
    question: "Can we bring our own game providers?",
    answer: "Placeholder answer. Yes — anything not in the aggregator we integrate on request.",
  },
  {
    question: "Who owns the player data?",
    answer: "Placeholder answer. You do. We process it on your behalf and hand it over in full if you leave.",
  },
];

export default function StyleGuide() {
  const nav = getNav("en");
  return (
    <>
      <Header nav={nav} />
      <main className="flex-1">
        <HomeHero
          title={
            <>
              Launch.
              <br />
              Scale.
              <br />
              Repeat.
            </>
          }
          lead={
            <>
              <strong className="font-medium text-fg">Across casino, sweeps and sportsbook.</strong> Exodus is the
              platform provider behind operators who want to launch fast and talk to the people who build the product.
            </>
          }
          actions={
            <>
              <Button href="#demo">Book a demo</Button>
              <Button href="/solutions/" variant="outline">
                See solutions
              </Button>
            </>
          }
          points={["Launch in weeks", "Features built on request", "A decision-maker on every call"]}
        />

        <Section>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <Eyebrow>Design system · #6541</Eyebrow>
              <h2 className="max-w-[18ch] font-display text-heading-xl">Style guide for exodusgaming.io</h2>
              <p className="max-w-[46rem] text-body-lg text-fg-soft">
                Tokens and components for the new site, taken from the Claude Design mockups and the Style Book. The
                copy is placeholder. Tokens live in <code className="font-mono text-small">app/globals.css</code>,
                components in <code className="font-mono text-small">components/</code>. The hero above and the CTA
                band and footer at the end are the real components.
              </p>
              <nav aria-label="Style guide contents">
                <ol className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,16rem),1fr))] gap-x-8 gap-y-2 text-small">
                  {contents.map(([id, title], i) => (
                    <li key={id}>
                      <a href={`#${id}`} className="flex gap-3 py-1 text-fg-soft transition-colors hover:text-fg">
                        <span className="w-6 font-display text-fg-muted">{String(i + 1).padStart(2, "0")}</span>
                        {title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            <Specimen
              id="colours"
              title="Colours and contrast"
              note="Eight Style Book colours (p. 9–10) and five the mockups add. Ratios are WCAG 2: 4.5:1 for text, 3:1 for large text (24px, or 19px bold), icons and borders."
            >
              <Swatches />
              <ContrastTable />
            </Specimen>

            <Specimen
              id="type"
              title="Typography"
              note="Mona Sans for headlines, General Sans for text, both self-hosted. Neither has Cyrillic, so Russian text is set in Inter, the Style Book fallback (p. 17)."
            >
              <ul className="flex flex-col">
                {typeScale.map(([token, use, className, sample]) => (
                  <li key={token} className="grid gap-x-8 gap-y-2 border-b border-line py-6 md:grid-cols-[12rem_1fr]">
                    <span className="flex flex-col gap-1">
                      <code className="font-mono text-caption text-fg">text-{token}</code>
                      <span className="text-caption text-fg-muted">{use}</span>
                    </span>
                    <span className={`${className} min-w-0 break-words`}>{sample}</span>
                  </li>
                ))}
                <li className="grid gap-x-8 gap-y-2 border-b border-line py-6 md:grid-cols-[12rem_1fr]">
                  <span className="flex flex-col gap-1">
                    <code className="font-mono text-caption text-fg">Cyrillic</code>
                    <span className="text-caption text-fg-muted">Inter, both families</span>
                  </span>
                  <span className="flex min-w-0 flex-col gap-3">
                    <span className="font-display text-heading-lg" lang="ru">
                      Запуск. Рост. Повтор.
                    </span>
                    <span className="text-body text-fg-soft" lang="ru">
                      Платформа для казино, свипстейков и спортсбука. Одна доля выручки, без сюрпризов при продлении.
                    </span>
                  </span>
                </li>
              </ul>
            </Specimen>

            <Specimen
              id="space"
              title="Spacing and radius"
              note="Sections share one side gutter and two vertical steps; content stops at 1440px. Everything else in the mockups is spaced by eye on a 4px grid."
            >
              <dl className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,15rem),1fr))] gap-4 text-small">
                {[
                  ["px-gutter", "Side gutter", "20 → 64px"],
                  ["py-section", "Section padding", "80 → 152px"],
                  ["py-section-sm", "Section padding, small", "64 → 104px"],
                  ["max-w-page", "Content width", "1440px"],
                  ["h-header", "Header height", "76px"],
                ].map(([token, label, value]) => (
                  <div key={token} className="flex flex-col gap-1 rounded-md border border-line bg-surface p-4">
                    <dt className="text-fg">{label}</dt>
                    <dd className="font-mono text-caption text-fg-soft">
                      {token} · {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-4">
                {[
                  ["rounded-sm", "12px · fields", "rounded-sm"],
                  ["rounded-md", "16px · small cards", "rounded-md"],
                  ["rounded-lg", "20px · cards", "rounded-lg"],
                  ["rounded-xl", "24px · large cards, frames", "rounded-xl"],
                  ["rounded-full", "pills, buttons", "rounded-full"],
                ].map(([token, label, className]) => (
                  <div key={token} className="flex flex-col items-start gap-3">
                    <span className={`block size-24 border border-line bg-surface ${className}`} />
                    <span className="flex flex-col text-caption">
                      <code className="font-mono text-fg">{token}</code>
                      <span className="text-fg-muted">{label}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Specimen>

            <Specimen id="icons" title="Icons" note="Style Book icon set (p. 23), 57 icons in public/brand/icons/. Always decorative: the text next to it carries the meaning.">
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] gap-2">
                {iconNames.map((name) => (
                  <li key={name} className="flex flex-col items-center gap-3 rounded-md border border-line bg-surface px-2 py-4">
                    <Icon name={name} />
                    <code className="font-mono text-caption text-fg-muted">{name}</code>
                  </li>
                ))}
              </ul>
            </Specimen>

            <Specimen
              id="buttons"
              title="Buttons and links"
              note="Primary turns Pure Red on hover with an Onyx label. Platinum on Pure Red is only 3.75:1, so no button puts Platinum text on red. Tab through to see focus rings."
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Button>Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="accent">Accent</Button>
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>
                    Disabled
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="lg">Large · 52px</Button>
                  <Button size="md">Medium · 48px</Button>
                  <Button size="sm">Small · 40px</Button>
                </div>
                <div className="flex flex-wrap items-center gap-8">
                  <ArrowLink href="/about/">How we work</ArrowLink>
                  <a href="#buttons" className="text-body text-fg transition-colors hover:text-accent">
                    Text link
                  </a>
                  <div className="flex flex-wrap gap-2">
                    <Tag>Player accounts</Tag>
                    <Tag>Wallet &amp; cashier</Tag>
                    <Tag>Bonus engine</Tag>
                  </div>
                </div>
              </div>
            </Specimen>
          </div>
        </Section>

        <Section tone="light" spacing="small">
          <div className="flex flex-col gap-6">
            <Eyebrow index="05">On a light section</Eyebrow>
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="accent">Accent</Button>
              <ArrowLink href="/about/" className="ml-4">
                How we work
              </ArrowLink>
            </div>
          </div>
        </Section>

        <Section>
          <div className="flex flex-col gap-16">
            <Specimen id="headings" title="Section headings" note="Eyebrow with the section number, heading, and optional text or link on the right.">
              <SectionHeader
                eyebrow="Products"
                index="04"
                title="Five products. One clean core."
                aside="The industry assumes a good platform has to be complicated. Most of that complexity is there for its own sake."
              />
              <SectionHeader
                eyebrow="Solutions"
                index="02"
                title="Pick the model. We build the rest with you."
                aside={<ArrowLink href="/solutions/">Compare solutions</ArrowLink>}
              />
            </Specimen>

            <Specimen id="cards" title="Cards" note="One component in four sizes. Linked cards get a red border on hover, plain ones a dark red one.">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4">
                <Card
                  size="lg"
                  href="/products/exodus-engine/"
                  icon="trophy"
                  title="Exodus Engine"
                  text="Tournaments, missions and loyalty your CRM team builds and launches without waiting for a release."
                  cta="Explore"
                />
                <Card
                  size="lg"
                  href="/products/aggregator/"
                  icon="nodes"
                  title="Aggregator"
                  text="One API to every studio we carry. One wallet integration, one game list, one set of round data."
                  cta="Explore"
                />
                <Card
                  status="Shipped"
                  meta="Payments · Cashier"
                  title="A payment method, by next week"
                  text="An operator asked for a local payment method on a Tuesday. It was live the following week."
                />
                <Card
                  index="01"
                  title="Player accounts and wallet"
                  text="One wallet across casino and sportsbook, with limits and KYC in the same place."
                />
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-3">
                <Card size="sm" href="/integrations/crm/" title="CRM" text="Segments, campaigns and messages from your tools." />
                <Card size="sm" href="/integrations/affiliate-systems/" title="Affiliate Systems" text="Tracking and payouts with the platforms you use." />
                <Card size="sm" href="/integrations/risk-and-fraud/" title="Risk & Fraud" text="KYC, device and payment checks before money moves." />
                <Card size="sm" href="/integrations/communication/" title="Communication" text="Email, SMS and push from one event stream." />
              </div>
            </Specimen>
          </div>
        </Section>

        <Section tone="light" id="features">
          <div className="flex flex-col gap-[clamp(48px,6vw,88px)]">
            <SectionHeader eyebrow="Feature grid" index="08" title="Fast, transparent, and actually builds what you ask for." />
            <FeatureGrid items={[...features]} />
          </div>
        </Section>

        <Section spacing="small">
          <FeatureGrid items={[...features].slice(0, 3)} variant="open" />
        </Section>

        <div id="page-hero" className="scroll-mt-20">
          <PageHero
            as="h2"
            eyebrow="Game Providers"
            title="The games your players already look for."
            lead="Slots, live casino, crash, table and instant games from the studios players know, live on your brand through one integration."
            actions={<Button href="#demo">Book a demo</Button>}
            stats={
              <Stats
                items={[
                  { value: "000+", label: "Studios", note: "to confirm" },
                  { value: "00,000+", label: "Games", note: "to confirm" },
                  { value: "1", label: "Integration to get all of them" },
                ]}
              />
            }
          />
        </div>

        <div id="detail-hero" className="scroll-mt-20">
          <PageHero
            as="h2"
            breadcrumbs={
              <Breadcrumbs
                items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions/" }, { label: "White Label Plus" }]}
              />
            }
            title="Your brand, our platform, your own licence."
            lead="Placeholder intro for a detail page. Two lines that say what it is and who it is for."
            actions={
              <>
                <Button href="#demo">Book a demo</Button>
                <Button href="/contact/" variant="outline">
                  Ask a question
                </Button>
              </>
            }
            image={{ src: "/brand/glass-ridges.jpg", alt: "" }}
          />
        </div>

        <div id="quote" className="scroll-mt-20">
          <Quote cite="Placeholder — Name, Role">
            A platform where the operator sets the direction and the technology keeps up.
          </Quote>
          <Quote image="/brand/glass-ridges.jpg" link={{ href: "/about/", label: "How we choose who we work with" }}>
            We don&apos;t sign everyone. When we take a brand on, it&apos;s a strategic partnership: support across the
            board and our resource behind your roadmap.
          </Quote>
        </div>

        <Section>
          <div className="flex flex-col gap-16">
            <Specimen id="team" title="Team cards" note="Portraits aren't shot yet; without a photo the card shows the mockup's placeholder.">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4">
                <TeamCard name="Full Name" role="CEO" />
                <TeamCard name="Full Name" role="Commercial Director" />
                <TeamCard name="Full Name" role="Commercial Manager" />
              </div>
            </Specimen>

            <Specimen id="rich-text" title="Rich text" notInMockups note="For legal pages and any plain long text.">
              <div className="rich-text">
                <h2>Privacy policy</h2>
                <p>
                  Placeholder text. This policy explains what we collect when you use <a href="#rich-text">exodusgaming.io</a>,
                  why, and what you can ask us to do with it. <strong>We don&apos;t sell personal data.</strong>
                </p>
                <h3>What we collect</h3>
                <ul>
                  <li>What you send us through the contact form: name, work email, company and message.</li>
                  <li>Technical data your browser sends with every request.</li>
                </ul>
                <ol>
                  <li>We read your message.</li>
                  <li>A person replies, usually within a working day.</li>
                </ol>
                <blockquote>Questions about this policy go to the address at the end of the page.</blockquote>
                <table>
                  <thead>
                    <tr>
                      <th>Cookie</th>
                      <th>Purpose</th>
                      <th>Kept for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>exodus-cookie-consent</td>
                      <td>Remembers your cookie choice (local storage)</td>
                      <td>Until cleared</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Specimen>

            <Specimen id="logos" title="Logo wall" note="Any logo file is shown monochrome. Client logos aren't in yet, so names stand in.">
              <LogoWall
                logos={["Studio One", "Northplay", "Red Rake", "Lumen", "Arcadia", "Kestrel", "Brightwave", "Pinecone", "Halcyon", "Orbit", "Vela", "Monolith"].map(
                  (name) => ({ name }),
                )}
              />
            </Specimen>

            <Specimen id="screenshot" title="Screenshot and lightbox" notInMockups note="The frame is from the mockups; the lightbox isn't. Click or press Enter to enlarge, Esc to close.">
              <ScreenshotFrame
                src="/styleguide/backoffice-placeholder.svg"
                alt="Back office, player overview (placeholder)"
                width={1600}
                height={900}
                caption="Back-office screenshots come from marketing; this one is a placeholder."
              />
            </Specimen>

            <Specimen id="faq" title="FAQ accordion" note="One answer open at a time. Works with the keyboard and without JavaScript.">
              <div className="flex flex-wrap items-start gap-x-[clamp(40px,6vw,96px)] gap-y-10">
                <div className="flex flex-[1_1_320px] flex-col gap-6">
                  <h2 className="font-display text-heading-lg">Questions operators ask</h2>
                  <ArrowLink href="/contact/">Ask yours</ArrowLink>
                </div>
                <div className="min-w-[min(100%,480px)] flex-[1.6_1_480px]">
                  <Faq name="styleguide-faq" items={faq} />
                </div>
              </div>
            </Specimen>

            <Specimen
              id="forms"
              title="Form fields"
              notInMockups
              note="Default state, chips and the panel are from the Contact mockup; hover, focus, error, success and disabled are added. Sending is wired in #6543."
            >
              <div className="rounded-xl border border-line bg-surface p-[clamp(24px,3.5vw,48px)]">
                <form className="flex flex-col gap-6" action="#forms">
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
                    <TextField name="name" label="Name" placeholder="Your name" required />
                    <TextField name="email" type="email" label="Work email" defaultValue="name@" error="Enter a full email address." required />
                    <TextField name="company" label="Company" defaultValue="Exodus" success="Looks good." />
                    <SelectField
                      name="role"
                      label="You are"
                      options={["An operator", "Launching a new brand", "An affiliate moving into operating", "An investor", "Something else"]}
                    />
                    <TextField name="website" label="Website" placeholder="Disabled" disabled />
                    <TextField name="phone" label="Phone" placeholder="+44 …" hint="Only if you prefer a call." />
                  </div>
                  <ChoiceChips
                    name="interest"
                    legend="Interested in"
                    options={["Turnkey Casino", "White Label", "Sweepstakes", "Sportsbook", "Payments", "Game aggregation"]}
                    defaultChecked={["White Label"]}
                  />
                  <TextArea name="message" label="What are you working on?" placeholder="The short version is fine." />
                  <div className="flex flex-col">
                    <Checkbox name="consent" label="I agree to the privacy policy." defaultChecked />
                    <Checkbox name="news" label="Send me product news." error="Placeholder error under a checkbox." />
                    <Checkbox name="locked" label="Disabled option" disabled />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="flex h-16 items-center rounded-sm border border-line bg-onyx px-4.5 font-mono text-caption tracking-[0.04em] text-fg-muted">
                      CAPTCHA SLOT (#6543)
                    </span>
                    <div className="flex flex-wrap gap-3">
                      <Button type="submit" disabled>
                        Send message
                      </Button>
                      <Button type="submit">Send message</Button>
                    </div>
                  </div>
                </form>
              </div>
            </Specimen>

            <Specimen
              id="overlays"
              title="Menu, Book a demo, cookie banner, 404"
              note="The menu opens from the round button in the header; it is the mega-menu and the mobile menu in one. Every link to #demo opens the Book a demo panel. The cookie banner and 404 aren't in the mockups."
            >
              <div className="flex flex-wrap items-center gap-3">
                <Button href="#demo" size="md">
                  Open Book a demo
                </Button>
                <ShowCookieBannerButton />
                {/* A plain link: through the router it would be prefetched, and this page never exists. */}
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/styleguide/missing-page/" className={buttonClasses("outline", "sm")}>
                  Open the 404 page
                </a>
              </div>
              <CookieBannerView label="Cookie consent (sample)" />
            </Specimen>
          </div>
        </Section>

        <div id="cta" className="scroll-mt-20">
          <CtaBand
            title="Come and talk to us. See for yourself."
            text="We've been told we're quite nice people to talk to. You'll get someone who can make a decision, not a ticket number."
            actions={
              <>
                <Button href="#demo">Book a demo</Button>
                <Button href="/contact/" variant="outline">
                  Send a message
                </Button>
              </>
            }
          />
        </div>
      </main>
      <Footer nav={nav} />
      <CookieBanner />
    </>
  );
}
