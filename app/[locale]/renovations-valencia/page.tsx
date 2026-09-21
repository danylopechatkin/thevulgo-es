import { notFound } from "next/navigation";
import { RenovationHub } from "@/app/components/RenovationPages";
import { renovationJsonLd, renovationMetadata } from "@/lib/renovationSeo";

export const metadata = renovationMetadata("en");
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (locale !== "en") notFound();
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(renovationJsonLd(locale)) }}/><RenovationHub locale={locale}/></>;
}
