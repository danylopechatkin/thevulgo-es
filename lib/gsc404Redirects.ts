/**
 * Redirect decisions for the 2026-09-23 Google Search Console 404 export.
 *
 * English is the default locale and uses unprefixed public URLs. Keeping every
 * source explicit prevents an /en -> unprefixed second hop and makes this file
 * auditable against the original GSC export.
 */
export type SeoRedirect = {
  source: string;
  destination: string;
  permanent: true;
};

const permanent = (source: string, destination: string): SeoRedirect => ({
  source,
  destination,
  permanent: true,
});

export const GSC_404_REDIRECTS: readonly SeoRedirect[] = [
  permanent("/es/montaje-escritorios-valencia", "/es/services/furniture/montaje-escritorios-valencia"),
  permanent("/es/fin-contrato-alquiler-valencia", "/es/services/puesta-a-punto-vivienda-valencia"),
  permanent("/es/devolver-piso-propietario-valencia", "/es/services/puesta-a-punto-vivienda-valencia"),
  permanent("/es/instalacion-toldo-terraza-valencia", "/es/services/instalacion-toldos-valencia"),
  permanent("/en/cambio-extractor-valencia", "/services/electrical/cambio-extractor-valencia"),
  permanent("/en/puesta-a-punto-vivienda-valencia", "/services/puesta-a-punto-vivienda-valencia"),
  permanent("/es/puesta-a-punto-vivienda-valencia", "/es/services/puesta-a-punto-vivienda-valencia"),
  permanent("/en/instalar-espejo-valencia", "/services/bathroom/mirror-installation-valencia"),
  permanent("/en/instalacion-estanterias-valencia", "/services/furniture/instalacion-estanterias-valencia"),
  permanent("/en/services/cctv-installation", "/services/cctv"),
  permanent("/en/services/access-control", "/services/control-de-acceso"),
  permanent("/es/instalacion-toldo-manual-valencia", "/es/services/instalacion-toldos-valencia"),
  permanent("/es/instalar-toldo-valencia", "/es/services/instalacion-toldos-valencia"),
  permanent("/es/montaje-toldos-valencia", "/es/services/instalacion-toldos-valencia"),
  permanent("/es/services/doors/cambio-burlete-puerta", "/es/services/doors/door-seal-replacement"),
  permanent("/es/montaje-toldo-leroy-merlin-valencia", "/es/services/instalacion-toldo-leroy-merlin-valencia"),
  permanent("/en/instalacion-toldos-valencia", "/services/instalacion-toldos-valencia"),
  permanent("/en/instalacion-toldo-manual-valencia", "/services/instalacion-toldos-valencia"),
  permanent("/es/instalacion-toldo-patio-valencia", "/es/services/instalacion-toldos-valencia"),
  permanent("/es/instalacion-toldo-electrico-valencia", "/es/services/instalacion-toldo-electrico-valencia"),
  permanent("/en/instalacion-toldo-balcon-valencia", "/services/instalacion-toldos-valencia"),
  permanent("/es/instalador-toldos-valencia", "/es/services/instalacion-toldos-valencia"),
  permanent("/es/services/doors/strike-plate-adjustment", "/es/services/doors/latch-adjustment"),
  permanent("/en/instalacion-toldo-electrico-valencia", "/services/instalacion-toldo-electrico-valencia"),
  permanent("/es/instalacion-toldo-balcon-valencia", "/es/services/instalacion-toldos-valencia"),
  permanent("/en/manitas-instalacion-toldos-valencia", "/services/instalacion-toldos-valencia"),
  permanent("/es/manitas-instalacion-toldos-valencia", "/es/services/instalacion-toldos-valencia"),
  permanent("/en/instalacion-toldo-terraza-valencia", "/services/instalacion-toldos-valencia"),
  permanent("/en/reparacion-piso-alquiler-valencia", "/services/puesta-a-punto-vivienda-valencia"),
  permanent("/en/instalacion-toldo-patio-valencia", "/services/instalacion-toldos-valencia"),
  permanent("/en/instalar-toldo-valencia", "/services/instalacion-toldos-valencia"),
  permanent("/es/handyman-airbnb-valencia", "/es/services/mantenimiento-airbnb-valencia"),
  permanent("/en/instalacion-toldo-leroy-merlin-valencia", "/services/instalacion-toldo-leroy-merlin-valencia"),
  permanent("/en/instalador-toldos-valencia", "/services/instalacion-toldos-valencia"),
  permanent("/es/instalacion-toldos-valencia", "/es/services/instalacion-toldos-valencia"),
  permanent("/en/montaje-toldo-leroy-merlin-valencia", "/services/instalacion-toldo-leroy-merlin-valencia"),
  permanent("/es/instalacion-toldo-leroy-merlin-valencia", "/es/services/instalacion-toldo-leroy-merlin-valencia"),
  permanent("/es/services/bathroom/vanity-unit-installation", "/es/services/bathroom/vanity-unit-installation-valencia"),
  permanent("/en/services/doors/cambio-burlete-puerta", "/services/doors/door-seal-replacement"),
  permanent("/es/preparacion-piso-airbnb-valencia", "/es/services/mantenimiento-airbnb-valencia"),
  permanent("/en/services/doors/strike-plate-adjustment", "/services/doors/latch-adjustment"),
  permanent("/en/reparaciones-airbnb-valencia", "/services/mantenimiento-airbnb-valencia"),
  permanent("/es/reparaciones-antes-entrega-piso-valencia", "/es/services/puesta-a-punto-vivienda-valencia"),
  permanent("/es/pequenas-reparaciones-valencia", "/es/services/pequenas-reparaciones-valencia"),
  permanent("/es/reparacion-paredes-valencia", "/es/services/reparacion-paredes-valencia"),
  permanent("/es/mantenimiento-airbnb-valencia", "/es/services/mantenimiento-airbnb-valencia"),
  permanent("/en/mantenimiento-airbnb-valencia", "/services/mantenimiento-airbnb-valencia"),
  permanent("/en/handyman-airbnb-valencia", "/services/mantenimiento-airbnb-valencia"),
  permanent("/en/puesta-a-punto-piso-valencia", "/services/puesta-a-punto-vivienda-valencia"),
  permanent("/es/retoques-pintura-valencia", "/es/services/retoques-pintura-valencia"),
  permanent("/en/reparacion-agujeros-pared-valencia", "/services/reparacion-agujeros-pared-valencia"),
  permanent("/en/retoques-pintura-valencia", "/services/retoques-pintura-valencia"),
  permanent("/en/pequenas-reparaciones-valencia", "/services/pequenas-reparaciones-valencia"),
  permanent("/es/puesta-a-punto-piso-valencia", "/es/services/puesta-a-punto-vivienda-valencia"),
  permanent("/en/reparacion-paredes-valencia", "/services/reparacion-paredes-valencia"),
  permanent("/es/reparacion-piso-alquiler-valencia", "/es/services/puesta-a-punto-vivienda-valencia"),
  permanent("/en/reparaciones-antes-entrega-piso-valencia", "/services/puesta-a-punto-vivienda-valencia"),
  permanent("/es/reparaciones-airbnb-valencia", "/es/services/mantenimiento-airbnb-valencia"),
  permanent("/es/reparacion-agujeros-pared-valencia", "/es/services/reparacion-agujeros-pared-valencia"),
  permanent("/en/preparacion-piso-airbnb-valencia", "/services/mantenimiento-airbnb-valencia"),
  permanent("/fijacion-muebles-pared-valencia", "/es/services/furniture/fijacion-muebles-pared-valencia"),
  permanent("/en/montaje-electrico-basico-valencia", "/services/electrical/montaje-electrico-basico-valencia"),
  permanent("/es/cambio-extractor-valencia", "/es/services/electrical/cambio-extractor-valencia"),
  permanent("/montaje-estanterias-valencia", "/es/services/furniture/montaje-estanterias-valencia"),
  permanent("/es/large-tv-mounting-valencia", "/es/montaje-tv-grande-valencia"),
  permanent("/en/preparacion-muebles-mudanza-valencia", "/services/furniture/preparacion-muebles-mudanza-valencia"),
  permanent("/instalacion-tira-led-valencia", "/es/services/electrical/instalacion-tira-led-valencia"),
  permanent("/en/montaje-mesas-comedor-valencia", "/services/furniture/montaje-mesas-comedor-valencia"),
  permanent("/en/instalacion-enchufes-valencia", "/cambio-enchufe-valencia"),
  permanent("/en/paredes-pladur-valencia", "/pladur-valencia"),
  permanent("/es/paredes-pladur-valencia", "/es/pladur-valencia"),
  permanent("/en/armarios-empotrados-valencia", "/instalacion-armarios-valencia"),
  permanent("/es/armarios-empotrados-valencia", "/es/instalacion-armarios-valencia"),
  permanent("/en/montaje-armarios-valencia", "/instalacion-armarios-valencia"),
  permanent("/es/montaje-armarios-valencia", "/es/instalacion-armarios-valencia"),
  permanent("/en/large-tv-mounting-valencia", "/montaje-tv-grande-valencia"),
] as const;

export const GSC_404_INTENTIONALLY_MISSING = [
  "/_next/static/media/caa3a2e1cccd8315-s.p.853070df.woff2",
] as const;

/** Canonical consolidation for weak synonym pages that existed under /services. */
const consolidatedServiceSlugs = [
  ["montaje-toldos-valencia", "instalacion-toldos-valencia"],
  ["instalar-toldo-valencia", "instalacion-toldos-valencia"],
  ["instalador-toldos-valencia", "instalacion-toldos-valencia"],
  ["manitas-instalacion-toldos-valencia", "instalacion-toldos-valencia"],
  ["instalacion-toldo-manual-valencia", "instalacion-toldos-valencia"],
  ["instalacion-toldo-terraza-valencia", "instalacion-toldos-valencia"],
  ["instalacion-toldo-balcon-valencia", "instalacion-toldos-valencia"],
  ["instalacion-toldo-patio-valencia", "instalacion-toldos-valencia"],
  ["montaje-toldo-leroy-merlin-valencia", "instalacion-toldo-leroy-merlin-valencia"],
  ["reparacion-piso-alquiler-valencia", "puesta-a-punto-vivienda-valencia"],
  ["reparaciones-antes-entrega-piso-valencia", "puesta-a-punto-vivienda-valencia"],
  ["fin-contrato-alquiler-valencia", "puesta-a-punto-vivienda-valencia"],
  ["devolver-piso-propietario-valencia", "puesta-a-punto-vivienda-valencia"],
  ["puesta-a-punto-piso-valencia", "puesta-a-punto-vivienda-valencia"],
  ["reparaciones-airbnb-valencia", "mantenimiento-airbnb-valencia"],
  ["handyman-airbnb-valencia", "mantenimiento-airbnb-valencia"],
] as const;

export const SEO_CONSOLIDATION_REDIRECTS: readonly SeoRedirect[] =
  consolidatedServiceSlugs.flatMap(([source, destination]) => [
    permanent(`/es/services/${source}`, `/es/services/${destination}`),
    permanent(`/services/${source}`, `/services/${destination}`),
  ]);
