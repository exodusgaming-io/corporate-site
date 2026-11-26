import type { ComponentType } from "react";
import type { Page, Section } from "@/content/types";
import type { Site } from "@/lib/site";
import type { SectionProps } from "./shared";
import { CalloutSection } from "./CalloutSection";
import { CardsSection } from "./CardsSection";
import { CodeSection } from "./CodeSection";
import { CodeSplitSection } from "./CodeSplitSection";
import { CompareSection } from "./CompareSection";
import { CrossLinksSection } from "./CrossLinksSection";
import { FaqSection } from "./FaqSection";
import { FeatureGridSection } from "./FeatureGridSection";
import { FlowSection } from "./FlowSection";
import { ImageCardsSection } from "./ImageCardsSection";
import { LinkListSection } from "./LinkListSection";
import { MarkerListSection } from "./MarkerListSection";
import { MediaSplitSection } from "./MediaSplitSection";
import { MethodTabsSection } from "./MethodTabsSection";
import { NumberedRowsSection } from "./NumberedRowsSection";
import { PlansSection } from "./PlansSection";
import { ProductCardsSection } from "./ProductCardsSection";
import { ProductTabsSection } from "./ProductTabsSection";
import { QuoteSection } from "./QuoteSection";
import { RelatedSection } from "./RelatedSection";
import { RichTextSection } from "./RichTextSection";
import { RowCardsSection } from "./RowCardsSection";
import { ShotSection } from "./ShotSection";
import { StackSection } from "./StackSection";
import { StatementSection } from "./StatementSection";
import { StepsSection } from "./StepsSection";
import { StudiosSection } from "./StudiosSection";
import { TeamSection } from "./TeamSection";
import { TilesSection } from "./TilesSection";
import { WalletSection } from "./WalletSection";

type Props = { section: Section; site: Site; page: Page };

// One component per section type in content/types.ts; a type without one fails the build.
const components: { [K in Section["type"]]: ComponentType<SectionProps<K>> } = {
  callout: CalloutSection,
  cards: CardsSection,
  code: CodeSection,
  codeSplit: CodeSplitSection,
  compare: CompareSection,
  crossLinks: CrossLinksSection,
  faq: FaqSection,
  featureGrid: FeatureGridSection,
  flow: FlowSection,
  imageCards: ImageCardsSection,
  linkList: LinkListSection,
  markerList: MarkerListSection,
  mediaSplit: MediaSplitSection,
  methodTabs: MethodTabsSection,
  numberedRows: NumberedRowsSection,
  plans: PlansSection,
  productCards: ProductCardsSection,
  productTabs: ProductTabsSection,
  quote: QuoteSection,
  related: RelatedSection,
  richText: RichTextSection,
  rowCards: RowCardsSection,
  shot: ShotSection,
  stack: StackSection,
  statement: StatementSection,
  steps: StepsSection,
  studios: StudiosSection,
  team: TeamSection,
  tiles: TilesSection,
  wallet: WalletSection,
};

// A page's sections in the order its content file lists them.
export function Sections({ page, site }: { page: Page; site: Site }) {
  return page.sections.map((section, i) => {
    const Component = components[section.type] as ComponentType<Props>;
    return <Component key={i} section={section} site={site} page={page} />;
  });
}
