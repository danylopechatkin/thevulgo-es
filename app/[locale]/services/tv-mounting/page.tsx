import type { Metadata } from "next";
import TvMountingClient from "./TvMountingClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Montaje de TV en Valencia | Soportes, cables y soundbar | THEVULGO"
    : "TV Mounting in Valencia | Brackets, Cables & Soundbar | THEVULGO";

  const description = isEs
    ? "Montaje de TV en Valencia: instalación de televisores, TV grandes, soportes, ocultación de cables, soundbar, estantes y proyectores. Presupuesto claro por WhatsApp."
    : "TV mounting in Valencia: TV installation, large TVs, brackets, cable concealment, soundbar mounting, shelves and projectors. Clear estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "montaje TV Valencia",
          "instalar TV pared Valencia",
          "soporte TV Valencia",
          "ocultar cables TV Valencia",
          "montaje soundbar Valencia",
          "montaje proyector Valencia",
          "instalación estantes Valencia",
          "manitas TV Valencia",
        ]
      : [
          "TV mounting Valencia",
          "TV wall mounting Valencia",
          "TV bracket installation Valencia",
          "hide TV cables Valencia",
          "soundbar mounting Valencia",
          "projector mounting Valencia",
          "shelf installation Valencia",
          "TV handyman Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/tv-mounting`,
      languages: {
        es: `${baseUrl}/es/services/tv-mounting`,
        en: `${baseUrl}/en/services/tv-mounting`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/tv-mounting`,
      siteName: "THEVULGO",
      type: "website",
      locale: isEs ? "es_ES" : "en_US",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TvMountingPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/tv-mounting`;

  const offers = [
    "TV mounting",
    "Large TV mounting",
    "TV bracket installation",
    "Cable concealment",
    "Soundbar mounting",
    "Projector mounting",
    "Shelf installation",
    "Media setup",
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Montaje de TV en Valencia"
      : "TV mounting services in Valencia",
    description: isEs
      ? "Montaje de TV, televisores grandes, soportes, ocultación de cables, soundbar, proyectores, estantes y setups multimedia en Valencia."
      : "TV mounting, large TVs, brackets, cable concealment, soundbar mounting, projectors, shelves and media setups in Valencia.",
    serviceType: isEs ? "Montaje de TV" : "TV mounting",
    url: pageUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "THEVULGO",
      url: baseUrl,
      telephone: "+34610076942",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressRegion: "Valencia",
        addressCountry: "ES",
      },
    },
    areaServed: [
      "Valencia",
      "Campanar",
      "Ruzafa",
      "Benimaclet",
      "Patraix",
      "El Carmen",
      "Extramurs",
      "Mislata",
      "Burjassot",
      "Paterna",
      "Torrent",
      "Sagunto",
      "Cullera",
      "Gandía",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isEs
        ? "Servicios de montaje de TV"
        : "TV mounting service catalog",
      itemListElement: offers.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          areaServed: "Valencia",
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Servicios" : "Services",
        item: `${baseUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isEs ? "Montaje de TV" : "TV Mounting",
        item: pageUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isEs
          ? "¿Qué incluye el montaje de TV?"
          : "What is included in TV mounting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Incluye instalación nivelada de TV en pared adecuada, revisión de altura, soporte, fijación y opciones para ocultar cables o añadir soundbar."
            : "Includes level TV wall installation on a suitable wall, height check, bracket fitting and options for cable concealment or soundbar setup.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Se pueden ocultar los cables?"
          : "Can TV cables be hidden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Se pueden usar canaletas o soluciones de ruta de cable según el tipo de pared y el alcance del trabajo."
            : "Yes. Cable raceways or cable routing options can be used depending on wall type and job scope.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Puedo pedir presupuesto por WhatsApp?"
          : "Can I request an estimate by WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Puedes enviar tamaño de TV, fotos de la pared, soporte disponible y si quieres ocultar cables para recibir una estimación clara."
            : "Yes. You can send TV size, wall photos, available bracket and whether you want cables hidden to receive a clear estimate.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <TvMountingClient />
    </>
  );
}