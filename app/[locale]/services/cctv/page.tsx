import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  CheckCircle2,
  Clock3,
  Euro,
  Eye,
  HardDrive,
  Home,
  Hotel,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Settings,
  ShieldCheck,
  Store,
  Warehouse,
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

const cctvPages = [
  {
    slug: "cctv-installation-valencia",
    en: "CCTV Installation Valencia",
    es: "Instalación CCTV Valencia",
    descEn: "CCTV camera installation for homes, shops, offices, bars and commercial spaces.",
    descEs: "Instalación de cámaras CCTV para viviendas, tiendas, oficinas, bares y locales.",
    icon: Camera,
  },
  {
    slug: "security-camera-installation-valencia",
    en: "Security Camera Installation",
    es: "Instalación de cámaras de seguridad",
    descEn: "Security cameras with clean mounting, cable routing, app setup and testing.",
    descEs: "Cámaras de seguridad con montaje limpio, cableado, app y pruebas finales.",
    icon: ShieldCheck,
  },
  {
    slug: "ip-camera-installation-valencia",
    en: "IP Camera Installation",
    es: "Instalación de cámaras IP",
    descEn: "IP camera setup for NVR systems, PoE switches, routers and remote viewing.",
    descEs: "Configuración de cámaras IP con NVR, switches PoE, router y acceso remoto.",
    icon: Wifi,
  },
  {
    slug: "outdoor-cameras-valencia",
    en: "Outdoor Cameras",
    es: "Cámaras exteriores",
    descEn: "Outdoor security cameras for terraces, entrances, façades, garages and businesses.",
    descEs: "Cámaras exteriores para terrazas, entradas, fachadas, garajes y negocios.",
    icon: Eye,
  },
  {
    slug: "indoor-cameras-valencia",
    en: "Indoor Cameras",
    es: "Cámaras interiores",
    descEn: "Indoor camera installation for homes, offices, shops, storage areas and corridors.",
    descEs: "Cámaras interiores para viviendas, oficinas, tiendas, almacenes y pasillos.",
    icon: Home,
  },
  {
    slug: "commercial-cctv-valencia",
    en: "Commercial CCTV",
    es: "CCTV para negocios",
    descEn: "CCTV systems for offices, bars, restaurants, shops, warehouses and commercial units.",
    descEs: "Sistemas CCTV para oficinas, bares, restaurantes, tiendas, almacenes y locales.",
    icon: Building2,
  },
  {
    slug: "restaurant-cctv-valencia",
    en: "Restaurant CCTV",
    es: "CCTV para restaurantes",
    descEn: "Camera installation for restaurants, bars, cafés, kitchens, entrances and terraces.",
    descEs: "Cámaras para restaurantes, bares, cafés, cocinas, entradas y terrazas.",
    icon: Store,
  },
  {
    slug: "office-cctv-valencia",
    en: "Office CCTV",
    es: "CCTV para oficinas",
    descEn: "Office camera systems for entrances, corridors, work areas and shared spaces.",
    descEs: "Cámaras para oficinas, entradas, pasillos, zonas de trabajo y espacios comunes.",
    icon: Building2,
  },
  {
    slug: "warehouse-cctv-valencia",
    en: "Warehouse CCTV",
    es: "CCTV para almacenes",
    descEn: "CCTV coverage for warehouses, stockrooms, loading areas and large spaces.",
    descEs: "Cobertura CCTV para almacenes, stock, zonas de carga y espacios grandes.",
    icon: Warehouse,
  },
  {
    slug: "shop-cctv-valencia",
    en: "Shop CCTV",
    es: "CCTV para tiendas",
    descEn: "Security cameras for shops, POS areas, entrances, shelves and storage rooms.",
    descEs: "Cámaras para tiendas, TPV, entradas, estanterías y zonas de almacén.",
    icon: Store,
  },
  {
    slug: "home-cctv-valencia",
    en: "Home CCTV",
    es: "CCTV para viviendas",
    descEn: "Home security cameras for apartments, houses, entrances, garages and terraces.",
    descEs: "Cámaras para pisos, casas, entradas, garajes, terrazas y zonas comunes.",
    icon: Home,
  },
  {
    slug: "nvr-installation-valencia",
    en: "NVR Installation",
    es: "Instalación de NVR",
    descEn: "NVR setup, camera connection, recording configuration and remote access.",
    descEs: "Instalación de NVR, conexión de cámaras, grabación y acceso remoto.",
    icon: HardDrive,
  },
  {
    slug: "dvr-installation-valencia",
    en: "DVR Installation",
    es: "Instalación de DVR",
    descEn: "DVR installation for analog camera systems, recording setup and mobile viewing.",
    descEs: "Instalación de DVR para cámaras analógicas, grabación y visualización móvil.",
    icon: HardDrive,
  },
  {
    slug: "camera-configuration-valencia",
    en: "Camera Configuration",
    es: "Configuración de cámaras",
    descEn: "Camera settings, recording schedules, image adjustment and app configuration.",
    descEs: "Ajustes de cámara, horarios de grabación, imagen y configuración de app.",
    icon: Settings,
  },
  {
    slug: "remote-viewing-setup-valencia",
    en: "Remote Viewing Setup",
    es: "Configuración de acceso remoto",
    descEn: "Mobile app setup to view cameras remotely from phone, tablet or computer.",
    descEs: "Configuración de app móvil para ver cámaras desde teléfono, tablet u ordenador.",
    icon: MonitorSmartphone,
  },
  {
    slug: "hikvision-installation-valencia",
    en: "Hikvision Installation",
    es: "Instalación Hikvision",
    descEn: "Hikvision camera, NVR, app and remote viewing setup in Valencia.",
    descEs: "Instalación de cámaras Hikvision, NVR, app y acceso remoto en Valencia.",
    icon: Camera,
  },
  {
    slug: "dahua-installation-valencia",
    en: "Dahua Installation",
    es: "Instalación Dahua",
    descEn: "Dahua CCTV installation, recorder setup, camera configuration and mobile access.",
    descEs: "Instalación Dahua, grabador, configuración de cámaras y acceso móvil.",
    icon: Camera,
  },
  {
    slug: "reolink-installation-valencia",
    en: "Reolink Installation",
    es: "Instalación Reolink",
    descEn: "Reolink camera installation, app setup, WiFi or PoE configuration.",
    descEs: "Instalación Reolink, app, configuración WiFi o PoE y pruebas.",
    icon: Camera,
  },
  {
    slug: "tp-link-vigi-installation-valencia",
    en: "TP-Link VIGI Installation",
    es: "Instalación TP-Link VIGI",
    descEn: "TP-Link VIGI cameras, NVR, PoE switch and remote access configuration.",
    descEs: "Cámaras TP-Link VIGI, NVR, switch PoE y configuración de acceso remoto.",
    icon: Camera,
  },
  {
    slug: "ubiquiti-protect-valencia",
    en: "Ubiquiti Protect",
    es: "Ubiquiti Protect",
    descEn: "Ubiquiti Protect camera setup for UniFi networks and business security.",
    descEs: "Configuración Ubiquiti Protect para redes UniFi y seguridad de negocios.",
    icon: Wifi,
  },
  {
    slug: "camera-maintenance-valencia",
    en: "Camera Maintenance",
    es: "Mantenimiento de cámaras",
    descEn: "Camera cleaning, angle adjustment, recording checks and system review.",
    descEs: "Limpieza, ajuste de ángulo, revisión de grabación y comprobación del sistema.",
    icon: Wrench,
  },
  {
    slug: "camera-repair-valencia",
    en: "Camera Repair",
    es: "Reparación de cámaras",
    descEn: "Troubleshooting camera offline errors, image issues, cable faults and recorder problems.",
    descEs: "Diagnóstico de cámaras offline, problemas de imagen, cableado y grabador.",
    icon: Wrench,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Cámaras CCTV en Valencia | Instalación, NVR y acceso remoto | THEVULGO"
    : "CCTV Cameras in Valencia | Installation, NVR & Remote Viewing | THEVULGO";

  const description = isEs
    ? "Instalación de cámaras CCTV en Valencia para viviendas y negocios: cámaras IP, NVR, DVR, Hikvision, Dahua, Reolink, TP-Link VIGI, acceso remoto y mantenimiento."
    : "CCTV camera installation in Valencia for homes and businesses: IP cameras, NVR, DVR, Hikvision, Dahua, Reolink, TP-Link VIGI, remote viewing and maintenance.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "cctv valencia",
          "instalacion camaras valencia",
          "camaras seguridad valencia",
          "instalacion cctv valencia",
          "camaras ip valencia",
          "nvr valencia",
          "hikvision valencia",
          "dahua valencia",
          "reolink valencia",
          "tp-link vigi valencia",
          "camaras negocio valencia",
          "cctv restaurante valencia",
          "cctv oficina valencia",
        ]
      : [
          "cctv valencia",
          "cctv installation valencia",
          "security camera installation valencia",
          "ip camera installation valencia",
          "nvr installation valencia",
          "hikvision installation valencia",
          "dahua installation valencia",
          "reolink installation valencia",
          "tp-link vigi valencia",
          "commercial cctv valencia",
          "restaurant cctv valencia",
          "office cctv valencia",
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
      canonical: `${baseUrl}/${locale}/services/cctv`,
      languages: {
        es: `${baseUrl}/es/services/cctv`,
        en: `${baseUrl}/en/services/cctv`,
        "x-default": `${baseUrl}/es/services/cctv`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/cctv`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}
export default async function CctvPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/services/cctv`;
  const estimateHref = `/${locale}/estimate?category=cctv`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito ayuda con cámaras CCTV o cámaras de seguridad en Valencia. Quiero pedir presupuesto."
      : "Hi, I need help with CCTV or security cameras in Valencia. I’d like to request an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const prices = isEs
    ? [
        ["Diagnóstico de cámaras", "desde 49 €"],
        ["Instalación de cámara interior", "desde 59 €"],
        ["Instalación de cámara exterior", "desde 69 €"],
        ["Configuración de app / acceso remoto", "desde 49 €"],
        ["Instalación de NVR / DVR", "desde 79 €"],
        ["Cámara IP / PoE", "desde 69 €"],
        ["CCTV para negocio", "desde 99 €"],
        ["Mantenimiento de cámaras", "desde 49 €"],
      ]
    : [
        ["Camera diagnostics", "from €49"],
        ["Indoor camera installation", "from €59"],
        ["Outdoor camera installation", "from €69"],
        ["App / remote viewing setup", "from €49"],
        ["NVR / DVR installation", "from €79"],
        ["IP / PoE camera", "from €69"],
        ["Business CCTV", "from €99"],
        ["Camera maintenance", "from €49"],
      ];

  const clientTypes = [
    {
      title: isEs ? "Viviendas y apartamentos" : "Homes and apartments",
      text: isEs
        ? "Cámaras para entradas, terrazas, garajes, pasillos, zonas comunes y viviendas particulares."
        : "Cameras for entrances, terraces, garages, corridors, shared areas and private homes.",
      icon: Home,
    },
    {
      title: isEs ? "Bares y restaurantes" : "Bars and restaurants",
      text: isEs
        ? "CCTV para entradas, caja, terraza, cocina, almacén, barra y zonas de clientes."
        : "CCTV for entrances, cash desk, terrace, kitchen, storage, bar area and client areas.",
      icon: Store,
    },
    {
      title: isEs ? "Oficinas y locales" : "Offices and units",
      text: isEs
        ? "Cámaras para accesos, pasillos, zonas de trabajo, recepción, salas y espacios compartidos."
        : "Cameras for access points, corridors, work areas, reception, rooms and shared spaces.",
      icon: Building2,
    },
    {
      title: isEs ? "Tiendas y almacenes" : "Shops and warehouses",
      text: isEs
        ? "Cámaras para TPV, estanterías, stock, zonas de carga, entrada, almacén y grandes espacios."
        : "Cameras for POS, shelves, stock, loading areas, entrance, warehouse and large spaces.",
      icon: Warehouse,
    },
  ];

  const process = isEs
    ? [
        ["1. Envía fotos", "Manda fotos de la zona, entrada, pared, techo, router, NVR o cámara actual."],
        ["2. Revisamos el caso", "Se revisa si conviene cámara WiFi, PoE, NVR, DVR, exterior o interior."],
        ["3. Presupuesto claro", "Se calcula mano de obra, cableado, materiales, altura, acceso y configuración."],
        ["4. Instalación limpia", "Se instala la cámara, se orienta, se cablea y se configura el grabador o app."],
        ["5. Prueba final", "Se comprueba imagen, grabación, acceso remoto, ángulo y funcionamiento real."],
      ]
    : [
        ["1. Send photos", "Send photos of the area, entrance, wall, ceiling, router, NVR or current camera."],
        ["2. Review the case", "We check if WiFi, PoE, NVR, DVR, outdoor or indoor cameras fit best."],
        ["3. Clear estimate", "Labor, cabling, materials, height, access and configuration are estimated."],
        ["4. Clean installation", "The camera is mounted, aimed, cabled and connected to recorder or app."],
        ["5. Final testing", "Image, recording, remote access, angle and real operation are checked."],
      ];

  const whyChoose = isEs
    ? [
        "Instalación limpia y bien orientada",
        "Cámaras para viviendas y negocios",
        "Configuración de NVR, DVR y app móvil",
        "Ayuda con Hikvision, Dahua, Reolink, VIGI y Ubiquiti",
        "Revisión de cableado, PoE, router y red",
        "Acceso remoto desde móvil, tablet u ordenador",
        "Mantenimiento, ajustes y reparación de cámaras",
        "Comunicación directa por WhatsApp",
      ]
    : [
        "Clean and properly aimed installation",
        "Cameras for homes and businesses",
        "NVR, DVR and mobile app configuration",
        "Help with Hikvision, Dahua, Reolink, VIGI and Ubiquiti",
        "Cabling, PoE, router and network checks",
        "Remote viewing from phone, tablet or computer",
        "Camera maintenance, adjustment and repair",
        "Direct communication by WhatsApp",
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar cámaras CCTV en Valencia?",
          a: "Depende del número de cámaras, tipo de cámara, cableado, altura, acceso, grabador y configuración. Una instalación básica puede empezar desde 59–69 € por cámara.",
        },
        {
          q: "¿Instaláis cámaras IP y cámaras PoE?",
          a: "Sí. Podemos instalar cámaras IP, cámaras PoE, switches PoE, NVR, cableado Ethernet y acceso remoto.",
        },
        {
          q: "¿Configuráis la app para ver cámaras desde el móvil?",
          a: "Sí. Podemos configurar acceso remoto para ver cámaras desde móvil, tablet u ordenador, siempre que el sistema y la conexión lo permitan.",
        },
        {
          q: "¿Trabajáis con Hikvision, Dahua, Reolink, TP-Link VIGI y Ubiquiti?",
          a: "Sí. Podemos ayudar con instalación y configuración de sistemas Hikvision, Dahua, Reolink, TP-Link VIGI, Ubiquiti Protect y otros equipos compatibles.",
        },
        {
          q: "¿Instaláis cámaras para bares, restaurantes y tiendas?",
          a: "Sí. Instalamos CCTV para negocios: entradas, caja, terraza, almacén, oficina, sala, cocina, pasillos y zonas de clientes.",
        },
        {
          q: "¿Podéis reparar una cámara que no funciona?",
          a: "Sí. Se puede revisar si el problema viene de alimentación, cable, conector, red, NVR, configuración o cámara defectuosa.",
        },
        {
          q: "¿Puedo comprar yo las cámaras?",
          a: "Sí. Puedes comprar el equipo y enviarnos el modelo o enlace antes de la instalación para revisar compatibilidad.",
        },
        {
          q: "¿Trabajáis solo en Valencia ciudad?",
          a: "Trabajamos en Valencia y zonas cercanas como Mislata, Burjassot, Paterna, Torrent, Manises, Alboraya, Sagunto, Cullera y Gandía según disponibilidad.",
        },
      ]
    : [
        {
          q: "How much does CCTV camera installation in Valencia cost?",
          a: "It depends on the number of cameras, camera type, cabling, height, access, recorder and configuration. A basic installation can start from €59–69 per camera.",
        },
        {
          q: "Do you install IP cameras and PoE cameras?",
          a: "Yes. We can install IP cameras, PoE cameras, PoE switches, NVRs, Ethernet cabling and remote viewing.",
        },
        {
          q: "Do you configure the app to view cameras from the phone?",
          a: "Yes. We can configure remote viewing from phone, tablet or computer, as long as the system and internet connection allow it.",
        },
        {
          q: "Do you work with Hikvision, Dahua, Reolink, TP-Link VIGI and Ubiquiti?",
          a: "Yes. We can help with installation and configuration of Hikvision, Dahua, Reolink, TP-Link VIGI, Ubiquiti Protect and other compatible systems.",
        },
        {
          q: "Do you install cameras for bars, restaurants and shops?",
          a: "Yes. We install CCTV for businesses: entrances, cash desk, terrace, storage, office, dining room, kitchen, corridors and client areas.",
        },
        {
          q: "Can you repair a camera that is not working?",
          a: "Yes. We can check if the issue comes from power, cable, connector, network, NVR, configuration or a faulty camera.",
        },
        {
          q: "Can I buy the cameras myself?",
          a: "Yes. You can buy the equipment and send us the model or link before installation so compatibility can be checked.",
        },
        {
          q: "Do you only work in Valencia city?",
          a: "We work in Valencia and nearby areas such as Mislata, Burjassot, Paterna, Torrent, Manises, Alboraya, Sagunto, Cullera and Gandía depending on availability.",
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
          ? "Cámaras CCTV y cámaras de seguridad en Valencia"
          : "CCTV and security cameras in Valencia",
        serviceType: isEs
          ? "Instalación y configuración de cámaras de seguridad"
          : "Security camera installation and configuration",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Instalación, configuración, mantenimiento y reparación de cámaras CCTV, cámaras IP, NVR, DVR, acceso remoto y sistemas de seguridad para viviendas y negocios en Valencia."
          : "Installation, configuration, maintenance and repair of CCTV cameras, IP cameras, NVR, DVR, remote viewing and security camera systems for homes and businesses in Valencia.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios CCTV y cámaras en Valencia"
            : "CCTV and camera services in Valencia",
          itemListElement: cctvPages.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: isEs ? item.es : item.en,
              url: `${baseUrl}/${locale}/services/cctv/${item.slug}`,
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
            name: isEs ? "CCTV y cámaras" : "CCTV & Cameras",
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
                ? "Cámaras CCTV y cámaras de seguridad en Valencia"
                : "CCTV and security camera services in Valencia"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Instalación, configuración y mantenimiento de cámaras CCTV para viviendas, bares, restaurantes, oficinas, tiendas, almacenes y locales comerciales. Cámaras IP, PoE, NVR, DVR, acceso remoto y sistemas de marcas como Hikvision, Dahua, Reolink, TP-Link VIGI y Ubiquiti."
                : "Installation, configuration and maintenance of CCTV cameras for homes, bars, restaurants, offices, shops, warehouses and commercial units. IP cameras, PoE, NVR, DVR, remote viewing and systems from brands like Hikvision, Dahua, Reolink, TP-Link VIGI and Ubiquiti."}
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
                    ? "Envía fotos de la zona, cámara, NVR o cableado."
                    : "Send photos of the area, camera, NVR or cabling.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Seguridad para negocio" : "Business security",
                  text: isEs
                    ? "Cámaras para entradas, caja, almacén y zonas clave."
                    : "Cameras for entrances, cash desk, storage and key areas.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "App y acceso remoto" : "App and remote access",
                  text: isEs
                    ? "Configuración para ver cámaras desde el móvil."
                    : "Setup to view cameras from your phone.",
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
              <Camera className="h-4 w-4" />
              {isEs ? "Servicios CCTV" : "CCTV services"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Elige el servicio de cámaras que necesitas"
                : "Choose the camera service you need"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "Estas tarjetas serán después páginas individuales para SEO y campañas de Google Ads: instalación CCTV, cámaras IP, NVR, DVR, acceso remoto, Hikvision, Dahua, Reolink, VIGI, Ubiquiti y mantenimiento."
                : "These cards will later become individual SEO and Google Ads landing pages: CCTV installation, IP cameras, NVR, DVR, remote viewing, Hikvision, Dahua, Reolink, VIGI, Ubiquiti and maintenance."}
            </p>
          </div>

          <Link
            href={`/${locale}/estimate?category=cctv`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto" : "Request estimate"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cctvPages.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/services/cctv/${item.slug}`}
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
                  ? "Presupuesto claro para cámaras, NVR, DVR y acceso remoto"
                  : "Clear estimate for cameras, NVR, DVR and remote viewing"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio depende del número de cámaras, tipo de instalación, cableado, altura, acceso, grabador, router, configuración de app y materiales necesarios."
                  : "The price depends on the number of cameras, installation type, cabling, height, access, recorder, router, app configuration and required materials."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de instalar, revisamos la zona que quieres cubrir, el ángulo, la alimentación, la conexión a internet y si conviene usar cámaras WiFi, PoE, NVR o DVR."
                  : "Before installation, we review the area you want to cover, camera angle, power, internet connection and whether WiFi, PoE, NVR or DVR cameras are the best option."}
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
                  ? "El precio final depende del equipo, cableado, altura, acceso, tipo de pared, configuración, materiales y tiempo necesario."
                  : "Final price depends on equipment, cabling, height, access, wall type, configuration, materials and time required."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <Building2 className="h-4 w-4" />
            {isEs ? "Para quién" : "Who it is for"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs
              ? "CCTV para viviendas, restaurantes, oficinas, tiendas y almacenes"
              : "CCTV for homes, restaurants, offices, shops and warehouses"}
          </h2>

          <p className="mx-auto mt-4 max-w-4xl leading-8 text-neutral-700">
            {isEs
              ? "Un sistema de cámaras debe cubrir las zonas importantes sin dejar puntos ciegos: entrada, caja, almacén, terraza, pasillos, garaje, zonas comunes y áreas de trabajo."
              : "A camera system should cover important areas without blind spots: entrance, cash desk, storage, terrace, corridors, garage, shared areas and work areas."}
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
                  ? "Por qué elegir THEVULGO para CCTV"
                  : "Why choose THEVULGO for CCTV"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "No se trata solo de colgar una cámara. Una buena instalación necesita ángulo correcto, cableado limpio, alimentación estable, grabación configurada y acceso remoto probado."
                  : "It is not just about mounting a camera. A good installation needs the right angle, tidy cabling, stable power, recording configured and remote access tested."}
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
              ? "De fotos por WhatsApp a cámaras funcionando"
              : "From WhatsApp photos to working cameras"}
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
                <HardDrive className="h-4 w-4 text-yellow-500" />
                {isEs ? "Grabación y acceso remoto" : "Recording and remote viewing"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "NVR, DVR, app móvil y visualización desde fuera"
                  : "NVR, DVR, mobile app and remote viewing"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Una cámara instalada correctamente debe grabar bien, mostrar buena imagen y permitir acceso remoto cuando el sistema lo permite. Revisamos grabador, red, usuario, app, horarios de grabación y calidad de imagen."
                  : "A properly installed camera should record correctly, show a good image and allow remote viewing when the system supports it. We check recorder, network, user account, app, recording schedules and image quality."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "También podemos ayudar con cámaras que aparecen offline, pérdida de imagen, problemas de contraseña, mala configuración, cable defectuoso o errores de conexión."
                  : "We can also help with cameras showing offline, image loss, password issues, bad configuration, faulty cabling or connection errors."}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {(isEs
                ? [
                    "Grabación continua o por movimiento",
                    "Acceso remoto desde móvil",
                    "Configuración de NVR",
                    "Configuración de DVR",
                    "Revisión de cables",
                    "Cámaras offline",
                    "Ajuste de imagen",
                    "Mantenimiento de sistema",
                  ]
                : [
                    "Continuous or motion recording",
                    "Remote viewing from phone",
                    "NVR configuration",
                    "DVR configuration",
                    "Cable checks",
                    "Offline cameras",
                    "Image adjustment",
                    "System maintenance",
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
              <Camera className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs
                ? "Antes de instalar cámaras"
                : "Before installing cameras"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Antes de perforar o pasar cable, hay que definir qué se quiere ver, desde qué ángulo, con qué luz, dónde está el router o grabador, y si la cámara será WiFi, PoE, interior o exterior."
                : "Before drilling or running cable, it is important to define what needs to be seen, from which angle, with what light, where the router or recorder is located and whether the camera will be WiFi, PoE, indoor or outdoor."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Zona que quieres cubrir",
                    "Altura y ángulo",
                    "Interior o exterior",
                    "WiFi, PoE, NVR o DVR",
                    "Alimentación y cableado",
                  ]
                : [
                    "Area to cover",
                    "Height and angle",
                    "Indoor or outdoor",
                    "WiFi, PoE, NVR or DVR",
                    "Power and cabling",
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
              <ShieldCheck className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs
                ? "CCTV para negocios"
                : "CCTV for businesses"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Para negocios, las cámaras suelen trabajar junto con internet, red interna, TPV, switches PoE y acceso remoto. Una instalación limpia ayuda a tener control de caja, entrada, almacén y zonas sensibles."
                : "For businesses, cameras often work together with internet, internal network, POS, PoE switches and remote access. A clean installation helps control cash desk, entrance, storage and sensitive areas."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Entrada y salida",
                    "Zona de caja",
                    "Almacén y stock",
                    "Terraza o exterior",
                    "Acceso remoto para responsable",
                  ]
                : [
                    "Entrance and exit",
                    "Cash desk area",
                    "Storage and stock",
                    "Terrace or exterior",
                    "Remote access for manager",
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
                  ? "¿Necesitas cámaras CCTV en Valencia?"
                  : "Need CCTV cameras in Valencia?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos de la zona, el equipo actual o el lugar donde quieres instalar cámaras. Revisamos el caso y te damos una estimación clara antes de confirmar la visita."
                  : "Send photos of the area, current equipment or where you want cameras installed. We review the case and give you a clear estimate before confirming the visit."}
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