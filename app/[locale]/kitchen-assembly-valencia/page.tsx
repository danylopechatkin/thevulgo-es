import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KitchenCommercialPage from "@/app/components/KitchenCommercialPage";

export const metadata: Metadata = { title: "Kitchen Assembly Valencia | Clear Quote | THEVULGO", description: "Kitchen cabinet and worktop assembly in Valencia. Send your plan and photos for a clear quote by WhatsApp.", alternates: { canonical: "https://www.thevulgo.es/kitchen-assembly-valencia", languages: { en: "https://www.thevulgo.es/kitchen-assembly-valencia", es: "https://www.thevulgo.es/es/montaje-cocinas-valencia", "x-default": "https://www.thevulgo.es/kitchen-assembly-valencia" } } };
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== "en") notFound(); return <KitchenCommercialPage locale="en"/>; }
