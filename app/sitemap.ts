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
  // MAIN SEO
  "handyman-valencia",

  // TV & HOME CINEMA
  "montaje-tv-valencia",
  "montaje-tv-grande-valencia",
  "colgar-tv-valencia",
  "instalacion-soporte-tv-valencia",
  "instalacion-estanterias-valencia",
  "montaje-proyector-valencia",
  "instalacion-proyectores-valencia",
  "instalar-proyector-techo-valencia",
  "home-cinema-valencia",
  "ocultar-cables-valencia",
  "instalar-soundbar-valencia",

  // DRYWALL
  "instalador-pladur-valencia",
  "techos-pladur-valencia",
  "paredes-pladur-valencia",

  // FURNITURE
  "montaje-muebles-ikea-valencia",
  "montaje-armario-valencia",
  "montaje-armarios-valencia",
  "instalacion-armarios-valencia",
  "armarios-empotrados-valencia",
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

  // ELECTRICAL
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

  const nestedServicePages = [
    // DRYWALL
    "services/drywall/small-hole-repair",
    "services/drywall/medium-wall-patching",
    "services/drywall/large-drywall-patch",
    "services/drywall/anchor-hole-repair",
    "services/drywall/wall-touch-up-prep",
    "services/drywall/drywall-cutout-repair",
    "services/drywall/crack-filling",
    "services/drywall/corner-repair",
    "services/drywall/wall-levelling-prep",
    "services/drywall/skim-coat-area-repair",
    "services/drywall/tv-bracket-wall-repair",
    "services/drywall/shelf-removal-wall-repair",
    "services/drywall/door-handle-wall-damage-repair",
    "services/drywall/ceiling-spot-patching",
    "services/drywall/cable-hole-closing",
    "services/drywall/wall-drilling-service",
    "services/drywall/concrete-wall-drilling",
    "services/drywall/drywall-mounting-prep",
    "services/drywall/patch-and-sand-finish",
    "services/drywall/multiple-wall-repairs",

    // REPAIRS
    "services/repairs/silicone-renewal",
    "services/repairs/sealing-gap-filling",
    "services/repairs/minor-wall-fixes",
    "services/repairs/door-adjustment",
    "services/repairs/loose-handle-fixing",
    "services/repairs/curtain-rail-adjustments",
    "services/repairs/wall-anchor-installation",
    "services/repairs/shelf-refixing",
    "services/repairs/mirror-remounting",
    "services/repairs/furniture-touch-up-fixes",
    "services/repairs/bathroom-accessory-fixing",
    "services/repairs/socket-cover-straightening",
    "services/repairs/cabinet-door-alignment",
    "services/repairs/small-drilling-jobs",
    "services/repairs/move-out-touch-ups",
    "services/repairs/kitchen-minor-fixes",
    "services/repairs/multiple-small-repairs",
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

    for (const page of nestedServicePages) {
      pages.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return pages;
}