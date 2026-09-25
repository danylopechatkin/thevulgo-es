import type { Metadata } from "next";
import { buildMarketMetadata } from "@/lib/marketSeo";
import MadridLanding from "../MadridLanding";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMarketMetadata(locale, "madrid", "services");
}

export default async function MadridServicesPage({ params }: Props) {
  const { locale } = await params;
  return <MadridLanding locale={locale} servicePath="services" />;
}
