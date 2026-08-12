import type { Metadata } from "next";
import BarcelonaLanding from "./BarcelonaLanding";

type Props = { params: Promise<{ locale: string }> };
const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs ? "Manitas en Barcelona | Montaje y Reparaciones | THEVULGO" : "Handyman in Barcelona | Assembly and Repairs | THEVULGO";
  const description = isEs ? "Servicios de manitas en Barcelona: montaje de TV y muebles, electricidad y fontanería básica, pladur, reparaciones, puertas, baño, cocina y más." : "Handyman services in Barcelona: TV and furniture mounting, basic electrical and plumbing, drywall, repairs, doors, bathroom, kitchen and more.";
  return { title, description, alternates: { canonical: `${baseUrl}/${locale}/barcelona`, languages: { es: `${baseUrl}/es/barcelona`, en: `${baseUrl}/en/barcelona`, "x-default": `${baseUrl}/es/barcelona` } }, openGraph: { title, description, url: `${baseUrl}/${locale}/barcelona`, siteName: "THEVULGO", type: "website", locale: isEs ? "es_ES" : "en_GB" } };
}

export default async function BarcelonaPage({ params }: Props) { const { locale } = await params; return <BarcelonaLanding locale={locale} />; }
