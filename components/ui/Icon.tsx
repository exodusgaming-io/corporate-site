import Image from "next/image";
import type { IconName } from "./icon-names";

type IconProps = { name: IconName; size?: number; className?: string };

// Decorative brand icon; give the text next to it the meaning.
export function Icon({ name, size = 32, className }: IconProps) {
  return <Image src={`/brand/icons/${name}.svg`} alt="" width={size} height={size} className={className} />;
}
