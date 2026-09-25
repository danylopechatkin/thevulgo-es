import type { Metadata } from "next";
import { buildMarketMetadata } from "@/lib/marketSeo";
import BarcelonaLanding from "../BarcelonaLanding";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMarketMetadata(locale, "barcelona", "services");
}

export default async function BarcelonaServicesPage({ params }: Props) {
  const { locale } = await params;
  return <BarcelonaLanding locale={locale} servicePath="services" />;
}
