import type { MetadataRoute } from "next";
import { indexable } from "@/lib/indexing";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: indexable ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
  };
}
