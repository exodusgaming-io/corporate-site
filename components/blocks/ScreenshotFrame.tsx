"use client";

import Image from "next/image";
import { useState } from "react";
import { CloseButton, Dialog } from "@/components/ui/Dialog";

type ScreenshotFrameProps = { src: string; alt: string; width: number; height: number; caption?: string };

// Product screenshot in a rounded frame; a click opens it full size.
export function ScreenshotFrame({ src, alt, width, height, caption }: ScreenshotFrameProps) {
  const [open, setOpen] = useState(false);
  return (
    <figure className="flex flex-col gap-4">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block overflow-hidden rounded-xl border border-line bg-surface"
        aria-label={`Enlarge: ${alt}`}
      >
        <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
        <span className="absolute inset-0 bg-[radial-gradient(50%_70%_at_90%_0%,rgb(121_0_4/0.45),transparent_70%)]" />
        <span className="absolute right-4 bottom-4 rounded-full bg-onyx/80 px-4 py-2.5 text-caption leading-none font-medium text-fg opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Enlarge
        </span>
      </button>
      {caption && <figcaption className="text-small text-fg-muted">{caption}</figcaption>}
      <Dialog open={open} onClose={() => setOpen(false)} label={alt} className="size-full bg-onyx/92">
        <div className="flex size-full flex-col gap-4 p-4 md:p-8">
          <div className="flex justify-end">
            <CloseButton onClick={() => setOpen(false)} />
          </div>
          <div className="relative min-h-0 flex-1" onClick={() => setOpen(false)}>
            <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      </Dialog>
    </figure>
  );
}
