import type { Metadata } from "next";
import PlumbingClient from "./PlumbingClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Fontanería básica en Valencia | Grifos, lavabos y fugas | THEVULGO"
    : "Basic Plumbing in Valencia | Faucets, Sinks & Leaks | THEVULGO";

  const description = isEs
    ? "Fontanería básica en Valencia: cambio de grifos, instalación de lavabo, conexión de lavadora y lavavajillas, ducha, pequeñas fugas, conectores y varias tareas en una visita."
    : "Basic plumbing services in Valencia: faucet replacement, sink installation, washing machine and dishwasher connection, shower fittings, small leaks, connectors and multiple tasks in one visit.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "fontanería básica Valencia",
          "fontanero Valencia",
          "cambio grifo Valencia",
          "instalación lavabo Valencia",
          "conexión lavadora Valencia",
          "conexión lavavajillas Valencia",
          "pequeña fuga Valencia",
          "manitas fontanería Valencia",
        ]
      : [
          "basic plumbing Valencia",
          "plumber Valencia",
          "faucet replacement Valencia",
          "sink installation Valencia",
          "washing machine connection Valencia",
          "dishwasher connection Valencia",
          "small leak repair Valencia",
          "plumbing handyman Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/plumbing`,
      languages: {
        es: `${baseUrl}/es/services/plumbing`,
        en: `${baseUrl}/en/services/plumbing`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/plumbing`,
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

export default async function PlumbingPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/plumbing`;

  const offers = [
    "Faucet replacement",
    "Sink installation",
    "Shower head replacement",
    "Toilet seat replacement",
    "Washing machine connection",
    "Dishwasher connection",
    "Visible leak fixing",
    "Under sink adjustments",
    "Shower hose replacement",
    "Bathroom tap installation",
    "Water filter installation",
    "Pipe connector replacement",
    "Bidet hose installation",
    "Stop valve replacement",
    "Multiple plumbing tasks",
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Fontanería básica en Valencia"
      : "Basic plumbing services in Valencia",
    description: isEs
      ? "Cambio de grifos, instalación de lavabos, conexión de lavadora y lavavajillas, cambio de ducha, pequeñas fugas visibles, conectores y tareas básicas de fontanería en Valencia."
      : "Faucet replacement, sink installation, washing machine and dishwasher connection, shower fitting replacement, small visible leaks, connectors and basic plumbing tasks in Valencia.",
    serviceType: isEs ? "Fontanería básica" : "Basic plumbing",
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
        ? "Servicios de fontanería básica"
        : "Basic plumbing service catalog",
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
        name: isEs ? "Fontanería básica" : "Basic Plumbing",
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
          ? "¿Qué trabajos de fontanería hace THEVULGO?"
          : "What plumbing jobs does THEVULGO do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "THEVULGO realiza fontanería básica como cambio de grifos, instalación de lavabos, conexión de lavadora y lavavajillas, cambio de alcachofa o manguera de ducha, pequeñas fugas visibles y conectores."
            : "THEVULGO handles basic plumbing such as faucet replacement, sink installation, washing machine and dishwasher connection, shower head or hose replacement, small visible leaks and connectors.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Hacéis instalaciones completas de fontanería?"
          : "Do you handle full plumbing installations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "No. Esta página está enfocada en fontanería básica y tareas visibles. Las instalaciones completas o trabajos grandes de tuberías deben hacerlos profesionales autorizados."
            : "No. This page focuses on basic plumbing and visible tasks. Full installations or large pipe work should be handled by licensed professionals.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Puedo agrupar varias tareas de fontanería?"
          : "Can I group several plumbing tasks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Varias tareas como grifo, ducha, lavadora, lavavajillas o pequeños ajustes pueden agruparse en una sola visita."
            : "Yes. Several tasks such as faucet, shower, washing machine, dishwasher or small adjustments can be grouped into one visit.",
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
            ? "Sí. Puedes enviar fotos de la pieza, conexión o fuga visible para recibir una estimación clara antes de reservar."
            : "Yes. You can send photos of the fixture, connection or visible leak to receive a clear estimate before booking.",
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

      <PlumbingClient />
    </>
  );
}