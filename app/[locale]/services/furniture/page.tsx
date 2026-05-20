import type { Metadata } from "next";
import FurnitureClient from "./FurnitureClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Montaje de muebles en Valencia | IKEA, armarios, camas | THEVULGO"
    : "Furniture Assembly in Valencia | IKEA, Wardrobes, Beds | THEVULGO";

  const description = isEs
    ? "Montaje de muebles en Valencia: IKEA, armarios, camas, cómodas, estanterías, escritorios, muebles TV, aparadores y fijación a pared. Presupuesto claro por WhatsApp."
    : "Furniture assembly in Valencia: IKEA, wardrobes, beds, drawers, shelving units, desks, TV units, sideboards and wall fixing. Clear estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "montaje muebles Valencia",
          "montaje IKEA Valencia",
          "montaje armario Valencia",
          "montaje cama Valencia",
          "montaje estanterías Valencia",
          "montaje escritorio Valencia",
          "fijar muebles pared Valencia",
          "manitas muebles Valencia",
        ]
      : [
          "furniture assembly Valencia",
          "IKEA assembly Valencia",
          "wardrobe assembly Valencia",
          "bed assembly Valencia",
          "shelving assembly Valencia",
          "desk assembly Valencia",
          "furniture wall fixing Valencia",
          "furniture handyman Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/furniture`,
      languages: {
        es: `${baseUrl}/es/services/furniture`,
        en: `${baseUrl}/en/services/furniture`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/furniture`,
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

export default async function FurniturePage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/furniture`;

  const offers = [
    "IKEA furniture assembly",
    "Wardrobe assembly",
    "Bed frame assembly",
    "Chest of drawers assembly",
    "Shelving units assembly",
    "TV stands and media units",
    "Desks and workstations",
    "Dining tables",
    "Sideboards and cabinets",
    "Sofa and modular pieces",
    "Furniture fixing to wall",
    "Move-in furniture setup",
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Montaje de muebles en Valencia"
      : "Furniture assembly in Valencia",
    description: isEs
      ? "Montaje profesional de muebles en Valencia: IKEA, armarios, camas, cómodas, estanterías, escritorios, muebles TV, aparadores, sofás modulares y fijación de muebles a pared."
      : "Professional furniture assembly in Valencia: IKEA, wardrobes, beds, drawers, shelving units, desks, TV units, sideboards, modular sofas and furniture wall fixing.",
    serviceType: isEs ? "Montaje de muebles" : "Furniture assembly",
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
        ? "Servicios de montaje de muebles"
        : "Furniture assembly services",
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

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isEs
      ? "Servicios específicos de montaje de muebles en Valencia"
      : "Specific furniture assembly services in Valencia",
    itemListElement: [
      {
        name: isEs ? "Montaje de muebles IKEA Valencia" : "IKEA furniture assembly Valencia",
        url: `${baseUrl}/${locale}/montaje-muebles-ikea-valencia`,
      },
      {
        name: isEs ? "Montaje de armario Valencia" : "Wardrobe assembly Valencia",
        url: `${baseUrl}/${locale}/montaje-armario-valencia`,
      },
      {
        name: isEs ? "Montaje de cama Valencia" : "Bed assembly Valencia",
        url: `${baseUrl}/${locale}/montaje-cama-valencia`,
      },
      {
        name: isEs ? "Montaje de estanterías Valencia" : "Shelving assembly Valencia",
        url: `${baseUrl}/${locale}/montaje-estanterias-valencia`,
      },
      {
        name: isEs ? "Fijación de muebles a pared Valencia" : "Furniture wall fixing Valencia",
        url: `${baseUrl}/${locale}/fijacion-muebles-pared-valencia`,
      },
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
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
        name: isEs ? "Montaje de muebles" : "Furniture Assembly",
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
          ? "¿Montáis muebles IKEA en Valencia?"
          : "Do you assemble IKEA furniture in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. THEVULGO monta muebles IKEA y otros muebles tipo flat-pack como armarios, camas, cómodas, estanterías, escritorios y muebles TV."
            : "Yes. THEVULGO assembles IKEA furniture and other flat-pack furniture such as wardrobes, beds, drawers, shelving units, desks and TV units.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Se pueden montar varios muebles en una sola visita?"
          : "Can several furniture items be assembled in one visit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Varias piezas pueden agruparse en una sola visita con un presupuesto combinado según cantidad, tipo de mueble y complejidad."
            : "Yes. Several pieces can be grouped into one visit with a combined estimate based on quantity, furniture type and complexity.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Fijáis muebles altos a la pared?"
          : "Do you fix tall furniture to the wall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. La fijación a la pared puede añadirse cuando es adecuada y se recomienda especialmente para armarios, muebles altos y estanterías."
            : "Yes. Wall fixing can be added where suitable and is especially recommended for wardrobes, tall cabinets and shelving units.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <FurnitureClient />
    </>
  );
}