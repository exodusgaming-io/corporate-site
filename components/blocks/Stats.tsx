export type Stat = { value: string; label: string; note?: string };

// Proof numbers in a row; wraps to a column on narrow screens.
export function Stats({ items }: { items: Stat[] }) {
  return (
    <dl className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] border-t border-fg/16">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col-reverse gap-2.5 pt-7 pr-6">
          <dt className="text-small text-fg-soft">
            {item.label}
            {item.note && <span className="ml-1.5 font-mono text-[0.6875rem] text-fg-muted uppercase">· {item.note}</span>}
          </dt>
          <dd className="font-display text-stat">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
