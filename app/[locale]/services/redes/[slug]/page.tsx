import { notFound } from "next/navigation";
import TechnicalServiceLanding from "@/app/components/technical/TechnicalServiceLanding";
import { getTechnicalLeaf, getTechnicalLeaves } from "@/lib/securityNetworkCatalog";
import { technicalServiceMetadata } from "@/lib/technicalMetadata";

export const generateStaticParams = () => getTechnicalLeaves("networking").flatMap((item) => ["en", "es"].map((locale) => ({ locale, slug: item.slug })));
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) { const { locale, slug } = await params; const item = getTechnicalLeaf("networking", slug); return item ? technicalServiceMetadata(item, locale) : {}; }
export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) { const { locale, slug } = await params; const item = getTechnicalLeaf("networking", slug); if (!item) notFound(); return <TechnicalServiceLanding service={item} locale={locale} />; }
