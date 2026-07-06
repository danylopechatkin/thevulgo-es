import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

const serviceCategories = [
  {
    slug: "tv-mounting",
    es: "Montaje de TV en Valencia",
    en: "TV mounting in Valencia",
  },
  {
    slug: "furniture",
    es: "Montaje de muebles en Valencia",
    en: "Furniture assembly in Valencia",
  },
  {
    slug: "electrical",
    es: "Electricidad básica en Valencia",
    en: "Basic electrical services in Valencia",
  },
  {
    slug: "plumbing",
    es: "Fontanería básica en Valencia",
    en: "Basic plumbing services in Valencia",
  },
  {
    slug: "repairs",
    es: "Reparaciones del hogar en Valencia",
    en: "Home repairs in Valencia",
  },
  {
    slug: "drywall",
    es: "Pladur y pequeñas reformas en Valencia",
    en: "Drywall and small renovation jobs in Valencia",
  },
  {
    slug: "doors",
    es: "Puertas y herrajes en Valencia",
    en: "Doors and hardware in Valencia",
  },
  {
    slug: "smart-home",
    es: "Smart home e instalaciones en Valencia",
    en: "Smart home installations in Valencia",
  },
  {
    slug: "networking",
    es: "WiFi, redes e internet en Valencia",
    en: "WiFi, networking and internet in Valencia",
  },
  {
    slug: "cctv",
    es: "Cámaras de seguridad CCTV en Valencia",
    en: "CCTV security cameras in Valencia",
  },
  {
    slug: "alarm-systems",
    es: "Alarmas y sistemas de seguridad en Valencia",
    en: "Alarm systems and security in Valencia",
  },
  {
    slug: "access-control",
    es: "Control de acceso en Valencia",
    en: "Access control systems in Valencia",
  },
  {
    slug: "starlink-internet",
    es: "Starlink, antenas e internet exterior en Valencia",
    en: "Starlink, antennas and outdoor internet in Valencia",
  },
  {
    slug: "commercial-security",
    es: "Seguridad para negocios en Valencia",
    en: "Commercial security systems in Valencia",
  },
  {
    slug: "kitchen",
    es: "Trabajos de cocina en Valencia",
    en: "Kitchen handyman jobs in Valencia",
  },
  {
    slug: "bathroom",
    es: "Trabajos de baño en Valencia",
    en: "Bathroom handyman jobs in Valencia",
  },
  {
    slug: "move-in",
    es: "Servicios para mudanzas en Valencia",
    en: "Move-in handyman services in Valencia",
  },
  {
    slug: "exterior",
    es: "Pequeños trabajos exteriores en Valencia",
    en: "Exterior small jobs in Valencia",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Servicios en Valencia | Manitas, redes, cámaras, alarmas | THEVULGO"
    : "Services in Valencia | Handyman, WiFi, CCTV, Alarms | THEVULGO";

  const description = isEs
    ? "Servicios en Valencia: montaje de TV, muebles, electricidad, reparaciones, pladur, WiFi, redes, cámaras CCTV, alarmas, control de acceso, Starlink y seguridad para negocios."
    : "Services in Valencia: TV mounting, furniture assembly, electrical, repairs, drywall, WiFi, networking, CCTV cameras, alarms, access control, Starlink and commercial security.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "servicios Valencia",
          "manitas Valencia",
          "montaje TV Valencia",
          "montaje muebles Valencia",
          "electricista Valencia",
          "WiFi Valencia",
          "redes Valencia",
          "instalación cámaras Valencia",
          "CCTV Valencia",
          "alarmas Valencia",
          "control de acceso Valencia",
          "Starlink Valencia",
          "seguridad negocios Valencia",
        ]
      : [
          "services Valencia",
          "handyman Valencia",
          "TV mounting Valencia",
          "furniture assembly Valencia",
          "electrician Valencia",
          "WiFi Valencia",
          "networking Valencia",
          "CCTV Valencia",
          "camera installation Valencia",
          "alarm systems Valencia",
          "access control Valencia",
          "Starlink Valencia",
          "commercial security Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services`,
      languages: {
        es: `${baseUrl}/es/services`,
        en: `${baseUrl}/en/services`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services`,
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

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/services`;

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isEs ? "Servicios en Valencia" : "Services in Valencia",
    description: isEs
      ? "Página de servicios de THEVULGO en Valencia: manitas, montaje de TV, muebles, electricidad básica, pladur, WiFi, redes, cámaras CCTV, alarmas, control de acceso, Starlink y seguridad para negocios."
      : "THEVULGO services page in Valencia: handyman, TV mounting, furniture assembly, basic electrical, drywall, WiFi, networking, CCTV cameras, alarms, access control, Starlink and commercial security.",
    url: pageUrl,
    inLanguage: isEs ? "es" : "en",
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
        item: pageUrl,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isEs ? "Categorías de servicios en Valencia" : "Service categories in Valencia",
    itemListElement: serviceCategories.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: isEs ? service.es : service.en,
      url: `${baseUrl}/${locale}/services/${service.slug}`,
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Servicios en Valencia" : "Services in Valencia",
    serviceType: isEs
      ? "Montaje, reparaciones, redes, internet y seguridad"
      : "Mounting, repairs, networking, internet and security",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "THEVULGO",
      telephone: "+34610076942",
      url: baseUrl,
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
      name: isEs ? "Catálogo de servicios THEVULGO" : "THEVULGO service catalog",
      itemListElement: serviceCategories.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEs ? service.es : service.en,
          url: `${baseUrl}/${locale}/services/${service.slug}`,
          areaServed: "Valencia",
        },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isEs
          ? "¿Qué servicios ofrece THEVULGO en Valencia?"
          : "What services does THEVULGO offer in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "THEVULGO ofrece montaje de TV, montaje de muebles, reparaciones, electricidad básica, fontanería básica, pladur, puertas, cocina, baño, smart home, WiFi, redes, cámaras CCTV, alarmas, control de acceso, Starlink y seguridad para negocios."
            : "THEVULGO offers TV mounting, furniture assembly, repairs, basic electrical, basic plumbing, drywall, doors, kitchen, bathroom, smart home, WiFi, networking, CCTV cameras, alarms, access control, Starlink and commercial security.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Trabajáis con locales comerciales?"
          : "Do you work with commercial premises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Trabajamos con oficinas, bares, restaurantes, cafés, tiendas, gimnasios y otros negocios para instalaciones de WiFi, redes, cámaras, alarmas y control de acceso."
            : "Yes. We work with offices, bars, restaurants, cafes, shops, gyms and other businesses for WiFi, networking, CCTV, alarms and access control installations.",
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
            ? "Sí. Puedes enviar fotos, medidas y una breve descripción del trabajo por WhatsApp para recibir una estimación clara antes de confirmar la visita."
            : "Yes. You can send photos, measurements and a short description of the job by WhatsApp to receive a clear estimate before confirming the visit.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <ServicesClient />
    </>
  );
}