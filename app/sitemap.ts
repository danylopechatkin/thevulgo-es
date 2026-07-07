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
    "services/alarm-systems",

"services/access-control",

"services/starlink-internet",

"services/cctv-installation",

"services/network-installation",
  ];

  const seoServicePages = [


 // Toldos

    "instalacion-toldos-valencia",

    "montaje-toldos-valencia",

    "instalar-toldo-valencia",

    "instalador-toldos-valencia",

    "manitas-instalacion-toldos-valencia",

    "instalacion-toldo-manual-valencia",

    "instalacion-toldo-electrico-valencia",

    "instalacion-toldo-terraza-valencia",

    "instalacion-toldo-balcon-valencia",

    "instalacion-toldo-patio-valencia",

    "instalacion-toldo-leroy-merlin-valencia",

    "montaje-toldo-leroy-merlin-valencia",


    "handyman-valencia",
    "handyman-benimaclet",
    "handyman-russafa",
    "handyman-campanar",
    "handyman-patraix",
    "handyman-mislata",
    "handyman-paterna",

    "reparacion-piso-alquiler-valencia",
"reparaciones-antes-entrega-piso-valencia",
"reparacion-paredes-valencia",
"retoques-pintura-valencia",
"reparacion-agujeros-pared-valencia",

"mantenimiento-airbnb-valencia",
"reparaciones-airbnb-valencia",
"preparacion-piso-airbnb-valencia",
"handyman-airbnb-valencia",

"fin-contrato-alquiler-valencia",
"devolver-piso-propietario-valencia",
"puesta-a-punto-piso-valencia",
"puesta-a-punto-vivienda-valencia",

"pequenas-reparaciones-valencia",

    "electricista-valencia",
    "montaje-muebles-valencia",
    "instalar-lampara-valencia",
    "colgar-cuadros-valencia",

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

    "montaje-tv-65-pulgadas-valencia",

"montaje-tv-75-pulgadas-valencia",

"montaje-tv-85-pulgadas-valencia",

"montaje-tv-98-pulgadas-valencia",

"montaje-tv-samsung-frame-valencia",

"instalar-samsung-frame-valencia",

"instalar-tv-pared-valencia",

"instalador-tv-valencia",

    "pladur-valencia",

"falsos-techos-valencia",

"techos-pladur-valencia",

"instalacion-pladur-valencia",

"instalador-pladur-valencia",

"paredes-pladur-valencia",

"contratista-pladur-valencia",

"reformas-pladur-valencia",

"empresa-pladur-valencia",

"presupuesto-pladur-valencia",

"falso-techo-pladur-valencia",

"reparacion-pladur-valencia",

"techo-registrable-valencia",

"pintar-pladur-valencia",

"tabiques-pladur-valencia",

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
    "guias",
  ];

  const nestedServicePages = [
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

    "services/doors/door-alignment-adjustment",
    "services/doors/handle-replacement",
    "services/doors/loose-handle-fixing",
    "services/doors/latch-adjustment",
    "services/doors/strike-plate-adjustment",
    "services/doors/hinge-tightening",
    "services/doors/cambio-burlete-puerta",
    "services/doors/cambio-bisagras-puerta",
    "services/doors/ajuste-cierrapuertas",
    "services/doors/instalacion-tope-puerta",
    "services/doors/cambio-bombin-cerradura",
    "services/doors/herrajes-puertas-interiores",
    "services/doors/reparacion-puertas-varios",

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

        // Ceiling fans
    "services/instalacion-ventilador-techo-valencia",
    "services/montaje-ventilador-techo",
    "services/instalar-ventilador-techo",
    "services/ventilador-techo-con-luz",
    "services/cambio-lampara-por-ventilador",
    "services/reemplazo-ventilador-techo",
    "services/instalacion-ventilador-control-remoto",
    "services/instalacion-ventilador-smart",

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