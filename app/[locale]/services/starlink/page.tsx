import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Euro,
  Globe2,
  Hotel,
  MapPin,
  MessageCircle,
  Radio,
  Router,
  Satellite,
  Settings,
  ShieldCheck,
  Signal,
  SignalHigh,
  Store,
  TowerControl,
  Wifi,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";

const areas = [
  "Valencia",
  "Campanar",
  "Ruzafa",
  "Russafa",
  "Benimaclet",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
  "Manises",
  "Xirivella",
  "Sagunto",
  "Cullera",
  "Gandía",
];

const starlinkPages = [
  {
    slug: "starlink-installation-valencia",
    en: "Starlink Installation",
    es: "Instalación Starlink",
    descEn: "Starlink setup, dish placement, cable routing, router setup and final testing.",
    descEs: "Instalación Starlink, ubicación de antena, cableado, router y pruebas finales.",
    icon: Satellite,
  },
  {
    slug: "starlink-mounting-valencia",
    en: "Starlink Mounting",
    es: "Montaje de Starlink",
    descEn: "Clean Starlink mounting on wall, façade, pole, balcony or suitable outdoor structure.",
    descEs: "Montaje limpio de Starlink en pared, fachada, mástil, balcón o estructura exterior.",
    icon: Satellite,
  },
  {
    slug: "starlink-roof-installation-valencia",
    en: "Starlink Roof Installation",
    es: "Instalación Starlink en tejado",
    descEn: "Roof Starlink installation with safe positioning, cable planning and signal check.",
    descEs: "Instalación Starlink en tejado con ubicación segura, cableado y revisión de señal.",
    icon: TowerControl,
  },
  {
    slug: "starlink-business-valencia",
    en: "Starlink Business",
    es: "Starlink para negocios",
    descEn: "Starlink setup for businesses, rural spaces, offices, terraces and backup internet.",
    descEs: "Starlink para negocios, zonas rurales, oficinas, terrazas e internet de respaldo.",
    icon: Building2,
  },
  {
    slug: "4g-router-installation-valencia",
    en: "4G Router Installation",
    es: "Instalación de router 4G",
    descEn: "4G router setup with SIM, antenna, WiFi, Ethernet and basic configuration.",
    descEs: "Router 4G con SIM, antena, WiFi, Ethernet y configuración básica.",
    icon: Router,
  },
  {
    slug: "5g-router-installation-valencia",
    en: "5G Router Installation",
    es: "Instalación de router 5G",
    descEn: "5G router installation for faster mobile internet, backup connection and WiFi.",
    descEs: "Instalación de router 5G para internet móvil, respaldo y WiFi.",
    icon: SignalHigh,
  },
  {
    slug: "mobile-internet-setup-valencia",
    en: "Mobile Internet Setup",
    es: "Configuración de internet móvil",
    descEn: "Mobile internet setup for homes, businesses, temporary spaces and backup networks.",
    descEs: "Internet móvil para viviendas, negocios, espacios temporales y redes de respaldo.",
    icon: Signal,
  },
  {
    slug: "internet-troubleshooting-valencia",
    en: "Internet Troubleshooting",
    es: "Diagnóstico de internet",
    descEn: "Troubleshooting slow internet, weak signal, router issues and unstable connection.",
    descEs: "Diagnóstico de internet lento, poca señal, router y conexión inestable.",
    icon: Wrench,
  },
  {
    slug: "antenna-installation-valencia",
    en: "Antenna Installation",
    es: "Instalación de antena",
    descEn: "Outdoor antenna installation for 4G, 5G, WiFi bridge and better signal.",
    descEs: "Instalación de antenas exteriores para 4G, 5G, puente WiFi y mejor señal.",
    icon: Radio,
  },
  {
    slug: "outdoor-antenna-valencia",
    en: "Outdoor Antenna",
    es: "Antena exterior",
    descEn: "Outdoor antenna mounting, direction, cable routing and signal testing.",
    descEs: "Montaje de antena exterior, orientación, cableado y prueba de señal.",
    icon: TowerControl,
  },
  {
    slug: "wifi-bridge-valencia",
    en: "WiFi Bridge",
    es: "Puente WiFi",
    descEn: "Wireless bridge setup between buildings, terraces, offices or outdoor areas.",
    descEs: "Puente inalámbrico entre edificios, terrazas, oficinas o zonas exteriores.",
    icon: Wifi,
  },
  {
    slug: "point-to-point-wireless-valencia",
    en: "Point-to-Point Wireless",
    es: "Enlace inalámbrico punto a punto",
    descEn: "Point-to-point wireless links for sharing internet between two locations.",
    descEs: "Enlaces inalámbricos punto a punto para compartir internet entre dos ubicaciones.",
    icon: Globe2,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Starlink e internet en Valencia | Antenas, 4G/5G y WiFi bridge | THEVULGO"
    : "Starlink & Internet in Valencia | Antennas, 4G/5G & WiFi Bridge | THEVULGO";

  const description = isEs
    ? "Instalación de Starlink, antenas exteriores, routers 4G/5G, internet móvil, diagnóstico de internet, WiFi bridge y enlaces punto a punto en Valencia."
    : "Starlink installation, outdoor antennas, 4G/5G routers, mobile internet, internet troubleshooting, WiFi bridge and point-to-point wireless links in Valencia.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "starlink valencia",
          "instalacion starlink valencia",
          "montaje starlink valencia",
          "starlink tejado valencia",
          "router 4g valencia",
          "router 5g valencia",
          "internet movil valencia",
          "antena exterior valencia",
          "wifi bridge valencia",
          "enlace punto a punto valencia",
          "internet rural valencia",
          "diagnostico internet valencia",
        ]
      : [
          "starlink valencia",
          "starlink installation valencia",
          "starlink mounting valencia",
          "starlink roof installation valencia",
          "4g router installation valencia",
          "5g router installation valencia",
          "mobile internet setup valencia",
          "outdoor antenna valencia",
          "wifi bridge valencia",
          "point to point wireless valencia",
          "rural internet valencia",
          "internet troubleshooting valencia",
        ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/starlink-internet`,
      languages: {
        es: `${baseUrl}/es/services/starlink-internet`,
        en: `${baseUrl}/en/services/starlink-internet`,
        "x-default": `${baseUrl}/es/services/starlink-internet`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/starlink-internet`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}
export default async function StarlinkInternetPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/services/starlink-internet`;
  const estimateHref = `/${locale}/estimate?category=starlink-internet`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito ayuda con Starlink, internet móvil, antena exterior o enlace inalámbrico en Valencia. Quiero pedir presupuesto."
      : "Hi, I need help with Starlink, mobile internet, outdoor antenna or wireless link in Valencia. I’d like to request an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const prices = isEs
    ? [
        ["Diagnóstico de internet", "desde 49 €"],
        ["Instalación de router 4G/5G", "desde 79 €"],
        ["Montaje de Starlink", "desde 79 €"],
        ["Starlink en tejado", "desde 99 €"],
        ["Antena exterior", "desde 89 €"],
        ["WiFi bridge", "desde 99 €"],
        ["Enlace punto a punto", "desde 129 €"],
        ["Internet para negocio", "desde 129 €"],
      ]
    : [
        ["Internet diagnostics", "from €49"],
        ["4G/5G router installation", "from €79"],
        ["Starlink mounting", "from €79"],
        ["Starlink roof installation", "from €99"],
        ["Outdoor antenna", "from €89"],
        ["WiFi bridge", "from €99"],
        ["Point-to-point wireless", "from €129"],
        ["Business internet setup", "from €129"],
      ];

  const clientTypes = [
    {
      title: isEs ? "Casas y zonas rurales" : "Homes and rural areas",
      text: isEs
        ? "Starlink, routers 4G/5G, antenas exteriores y soluciones cuando la fibra no llega bien."
        : "Starlink, 4G/5G routers, outdoor antennas and solutions when fiber is not available or stable.",
      icon: Satellite,
    },
    {
      title: isEs ? "Negocios y oficinas" : "Businesses and offices",
      text: isEs
        ? "Internet principal o de respaldo para oficinas, restaurantes, tiendas, almacenes y locales."
        : "Main or backup internet for offices, restaurants, shops, warehouses and commercial units.",
      icon: Building2,
    },
    {
      title: isEs ? "Terrazas y exteriores" : "Terraces and outdoor areas",
      text: isEs
        ? "Antenas exteriores, WiFi bridge y enlaces para llevar internet a zonas separadas."
        : "Outdoor antennas, WiFi bridge and links to bring internet to separated areas.",
      icon: TowerControl,
    },
    {
      title: isEs ? "Hoteles y alojamientos" : "Hotels and accommodation",
      text: isEs
        ? "Soluciones de internet para huéspedes, zonas comunes, apartamentos turísticos y espacios remotos."
        : "Internet solutions for guests, shared areas, tourist apartments and remote spaces.",
      icon: Hotel,
    },
  ];

  const process = isEs
    ? [
        ["1. Envía fotos", "Manda fotos de la zona, tejado, fachada, router, antena o ubicación exterior."],
        ["2. Revisamos el caso", "Se define si conviene Starlink, router 4G/5G, antena exterior o enlace WiFi."],
        ["3. Presupuesto claro", "Se calcula montaje, cableado, materiales, altura, acceso y configuración."],
        ["4. Instalación y ajuste", "Se instala antena, router, Starlink o enlace inalámbrico y se configura."],
        ["5. Prueba final", "Se comprueba señal, velocidad, estabilidad, WiFi y funcionamiento real."],
      ]
    : [
        ["1. Send photos", "Send photos of the area, roof, façade, router, antenna or outdoor location."],
        ["2. Review the case", "We check if Starlink, 4G/5G router, outdoor antenna or WiFi link fits best."],
        ["3. Clear estimate", "Mounting, cabling, materials, height, access and configuration are estimated."],
        ["4. Install and setup", "Antenna, router, Starlink or wireless link is installed and configured."],
        ["5. Final testing", "Signal, speed, stability, WiFi and real operation are checked."],
      ];

  const whyChoose = isEs
    ? [
        "Instalación limpia de Starlink, routers y antenas",
        "Soluciones para casas, negocios, terrazas y zonas rurales",
        "Ayuda con internet principal o conexión de respaldo",
        "Revisión de señal, ubicación y orientación",
        "Cableado ordenado y configuración de router",
        "WiFi bridge y enlaces punto a punto",
        "Diagnóstico de internet lento o inestable",
        "Comunicación directa por WhatsApp",
      ]
    : [
        "Clean installation of Starlink, routers and antennas",
        "Solutions for homes, businesses, terraces and rural areas",
        "Help with main internet or backup connection",
        "Signal, location and direction checks",
        "Tidy cabling and router configuration",
        "WiFi bridge and point-to-point wireless links",
        "Slow or unstable internet diagnostics",
        "Direct communication by WhatsApp",
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar Starlink en Valencia?",
          a: "Depende de la ubicación, altura, tipo de montaje, cableado, acceso al tejado o fachada y configuración. Un montaje básico puede empezar desde 79–99 €.",
        },
        {
          q: "¿Instaláis Starlink en tejado?",
          a: "Sí. Podemos revisar la ubicación, acceso, orientación, cableado y tipo de soporte necesario para instalar Starlink en tejado o fachada.",
        },
        {
          q: "¿Configuráis routers 4G o 5G?",
          a: "Sí. Podemos configurar router 4G/5G, SIM, WiFi, Ethernet, antena exterior y pruebas de velocidad.",
        },
        {
          q: "¿Podéis instalar antenas exteriores?",
          a: "Sí. Instalamos antenas exteriores para mejorar señal 4G/5G, WiFi bridge o enlaces inalámbricos según el caso.",
        },
        {
          q: "¿Qué es un WiFi bridge?",
          a: "Es un enlace inalámbrico entre dos puntos para llevar internet de un edificio o zona a otra sin pasar cable entre ambos.",
        },
        {
          q: "¿Podéis revisar internet lento o inestable?",
          a: "Sí. Podemos revisar señal, router, ubicación, cableado, WiFi, antena, proveedor y configuración general.",
        },
        {
          q: "¿Puedo comprar yo el equipo?",
          a: "Sí. Puedes comprar Starlink, router, antena o bridge y enviarnos el modelo o enlace antes de la instalación para revisar compatibilidad.",
        },
        {
          q: "¿Trabajáis con negocios?",
          a: "Sí. Podemos ayudar con internet para oficinas, restaurantes, tiendas, almacenes, terrazas, hoteles y espacios remotos.",
        },
      ]
    : [
        {
          q: "How much does Starlink installation in Valencia cost?",
          a: "It depends on location, height, mounting type, cabling, roof or façade access and configuration. A basic mounting job can start from €79–99.",
        },
        {
          q: "Do you install Starlink on roofs?",
          a: "Yes. We can check location, access, direction, cabling and the type of mount needed for roof or façade Starlink installation.",
        },
        {
          q: "Do you configure 4G or 5G routers?",
          a: "Yes. We can configure 4G/5G routers, SIM, WiFi, Ethernet, outdoor antenna and speed testing.",
        },
        {
          q: "Do you install outdoor antennas?",
          a: "Yes. We install outdoor antennas to improve 4G/5G signal, WiFi bridge or wireless links depending on the case.",
        },
        {
          q: "What is a WiFi bridge?",
          a: "It is a wireless link between two points to bring internet from one building or area to another without running cable between them.",
        },
        {
          q: "Can you check slow or unstable internet?",
          a: "Yes. We can check signal, router, placement, cabling, WiFi, antenna, provider and general configuration.",
        },
        {
          q: "Can I buy the equipment myself?",
          a: "Yes. You can buy Starlink, router, antenna or bridge and send us the model or link before installation so compatibility can be checked.",
        },
        {
          q: "Do you work with businesses?",
          a: "Yes. We can help with internet for offices, restaurants, shops, warehouses, terraces, hotels and remote spaces.",
        },
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: "THEVULGO",
        url: baseUrl,
        telephone: `+${phone}`,
        priceRange: "€€",
        areaServed: areas,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valencia",
          addressRegion: "Valencia",
          addressCountry: "ES",
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: isEs
          ? "Starlink e internet en Valencia"
          : "Starlink and internet services in Valencia",
        serviceType: isEs
          ? "Instalación de Starlink, antenas e internet móvil"
          : "Starlink, antenna and mobile internet installation",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Instalación y configuración de Starlink, routers 4G/5G, internet móvil, antenas exteriores, WiFi bridge y enlaces inalámbricos punto a punto en Valencia."
          : "Installation and configuration of Starlink, 4G/5G routers, mobile internet, outdoor antennas, WiFi bridge and point-to-point wireless links in Valencia.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios Starlink e internet en Valencia"
            : "Starlink and internet services in Valencia",
          itemListElement: starlinkPages.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: isEs ? item.es : item.en,
              url: `${baseUrl}/${locale}/services/starlink-internet/${item.slug}`,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
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
            name: isEs ? "Starlink e internet" : "Starlink & Internet",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-b from-yellow-50 via-white to-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />
          <div className="absolute right-10 top-20 h-[320px] w-[320px] rounded-full bg-yellow-100/70 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              THEVULGO • Valencia & nearby
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              {isEs
                ? "Starlink e internet en Valencia para viviendas y negocios"
                : "Starlink and internet installation in Valencia for homes and businesses"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Instalación y configuración de Starlink, routers 4G/5G, internet móvil, antenas exteriores, WiFi bridge y enlaces inalámbricos punto a punto para viviendas, negocios, terrazas, hoteles, oficinas y zonas rurales."
                : "Installation and configuration of Starlink, 4G/5G routers, mobile internet, outdoor antennas, WiFi bridge and point-to-point wireless links for homes, businesses, terraces, hotels, offices and rural areas."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs
                  ? "Pedir presupuesto por WhatsApp"
                  : "Request estimate by WhatsApp"}
              </a>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-4 font-bold shadow-sm transition hover:scale-105"
              >
                {isEs ? "Abrir formulario" : "Open estimate form"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Clock3,
                  title: isEs ? "Diagnóstico rápido" : "Fast diagnosis",
                  text: isEs
                    ? "Envía fotos de router, antena, tejado o zona exterior."
                    : "Send photos of router, antenna, roof or outdoor area.",
                },
                {
                  icon: SignalHigh,
                  title: isEs ? "Mejor señal" : "Better signal",
                  text: isEs
                    ? "Starlink, 4G/5G, antenas exteriores y enlaces WiFi."
                    : "Starlink, 4G/5G, outdoor antennas and WiFi links.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Hogar y negocio" : "Home and business",
                  text: isEs
                    ? "Internet para casas, oficinas, terrazas y zonas rurales."
                    : "Internet for homes, offices, terraces and rural areas.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-yellow-300 bg-white p-5 shadow-md"
                >
                  <item.icon className="mb-3 h-6 w-6 text-yellow-500" />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Satellite className="h-4 w-4" />
              {isEs ? "Servicios de internet" : "Internet services"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Elige el servicio de Starlink o internet que necesitas"
                : "Choose the Starlink or internet service you need"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "Estas tarjetas serán después páginas individuales para SEO y campañas de Google Ads: Starlink, routers 4G/5G, antenas exteriores, internet móvil, WiFi bridge, enlaces punto a punto y diagnóstico de internet."
                : "These cards will later become individual SEO and Google Ads landing pages: Starlink, 4G/5G routers, outdoor antennas, mobile internet, WiFi bridge, point-to-point links and internet troubleshooting."}
            </p>
          </div>

          <Link
            href={`/${locale}/estimate?category=starlink-internet`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto" : "Request estimate"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {starlinkPages.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/services/starlink-internet/${item.slug}`}
              className="group rounded-2xl border border-yellow-300 bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-black">
                {isEs ? item.es : item.en}
              </h3>

              <p className="mt-3 leading-7 text-neutral-700">
                {isEs ? item.descEs : item.descEn}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 font-bold text-neutral-950">
                {isEs ? "Ver servicio" : "View service"}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
                <Euro className="h-4 w-4 text-yellow-500" />
                {isEs ? "Precios orientativos" : "Guide prices"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Presupuesto claro para Starlink, antenas y routers 4G/5G"
                  : "Clear estimate for Starlink, antennas and 4G/5G routers"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio depende de la ubicación, altura, acceso, tipo de soporte, cableado, router, antena, orientación y configuración necesaria."
                  : "The price depends on location, height, access, mount type, cabling, router, antenna, direction and required configuration."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de instalar, revisamos dónde está el router, dónde puede ir la antena, si hay obstáculos, cómo pasar el cable y qué velocidad o estabilidad necesita el cliente."
                  : "Before installation, we check where the router is, where the antenna can go, if there are obstacles, how to route the cable and what speed or stability the client needs."}
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-xl">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <Euro className="h-6 w-6 text-yellow-500" />
                {isEs ? "Precios desde" : "Prices from"}
              </h3>

              <div className="mt-5 space-y-3">
                {prices.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-4 rounded-xl bg-yellow-50 p-4"
                  >
                    <span className="font-semibold">{name}</span>
                    <span className="shrink-0 font-black">{price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "El precio final depende del equipo, cableado, altura, acceso, tipo de pared o tejado, configuración, materiales y tiempo necesario."
                  : "Final price depends on equipment, cabling, height, access, wall or roof type, configuration, materials and time required."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <Globe2 className="h-4 w-4" />
            {isEs ? "Para quién" : "Who it is for"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs
              ? "Internet para viviendas, negocios, terrazas, hoteles y zonas rurales"
              : "Internet for homes, businesses, terraces, hotels and rural areas"}
          </h2>

          <p className="mx-auto mt-4 max-w-4xl leading-8 text-neutral-700">
            {isEs
              ? "Cuando la fibra no llega bien o se necesita una conexión de respaldo, Starlink, routers 4G/5G, antenas exteriores y enlaces inalámbricos pueden ser una solución práctica."
              : "When fiber is not available or a backup connection is needed, Starlink, 4G/5G routers, outdoor antennas and wireless links can be a practical solution."}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-neutral-900 px-4 py-1 text-xs font-bold text-yellow-400">
                <BadgeCheck className="h-4 w-4" />
                {isEs ? "Por qué THEVULGO" : "Why THEVULGO"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Por qué elegir THEVULGO para Starlink e internet"
                  : "Why choose THEVULGO for Starlink and internet"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "No se trata solo de colocar una antena. Una conexión estable necesita buena ubicación, orientación, cableado limpio, router configurado y pruebas reales de señal y velocidad."
                  : "It is not just about placing an antenna. A stable connection needs good placement, direction, tidy cabling, router configuration and real signal and speed testing."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-700 bg-neutral-950 p-5"
                >
                  <CheckCircle2 className="mb-3 h-5 w-5 text-yellow-400" />
                  <p className="text-sm font-semibold leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <Settings className="h-4 w-4" />
            {isEs ? "Cómo funciona" : "How it works"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs
              ? "De fotos por WhatsApp a internet funcionando"
              : "From WhatsApp photos to working internet"}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {process.map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-md"
            >
              <h3 className="font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
                <TowerControl className="h-4 w-4 text-yellow-500" />
                {isEs ? "Antenas y exterior" : "Antennas and outdoor"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Starlink, antenas exteriores y enlaces inalámbricos"
                  : "Starlink, outdoor antennas and wireless links"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Para conseguir buena señal, muchas veces la ubicación exterior es lo más importante: tejado, fachada, mástil, terraza, balcón o zona con visión despejada."
                  : "To get good signal, outdoor placement is often the most important factor: roof, façade, pole, terrace, balcony or an area with clear line of sight."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "También podemos ayudar con enlaces WiFi punto a punto para llevar internet entre dos zonas sin pasar cable entre ellas."
                  : "We can also help with point-to-point WiFi links to bring internet between two areas without running cable between them."}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {(isEs
                ? [
                    "Montaje de Starlink",
                    "Instalación en tejado",
                    "Antena exterior 4G/5G",
                    "Orientación de antena",
                    "Cableado limpio",
                    "Router 4G/5G",
                    "WiFi bridge",
                    "Enlace punto a punto",
                  ]
                : [
                    "Starlink mounting",
                    "Roof installation",
                    "4G/5G outdoor antenna",
                    "Antenna direction",
                    "Tidy cabling",
                    "4G/5G router",
                    "WiFi bridge",
                    "Point-to-point link",
                  ]).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                  <span className="text-sm leading-7 text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-yellow-300 bg-white p-8 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
              <Satellite className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs
                ? "Antes de instalar Starlink"
                : "Before installing Starlink"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Antes de perforar o montar el soporte, hay que revisar la visión al cielo, obstáculos, recorrido del cable, ubicación del router, acceso al tejado o fachada y forma segura de fijación."
                : "Before drilling or mounting the bracket, the sky view, obstacles, cable route, router location, roof or façade access and safe fixing method must be checked."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Visión despejada al cielo",
                    "Tejado, fachada o mástil",
                    "Recorrido del cable",
                    "Ubicación del router",
                    "Prueba de señal final",
                  ]
                : [
                    "Clear sky view",
                    "Roof, façade or pole",
                    "Cable route",
                    "Router location",
                    "Final signal test",
                  ]).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-yellow-500" />
                  <span className="text-sm leading-7 text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-8 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
              <Router className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs
                ? "Internet 4G/5G y conexión de respaldo"
                : "4G/5G internet and backup connection"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Para negocios, un router 4G/5G puede servir como internet principal o como respaldo si falla la fibra. Esto puede ser importante para TPV, cámaras, reservas, música, WiFi de clientes o trabajo diario."
                : "For businesses, a 4G/5G router can work as main internet or backup if fiber fails. This can be important for POS, cameras, bookings, music, guest WiFi or daily work."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Router con SIM",
                    "Antena exterior si hace falta",
                    "WiFi y Ethernet",
                    "Prueba de velocidad",
                    "Backup para negocio",
                  ]
                : [
                    "Router with SIM",
                    "Outdoor antenna if needed",
                    "WiFi and Ethernet",
                    "Speed test",
                    "Business backup",
                  ]).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-yellow-500" />
                  <span className="text-sm leading-7 text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <BadgeCheck className="h-4 w-4 text-yellow-500" />
              FAQ
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-black">{faq.q}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-yellow-400 bg-yellow-400 p-8 shadow-2xl lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                {isEs
                  ? "¿Necesitas Starlink o una solución de internet en Valencia?"
                  : "Need Starlink or an internet solution in Valencia?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos de la zona, tejado, fachada, router, antena o ubicación exterior. Revisamos el caso y te damos una estimación clara antes de confirmar la visita."
                  : "Send photos of the area, roof, façade, router, antenna or outdoor location. We review the case and give you a clear estimate before confirming the visit."}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-bold text-white shadow-lg transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black bg-white px-6 py-4 font-bold text-black shadow-sm transition hover:scale-105"
              >
                {isEs ? "Pedir presupuesto" : "Request estimate"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}