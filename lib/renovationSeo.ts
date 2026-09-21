import type { Metadata } from "next";
import { SITE_ORIGIN } from "@/lib/seo";
import { localeKey, renovationHubPath, type RenovationCategory, type RenovationService } from "@/lib/renovationCatalog";

export function renovationMetadata(locale: string, category?: RenovationCategory, service?: RenovationService): Metadata {
  const key = localeKey(locale);
  const hub = renovationHubPath(locale);
  const path = service ? `${hub}/${category!.slug[key]}/${service.slug[key]}` : category ? `${hub}/${category.slug[key]}` : hub;
  const esPath = service ? `/es/reformas-valencia/${category!.slug.es}/${service.slug.es}` : category ? `/es/reformas-valencia/${category.slug.es}` : "/es/reformas-valencia";
  const enPath = service ? `/en/renovations-valencia/${category!.slug.en}/${service.slug.en}` : category ? `/en/renovations-valencia/${category.slug.en}` : "/en/renovations-valencia";
  const title = service ? `${service.title[key]} ${key === "es" ? "en Valencia" : "in Valencia"} | THEVULGO` : category ? `${category.title[key]} | THEVULGO` : key === "es" ? "Reformas y reparaciones en Valencia | THEVULGO" : "Renovations and repairs in Valencia | THEVULGO";
  const description = service?.summary[key] ?? category?.intro[key] ?? (key === "es" ? "Reformas y reparaciones en Valencia: baños, cocinas, pintura, Pladur, electricidad, fontanería, terrazas, casas y proyectos integrales." : "Renovations and repairs in Valencia: bathrooms, kitchens, painting, drywall, electrics, plumbing, terraces, houses and full projects.");
  return { title, description, alternates: { canonical: `${SITE_ORIGIN}${path}`, languages: { es: `${SITE_ORIGIN}${esPath}`, en: `${SITE_ORIGIN}${enPath}`, "x-default": `${SITE_ORIGIN}${esPath}` } }, robots: { index: true, follow: true }, openGraph: { title, description, url: `${SITE_ORIGIN}${path}`, siteName: "THEVULGO", locale: key === "es" ? "es_ES" : "en_GB", type: "website" } };
}

export function renovationJsonLd(locale: string, category?: RenovationCategory, service?: RenovationService) {
  const key = localeKey(locale);
  const hub = renovationHubPath(locale);
  const pagePath = service ? `${hub}/${category!.slug[key]}/${service.slug[key]}` : category ? `${hub}/${category.slug[key]}` : hub;
  const crumbs = [{ name: key === "es" ? "Inicio" : "Home", path: `/${locale}` }, { name: key === "es" ? "Reformas" : "Renovations", path: hub }, ...(category ? [{ name: category.shortTitle[key], path: `${hub}/${category.slug[key]}` }] : []), ...(service ? [{ name: service.title[key], path: pagePath }] : [])];
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: service?.title[key] ?? category?.title[key] ?? (key === "es" ? "Reformas y reparaciones en Valencia" : "Renovations and repairs in Valencia"), description: service?.summary[key] ?? category?.intro[key], url: `${SITE_ORIGIN}${pagePath}`, areaServed: { "@type": "City", name: "Valencia" }, provider: { "@type": "HomeAndConstructionBusiness", name: "THEVULGO", telephone: "+34610076942", url: SITE_ORIGIN } },
    { "@type": "BreadcrumbList", itemListElement: crumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${SITE_ORIGIN}${item.path}` })) },
  ] };
}
