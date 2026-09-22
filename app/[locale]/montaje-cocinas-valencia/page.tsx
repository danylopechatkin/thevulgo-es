import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KitchenCommercialPage from "@/app/components/KitchenCommercialPage";

export const metadata: Metadata = { title: "Montaje de cocinas Valencia | THEVULGO", description: "Montaje de módulos, frentes, encimeras y accesorios de cocina en Valencia. Envía plano y fotos para recibir un presupuesto claro.", alternates: { canonical: "https://www.thevulgo.es/es/montaje-cocinas-valencia", languages: { en: "https://www.thevulgo.es/kitchen-assembly-valencia", es: "https://www.thevulgo.es/es/montaje-cocinas-valencia", "x-default": "https://www.thevulgo.es/kitchen-assembly-valencia" } } };
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== "es") notFound(); return <KitchenCommercialPage locale="es"/>; }
