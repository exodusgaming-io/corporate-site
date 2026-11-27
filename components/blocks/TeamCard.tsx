import Image from "next/image";

// placeholder: the word before the role on an empty portrait ("Portrait — CEO").
type TeamCardProps = { name: string; role: string; photo?: string; placeholder?: string };

// Portrait, name and role. Without a photo it shows the striped placeholder from the mockup.
export function TeamCard({ name, role, photo, placeholder = "Portrait" }: TeamCardProps) {
  return (
    <figure className="flex flex-col gap-4.5">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-lg border border-line bg-stripes">
        {photo ? (
          <Image src={photo} alt={name} fill sizes="(min-width: 1000px) 30vw, 100vw" className="object-cover" />
        ) : (
          <span className="px-6 text-center font-mono text-eyebrow tracking-[0.04em] text-fg-muted uppercase">
            {placeholder} — {role}
          </span>
        )}
      </div>
      <figcaption className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="font-display text-[1.375rem] leading-[1.2] font-semibold">{name}</span>
        <span className="text-eyebrow text-accent uppercase">{role}</span>
      </figcaption>
    </figure>
  );
}
