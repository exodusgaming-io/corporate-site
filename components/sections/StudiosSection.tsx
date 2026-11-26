import { StudioDirectory } from "./StudioDirectory";
import { Band, type SectionProps } from "./shared";

export function StudiosSection({ section, site }: SectionProps<"studios">) {
  return (
    <Band section={section} defaults={{ pt: "xs", pb: "lg" }}>
      <StudioDirectory
        all={section.all}
        categories={section.categories}
        sweepsFilter={section.sweepsFilter}
        search={section.search}
        count={section.count}
        studios={section.studios}
        sweepsLabel={section.sweepsLabel}
        logo={section.logo}
        empty={{ text: section.empty.text, label: section.empty.action.label, href: site.href(section.empty.action.href) }}
      />
    </Band>
  );
}
