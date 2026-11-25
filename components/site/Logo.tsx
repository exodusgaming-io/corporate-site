import Image from "next/image";
import Link from "next/link";

// Wordmark linking home; 18px tall like the mockup header.
export function Logo() {
  return (
    <Link href="/" aria-label="Exodus home" className="flex flex-none py-[13px]">
      <Image src="/brand/exodus-logo.svg" alt="Exodus" width={99} height={18} loading="eager" />
    </Link>
  );
}
