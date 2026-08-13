import type { Metadata } from "next";
import BarcelonaLanding from "../BarcelonaLanding";

type Props = { params: Promise<{ locale: string }> };
const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs ? "Todos los servicios en Barcelona | THEVULGO" : "All services in Barcelona | THEVULGO";
  const description = isEs
    ? "Catálogo completo de servicios de manitas en Barcelona: montaje, reparaciones, electricidad, fontanería y más."
    : "Complete handyman services catalogue in Barcelona: mounting, repairs, electrical, plumbing and more.";
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/barcelona/services`,
      languages: {
        es: `${baseUrl}/es/barcelona/services`,
        en: `${baseUrl}/en/barcelona/services`,
        "x-default": `${baseUrl}/es/barcelona/services`,
      },
    },
  };
}

export default async function BarcelonaServicesPage({ params }: Props) {
  const { locale } = await params;
  return <BarcelonaLanding locale={locale} servicePath="services" />;
}
