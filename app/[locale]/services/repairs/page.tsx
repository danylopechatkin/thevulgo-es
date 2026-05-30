import type { Metadata } from "next";
import RepairsClient from "./RepairsClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reparaciones del hogar en Valencia | Pequeños arreglos | THEVULGO"
    : "Home Repairs in Valencia | Small Handyman Fixes | THEVULGO";

  const description = isEs
    ? "Reparaciones del hogar en Valencia: silicona, sellado, manillas, estantes, puertas, accesorios, retoques de pared, pequeños arreglos de cocina y baño. Presupuesto claro por WhatsApp."
    : "Home repairs in Valencia: silicone, sealing, handles, shelves, doors, accessories, wall touch-ups, small kitchen and bathroom fixes. Clear estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparaciones hogar Valencia",
          "pequeñas reparaciones Valencia",
          "manitas Valencia",
          "arreglos casa Valencia",
          "silicona Valencia",
          "sellado Valencia",
          "arreglo manilla Valencia",
          "reparación piso Valencia",
        ]
      : [
          "home repairs Valencia",
          "small repairs Valencia",
          "handyman Valencia",
          "minor home repairs Valencia",
          "silicone repair Valencia",
          "sealing Valencia",
          "loose handle repair Valencia",
          "apartment repairs Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/repairs`,
      languages: {
  es: `${baseUrl}/es/services/repairs`,
  en: `${baseUrl}/en/services/repairs`,
  "x-default": `${baseUrl}/es/services/repairs`,
},
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/repairs`,
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

export default async function RepairsPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/repairs`;

  const offers = isEs
  ? [
      "Renovación de silicona",
      "Sellado de juntas y huecos",
      "Pequeños arreglos de pared",
      "Ajuste de puerta",
      "Arreglo de manilla suelta",
      "Ajustes de riel de cortina",
      "Instalación de tacos y anclajes",
      "Recolocación de estante",
      "Recolocación de espejo",
      "Retoques de muebles",
      "Arreglo de accesorios de baño",
      "Alineación de tapas y embellecedores",
      "Alineación de puerta de mueble",
      "Pequeños trabajos de taladro",
      "Retoques antes de entregar piso",
      "Pequeños arreglos de cocina",
      "Varias pequeñas reparaciones",
    ]
  : [
      "Silicone renewal",
      "Sealing and gap filling",
      "Minor wall fixes",
      "Door adjustment",
      "Loose handle fixing",
      "Curtain rail adjustments",
      "Wall anchor installation",
      "Shelf re-fixing",
      "Mirror re-mounting",
      "Furniture touch-up fixes",
      "Bathroom accessory fixing",
      "Socket and cover straightening",
      "Cabinet door alignment",
      "Small drilling jobs",
      "Move-out touch-ups",
      "Kitchen minor fixes",
      "Multiple small repairs",
    ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparaciones del hogar en Valencia"
      : "Home repair services in Valencia",
    description: isEs
      ? "Pequeñas reparaciones del hogar en Valencia: silicona, sellado, manillas, puertas, estantes, accesorios, retoques de pared, cocina, baño y tareas agrupadas."
      : "Small home repairs in Valencia: silicone, sealing, handles, doors, shelves, accessories, wall touch-ups, kitchen, bathroom and grouped repair tasks.",
    serviceType: isEs ? "Reparaciones del hogar" : "Home repairs",
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
        ? "Servicios de pequeñas reparaciones del hogar"
        : "Small home repair services",
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
        name: isEs ? "Reparaciones del hogar" : "Home Repairs",
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
          ? "¿Qué reparaciones del hogar hace THEVULGO?"
          : "What home repairs does THEVULGO do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "THEVULGO realiza pequeñas reparaciones como renovación de silicona, sellado, manillas sueltas, estantes, accesorios, puertas, retoques de pared y pequeños arreglos de cocina y baño."
            : "THEVULGO handles small repairs such as silicone renewal, sealing, loose handles, shelves, accessories, doors, wall touch-ups and small kitchen and bathroom fixes.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Puedo agrupar varias reparaciones pequeñas?"
          : "Can I group several small repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Varias tareas pequeñas pueden agruparse en una sola visita para ahorrar tiempo y hacer el trabajo de forma más eficiente."
            : "Yes. Several small tasks can be grouped into one visit to save time and complete the work more efficiently.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Hacéis reformas grandes?"
          : "Do you handle large renovations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "No. Esta página está enfocada en pequeñas reparaciones, retoques visibles y arreglos prácticos, no en reformas completas."
            : "No. This page focuses on small repairs, visible touch-ups and practical fixes, not full renovation work.",
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
            ? "Sí. Puedes enviar fotos y una lista de tareas para recibir una estimación clara antes de reservar."
            : "Yes. You can send photos and a task list to receive a clear estimate before booking.",
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

      <RepairsClient />
    </>
  );
}