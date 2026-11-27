import { MethodTabs } from "./MethodTabs";
import { Band, SectionHeading, type SectionProps } from "./shared";

export function MethodTabsSection({ section, site }: SectionProps<"methodTabs">) {
  return (
    <Band section={section} defaults={{ pt: "xs", pb: "lg" }} innerClassName="flex flex-col gap-[clamp(32px,4vw,48px)]">
      <SectionHeading heading={section.heading} site={site} />
      <MethodTabs items={section.items} label={section.heading.title} />
    </Band>
  );
}
