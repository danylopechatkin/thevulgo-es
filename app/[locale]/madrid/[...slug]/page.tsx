import { humanizeServicePath } from "@/lib/cities";
import { MADRID_ROUTE_BY_PATH, MADRID_ROUTES } from "@/lib/madridRoutes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MadridLanding from "../MadridLanding";
import { SITE_ORIGIN } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string[] }> };
const baseUrl = SITE_ORIGIN;

export function generateStaticParams() { return MADRID_ROUTES.map((route) => ({ slug: route.path.split("/") })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params; const path = slug.join("/");
  if (!MADRID_ROUTE_BY_PATH.has(path)) return {};
  const isEs = locale === "es"; const name = humanizeServicePath(path, locale);
  const title = `${name} ${isEs ? "en" : "in"} Madrid | THEVULGO`;
  const description = isEs ? `${name} en Madrid con presupuesto claro, respuesta rápida y trabajo limpio. Servicio en los 21 distritos. Solicita precio por WhatsApp.` : `${name} in Madrid with clear pricing, fast response and clean work. Service across all 21 districts. Request a WhatsApp estimate.`;
  const url = `${baseUrl}/${locale}/madrid/${path}`;
  return { title, description, alternates: { canonical: url, languages: { es: `${baseUrl}/es/madrid/${path}`, en: `${baseUrl}/en/madrid/${path}`, "x-default": `${baseUrl}/es/madrid/${path}` } }, openGraph: { title, description, url, siteName: "THEVULGO", type: "website", locale: isEs ? "es_ES" : "en_GB" }, robots: { index: true, follow: true } };
}

export default async function MadridServicePage({ params }: Props) { const { locale, slug } = await params; const path = slug.join("/"); if (!MADRID_ROUTE_BY_PATH.has(path)) notFound(); return <MadridLanding locale={locale} servicePath={path} />; }
