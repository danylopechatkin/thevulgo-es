import type { Metadata } from "next";
import type { TechnicalLeaf } from "@/lib/securityNetworkCatalog";
import { localizedUrl } from "@/lib/technicalRoutes";

export function technicalServiceMetadata(service: TechnicalLeaf, locale: string): Metadata {
  const language = locale === "es" ? "es" : "en";
  const path = `${service.parentPath}/${service.slug}`;
  const en = localizedUrl("en", path);
  const es = localizedUrl("es", path);
  const canonical = language === "es" ? es : en;
  return {
    title: service.title[language],
    description: service.description[language],
    alternates: { canonical, languages: { en, es, "x-default": en } },
    robots: { index: service.indexable, follow: true },
    openGraph: {
      title: service.title[language],
      description: service.description[language],
      url: canonical,
      siteName: "THEVULGO",
      locale: language === "es" ? "es_ES" : "en_GB",
      type: "website",
    },
    twitter: { card: "summary", title: service.title[language], description: service.description[language] },
  };
}
