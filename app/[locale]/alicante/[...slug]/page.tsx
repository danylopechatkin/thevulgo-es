import { INDEXABLE_CITY_SERVICE_PATHS } from "@/lib/marketRoutes";
import { buildMarketMetadata, isKnownMarketServicePath } from "@/lib/marketSeo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AlicanteLanding from "../AlicanteLanding";

type Props = { params: Promise<{ locale: string; slug: string[] }> };
export function generateStaticParams() {
  return ["es", "en"].flatMap((locale) =>
    INDEXABLE_CITY_SERVICE_PATHS.filter((path) => isKnownMarketServicePath(path, "alicante")).map((path) => ({ locale, slug: path.split("/") }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params; const path = slug.join("/");
  if (!isKnownMarketServicePath(path, "alicante")) return {};
  return buildMarketMetadata(locale, "alicante", path);
}

export default async function AlicanteServicePage({ params }: Props) { const { locale, slug } = await params; const path = slug.join("/"); if (!isKnownMarketServicePath(path, "alicante")) notFound(); return <AlicanteLanding locale={locale} servicePath={path} />; }
