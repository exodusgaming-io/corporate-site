import { PageView, pageMetadata, pageParams } from "@/components/site/PageView";

// Every English page, from content/en/. Paths not in the content are not built (404).
export const dynamicParams = false;

export function generateStaticParams() {
  return pageParams("en");
}

export async function generateMetadata({ params }: PageProps<"/[[...path]]">) {
  const { path } = await params;
  return pageMetadata("en", path);
}

export default async function Page({ params }: PageProps<"/[[...path]]">) {
  const { path } = await params;
  return <PageView lang="en" segments={path} />;
}
