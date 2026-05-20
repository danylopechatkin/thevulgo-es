import type { Metadata } from "next";
import MoveInClient from "./MoveInClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Preparación de piso y mudanza en Valencia | Montaje y setup | THEVULGO"
    : "Apartment & Move-In Setup in Valencia | Furniture & Setup | THEVULGO";

  const description = isEs
    ? "Preparación de piso y mudanza en Valencia: montaje de muebles, TV, luces, cortinas, organización, ayuda con cajas, cocina, baño, router y tareas agrupadas en una sola visita."
    : "Apartment and move-in setup services in Valencia: furniture assembly, TV mounting, lighting, curtains, unpacking help, kitchen, bathroom, router setup and grouped move-in tasks.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "preparación piso Valencia",
          "mudanza Valencia ayuda",
          "montaje muebles Valencia",
          "setup piso Valencia",
          "preparar apartamento Valencia",
          "airbnb setup Valencia",
          "manitas mudanza Valencia",
          "instalación piso Valencia",
        ]
      : [
          "apartment setup Valencia",
          "move in setup Valencia",
          "move in handyman Valencia",
          "furniture assembly Valencia",
          "rental apartment setup Valencia",
          "airbnb apartment setup Valencia",
          "new apartment setup Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/move-in`,
      languages: {
        es: `${baseUrl}/es/services/move-in`,
        en: `${baseUrl}/en/services/move-in`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/move-in`,
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

export default async function MoveInPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/move-in`;

  const offers = [
    "Full apartment setup",
    "Rental-ready apartment setup",
    "Same-day move-in setup",
    "Furniture assembly",
    "TV mounting and setup",
    "Lighting installation",
    "Curtain and blind installation",
    "Mirror mounting",
    "Bedroom setup",
    "Unpacking help",
    "Home organization",
    "Minor apartment fixes",
    "Door adjustments",
    "Kitchen setup",
    "Bathroom setup",
    "Router and device setup",
    "Workspace setup",
    "Entry area setup",
    "Multiple move-in tasks",
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Preparación de piso y mudanza en Valencia"
      : "Apartment and move-in setup services in Valencia",
    description: isEs
      ? "Montaje de muebles, TV, iluminación, cortinas, organización, ayuda con cajas, cocina, baño, router y preparación completa del piso en Valencia."
      : "Furniture assembly, TV setup, lighting, curtains, unpacking help, kitchen setup, bathroom setup, router setup and full apartment preparation in Valencia.",
    serviceType: isEs
      ? "Preparación de piso y mudanza"
      : "Apartment move-in setup service",
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
        ? "Servicios de preparación de piso"
        : "Apartment setup services",
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
        name: isEs
          ? "Preparación de piso y mudanza"
          : "Apartment & Move-In Setup",
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
          ? "¿Qué incluye la preparación de piso?"
          : "What is included in apartment setup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Incluye montaje de muebles, luces, cortinas, TV, organización, ayuda con cajas, pequeños arreglos y tareas agrupadas para dejar el piso listo."
            : "Includes furniture assembly, lights, curtains, TV setup, unpacking help, organization, small fixes and grouped move-in tasks.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Puedo agrupar muchas tareas en una sola visita?"
          : "Can I group many tasks into one visit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Este servicio está diseñado precisamente para agrupar múltiples tareas del piso en una sola visita eficiente."
            : "Yes. This service is specifically designed to group multiple apartment setup tasks into one efficient visit.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Sirve para Airbnb o alquiler?"
          : "Is this useful for Airbnb or rentals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Es ideal para pisos de alquiler, Airbnb y nuevas viviendas que necesitan preparación rápida."
            : "Yes. It is ideal for rental apartments, Airbnb properties and newly occupied homes needing quick setup.",
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
            ? "Sí. Puedes enviar fotos, lista de tareas y detalles del piso para recibir una estimación clara."
            : "Yes. You can send photos, a task list and apartment details to receive a clear estimate.",
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

      <MoveInClient />
    </>
  );
}