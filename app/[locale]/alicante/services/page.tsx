import type { Metadata } from "next";
import AlicanteLanding from "../AlicanteLanding";

type Props = { params: Promise<{ locale: string }> };
const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs ? "Todos los servicios en Alicante | THEVULGO" : "All services in Alicante | THEVULGO";
  const description = isEs
    ? "Catálogo completo de servicios de manitas en Alicante: montaje, reparaciones, electricidad, fontanería y más."
    : "Complete handyman services catalogue in Alicante: mounting, repairs, electrical, plumbing and more.";
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/alicante/services`,
      languages: {
        es: `${baseUrl}/es/alicante/services`,
        en: `${baseUrl}/en/alicante/services`,
        "x-default": `${baseUrl}/es/alicante/services`,
      },
    },
  };
}

export default async function AlicanteServicesPage({ params }: Props) {
  const { locale } = await params;
  return <AlicanteLanding locale={locale} servicePath="services" />;
}
