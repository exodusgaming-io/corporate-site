import { Button } from "@/components/ui/Button";
import { Band, SectionHeading, type SectionProps } from "./shared";

// Launch models side by side: what each one means for licence, payments, front end and custom work.
export function PlansSection({ section, site }: SectionProps<"plans">) {
  return (
    <Band
      section={section}
      defaults={{ pt: "xs", pb: "lg" }}
      innerClassName="flex flex-col gap-[clamp(40px,5vw,64px)]"
    >
      <SectionHeading heading={section.heading} site={site} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-4">
        {section.items.map((plan, i) => (
          <article key={plan.page} className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface">
            <div className="flex flex-col gap-3.5 px-8 pt-8 pb-6">
              <span className="font-display text-index text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.05] font-semibold tracking-[-0.025em]">
                {site.page(plan.page).label}
              </h3>
              <p className="min-h-12 text-body leading-[1.5] text-fg-soft">{plan.text}</p>
            </div>
            <dl className="flex flex-col px-8">
              {plan.specs.map((spec) => (
                <div key={spec.term} className="flex flex-col gap-1.5 border-t border-line py-4">
                  <dt className="text-[0.6875rem] leading-none font-medium tracking-[0.14em] text-fg-muted uppercase">{spec.term}</dt>
                  <dd className="text-body leading-[1.4] font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <Button href={site.href(plan.page)} variant="outline" className="mx-8 mt-6 mb-8">
              {plan.cta}
            </Button>
          </article>
        ))}
      </div>
    </Band>
  );
}
