import { humanizeServicePath } from "@/lib/cities";
import { MADRID_ROUTE_BY_PATH, MADRID_ROUTES } from "@/lib/madridRoutes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AlicanteLanding from "../AlicanteLanding";
import { SITE_ORIGIN } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string[] }> };
const baseUrl = SITE_ORIGIN;

export function generateStaticParams() { return MADRID_ROUTES.map((route) => ({ slug: route.path.split("/") })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params; const path = slug.join("/");
  if (!MADRID_ROUTE_BY_PATH.has(path)) return {};
  const isEs = locale === "es"; const name = humanizeServicePath(path, locale);
  const title = `${name} ${isEs ? "en" : "in"} Alicante | THEVULGO`;
  const description = isEs ? `${name} en Alicante con presupuesto claro, respuesta rápida y trabajo limpio. Servicio en Alicante ciudad. Solicita precio por WhatsApp.` : `${name} in Alicante with clear pricing, fast response and clean work. Service across Alicante city. Request a WhatsApp estimate.`;
  const url = `${baseUrl}/${locale}/alicante/${path}`;
  return { title, description, alternates: { canonical: url, languages: { es: `${baseUrl}/es/alicante/${path}`, en: `${baseUrl}/en/alicante/${path}`, "x-default": `${baseUrl}/es/alicante/${path}` } }, openGraph: { title, description, url, siteName: "THEVULGO", type: "website", locale: isEs ? "es_ES" : "en_GB" }, robots: { index: true, follow: true } };
}

export default async function AlicanteServicePage({ params }: Props) { const { locale, slug } = await params; const path = slug.join("/"); if (!MADRID_ROUTE_BY_PATH.has(path)) notFound(); return <AlicanteLanding locale={locale} servicePath={path} />; }
