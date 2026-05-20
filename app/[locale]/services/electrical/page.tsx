import type { Metadata } from "next";
import ElectricalClient from "./ElectricalClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Electricidad básica en Valencia | Luces, enchufes e interruptores | THEVULGO"
    : "Basic Electrical Services in Valencia | Lights, Sockets & Switches | THEVULGO";

  const description = isEs
    ? "Servicios eléctricos básicos en Valencia: instalación de lámparas, luces de techo, enchufes, interruptores, tiras LED, extractores, luces de baño y pequeños trabajos eléctricos. Presupuesto claro por WhatsApp."
    : "Basic electrical services in Valencia: light fixture installation, ceiling lights, sockets, switches, LED strips, extractor fans, bathroom lights and small electrical jobs. Clear estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "electricidad básica Valencia",
          "electricista básico Valencia",
          "instalar lámpara Valencia",
          "cambio enchufe Valencia",
          "cambio interruptor Valencia",
          "luces techo Valencia",
          "tiras LED Valencia",
          "manitas electricidad Valencia",
        ]
      : [
          "basic electrical Valencia",
          "electrician handyman Valencia",
          "light installation Valencia",
          "socket replacement Valencia",
          "switch replacement Valencia",
          "ceiling light Valencia",
          "LED strip installation Valencia",
          "electrical handyman Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/electrical`,
      languages: {
        es: `${baseUrl}/es/services/electrical`,
        en: `${baseUrl}/en/services/electrical`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/electrical`,
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

export default async function ElectricalPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/electrical`;

  const offers = [
    "Light fixture installation",
    "Pendant lights",
    "Wall lights and sconces",
    "Switch replacement",
    "Socket replacement",
    "Basic electrical mounting",
    "LED strip setup",
    "Extractor fan replacement",
    "Bathroom light replacement",
    "Ceiling lamp replacement",
    "Dimmer switch replacement",
    "Power strip and cable tidy setup",
    "Mirror light installation",
    "Light removal and replacement",
    "Kitchen light replacement",
    "Multi-item electrical jobs",
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Servicios eléctricos básicos en Valencia"
      : "Basic electrical services in Valencia",
    description: isEs
      ? "Instalación y sustitución de lámparas, luces de techo, enchufes, interruptores, tiras LED, extractores, luces de baño, luces de espejo y pequeños trabajos eléctricos en Valencia."
      : "Installation and replacement of light fixtures, ceiling lights, sockets, switches, LED strips, extractor fans, bathroom lights, mirror lights and small electrical jobs in Valencia.",
    serviceType: isEs
      ? "Electricidad básica"
      : "Basic electrical work",
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
        ? "Servicios de electricidad básica"
        : "Basic electrical service catalog",
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
        name: isEs ? "Electricidad básica" : "Basic Electrical",
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
          ? "¿Qué trabajos eléctricos hace THEVULGO?"
          : "What electrical jobs does THEVULGO do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "THEVULGO realiza trabajos eléctricos básicos como instalación de lámparas, cambio de enchufes, interruptores, luces de techo, tiras LED, extractores, luces de baño y accesorios compatibles."
            : "THEVULGO handles basic electrical jobs such as light installation, socket replacement, switch replacement, ceiling lights, LED strips, extractor fans, bathroom lights and compatible fixtures.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Hacéis recableado completo?"
          : "Do you handle full rewiring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "No. Esta página está enfocada en electricidad básica y sustituciones simples. El recableado completo o trabajos eléctricos grandes deben hacerlos electricistas autorizados."
            : "No. This page focuses on basic electrical work and simple replacements. Full rewiring and larger electrical system work should be handled by a licensed electrician.",
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
            ? "Sí. Puedes enviar fotos del accesorio, enchufe, interruptor o lámpara, junto con una breve descripción, para recibir una estimación clara antes de reservar."
            : "Yes. You can send photos of the fixture, socket, switch or light, along with a short description, to receive a clear estimate before booking.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Puedo agrupar varios trabajos eléctricos pequeños?"
          : "Can I combine several small electrical jobs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Varias luces, enchufes, interruptores o accesorios eléctricos simples pueden agruparse en una sola visita con un presupuesto combinado."
            : "Yes. Several lights, sockets, switches or simple electrical fixtures can be grouped into one visit with a combined estimate.",
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

      <ElectricalClient />
    </>
  );
}