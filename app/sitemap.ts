import type { MetadataRoute } from "next";
import { guides } from "./[locale]/guias/guides-data";
import { MADRID_ROUTES } from "@/lib/madridRoutes";

const baseUrl = "https://www.thevulgo.es";

const locales = ["es", "en"] as const;

/**
 * Главные страницы категорий.
 * Все пути здесь указываются без начального "/".
 */
const categoryPages = [
  "services",
  "services/aire-acondicionado",

  // Main service categories
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

  // Security and networking
  "services/alarmas",
  "services/cctv",
  "services/control-de-acceso",
  "services/redes",
  "services/seguridad-comercial",
  "services/starlink",

] as const;

/**
 * SEO-страницы, которые находятся непосредственно внутри:
 *
 * app/[locale]/...
 *
 * Например:
 * app/[locale]/handyman-valencia/page.tsx
 */
const rootSeoPages = [
  // Legal
  "privacy",

  // Handyman
  "handyman-valencia",
  "handyman-benimaclet",
  "handyman-russafa",
  "handyman-campanar",
  "handyman-patraix",
  "handyman-mislata",
  "handyman-paterna",

  // Electrical
  "electricista-valencia",
  "instalar-lampara-valencia",
  "instalacion-lampara-valencia",
  "instalacion-lamparas-colgantes-valencia",
  "cambio-interruptor-valencia",
  "cambio-enchufe-valencia",
  "cambio-lampara-techo-valencia",

  // Pictures and shelves
  "colgar-cuadros-valencia",
  "colgar-espejos-valencia",
  "instalacion-barras-cortina-valencia",

  // TV mounting and home cinema
  "montaje-tv-valencia",
  "montaje-tv-grande-valencia",
  "colgar-tv-valencia",
  "instalacion-soporte-tv-valencia",
  "montaje-proyector-valencia",
  "instalacion-proyectores-valencia",
  "instalar-proyector-techo-valencia",
  "home-cinema-valencia",
  "ocultar-cables-valencia",

  // TV sizes and special models
  "montaje-tv-65-pulgadas-valencia",
  "montaje-tv-75-pulgadas-valencia",
  "montaje-tv-85-pulgadas-valencia",
  "montaje-tv-98-pulgadas-valencia",
  "montaje-tv-samsung-frame-valencia",
  "instalar-samsung-frame-valencia",
  "instalar-tv-pared-valencia",
  "instalador-tv-valencia",

  // Pladur
  "pladur-valencia",
  "falsos-techos-valencia",
  "techos-pladur-valencia",
  "instalacion-pladur-valencia",
  "instalador-pladur-valencia",
  "contratista-pladur-valencia",
  "reformas-pladur-valencia",
  "empresa-pladur-valencia",
  "presupuesto-pladur-valencia",
  "falso-techo-pladur-valencia",
  "reparacion-pladur-valencia",
  "techo-registrable-valencia",
  "pintar-pladur-valencia",
  "tabiques-pladur-valencia",

  // Furniture assembly
  "montaje-muebles-valencia",
  "montaje-muebles-ikea-valencia",
  "montaje-armario-valencia",
  "instalacion-armarios-valencia",

  // Guides
  "guias",
] as const;

/**
 * SEO-страницы, которые находятся внутри:
 *
 * app/[locale]/services/...
 *
 * Поэтому в каждом пути обязательно должен быть префикс "services/".
 */
const serviceSeoPages = [
  // Toldos
  "services/instalacion-toldos-valencia",
  "services/montaje-toldos-valencia",
  "services/instalar-toldo-valencia",
  "services/instalador-toldos-valencia",
  "services/manitas-instalacion-toldos-valencia",
  "services/instalacion-toldo-manual-valencia",
  "services/instalacion-toldo-electrico-valencia",
  "services/instalacion-toldo-terraza-valencia",
  "services/instalacion-toldo-balcon-valencia",
  "services/instalacion-toldo-patio-valencia",
  "services/instalacion-toldo-leroy-merlin-valencia",
  "services/montaje-toldo-leroy-merlin-valencia",

  // Rental property preparation
  "services/reparacion-piso-alquiler-valencia",
  "services/reparaciones-antes-entrega-piso-valencia",
  "services/reparacion-paredes-valencia",
  "services/retoques-pintura-valencia",
  "services/reparacion-agujeros-pared-valencia",
  "services/fin-contrato-alquiler-valencia",
  "services/devolver-piso-propietario-valencia",
  "services/puesta-a-punto-piso-valencia",
  "services/puesta-a-punto-vivienda-valencia",
  "services/pequenas-reparaciones-valencia",

  // Airbnb
  "services/mantenimiento-airbnb-valencia",
  "services/reparaciones-airbnb-valencia",
  "services/handyman-airbnb-valencia",

  // Ceiling fans
  "services/instalacion-ventilador-techo-valencia",
  "services/ventilador-techo-con-luz",
  "services/cambio-lampara-por-ventilador",
  "services/reemplazo-ventilador-techo",
  "services/instalacion-ventilador-control-remoto",
  "services/instalacion-ventilador-smart",
] as const;

/**
 * Вложенные страницы внутри стандартных категорий services.
 */
const nestedServicePages = [
  // Electrical
  "services/electrical/instalacion-apliques-pared-valencia",
  "services/electrical/montaje-electrico-basico-valencia",
  "services/electrical/instalacion-tira-led-valencia",
  "services/electrical/cambio-extractor-valencia",
  "services/electrical/cambio-luz-bano-valencia",

  // Furniture
  "services/furniture/instalacion-estanterias-valencia",
  "services/furniture/montaje-cama-valencia",
  "services/furniture/montaje-comodas-cajoneras-valencia",
  "services/furniture/montaje-estanterias-valencia",
  "services/furniture/montaje-muebles-tv-multimedia-valencia",
  "services/furniture/montaje-escritorios-valencia",
  "services/furniture/montaje-mesas-comedor-valencia",
  "services/furniture/montaje-aparadores-muebles-auxiliares-valencia",
  "services/furniture/montaje-sofas-modulares-valencia",
  "services/furniture/fijacion-muebles-pared-valencia",
  "services/furniture/preparacion-muebles-mudanza-valencia",

  // TV mounting
  "services/tv-mounting/instalar-soundbar-valencia",

  // Drywall
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

  // Repairs
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

  // Doors
  "services/doors/door-alignment-adjustment",
  "services/doors/handle-replacement",
  "services/doors/loose-handle-fixing",
  "services/doors/latch-adjustment",
  "services/doors/hinge-tightening",
  "services/doors/cambio-bisagras-puerta",
  "services/doors/ajuste-cierrapuertas",
  "services/doors/instalacion-tope-puerta",
  "services/doors/cambio-bombin-cerradura",
  "services/doors/herrajes-puertas-interiores",
  "services/doors/reparacion-puertas-varios",
  "services/doors/door-seal-replacement",

  // Exterior
  "services/exterior/ajuste-accesorios-pergola-sombra",
  "services/exterior/ajuste-porton-exterio",
  "services/exterior/instalacion-soportes-exteriores",
  "services/exterior/montaje-pared-exterior",
  "services/exterior/reparacion-ajuste-vallas",
  "services/exterior/reparacion-herrajes-exterior",
  "services/exterior/retoques-fachada",
  "services/exterior/sellado-impermeable-exterior",

  // Bathroom
  "services/bathroom/cabinet-installation-valencia",
  "services/bathroom/mirror-installation-valencia",
  "services/bathroom/mirror-cabinet-fitting-valencia",
  "services/bathroom/towel-holder-installation-valencia",
  "services/bathroom/toilet-paper-holder-installation-valencia",
  "services/bathroom/shelf-installation-valencia",
  "services/bathroom/vanity-unit-installation-valencia",
  "services/bathroom/vanity-light-installation",
  "services/bathroom/shower-head-replacement",
  "services/bathroom/shower-hose-replacement",
  "services/bathroom/accessory-installation",
  "services/bathroom/silicone-renewal",
  "services/bathroom/seal-gap-fixing",
  "services/bathroom/cabinet-door-alignment",
  "services/bathroom/wall-mounting",
  "services/bathroom/glass-shelf-installation",
  "services/bathroom/multiple-installation-tasks",
] as const;

type SitemapOptions = {
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/**
 * Добавляет массив маршрутов в sitemap.
 */
function addRoutes(
  sitemap: MetadataRoute.Sitemap,
  locale: (typeof locales)[number],
  routes: readonly string[],
  options: SitemapOptions,
) {
  for (const route of routes) {
    sitemap.push({
      url: `${baseUrl}/${locale}/${route}`,
      changeFrequency: options.changeFrequency,
      priority: options.priority,
    });
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    /**
     * Homepage
     */
    pages.push({
      url: `${baseUrl}/${locale}`,
      changeFrequency: "weekly",
      priority: locale === "es" ? 1 : 0.9,
    });

    pages.push({
      url: `${baseUrl}/${locale}/madrid`,
      changeFrequency: "weekly",
      priority: locale === "es" ? 0.95 : 0.85,
    });

    addRoutes(
      pages,
      locale,
      MADRID_ROUTES.map((route) => `madrid/${route.path}`),
      { changeFrequency: "monthly", priority: locale === "es" ? 0.8 : 0.7 },
    );

    pages.push({
      url: `${baseUrl}/${locale}/barcelona`,
      changeFrequency: "weekly",
      priority: locale === "es" ? 0.95 : 0.85,
    });

    addRoutes(
      pages,
      locale,
      MADRID_ROUTES.map((route) => `barcelona/${route.path}`),
      { changeFrequency: "monthly", priority: locale === "es" ? 0.8 : 0.7 },
    );

    pages.push({
      url: `${baseUrl}/${locale}/alicante`,
      changeFrequency: "weekly",
      priority: locale === "es" ? 0.95 : 0.85,
    });

    addRoutes(
      pages,
      locale,
      MADRID_ROUTES.map((route) => `alicante/${route.path}`),
      { changeFrequency: "monthly", priority: locale === "es" ? 0.8 : 0.7 },
    );

    /**
     * Category pages
     */
    addRoutes(
      pages,
      locale,
      categoryPages,
      {
        changeFrequency: "weekly",
        priority: locale === "es" ? 0.9 : 0.8,
      },
    );

    /**
     * Root SEO pages
     */
    addRoutes(
      pages,
      locale,
      rootSeoPages,
      {
        changeFrequency: "monthly",
        priority: locale === "es" ? 0.85 : 0.75,
      },
    );

    /**
     * SEO pages inside /services
     */
    addRoutes(
      pages,
      locale,
      serviceSeoPages,
      {
        changeFrequency: "monthly",
        priority: locale === "es" ? 0.85 : 0.75,
      },
    );

    /**
     * Deep nested service pages
     */
    addRoutes(
      pages,
      locale,
      nestedServicePages,
      {
        changeFrequency: "monthly",
        priority: locale === "es" ? 0.8 : 0.7,
      },
    );

    addRoutes(
      pages,
      locale,
      guides.map((guide) => `guias/${guide.slug}`),
      {
        changeFrequency: "monthly",
        priority: locale === "es" ? 0.75 : 0.65,
      },
    );
  }

  return pages;
}
