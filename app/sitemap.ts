import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thevulgo.es";
  const locales = ["es", "en"];

  const categoryPages = [
    "services",
    "services/tv-mounting",
    "services/furniture",
    "services/electrical",
    "services/plumbing",
    "services/drywall",
    "services/repairs",
    "services/doors",
    "services/smart-home",
    "services/kitchen",
    "services/bathroom",
    "services/move-in",
    "services/exterior",
  ];

  const seoServicePages = [
    "montaje-tv-valencia",
    "large-tv-mounting-valencia",
    "instalacion-estanterias-valencia",
    "montaje-proyector-valencia",
    "ocultar-cables-valencia",
    "instalar-soundbar-valencia",

    "montaje-muebles-ikea-valencia",
    "montaje-armario-valencia",
    "montaje-cama-valencia",
    "montaje-comodas-cajoneras-valencia",
    "montaje-estanterias-valencia",
    "montaje-muebles-tv-multimedia-valencia",
    "montaje-escritorios-valencia",
    "montaje-mesas-comedor-valencia",
    "montaje-aparadores-muebles-auxiliares-valencia",
    "montaje-sofas-modulares-valencia",
    "fijacion-muebles-pared-valencia",
    "preparacion-muebles-mudanza-valencia",

    "instalacion-lampara-valencia",
    "instalacion-lamparas-colgantes-valencia",
    "instalacion-apliques-pared-valencia",
    "cambio-interruptor-valencia",
    "cambio-enchufe-valencia",
    "montaje-electrico-basico-valencia",
    "instalacion-tira-led-valencia",
    "cambio-extractor-valencia",
    "cambio-luz-bano-valencia",
    "cambio-lampara-techo-valencia",
  ];

  const pages: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    pages.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: locale === "es" ? 1 : 0.9,
    });

    for (const page of categoryPages) {
      pages.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "services" ? 0.9 : 0.8,
      });
    }

    for (const page of seoServicePages) {
      pages.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: locale === "es" ? 0.85 : 0.75,
      });
    }
  }

  return pages;
}