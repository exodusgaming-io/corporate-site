// Joins class names, skipping empty ones. Callers don't pass conflicting utilities, so no merging is needed.
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
