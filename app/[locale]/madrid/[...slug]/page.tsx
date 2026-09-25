import { INDEXABLE_CITY_SERVICE_PATHS } from "@/lib/marketRoutes";
import { buildMarketMetadata, isKnownMarketServicePath } from "@/lib/marketSeo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MadridLanding from "../MadridLanding";

type Props = { params: Promise<{ locale: string; slug: string[] }> };
export function generateStaticParams() {
  return ["es", "en"].flatMap((locale) =>
    INDEXABLE_CITY_SERVICE_PATHS.map((path) => ({ locale, slug: path.split("/") }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params; const path = slug.join("/");
  if (!isKnownMarketServicePath(path)) return {};
  return buildMarketMetadata(locale, "madrid", path);
}

export default async function MadridServicePage({ params }: Props) { const { locale, slug } = await params; const path = slug.join("/"); if (!isKnownMarketServicePath(path)) notFound(); return <MadridLanding locale={locale} servicePath={path} />; }
