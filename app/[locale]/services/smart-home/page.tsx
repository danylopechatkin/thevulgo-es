import type { Metadata } from "next";
import SmartHomeClient from "./SmartHomeClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Hogar inteligente en Valencia | Cámaras, cerraduras y sensores | THEVULGO"
    : "Smart Home Installation in Valencia | Cameras, Locks & Sensors | THEVULGO";

  const description = isEs
    ? "Instalación de hogar inteligente en Valencia: cámaras, videoporteros, cerraduras inteligentes, sensores, enchufes, luces, hubs, Wi-Fi, sirenas y configuración de apps."
    : "Smart home installation in Valencia: cameras, video doorbells, smart locks, sensors, plugs, lights, hubs, Wi-Fi, sirens and app setup.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "hogar inteligente Valencia",
          "instalación cámaras Valencia",
          "cámara inteligente Valencia",
          "videoportero Valencia",
          "cerradura inteligente Valencia",
          "sensores inteligentes Valencia",
          "enchufe inteligente Valencia",
          "smart home Valencia",
        ]
      : [
          "smart home Valencia",
          "smart home installation Valencia",
          "smart camera installation Valencia",
          "video doorbell Valencia",
          "smart lock Valencia",
          "smart sensors Valencia",
          "smart plug setup Valencia",
          "home automation Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/smart-home`,
      languages: {
        es: `${baseUrl}/es/services/smart-home`,
        en: `${baseUrl}/en/services/smart-home`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/smart-home`,
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

export default async function SmartHomePage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/smart-home`;

  const offers = [
    "Smart camera installation",
    "Video doorbell installation",
    "Smart lock installation",
    "Wi-Fi camera setup",
    "Battery camera mounting",
    "Wired smart camera mounting",
    "Smart curtain motor setup",
    "Smart sensor installation",
    "Door and window sensor setup",
    "Motion sensor installation",
    "Smart plug setup",
    "Smart switch setup",
    "Smart light setup",
    "Smart energy monitor setup",
    "Smart LED strip setup",
    "Hub and bridge setup",
    "Wi-Fi extender placement",
    "Router and smart device pairing",
    "Intercom device setup",
    "Smart alarm device setup",
    "Indoor siren setup",
    "Outdoor siren mounting",
    "Smart thermostat setup",
    "Voice assistant device setup",
    "Smart display setup",
    "App connection help",
    "Smart home troubleshooting",
    "Camera angle optimization",
    "Entry access device setup",
    "Smart home room setup",
    "Apartment smart setup",
    "Device repositioning and optimization",
    "Multiple smart home tasks",
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalación de hogar inteligente en Valencia"
      : "Smart home installation services in Valencia",
    description: isEs
      ? "Instalación y configuración de cámaras inteligentes, videoporteros, cerraduras inteligentes, sensores, enchufes, luces, hubs, sirenas, termostatos, Wi-Fi y dispositivos conectados en Valencia."
      : "Installation and setup of smart cameras, video doorbells, smart locks, sensors, plugs, lights, hubs, sirens, thermostats, Wi-Fi and connected home devices in Valencia.",
    serviceType: isEs
      ? "Instalación de hogar inteligente"
      : "Smart home installation",
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
        ? "Servicios de hogar inteligente"
        : "Smart home service catalog",
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
        name: isEs ? "Hogar inteligente" : "Smart Home",
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
          ? "¿Qué dispositivos de hogar inteligente instala THEVULGO?"
          : "What smart home devices does THEVULGO install?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "THEVULGO instala y configura cámaras inteligentes, videoporteros, cerraduras inteligentes, sensores, enchufes, luces, hubs, sirenas, termostatos, asistentes de voz y otros dispositivos conectados compatibles."
            : "THEVULGO installs and configures smart cameras, video doorbells, smart locks, sensors, plugs, lights, hubs, sirens, thermostats, voice assistants and other compatible connected devices.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Puedo instalar varios dispositivos en una sola visita?"
          : "Can several smart devices be installed in one visit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Cámaras, sensores, enchufes, luces, cerraduras y configuración de apps pueden agruparse en una sola visita con presupuesto combinado."
            : "Yes. Cameras, sensors, plugs, lights, locks and app setup can be grouped into one visit with a combined estimate.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Ayudáis con conexión Wi-Fi y apps?"
          : "Do you help with Wi-Fi and app connection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Se puede ayudar con vinculación básica, conexión Wi-Fi, apps y configuración inicial cuando los dispositivos y la red son compatibles."
            : "Yes. Basic pairing, Wi-Fi connection, app setup and initial configuration can be included when devices and network conditions are compatible.",
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
            ? "Sí. Puedes enviar fotos, modelos de dispositivos y una lista de lo que quieres instalar para recibir una estimación clara."
            : "Yes. You can send photos, device models and a list of what you want installed to receive a clear estimate.",
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

      <SmartHomeClient />
    </>
  );
}