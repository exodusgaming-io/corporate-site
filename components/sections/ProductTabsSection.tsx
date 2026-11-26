import { ProductTabs } from "./ProductTabs";
import { Band, SectionHeading, type SectionProps } from "./shared";

export function ProductTabsSection({ section, site }: SectionProps<"productTabs">) {
  return (
    <Band section={section} defaults={{ pt: "xl", pb: "md" }} innerClassName="flex flex-col gap-[clamp(40px,5vw,72px)]">
      <SectionHeading heading={section.heading} site={site} />
      <ProductTabs
        explore={section.explore}
        items={section.items.map((item) => ({
          name: site.page(item.page).label,
          href: site.href(item.page),
          shot: item.shot,
          text: item.text,
        }))}
      />
    </Band>
  );
}
