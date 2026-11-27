import { cn } from "@/lib/cn";

// Placeholder for a screenshot that doesn't exist yet: stripes, a red glow and what will go there.
export function ShotPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex max-w-full items-center justify-center overflow-hidden border border-line bg-[repeating-linear-gradient(135deg,#141211_0_14px,var(--color-surface-raised)_14px_28px)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(50%_70%_at_90%_0%,rgb(121_0_4/0.45),transparent_70%)]" />
      <span className="relative px-6 text-center font-mono text-eyebrow leading-[1.4] tracking-[0.04em] text-fg-muted">
        {label}
      </span>
    </div>
  );
}
