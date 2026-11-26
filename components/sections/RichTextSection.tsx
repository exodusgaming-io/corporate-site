import { rich } from "@/lib/rich";
import { Band, type SectionProps } from "./shared";

// Long-form text (legal pages): headings, paragraphs and lists in a readable column.
export function RichTextSection({ section }: SectionProps<"richText">) {
  return (
    <Band section={section} defaults={{ pt: "xs", pb: "lg" }}>
      <div className="rich-text">
        {section.blocks.map((block, i) => {
          if ("h2" in block) return <h2 key={i}>{block.h2}</h2>;
          if ("h3" in block) return <h3 key={i}>{block.h3}</h3>;
          if ("ul" in block)
            return (
              <ul key={i}>
                {block.ul.map((item) => (
                  <li key={item}>{rich(item)}</li>
                ))}
              </ul>
            );
          return <p key={i}>{rich(block.p)}</p>;
        })}
      </div>
    </Band>
  );
}
