import { SITE_ORIGIN } from "@/lib/seo";

export type SiteLocale = "en" | "es";

export function localizedPath(locale: string, path = "") {
  const normalized = path.replace(/^\/+|\/+$/g, "");
  const suffix = normalized ? `/${normalized}` : "";
  return locale === "es" ? `/es${suffix}` : suffix || "/";
}

export function localizedUrl(locale: string, path = "") {
  return `${SITE_ORIGIN}${localizedPath(locale, path)}`;
}

export function localizedAlternates(path: string) {
  return {
    canonical: localizedUrl("en", path),
    languages: {
      en: localizedUrl("en", path),
      es: localizedUrl("es", path),
      "x-default": localizedUrl("en", path),
    },
  };
}
