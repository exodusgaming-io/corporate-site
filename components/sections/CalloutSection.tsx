import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Band, type SectionProps } from "./shared";

// Light band. With a kicker it sets this page apart from its neighbour ("This page is the tech. Game
// Aggregation is the deal."), the text on the right; without one it is a closing prompt, heading and text
// on the left and the button on the right ("Not sure which one fits?").
export function CalloutSection({ section, site }: SectionProps<"callout">) {
  const button = section.link && (
    <Button href={site.href(section.link.href)} size="lg">
      {section.link.label} →
    </Button>
  );
  if (!section.kicker) {
    return (
      <Band
        section={section}
        defaults={{ tone: "light", pt: "lg", pb: "lg" }}
        innerClassName="flex flex-wrap items-end justify-between gap-x-[clamp(40px,6vw,96px)] gap-y-8"
      >
        <div className="flex flex-[1_1_520px] flex-col gap-5">
          <h2 className="font-display text-heading-lg text-balance">{section.title}</h2>
          <p className="max-w-[35rem] text-[1.125rem] leading-[1.55] text-pretty text-fg-soft">{section.text}</p>
        </div>
        {button}
      </Band>
    );
  }
  return (
    <Band
      section={section}
      defaults={{ tone: "light", pt: "lg", pb: "lg" }}
      innerClassName="flex flex-wrap items-end gap-x-[clamp(40px,6vw,96px)] gap-y-8"
    >
      <div className="flex flex-[1.4_1_480px] flex-col gap-6">
        <p className="flex items-center gap-3 text-eyebrow text-accent uppercase">
          <Icon name="compass" size={18} />
          {section.kicker}
        </p>
        <h2 className="font-display text-heading-lg text-balance">{section.title}</h2>
      </div>
      <div className="flex flex-[1_1_300px] flex-col items-start gap-6">
        <p className="text-[1.125rem] leading-[1.55] text-pretty text-fg-soft">{section.text}</p>
        {button}
      </div>
    </Band>
  );
}
