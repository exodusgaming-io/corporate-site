import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { Band, SectionHeading, type SectionProps } from "./shared";

// Icon, title and text in an even grid: the joined panel ("How we work") or open columns under a hero.
export function FeatureGridSection({ section, site }: SectionProps<"featureGrid">) {
  const open = section.variant === "open";
  return (
    <Band
      section={section}
      defaults={open ? { pt: "none", pb: "none" } : { pt: "lg", pb: "lg" }}
      innerClassName="flex flex-col gap-[clamp(48px,6vw,88px)]"
    >
      {section.heading && <SectionHeading heading={section.heading} site={site} />}
      <FeatureGrid variant={section.variant} items={section.items} />
    </Band>
  );
}
