import type { Metadata } from "next";
import AlicanteLanding from "./AlicanteLanding";

type Props = { params: Promise<{ locale: string }> };
const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs ? "Manitas en Alicante | Montaje y Reparaciones | THEVULGO" : "Handyman in Alicante | Assembly and Repairs | THEVULGO";
  const description = isEs ? "Servicios de manitas en Alicante: montaje de TV y muebles, electricidad y fontanería básica, pladur, reparaciones, puertas, baño, cocina y más." : "Handyman services in Alicante: TV and furniture mounting, basic electrical and plumbing, drywall, repairs, doors, bathroom, kitchen and more.";
  return { title, description, alternates: { canonical: `${baseUrl}/${locale}/alicante`, languages: { es: `${baseUrl}/es/alicante`, en: `${baseUrl}/en/alicante`, "x-default": `${baseUrl}/es/alicante` } }, openGraph: { title, description, url: `${baseUrl}/${locale}/alicante`, siteName: "THEVULGO", type: "website", locale: isEs ? "es_ES" : "en_GB" } };
}

export default async function AlicantePage({ params }: Props) { const { locale } = await params; return <AlicanteLanding locale={locale} />; }
