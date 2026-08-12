import { humanizeServicePath } from "@/lib/cities";
import { MADRID_ROUTE_BY_PATH, MADRID_ROUTES } from "@/lib/madridRoutes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BarcelonaLanding from "../BarcelonaLanding";

type Props = { params: Promise<{ locale: string; slug: string[] }> };
const baseUrl = "https://www.thevulgo.es";

export function generateStaticParams() { return MADRID_ROUTES.map((route) => ({ slug: route.path.split("/") })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params; const path = slug.join("/");
  if (!MADRID_ROUTE_BY_PATH.has(path)) return {};
  const isEs = locale === "es"; const name = humanizeServicePath(path, locale);
  const title = `${name} ${isEs ? "en" : "in"} Barcelona | THEVULGO`;
  const description = isEs ? `${name} en Barcelona con presupuesto claro, respuesta rápida y trabajo limpio. Servicio en los 10 distritos. Solicita precio por WhatsApp.` : `${name} in Barcelona with clear pricing, fast response and clean work. Service across all 10 districts. Request a WhatsApp estimate.`;
  const url = `${baseUrl}/${locale}/barcelona/${path}`;
  return { title, description, alternates: { canonical: url, languages: { es: `${baseUrl}/es/barcelona/${path}`, en: `${baseUrl}/en/barcelona/${path}`, "x-default": `${baseUrl}/es/barcelona/${path}` } }, openGraph: { title, description, url, siteName: "THEVULGO", type: "website", locale: isEs ? "es_ES" : "en_GB" }, robots: { index: true, follow: true } };
}

export default async function BarcelonaServicePage({ params }: Props) { const { locale, slug } = await params; const path = slug.join("/"); if (!MADRID_ROUTE_BY_PATH.has(path)) notFound(); return <BarcelonaLanding locale={locale} servicePath={path} />; }
