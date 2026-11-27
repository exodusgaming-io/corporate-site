import type { ReactNode } from "react";
import { Gradient } from "@/components/blocks/Gradient";
import { ChoiceChips, SelectField, TextArea, TextField } from "@/components/forms/Field";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import type { Hero } from "@/content/types";
import { rich } from "@/lib/rich";

type ContactHeroProps = { hero: Extract<Hero, { kind: "contact" }>; breadcrumbs?: ReactNode };

// The whole Contact page: how to reach us on the left, the form on the right.
// The form is only the layout for now: sending (Attio, the inbox, the captcha) comes with #6543, so the
// button stays disabled and nothing is posted anywhere.
export function ContactHero({ hero, breadcrumbs }: ContactHeroProps) {
  const { form } = hero;
  return (
    <section data-tone="dark" className="relative overflow-hidden bg-hero px-gutter pt-[clamp(140px,15vw,200px)] pb-section text-fg">
      <Gradient variant="deep" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-fade-up" />
      <div className="relative mx-auto flex max-w-page flex-wrap items-start gap-x-[clamp(40px,6vw,96px)] gap-y-14">
        <div className="flex flex-[1_1_380px] flex-col gap-8">
          {breadcrumbs}
          <h1 className="font-display text-[clamp(3rem,7vw,7.5rem)] leading-[0.94] font-semibold tracking-[-0.04em]">{hero.title}</h1>
          <p className="max-w-[30rem] text-lead text-pretty text-fg-soft">{rich(hero.lead)}</p>
          <ul className="mt-2 flex flex-col border-b border-line">
            {hero.methods.map((method) => {
              const external = method.href.startsWith("http");
              return (
                <li key={method.label}>
                  <a
                    href={method.href}
                    {...(external ? { target: "_blank", rel: "noopener" } : {})}
                    className="flex items-center justify-between gap-4 border-t border-line py-5 transition-colors hover:text-accent"
                  >
                    <span className="flex flex-col gap-1.5">
                      <span className="text-[0.6875rem] leading-none font-medium tracking-[0.14em] text-fg-muted uppercase">
                        {method.label}
                      </span>
                      <span className="text-[1.125rem] leading-[1.2] font-medium">{method.value}</span>
                    </span>
                    <span aria-hidden="true">→</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <ArrowLink href="#demo">
            {hero.demo.text} {hero.demo.label}
          </ArrowLink>
        </div>
        <div className="min-w-[min(100%,440px)] flex-[1.2_1_440px] rounded-xl border border-line bg-surface p-[clamp(24px,3.5vw,48px)]">
          <form className="flex flex-col gap-6" aria-describedby="contact-form-note">
            {/* First, so a screen reader meets it before the fields. */}
            <p id="contact-form-note" className="text-small text-fg-muted">
              {form.note}
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
              <TextField name="name" label={form.name.label} placeholder={form.name.placeholder} autoComplete="name" required />
              <TextField
                name="email"
                type="email"
                label={form.email.label}
                placeholder={form.email.placeholder}
                autoComplete="email"
                required
              />
              <TextField
                name="company"
                label={form.company.label}
                placeholder={form.company.placeholder}
                autoComplete="organization"
              />
              <SelectField name="role" label={form.role.label} options={form.role.options} />
            </div>
            <ChoiceChips name="interests" legend={form.interests.label} options={form.interests.options} />
            <TextArea name="message" label={form.message.label} placeholder={form.message.placeholder} />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex h-16 items-center rounded-sm border border-dashed border-line bg-onyx px-4.5 font-mono text-[0.6875rem] tracking-[0.04em] text-fg-muted uppercase">
                {form.captcha}
              </div>
              <Button type="submit" disabled size="xl">
                {form.submit}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
