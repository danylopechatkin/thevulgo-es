import type { Metadata } from "next";
import HomeClient from "../HomeClient";

type Props = { params: Promise<{ locale: string }> };
const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs ? "Manitas en Madrid | Montaje y Reparaciones | THEVULGO" : "Handyman in Madrid | Assembly and Repairs | THEVULGO";
  const description = isEs ? "Servicios de manitas en Madrid: montaje de TV y muebles, electricidad y fontanería básica, pladur, reparaciones, puertas, baño, cocina y más." : "Handyman services in Madrid: TV and furniture mounting, basic electrical and plumbing, drywall, repairs, doors, bathroom, kitchen and more.";
  return { title, description, alternates: { canonical: `${baseUrl}/${locale}/madrid`, languages: { es: `${baseUrl}/es/madrid`, en: `${baseUrl}/en/madrid`, "x-default": `${baseUrl}/es/madrid` } }, openGraph: { title, description, url: `${baseUrl}/${locale}/madrid`, siteName: "THEVULGO", type: "website", locale: isEs ? "es_ES" : "en_GB" } };
}

export default async function MadridPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const url = `${baseUrl}/${locale}/madrid`;
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "THEVULGO",
    url,
    telephone: "+34610076942",
    priceRange: "€€",
    address: { "@type": "PostalAddress", addressLocality: "Madrid", addressRegion: "Madrid", addressCountry: "ES" },
    areaServed: { "@type": "City", name: "Madrid" },
    description: isEs ? "Servicios profesionales de manitas en Madrid con precio claro y acabado limpio." : "Professional handyman services in Madrid with clear pricing and a clean finish.",
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} /><HomeClient city="Madrid" market="madrid" /></>;
}
