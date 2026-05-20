import type { Metadata } from "next";
import DoorsClient from "./DoorsClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Puertas y herrajes en Valencia | Manillas, bisagras y ajustes | THEVULGO"
    : "Doors & Hardware in Valencia | Handles, Hinges & Adjustments | THEVULGO";

  const description = isEs
    ? "Servicio de puertas y herrajes en Valencia: ajuste de puertas, cambio de manillas, bisagras, pestillos, cerraderos, burletes, topes y bombines. Presupuesto claro por WhatsApp."
    : "Door and hardware services in Valencia: door adjustment, handle replacement, hinges, latches, strike plates, seals, stoppers and lock cylinders. Clear estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "puertas Valencia",
          "herrajes Valencia",
          "cambio manilla Valencia",
          "ajuste puerta Valencia",
          "bisagras puerta Valencia",
          "pestillo puerta Valencia",
          "bombín Valencia",
          "manitas puertas Valencia",
        ]
      : [
          "door repair Valencia",
          "door hardware Valencia",
          "door handle replacement Valencia",
          "door adjustment Valencia",
          "hinge repair Valencia",
          "latch adjustment Valencia",
          "lock cylinder replacement Valencia",
          "handyman doors Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/doors`,
      languages: {
        es: `${baseUrl}/es/services/doors`,
        en: `${baseUrl}/en/services/doors`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/doors`,
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

export default async function DoorsPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/doors`;

  const offers = [
    "Door alignment adjustment",
    "Handle replacement",
    "Loose handle fixing",
    "Latch adjustment",
    "Strike plate adjustment",
    "Hinge tightening",
    "Door seal replacement",
    "Hinge replacement",
    "Door closer adjustment",
    "Door stopper installation",
    "Lock cylinder replacement",
    "Cabinet and interior door hardware",
    "Multiple door and hardware tasks",
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Puertas y herrajes en Valencia"
      : "Doors and hardware services in Valencia",
    description: isEs
      ? "Ajustes de puertas, cambio de manillas, reparación de bisagras, corrección de pestillos, cerraderos, burletes, topes, bombines y pequeños trabajos de herrajes en Valencia."
      : "Door adjustments, handle replacement, hinge fixes, latch correction, strike plates, seals, stoppers, lock cylinders and small hardware work in Valencia.",
    serviceType: isEs
      ? "Ajustes de puertas y herrajes"
      : "Door adjustment and hardware services",
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
        ? "Servicios de puertas y herrajes"
        : "Door and hardware services",
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
        name: isEs ? "Puertas y herrajes" : "Doors & Hardware",
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
          ? "¿Qué trabajos de puertas y herrajes hace THEVULGO?"
          : "What door and hardware jobs does THEVULGO do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "THEVULGO realiza ajustes de puertas, cambio de manillas, reparación de manillas sueltas, apretado de bisagras, corrección de pestillos, cerraderos, burletes, topes, bombines y pequeños trabajos de herrajes."
            : "THEVULGO handles door adjustments, handle replacement, loose handle fixing, hinge tightening, latch correction, strike plates, seals, stoppers, lock cylinders and small hardware jobs.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Instaláis puertas completamente nuevas?"
          : "Do you install completely new doors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Esta página está enfocada en ajustes menores, cambio de herrajes visibles y correcciones prácticas, no en instalación completa de puertas o carpintería mayor."
            : "This page focuses on minor adjustments, visible hardware replacement and practical corrections, not full door installation or major carpentry work.",
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
            ? "Sí. Puedes enviar fotos, una breve descripción del problema y el número de puertas para recibir una estimación clara antes de reservar."
            : "Yes. You can send photos, a short description of the issue and the number of doors to receive a clear estimate before booking.",
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

      <DoorsClient />
    </>
  );
}