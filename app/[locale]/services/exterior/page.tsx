import type { Metadata } from "next";
import ExteriorClient from "./ExteriorClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Trabajos exteriores en Valencia | Vallas, patio y accesorios | THEVULGO"
    : "Exterior & Outdoor Work in Valencia | Fences, Patio & Accessories | THEVULGO";

  const description = isEs
    ? "Trabajos exteriores en Valencia: reparación de vallas, puertas exteriores, accesorios, buzones, números de casa, patio, terraza, luces exteriores, sellado y pequeñas reparaciones. Presupuesto claro por WhatsApp."
    : "Exterior and outdoor work in Valencia: fence repair, gates, accessories, mailboxes, house numbers, patio, terrace, exterior lights, sealing and small outdoor repairs. Clear estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "trabajos exteriores Valencia",
          "reparación vallas Valencia",
          "puertas exteriores Valencia",
          "patio Valencia",
          "terraza Valencia",
          "instalar buzón Valencia",
          "número casa Valencia",
          "manitas exterior Valencia",
        ]
      : [
          "exterior work Valencia",
          "outdoor handyman Valencia",
          "fence repair Valencia",
          "gate adjustment Valencia",
          "patio setup Valencia",
          "terrace handyman Valencia",
          "mailbox installation Valencia",
          "house number mounting Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/exterior`,
      languages: {
        es: `${baseUrl}/es/services/exterior`,
        en: `${baseUrl}/en/services/exterior`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/exterior`,
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

export default async function ExteriorPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/exterior`;

  const offers = [
    "Fence repair and adjustment",
    "Gate alignment",
    "Outdoor hardware fixing",
    "Facade touch-up work",
    "Outdoor wall mounting",
    "Outdoor shelf or bracket fitting",
    "Outdoor waterproof sealing",
    "Pergola or shade accessory fitting",
    "Outdoor storage setup",
    "Exterior fixture replacement",
    "Patio furniture assembly",
    "Outdoor refresh and finishing",
    "Mailbox installation",
    "House number and sign mounting",
    "Outdoor light fitting",
    "Garden accessory installation",
    "Terrace and patio setup help",
    "Visible exterior edge checks",
    "Balcony and railing fixes",
    "Outdoor repair bundle",
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Trabajos exteriores en Valencia"
      : "Exterior and outdoor work in Valencia",
    description: isEs
      ? "Trabajos exteriores prácticos en Valencia: reparación de vallas, ajuste de puertas exteriores, montaje de accesorios, buzones, números de casa, patios, terrazas, luces exteriores, sellado y pequeñas reparaciones."
      : "Practical exterior work in Valencia: fence repair, gate adjustment, accessory mounting, mailboxes, house numbers, patios, terraces, outdoor lights, sealing and small exterior repairs.",
    serviceType: isEs
      ? "Trabajos exteriores y mejoras de exterior"
      : "Exterior and outdoor handyman work",
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
        ? "Servicios de trabajos exteriores"
        : "Exterior and outdoor work services",
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
        name: isEs ? "Trabajos exteriores" : "Exterior Work",
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
          ? "¿Qué trabajos exteriores hace THEVULGO?"
          : "What exterior work does THEVULGO do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "THEVULGO realiza trabajos exteriores prácticos como reparación de vallas, ajuste de puertas exteriores, montaje de accesorios, buzones, números de casa, patios, terrazas, luces exteriores, sellado y pequeñas reparaciones visibles."
            : "THEVULGO handles practical exterior work such as fence repair, gate adjustment, accessory mounting, mailboxes, house numbers, patios, terraces, outdoor lights, sealing and small visible repairs.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Hacéis reformas grandes de fachada o tejado?"
          : "Do you do major facade or roof renovation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "No. Esta página está enfocada en tareas exteriores accesibles, mejoras visibles y pequeñas reparaciones, no en grandes obras de tejado o fachada."
            : "No. This page focuses on accessible exterior tasks, visible improvements and small repairs, not major roof or facade construction.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Puedo agrupar varias tareas exteriores?"
          : "Can I group several outdoor tasks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Varias tareas exteriores como vallas, carteles, accesorios, luces, patio y pequeños arreglos pueden agruparse en una sola visita con un presupuesto combinado."
            : "Yes. Several exterior tasks such as fences, signs, accessories, lights, patio setup and small repairs can be grouped into one visit with a combined estimate.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Sirve para patios, terrazas y casas de alquiler?"
          : "Is this useful for patios, terraces and rental houses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Este servicio es útil para patios, terrazas, casas, villas, viviendas de alquiler y propiedades vacacionales que necesitan verse más limpias y cuidadas."
            : "Yes. This service is useful for patios, terraces, houses, villas, rental homes and holiday properties that need to look cleaner and better maintained.",
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

      <ExteriorClient />
    </>
  );
}