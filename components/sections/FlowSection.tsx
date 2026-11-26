import { cn } from "@/lib/cn";
import { Band, SectionHeading, type SectionProps } from "./shared";

const styles = {
  dashed: "border border-dashed border-fg/30",
  surface: "border border-line bg-surface",
  gradient: "border border-molten-lava bg-[linear-gradient(120deg,var(--color-rich-mahogany),var(--color-molten-lava))]",
  light: "bg-platinum text-onyx",
};

// A process as numbered boxes in a row, one step a pair of boxes (Payment Solutions: the cashier).
export function FlowSection({ section, site }: SectionProps<"flow">) {
  return (
    <Band section={section} defaults={{ pt: "none", pb: "lg" }} innerClassName="flex flex-col gap-[clamp(40px,5vw,64px)]">
      <SectionHeading heading={section.heading} site={site} />
      <ol className="flex flex-wrap items-stretch gap-3">
        {section.steps.map((step, i) => {
          if ("pair" in step) {
            return (
              <li key={i} className="flex flex-[1_1_180px] flex-col gap-2">
                {step.pair.map((option, j) => (
                  <span
                    key={option.title}
                    className="flex flex-1 items-center justify-between gap-3 rounded-md border border-line bg-surface px-5 py-4"
                  >
                    <span className="font-display text-[1.0625rem] leading-[1.2] font-semibold">{option.title}</span>
                    <span className={cn("text-[0.6875rem] leading-none font-medium tracking-[0.12em] uppercase", j === 0 ? "text-fg-muted" : "text-accent")}>
                      {option.text}
                    </span>
                  </span>
                ))}
              </li>
            );
          }
          const light = step.style === "light";
          const bright = step.style === "gradient";
          return (
            <li key={step.title} className={cn("flex flex-[1_1_160px] flex-col gap-2.5 rounded-md p-6", styles[step.style])}>
              <span className={cn("font-display text-index", light ? "text-[var(--color-shadow-grey)]" : bright ? "text-platinum" : "text-fg-muted")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[1.25rem] leading-[1.2] font-semibold">{step.title}</span>
              <span className={cn("text-nav leading-[1.45]", light ? "text-[var(--color-shadow-grey)]" : bright ? "text-platinum" : "text-fg-soft")}>
                {step.text}
              </span>
            </li>
          );
        })}
      </ol>
    </Band>
  );
}
