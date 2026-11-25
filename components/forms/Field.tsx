import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

// Form controls from the Contact mockup: 52px, radius 12, Onyx fill, Shadow Grey border.
// The mockup only has the default state; hover, focus, error, success and disabled follow the same system.

const control = cn(
  "w-full rounded-sm border border-line bg-onyx px-4 text-body text-platinum transition-colors",
  "placeholder:text-muted hover:border-muted",
  "focus:border-cinnabar focus:ring-1 focus:ring-cinnabar focus:outline-none",
  "aria-invalid:border-cinnabar",
  "disabled:cursor-not-allowed disabled:border-shadow-grey disabled:bg-surface disabled:text-muted",
);

type FieldProps = {
  // Used as the id; give an explicit id when the same name appears twice on a page.
  name: string;
  id?: string;
  label: string;
  hint?: string;
  error?: string;
  success?: string;
  required?: boolean;
  children: (props: { id: string; describedBy?: string; invalid: boolean }) => ReactNode;
};

// Label, control and the message under it, wired together for screen readers.
export function Field({ name, id = name, label, hint, error, success, required, children }: FieldProps) {
  const message = error ?? success ?? hint;
  const messageId = message ? `${id}-message` : undefined;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-caption leading-none font-medium text-silver">
        {label}
        {required && <span className="text-cinnabar"> *</span>}
      </label>
      {children({ id, describedBy: messageId, invalid: Boolean(error) })}
      {message && (
        <p
          id={messageId}
          className={cn(
            "flex items-center gap-2 text-nav",
            error ? "text-cinnabar" : success ? "text-platinum" : "text-muted",
          )}
        >
          {success && !error && <span aria-hidden="true">✓</span>}
          {message}
        </p>
      )}
    </div>
  );
}

type Shared = Omit<FieldProps, "children">;

export function TextField({
  name,
  id,
  label,
  hint,
  error,
  success,
  required,
  className,
  ...input
}: Shared & Omit<ComponentProps<"input">, "name" | "id">) {
  return (
    <Field {...{ name, id, label, hint, error, success, required }}>
      {(f) => (
        <input
          id={f.id}
          name={name}
          required={required}
          aria-invalid={f.invalid || undefined}
          aria-describedby={f.describedBy}
          className={cn(control, "h-13", success && !error && "border-silver", className)}
          {...input}
        />
      )}
    </Field>
  );
}

export function TextArea({
  name,
  id,
  label,
  hint,
  error,
  success,
  required,
  className,
  rows = 5,
  ...textarea
}: Shared & Omit<ComponentProps<"textarea">, "name" | "id">) {
  return (
    <Field {...{ name, id, label, hint, error, success, required }}>
      {(f) => (
        <textarea
          id={f.id}
          name={name}
          rows={rows}
          required={required}
          aria-invalid={f.invalid || undefined}
          aria-describedby={f.describedBy}
          className={cn(control, "resize-y py-3.5", className)}
          {...textarea}
        />
      )}
    </Field>
  );
}

export function SelectField({
  name,
  id,
  label,
  hint,
  error,
  success,
  required,
  className,
  options,
  ...select
}: Shared & { options: string[] } & Omit<ComponentProps<"select">, "name" | "id">) {
  return (
    <Field {...{ name, id, label, hint, error, success, required }}>
      {(f) => (
        <div className="relative">
          <select
            id={f.id}
            name={name}
            required={required}
            aria-invalid={f.invalid || undefined}
            aria-describedby={f.describedBy}
            className={cn(control, "h-13 appearance-none pr-11", className)}
            {...select}
          >
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 size-2 -translate-y-3/4 rotate-45 border-r border-b border-silver"
          />
        </div>
      )}
    </Field>
  );
}

type CheckboxProps = { name: string; id?: string; label: ReactNode; error?: string } & Omit<
  ComponentProps<"input">,
  "name" | "id" | "type"
>;

// Native checkbox, restyled: keyboard, form submit and validation stay the browser's.
export function Checkbox({ name, id = name, label, error, className, ...input }: CheckboxProps) {
  const messageId = error ? `${id}-message` : undefined;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 py-3 text-small text-silver has-disabled:cursor-not-allowed has-disabled:text-muted">
        <span className="relative mt-px flex size-5 flex-none">
          <input
            id={id}
            name={name}
            type="checkbox"
            aria-invalid={error ? true : undefined}
            aria-describedby={messageId}
            className="peer size-5 cursor-pointer appearance-none rounded-[6px] border-[1.5px] border-muted bg-onyx transition-colors checked:border-platinum checked:bg-platinum hover:border-platinum aria-invalid:border-cinnabar disabled:cursor-not-allowed disabled:border-shadow-grey disabled:bg-surface"
            {...input}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[3px] left-[7px] hidden h-2.5 w-1.5 rotate-45 border-r-2 border-b-2 border-onyx peer-checked:block"
          />
        </span>
        <span>{label}</span>
      </label>
      {error && (
        // Pulled up under the label text: the label's tap padding would otherwise push it towards the next row.
        <p id={messageId} className="-mt-3 pb-2 pl-8 text-nav text-cinnabar">
          {error}
        </p>
      )}
    </div>
  );
}

type ChoiceChipsProps = { name: string; legend: string; options: string[]; defaultChecked?: string[] };

// Multi-select as pills ("Interested in"). Each pill is a real checkbox.
export function ChoiceChips({ name, legend, options, defaultChecked = [] }: ChoiceChipsProps) {
  return (
    <fieldset className="flex flex-col gap-2.5">
      <legend className="mb-2.5 text-caption leading-none font-medium text-silver">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="relative">
            <input
              type="checkbox"
              name={name}
              value={option}
              defaultChecked={defaultChecked.includes(option)}
              className="peer absolute inset-0 cursor-pointer appearance-none rounded-full focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cinnabar"
            />
            <span className="pointer-events-none flex h-11 items-center rounded-full border border-platinum/25 px-4 text-nav leading-none font-medium text-platinum transition-colors peer-hover:border-platinum peer-checked:border-platinum peer-checked:bg-platinum peer-checked:text-onyx md:h-10">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
