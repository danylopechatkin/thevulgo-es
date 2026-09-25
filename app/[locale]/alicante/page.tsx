import type { Metadata } from "next";
import { buildMarketMetadata } from "@/lib/marketSeo";
import { localizedUrl } from "@/lib/technicalRoutes";
import HomeClient from "../HomeClient";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMarketMetadata(locale, "alicante");
}

export default async function AlicantePage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const url = localizedUrl(locale, "alicante");
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Servicios para hogar y negocio en Alicante" : "Home and business services in Alicante",
    url,
    areaServed: { "@type": "City", name: "Alicante" },
    provider: { "@type": "Organization", name: "THEVULGO", url: "https://www.thevulgo.es" },
    description: isEs ? "Servicios profesionales de manitas en Alicante con precio claro y acabado limpio." : "Professional handyman services in Alicante with clear pricing and a clean finish.",
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} /><HomeClient city="Alicante" market="alicante" locale={locale} /></>;
}
