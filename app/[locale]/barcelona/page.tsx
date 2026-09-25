import type { Metadata } from "next";
import { buildMarketMetadata } from "@/lib/marketSeo";
import { localizedUrl } from "@/lib/technicalRoutes";
import HomeClient from "../HomeClient";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMarketMetadata(locale, "barcelona");
}

export default async function BarcelonaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const url = localizedUrl(locale, "barcelona");
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Servicios para hogar y negocio en Barcelona" : "Home and business services in Barcelona",
    url,
    areaServed: { "@type": "City", name: "Barcelona" },
    provider: { "@type": "Organization", name: "THEVULGO", url: "https://www.thevulgo.es" },
    description: isEs ? "Servicios profesionales de manitas en Barcelona con precio claro y acabado limpio." : "Professional handyman services in Barcelona with clear pricing and a clean finish.",
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} /><HomeClient city="Barcelona" market="barcelona" locale={locale} /></>;
}
