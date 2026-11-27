import { Icon } from "@/components/ui/Icon";
import { Band, SplitIntro, type SectionProps } from "./shared";

// Sportsbook: two products around one wallet, heading and text on the left.
export function WalletSection({ section }: SectionProps<"wallet">) {
  const side = "flex flex-[1_1_130px] flex-col items-center gap-3 rounded-lg border border-line px-4 py-7";
  const label = "font-display text-[1.25rem] leading-[1.2] font-semibold";
  const arrow = (
    <span aria-hidden="true" className="text-[1.75rem] leading-none font-light text-accent">
      ⇄
    </span>
  );
  return (
    <Band
      section={section}
      defaults={{ tone: "light", pt: "lg", pb: "lg" }}
      innerClassName="flex flex-wrap items-center gap-x-[clamp(40px,6vw,96px)] gap-y-12"
    >
      <SplitIntro eyebrow={section.eyebrow} index={section.index} title={section.title} lead={section.lead} className="flex-[1_1_380px]" />
      <div className="flex flex-[1_1_420px] flex-wrap items-center justify-center gap-3">
        <div className={side}>
          <Icon name="dice" />
          <span className={label}>{section.left}</span>
        </div>
        {arrow}
        <div data-tone="dark" className="flex flex-[1_1_150px] flex-col items-center gap-3 rounded-lg bg-onyx px-4 py-9">
          <Icon name="wallet" />
          <span className={label}>{section.middle}</span>
        </div>
        {arrow}
        <div className={side}>
          <Icon name="trophy" />
          <span className={label}>{section.right}</span>
        </div>
      </div>
    </Band>
  );
}
