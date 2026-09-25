import type { Metadata } from "next";
import { buildMarketMetadata } from "@/lib/marketSeo";
import { localizedUrl } from "@/lib/technicalRoutes";
import HomeClient from "../HomeClient";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMarketMetadata(locale, "madrid");
}

export default async function MadridPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const url = localizedUrl(locale, "madrid");
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Servicios para hogar y negocio en Madrid" : "Home and business services in Madrid",
    url,
    areaServed: { "@type": "City", name: "Madrid" },
    provider: { "@type": "Organization", name: "THEVULGO", url: "https://www.thevulgo.es" },
    description: isEs ? "Servicios profesionales de manitas en Madrid con precio claro y acabado limpio." : "Professional handyman services in Madrid with clear pricing and a clean finish.",
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} /><HomeClient city="Madrid" market="madrid" locale={locale} /></>;
}
