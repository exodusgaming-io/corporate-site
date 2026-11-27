import { Band, type SectionProps } from "./shared";
import { ShotPlaceholder } from "./ShotPlaceholder";

// Wide product screenshot. Until real screenshots arrive, the placeholder says what goes there.
export function ShotSection({ section }: SectionProps<"shot">) {
  return (
    <Band section={section} defaults={{ pt: "none", pb: "sm" }}>
      <ShotPlaceholder label={section.label} className="aspect-[16/8] min-h-[280px] rounded-xl" />
    </Band>
  );
}
