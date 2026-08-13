import type { Metadata } from "next";
import MadridLanding from "../MadridLanding";

type Props = { params: Promise<{ locale: string }> };
const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs ? "Todos los servicios en Madrid | THEVULGO" : "All services in Madrid | THEVULGO";
  const description = isEs
    ? "Catálogo completo de servicios de manitas en Madrid: montaje, reparaciones, electricidad, fontanería y más."
    : "Complete handyman services catalogue in Madrid: mounting, repairs, electrical, plumbing and more.";
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/madrid/services`,
      languages: {
        es: `${baseUrl}/es/madrid/services`,
        en: `${baseUrl}/en/madrid/services`,
        "x-default": `${baseUrl}/es/madrid/services`,
      },
    },
  };
}

export default async function MadridServicesPage({ params }: Props) {
  const { locale } = await params;
  return <MadridLanding locale={locale} servicePath="services" />;
}
