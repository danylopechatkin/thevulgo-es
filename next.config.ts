import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const legacyServiceSlugs = [
  "devolver-piso-propietario-valencia",
  "fin-contrato-alquiler-valencia",
  "handyman-airbnb-valencia",
  "instalacion-toldo-balcon-valencia",
  "instalacion-toldo-electrico-valencia",
  "instalacion-toldo-leroy-merlin-valencia",
  "instalacion-toldo-manual-valencia",
  "instalacion-toldo-patio-valencia",
  "instalacion-toldo-terraza-valencia",
  "instalacion-toldos-valencia",
  "instalador-toldos-valencia",
  "instalar-toldo-valencia",
  "manitas-instalacion-toldos-valencia",
  "mantenimiento-airbnb-valencia",
  "montaje-toldo-leroy-merlin-valencia",
  "montaje-toldos-valencia",
  "pequenas-reparaciones-valencia",
  "puesta-a-punto-piso-valencia",
  "puesta-a-punto-vivienda-valencia",
  "reparacion-agujeros-pared-valencia",
  "reparacion-paredes-valencia",
  "reparacion-piso-alquiler-valencia",
  "reparaciones-airbnb-valencia",
  "reparaciones-antes-entrega-piso-valencia",
  "retoques-pintura-valencia",
] as const;

const movedNestedPages = {
  "instalacion-apliques-pared-valencia": "services/electrical/instalacion-apliques-pared-valencia",
  "montaje-electrico-basico-valencia": "services/electrical/montaje-electrico-basico-valencia",
  "instalacion-tira-led-valencia": "services/electrical/instalacion-tira-led-valencia",
  "cambio-extractor-valencia": "services/electrical/cambio-extractor-valencia",
  "cambio-luz-bano-valencia": "services/electrical/cambio-luz-bano-valencia",
  "instalacion-estanterias-valencia": "services/furniture/instalacion-estanterias-valencia",
  "montaje-cama-valencia": "services/furniture/montaje-cama-valencia",
  "montaje-comodas-cajoneras-valencia": "services/furniture/montaje-comodas-cajoneras-valencia",
  "montaje-estanterias-valencia": "services/furniture/montaje-estanterias-valencia",
  "montaje-muebles-tv-multimedia-valencia": "services/furniture/montaje-muebles-tv-multimedia-valencia",
  "montaje-escritorios-valencia": "services/furniture/montaje-escritorios-valencia",
  "montaje-mesas-comedor-valencia": "services/furniture/montaje-mesas-comedor-valencia",
  "montaje-aparadores-muebles-auxiliares-valencia": "services/furniture/montaje-aparadores-muebles-auxiliares-valencia",
  "montaje-sofas-modulares-valencia": "services/furniture/montaje-sofas-modulares-valencia",
  "fijacion-muebles-pared-valencia": "services/furniture/fijacion-muebles-pared-valencia",
  "preparacion-muebles-mudanza-valencia": "services/furniture/preparacion-muebles-mudanza-valencia",
  "instalar-soundbar-valencia": "services/tv-mounting/instalar-soundbar-valencia",
} as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...legacyServiceSlugs.map((slug) => ({
        source: `/:locale/${slug}`,
        destination: `/:locale/services/${slug}`,
        permanent: true,
      })),
      ...Object.entries(movedNestedPages).map(([source, destination]) => ({
        source: `/:locale/${source}`,
        destination: `/:locale/${destination}`,
        permanent: true,
      })),
      {
        source: "/:locale/armarios-empotrados-valencia",
        destination: "/:locale/instalacion-armarios-valencia",
        permanent: true,
      },
      {
        source: "/:locale/montaje-armarios-valencia",
        destination: "/:locale/instalacion-armarios-valencia",
        permanent: true,
      },
      {
        source: "/:locale/paredes-pladur-valencia",
        destination: "/:locale/pladur-valencia",
        permanent: true,
      },
      {
        source: "/:locale/services/preparacion-piso-airbnb-valencia",
        destination: "/:locale/services/mantenimiento-airbnb-valencia",
        permanent: true,
      },
      {
        source: "/:locale/services/doors/cambio-burlete-puerta",
        destination: "/:locale/services/doors/door-seal-replacement",
        permanent: true,
      },
      {
        source: "/:locale/services/doors/strike-plate-adjustment",
        destination: "/:locale/services/doors/latch-adjustment",
        permanent: true,
      },
      {
        source: "/:locale/services/alarm-systems",
        destination: "/:locale/services/alarmas",
        permanent: true,
      },
      {
        source: "/:locale/services/access-control",
        destination: "/:locale/services/control-de-acceso",
        permanent: true,
      },
      {
        source: "/:locale/services/networking",
        destination: "/:locale/services/redes",
        permanent: true,
      },
      {
        source: "/:locale/services/commercial-security",
        destination: "/:locale/services/seguridad-comercial",
        permanent: true,
      },
      {
        source: "/:locale/services/starlink-internet",
        destination: "/:locale/services/starlink",
        permanent: true,
      },
      {
        source: "/:locale/services/montaje-ventilador-techo",
        destination:
          "/:locale/services/instalacion-ventilador-techo-valencia",
        permanent: true,
      },
      {
        source: "/:locale/services/instalar-ventilador-techo",
        destination:
          "/:locale/services/instalacion-ventilador-techo-valencia",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
