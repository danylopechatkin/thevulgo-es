import type { Metadata } from "next";
import { buildMarketMetadata } from "@/lib/marketSeo";
import AlicanteLanding from "../AlicanteLanding";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMarketMetadata(locale, "alicante", "services");
}

export default async function AlicanteServicesPage({ params }: Props) {
  const { locale } = await params;
  return <AlicanteLanding locale={locale} servicePath="services" />;
}
