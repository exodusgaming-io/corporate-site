import { Icon } from "@/components/ui/Icon";
import { Band, SplitIntro, type SectionProps } from "./shared";

// Colours a JSON sample like the mockup: keys red, a first line that isn't JSON (the request) muted.
function CodeLines({ text }: { text: string }) {
  return text.split("\n").map((line, i) => {
    const content =
      i === 0 && !line.trimStart().startsWith("{") ? (
        <span className="text-fg-muted">{line}</span>
      ) : (
        line.split(/("[^"]+")(?=:)/).map((part, j) =>
          j % 2 === 1 ? (
            <span key={j} className="text-cinnabar">
              {part}
            </span>
          ) : (
            part
          ),
        )
      );
    return (
      <span key={i} className="block">
        {content}
      </span>
    );
  });
}

// Pitch to developers on the left (with a checklist), a code window on the right.
export function CodeSplitSection({ section }: SectionProps<"codeSplit">) {
  return (
    <Band
      section={section}
      defaults={{ pt: "none", pb: "lg" }}
      innerClassName="flex flex-wrap items-center gap-x-[clamp(40px,6vw,96px)] gap-y-12"
    >
      <SplitIntro eyebrow={section.eyebrow} index={section.index} title={section.title} lead={section.lead} className="flex-[1_1_380px]">
        <ul className="border-b border-line">
          {section.checks.map((check) => (
            <li key={check} className="flex items-center gap-3.5 border-t border-line py-4 text-body leading-[1.3] font-medium">
              <Icon name="check" size={18} />
              {check}
            </li>
          ))}
        </ul>
      </SplitIntro>
      <figure className="flex min-w-0 flex-[1.2_1_420px] flex-col overflow-hidden rounded-lg border border-line bg-surface">
        <figcaption className="flex items-center gap-2 border-b border-line px-4.5 py-3.5">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-shadow-grey" />
          <span aria-hidden="true" className="size-2.5 rounded-full bg-shadow-grey" />
          <span aria-hidden="true" className="size-2.5 rounded-full bg-shadow-grey" />
          <span className="ml-3 font-mono text-eyebrow tracking-normal text-fg-muted">{section.code.caption}</span>
        </figcaption>
        <pre
          tabIndex={0}
          role="region"
          aria-label={section.code.caption}
          className="overflow-x-auto focus-visible:-outline-offset-4"
        >
          <CodeLines text={section.code.text} />
        </pre>

      </figure>
    </Band>
  );
}
