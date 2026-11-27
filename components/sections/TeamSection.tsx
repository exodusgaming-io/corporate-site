import { TeamCard } from "@/components/blocks/TeamCard";
import { Band, SectionHeading, type SectionProps } from "./shared";

export function TeamSection({ section, site }: SectionProps<"team">) {
  return (
    <Band section={section} defaults={{ pt: "lg", pb: "lg" }} innerClassName="flex flex-col gap-[clamp(40px,5vw,64px)]">
      <SectionHeading heading={section.heading} site={site} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4">
        {section.people.map((person) => (
          <TeamCard
            key={person.role}
            name={person.name}
            role={person.role}
            photo={person.photo}
            placeholder={site.dictionary.portrait}
          />
        ))}
      </div>
    </Band>
  );
}
