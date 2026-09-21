import { notFound, permanentRedirect } from "next/navigation";
import { RenovationCategoryPage, RenovationServicePage } from "@/app/components/RenovationPages";
import { findRenovationCategory, findRenovationService, RENOVATION_CATEGORIES } from "@/lib/renovationCatalog";
import { renovationJsonLd, renovationMetadata } from "@/lib/renovationSeo";

type Props = { params: Promise<{ locale: string; slug: string[] }> };
export function generateStaticParams() { return RENOVATION_CATEGORIES.flatMap((category) => [{ locale: "en", slug: [category.slug.en] }, ...category.services.filter((service) => !service.existingPath).map((service) => ({ locale: "en", slug: [category.slug.en, service.slug.en] }))]); }
export async function generateMetadata({ params }: Props) { const { locale, slug } = await params; const category = findRenovationCategory(locale, slug[0]); const found = slug[1] ? findRenovationService(locale, slug[0], slug[1]) : undefined; return renovationMetadata(locale, category, found?.service); }
export default async function Page({ params }: Props) { const { locale, slug } = await params; if (locale !== "en" || slug.length > 2) notFound(); const category = findRenovationCategory(locale, slug[0]); if (!category) notFound(); const found = slug[1] ? findRenovationService(locale, slug[0], slug[1]) : undefined; if (slug[1] && !found) notFound(); if (found?.service.existingPath) permanentRedirect(`/${locale}/${found.service.existingPath}`); return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(renovationJsonLd(locale, category, found?.service)) }}/>{found ? <RenovationServicePage locale={locale} category={category} service={found.service}/> : <RenovationCategoryPage locale={locale} category={category}/>}</>; }
