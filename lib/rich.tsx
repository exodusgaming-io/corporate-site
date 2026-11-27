import { Fragment, type ReactNode } from "react";

// Copy with **emphasis**: the marked words in the main text colour, slightly bolder, as in the mockups.
// Content files hold plain text only; this is the one piece of markup they can use.
export function rich(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-medium text-fg">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
