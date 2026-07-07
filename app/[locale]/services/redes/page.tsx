import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Cable,
  CheckCircle2,
  Clock3,
  Euro,
  Globe2,
  Hotel,
  MapPin,
  MessageCircle,
  Network,
  Router,
  Server,
  Settings,
  ShieldCheck,
  Signal,
  SignalHigh,
  Store,
  Wifi,
  Wrench,
  Zap,
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

const networkingPages = [
  {
    slug: "wifi-installation-valencia",
    en: "WiFi Installation Valencia",
    es: "Instalación WiFi Valencia",
    descEn: "WiFi setup, coverage improvement and clean installation for homes and businesses.",
    descEs: "Instalación WiFi, mejora de cobertura y configuración limpia para viviendas y negocios.",
    icon: Wifi,
  },
  {
    slug: "business-wifi-valencia",
    en: "Business WiFi Valencia",
    es: "WiFi para negocios Valencia",
    descEn: "Reliable WiFi for offices, bars, restaurants, shops, gyms and commercial spaces.",
    descEs: "WiFi estable para oficinas, bares, restaurantes, tiendas, gimnasios y locales.",
    icon: Building2,
  },
  {
    slug: "home-wifi-setup-valencia",
    en: "Home WiFi Setup",
    es: "Configuración WiFi en casa",
    descEn: "Router setup, mesh WiFi, repeaters and better signal for apartments and houses.",
    descEs: "Configuración de router, WiFi mesh, repetidores y mejor señal en casa.",
    icon: Wifi,
  },
  {
    slug: "wifi-troubleshooting-valencia",
    en: "WiFi Troubleshooting",
    es: "Diagnóstico de problemas WiFi",
    descEn: "Find and fix unstable WiFi, weak signal, disconnections and slow internet.",
    descEs: "Diagnóstico de WiFi inestable, poca señal, cortes y conexión lenta.",
    icon: Wrench,
  },
  {
    slug: "slow-internet-repair-valencia",
    en: "Slow Internet Repair",
    es: "Reparación de internet lento",
    descEn: "Speed tests, router checks, WiFi optimization and network troubleshooting.",
    descEs: "Pruebas de velocidad, revisión de router, optimización WiFi y diagnóstico de red.",
    icon: Signal,
  },
  {
    slug: "dead-wifi-zones-valencia",
    en: "Dead WiFi Zones",
    es: "Zonas sin señal WiFi",
    descEn: "Solutions for rooms, terraces, offices or corners with poor or no WiFi coverage.",
    descEs: "Soluciones para habitaciones, terrazas, oficinas o zonas sin cobertura WiFi.",
    icon: SignalHigh,
  },
  {
    slug: "mesh-wifi-installation-valencia",
    en: "Mesh WiFi Installation",
    es: "Instalación WiFi Mesh",
    descEn: "Mesh WiFi systems for better coverage across apartments, houses and offices.",
    descEs: "Sistemas WiFi Mesh para mejorar cobertura en viviendas, oficinas y locales.",
    icon: Network,
  },
  {
    slug: "access-point-installation-valencia",
    en: "Access Point Installation",
    es: "Instalación de puntos de acceso",
    descEn: "Professional access point installation, placement, configuration and testing.",
    descEs: "Instalación, ubicación, configuración y prueba de puntos de acceso profesionales.",
    icon: Router,
  },
  {
    slug: "outdoor-wifi-valencia",
    en: "Outdoor WiFi",
    es: "WiFi exterior",
    descEn: "Outdoor access points for terraces, patios, gardens, restaurants and commercial areas.",
    descEs: "Puntos WiFi exteriores para terrazas, patios, jardines, restaurantes y negocios.",
    icon: SignalHigh,
  },
  {
    slug: "office-wifi-valencia",
    en: "Office WiFi",
    es: "WiFi para oficinas",
    descEn: "Stable office WiFi with access points, switches, cabling and guest networks.",
    descEs: "WiFi estable para oficinas con puntos de acceso, switches, cableado y red de invitados.",
    icon: Building2,
  },
  {
    slug: "restaurant-wifi-valencia",
    en: "Restaurant WiFi",
    es: "WiFi para restaurantes",
    descEn: "WiFi for restaurants, bars and cafés with guest access and better coverage.",
    descEs: "WiFi para restaurantes, bares y cafés con acceso para clientes y mejor cobertura.",
    icon: Store,
  },
  {
    slug: "hotel-wifi-valencia",
    en: "Hotel WiFi",
    es: "WiFi para hoteles",
    descEn: "WiFi planning and troubleshooting for hotels, rentals and guest spaces.",
    descEs: "Planificación y diagnóstico WiFi para hoteles, alquileres y espacios de huéspedes.",
    icon: Hotel,
  },
  {
    slug: "warehouse-wifi-valencia",
    en: "Warehouse WiFi",
    es: "WiFi para almacenes",
    descEn: "WiFi coverage for warehouses, stockrooms, logistics spaces and large areas.",
    descEs: "Cobertura WiFi para almacenes, zonas logísticas y espacios grandes.",
    icon: Server,
  },
  {
    slug: "shop-wifi-valencia",
    en: "Shop WiFi",
    es: "WiFi para tiendas",
    descEn: "WiFi setup for shops, POS areas, staff devices and guest access.",
    descEs: "Configuración WiFi para tiendas, TPV, dispositivos del equipo y acceso de clientes.",
    icon: Store,
  },
  {
    slug: "guest-wifi-valencia",
    en: "Guest WiFi",
    es: "WiFi para invitados",
    descEn: "Separate guest WiFi networks for clients, visitors, restaurants and offices.",
    descEs: "Red WiFi separada para clientes, visitas, restaurantes y oficinas.",
    icon: ShieldCheck,
  },
  {
    slug: "vlan-configuration-valencia",
    en: "VLAN Configuration",
    es: "Configuración VLAN",
    descEn: "Network segmentation for business WiFi, cameras, POS, staff and guest networks.",
    descEs: "Segmentación de red para WiFi, cámaras, TPV, personal e invitados.",
    icon: Settings,
  },
  {
    slug: "network-diagnostics-valencia",
    en: "Network Diagnostics",
    es: "Diagnóstico de red",
    descEn: "Find network faults, bad cables, poor configuration and unstable connections.",
    descEs: "Detección de fallos de red, cables defectuosos, mala configuración y cortes.",
    icon: Wrench,
  },
  {
    slug: "network-optimization-valencia",
    en: "Network Optimization",
    es: "Optimización de red",
    descEn: "Improve speed, coverage, roaming, WiFi channels and device stability.",
    descEs: "Mejora de velocidad, cobertura, roaming, canales WiFi y estabilidad.",
    icon: SignalHigh,
  },
  {
    slug: "ethernet-installation-valencia",
    en: "Ethernet Installation",
    es: "Instalación Ethernet",
    descEn: "Ethernet cable installation for stable internet, TVs, offices and access points.",
    descEs: "Instalación de cable Ethernet para internet estable, TV, oficinas y puntos WiFi.",
    icon: Cable,
  },
  {
    slug: "lan-installation-valencia",
    en: "LAN Installation",
    es: "Instalación LAN",
    descEn: "Local network installation with cabling, switch, router and device connection.",
    descEs: "Instalación de red local con cableado, switch, router y conexión de dispositivos.",
    icon: Network,
  },
  {
    slug: "rj45-installation-valencia",
    en: "RJ45 Installation",
    es: "Instalación RJ45",
    descEn: "RJ45 sockets, connectors, cable termination and network point installation.",
    descEs: "Tomas RJ45, conectores, terminación de cable e instalación de puntos de red.",
    icon: Cable,
  },
  {
    slug: "rj45-repair-valencia",
    en: "RJ45 Repair",
    es: "Reparación RJ45",
    descEn: "Repair bad RJ45 connectors, loose sockets, failed terminations and cable faults.",
    descEs: "Reparación de conectores RJ45, tomas flojas, terminaciones malas y fallos de cable.",
    icon: Wrench,
  },
  {
    slug: "network-cabinet-installation-valencia",
    en: "Network Cabinet Installation",
    es: "Instalación de rack de red",
    descEn: "Small network cabinets, rack organization, patch panels and clean cable routing.",
    descEs: "Racks pequeños, organización de red, patch panels y cableado limpio.",
    icon: Server,
  },
  {
    slug: "patch-panel-installation-valencia",
    en: "Patch Panel Installation",
    es: "Instalación de patch panel",
    descEn: "Patch panel installation, cable termination and organized network distribution.",
    descEs: "Instalación de patch panel, terminación de cables y distribución ordenada.",
    icon: Server,
  },
  {
    slug: "switch-installation-valencia",
    en: "Switch Installation",
    es: "Instalación de switch",
    descEn: "Switch installation for offices, shops, cameras, access points and wired devices.",
    descEs: "Instalación de switch para oficinas, tiendas, cámaras, puntos WiFi y dispositivos.",
    icon: Network,
  },
  {
    slug: "managed-switch-configuration-valencia",
    en: "Managed Switch Configuration",
    es: "Configuración de switch gestionable",
    descEn: "Managed switch setup, VLANs, ports, PoE, uplinks and network organization.",
    descEs: "Configuración de switch gestionable, VLANs, puertos, PoE, uplinks y red.",
    icon: Settings,
  },
  {
    slug: "poe-switch-installation-valencia",
    en: "PoE Switch Installation",
    es: "Instalación de switch PoE",
    descEn: "PoE switch setup for cameras, access points, VoIP phones and network devices.",
    descEs: "Switch PoE para cámaras, puntos WiFi, teléfonos VoIP y dispositivos de red.",
    icon: Zap,
  },
  {
    slug: "router-installation-valencia",
    en: "Router Installation",
    es: "Instalación de router",
    descEn: "Router installation, placement, cabling, internet setup and basic security.",
    descEs: "Instalación de router, ubicación, cableado, configuración de internet y seguridad básica.",
    icon: Router,
  },
  {
    slug: "router-configuration-valencia",
    en: "Router Configuration",
    es: "Configuración de router",
    descEn: "Router configuration, WiFi name, password, channels, DHCP and basic network setup.",
    descEs: "Configuración de router, nombre WiFi, contraseña, canales, DHCP y red básica.",
    icon: Settings,
  },
  {
    slug: "internet-setup-valencia",
    en: "Internet Setup",
    es: "Configuración de internet",
    descEn: "Internet setup for homes, offices, routers, repeaters, switches and devices.",
    descEs: "Configuración de internet para viviendas, oficinas, routers, repetidores, switches y equipos.",
    icon: Globe2,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "WiFi, redes e internet en Valencia | Routers, switches, RJ45 | THEVULGO"
    : "WiFi & Networking in Valencia | Routers, Switches, RJ45 | THEVULGO";

  const description = isEs
    ? "Instalación y diagnóstico de WiFi, redes, routers, repetidores, puntos de acceso, switches, PoE, RJ45, Ethernet, racks y redes para negocios en Valencia."
    : "WiFi and networking services in Valencia: routers, repeaters, access points, switches, PoE, RJ45, Ethernet, network cabinets and business WiFi.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "wifi valencia",
          "instalacion wifi valencia",
          "redes valencia",
          "instalacion router valencia",
          "configuracion router valencia",
          "instalacion switch valencia",
          "switch poe valencia",
          "instalacion rj45 valencia",
          "cable ethernet valencia",
          "wifi negocio valencia",
          "wifi restaurante valencia",
          "wifi oficina valencia",
          "diagnostico red valencia",
          "internet lento valencia",
        ]
      : [
          "wifi valencia",
          "wifi installation valencia",
          "networking valencia",
          "router installation valencia",
          "router configuration valencia",
          "switch installation valencia",
          "poe switch valencia",
          "rj45 installation valencia",
          "ethernet installation valencia",
          "business wifi valencia",
          "restaurant wifi valencia",
          "office wifi valencia",
          "network diagnostics valencia",
          "slow internet repair valencia",
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
      canonical: `${baseUrl}/${locale}/services/networking`,
      languages: {
        es: `${baseUrl}/es/services/networking`,
        en: `${baseUrl}/en/services/networking`,
        "x-default": `${baseUrl}/es/services/networking`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/networking`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}
export default async function NetworkingPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/services/networking`;
  const estimateHref = `/${locale}/estimate?category=networking`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito ayuda con WiFi, internet o redes en Valencia. Quiero pedir presupuesto."
      : "Hi, I need help with WiFi, internet or networking in Valencia. I’d like to request an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const prices = isEs
    ? [
        ["Diagnóstico WiFi / red", "desde 49 €"],
        ["Configuración de router", "desde 49 €"],
        ["Instalación de repetidor", "desde 49 €"],
        ["Instalación de punto de acceso", "desde 59 €"],
        ["Instalación de switch", "desde 59 €"],
        ["RJ45 / punto de red", "desde 45 €"],
        ["WiFi para negocio", "desde 89 €"],
        ["Rack / armario de red", "desde 99 €"],
      ]
    : [
        ["WiFi / network diagnostics", "from €49"],
        ["Router configuration", "from €49"],
        ["Repeater installation", "from €49"],
        ["Access point installation", "from €59"],
        ["Switch installation", "from €59"],
        ["RJ45 / network point", "from €45"],
        ["Business WiFi", "from €89"],
        ["Network cabinet / rack", "from €99"],
      ];

  const clientTypes = [
    {
      title: isEs ? "Viviendas y apartamentos" : "Homes and apartments",
      text: isEs
        ? "Mejora de señal WiFi, router, repetidores, WiFi mesh, internet lento y puntos sin cobertura."
        : "Better WiFi signal, router setup, repeaters, mesh WiFi, slow internet and dead zones.",
      icon: Wifi,
    },
    {
      title: isEs ? "Oficinas y coworkings" : "Offices and coworking spaces",
      text: isEs
        ? "Red estable para equipos, impresoras, salas, invitados, switches, cableado y puntos de acceso."
        : "Stable network for staff, printers, rooms, guests, switches, cabling and access points.",
      icon: Building2,
    },
    {
      title: isEs ? "Bares y restaurantes" : "Bars and restaurants",
      text: isEs
        ? "WiFi para clientes, TPV, terraza, cámaras, música, tablets, staff y equipos conectados."
        : "WiFi for guests, POS, terrace, cameras, music, tablets, staff and connected devices.",
      icon: Store,
    },
    {
      title: isEs ? "Tiendas y almacenes" : "Shops and warehouses",
      text: isEs
        ? "Red para TPV, cámaras IP, control de stock, oficina, almacén, dispositivos móviles y zonas amplias."
        : "Network for POS, IP cameras, stock control, office, warehouse, mobile devices and large areas.",
      icon: Server,
    },
  ];

  const process = isEs
    ? [
        ["1. Envía el problema", "Explica si falla el WiFi, internet, router, cable, switch o cobertura."],
        ["2. Revisamos fotos", "Puedes enviar fotos del router, rack, cables, tomas RJ45 o zona sin señal."],
        ["3. Diagnóstico inicial", "Se define si hace falta configurar, instalar, cablear o reemplazar equipos."],
        ["4. Instalación o ajuste", "Se configura router, punto de acceso, switch, WiFi mesh, VLAN o cableado."],
        ["5. Prueba final", "Se revisa velocidad, cobertura, estabilidad, roaming y funcionamiento real."],
      ]
    : [
        ["1. Send the issue", "Explain if WiFi, internet, router, cable, switch or coverage is failing."],
        ["2. Share photos", "Send photos of router, rack, cables, RJ45 sockets or the area with poor signal."],
        ["3. Initial diagnosis", "We check if configuration, installation, cabling or replacement is needed."],
        ["4. Setup or repair", "Router, access point, switch, mesh WiFi, VLAN or cabling is configured."],
        ["5. Final testing", "Speed, coverage, stability, roaming and real use are checked."],
      ];

  const whyChoose = isEs
    ? [
        "Diagnóstico claro antes de comprar equipos",
        "Instalación limpia de routers, switches y puntos WiFi",
        "Soluciones para viviendas, oficinas, bares y negocios",
        "Ayuda con RJ45, Ethernet, PoE, APs y racks pequeños",
        "Optimización de cobertura y velocidad",
        "Configuración de redes de invitados",
        "Revisión de cables y conectores defectuosos",
        "Comunicación directa por WhatsApp",
      ]
    : [
        "Clear diagnosis before buying equipment",
        "Clean installation of routers, switches and WiFi access points",
        "Solutions for homes, offices, bars and businesses",
        "Help with RJ45, Ethernet, PoE, APs and small racks",
        "Coverage and speed optimization",
        "Guest network configuration",
        "Faulty cable and connector checks",
        "Direct communication by WhatsApp",
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar WiFi o redes en Valencia?",
          a: "Depende del trabajo. Un diagnóstico o configuración básica puede empezar desde 49 €. Instalaciones con cableado, switches, puntos de acceso o rack se presupuestan según materiales, tiempo y dificultad.",
        },
        {
          q: "¿Podéis mejorar la señal WiFi en toda la casa?",
          a: "Sí. Podemos revisar el router, ubicación, repetidores, WiFi mesh, puntos de acceso y zonas sin cobertura para proponer una solución real.",
        },
        {
          q: "¿Instaláis WiFi para bares, restaurantes u oficinas?",
          a: "Sí. Trabajamos con redes para negocios: WiFi de clientes, red interna, TPV, cámaras, puntos de acceso, switches y cableado.",
        },
        {
          q: "¿Hacéis instalación de cable Ethernet o RJ45?",
          a: "Sí. Podemos instalar o reparar puntos RJ45, conectores, cable Ethernet, tomas de red y pequeñas distribuciones LAN.",
        },
        {
          q: "¿Configuráis switches PoE?",
          a: "Sí. Podemos instalar y configurar switches PoE para cámaras IP, puntos de acceso WiFi, teléfonos VoIP y otros equipos compatibles.",
        },
        {
          q: "¿Podéis revisar por qué internet va lento?",
          a: "Sí. Se puede revisar velocidad, señal WiFi, router, saturación de canales, cableado, repetidores y configuración general.",
        },
        {
          q: "¿Trabajáis con Ubiquiti, TP-Link, MikroTik o routers normales?",
          a: "Sí. Podemos ayudar con equipos domésticos y semiprofesionales como TP-Link, Deco, Omada, Ubiquiti UniFi, MikroTik y routers de operador.",
        },
        {
          q: "¿Podéis separar WiFi de clientes y WiFi interno?",
          a: "Sí. En muchos casos se puede crear una red de invitados separada. En redes más avanzadas se puede trabajar con VLANs y switches gestionables.",
        },
      ]
    : [
        {
          q: "How much does WiFi or networking installation in Valencia cost?",
          a: "It depends on the job. Basic diagnostics or configuration can start from €49. Cabling, switches, access points or rack work are quoted based on materials, time and difficulty.",
        },
        {
          q: "Can you improve WiFi signal across the whole home?",
          a: "Yes. We can check router placement, repeaters, mesh WiFi, access points and dead zones to suggest a real solution.",
        },
        {
          q: "Do you install WiFi for bars, restaurants or offices?",
          a: "Yes. We work with business networks: guest WiFi, internal network, POS, cameras, access points, switches and cabling.",
        },
        {
          q: "Do you install Ethernet or RJ45 points?",
          a: "Yes. We can install or repair RJ45 points, connectors, Ethernet cables, network sockets and small LAN distributions.",
        },
        {
          q: "Do you configure PoE switches?",
          a: "Yes. We can install and configure PoE switches for IP cameras, WiFi access points, VoIP phones and other compatible devices.",
        },
        {
          q: "Can you check why my internet is slow?",
          a: "Yes. We can review speed, WiFi signal, router, channel congestion, cabling, repeaters and general configuration.",
        },
        {
          q: "Do you work with Ubiquiti, TP-Link, MikroTik or normal routers?",
          a: "Yes. We can help with home and semi-professional equipment such as TP-Link, Deco, Omada, Ubiquiti UniFi, MikroTik and ISP routers.",
        },
        {
          q: "Can you separate guest WiFi from internal WiFi?",
          a: "Yes. In many cases a separate guest network can be created. For more advanced networks, VLANs and managed switches can be used.",
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
        name: isEs ? "WiFi, redes e internet en Valencia" : "WiFi and networking in Valencia",
        serviceType: isEs ? "Instalación y diagnóstico de redes" : "Network installation and diagnostics",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Instalación, configuración y diagnóstico de WiFi, routers, repetidores, puntos de acceso, switches, PoE, RJ45, Ethernet, racks pequeños y redes para negocios en Valencia."
          : "Installation, configuration and diagnostics for WiFi, routers, repeaters, access points, switches, PoE, RJ45, Ethernet, small racks and business networks in Valencia.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs ? "Servicios WiFi y redes en Valencia" : "WiFi and networking services in Valencia",
          itemListElement: networkingPages.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: isEs ? item.es : item.en,
              url: `${baseUrl}/${locale}/services/networking/${item.slug}`,
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
            name: isEs ? "WiFi y redes" : "WiFi & Networking",
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
                ? "WiFi, redes e internet en Valencia para viviendas y negocios"
                : "WiFi, networking and internet services in Valencia for homes and businesses"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO ayuda con instalación y diagnóstico de WiFi, routers, repetidores, puntos de acceso, switches, PoE, RJ45, cable Ethernet, racks pequeños, redes para oficinas, bares, restaurantes, tiendas, hoteles y viviendas."
                : "THEVULGO helps with WiFi installation and diagnostics, routers, repeaters, access points, switches, PoE, RJ45, Ethernet cabling, small network cabinets, office networks, bars, restaurants, shops, hotels and homes."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Pedir presupuesto por WhatsApp" : "Request estimate by WhatsApp"}
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
                    ? "Envía fotos del router, rack o zona sin señal."
                    : "Send photos of router, rack or area with no signal.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Instalación limpia" : "Clean installation",
                  text: isEs
                    ? "Cableado ordenado, pruebas y configuración clara."
                    : "Tidy cabling, testing and clear configuration.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Hogar y negocio" : "Home and business",
                  text: isEs
                    ? "Soluciones para pisos, oficinas, bares y locales."
                    : "Solutions for apartments, offices, bars and units.",
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
              <Wifi className="h-4 w-4" />
              {isEs ? "Servicios de WiFi y redes" : "WiFi and networking services"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Elige el servicio de red que necesitas"
                : "Choose the networking service you need"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "Estas tarjetas serán después páginas individuales para SEO y campañas de Google Ads: instalación WiFi, internet lento, router, switch, RJ45, Ethernet, PoE, redes para negocios y más."
                : "These cards will later become individual SEO and Google Ads landing pages: WiFi installation, slow internet, router, switch, RJ45, Ethernet, PoE, business networks and more."}
            </p>
          </div>

          <Link
            href={`/${locale}/estimate?category=networking`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto" : "Request estimate"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {networkingPages.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/services/networking/${item.slug}`}
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
                  ? "Presupuesto claro para WiFi, router, Ethernet y redes"
                  : "Clear estimate for WiFi, router, Ethernet and networking"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Cada red es diferente. Antes de comprar equipos, conviene revisar dónde está el router, qué velocidad llega, qué zonas fallan, si hay cableado Ethernet, cuántos dispositivos se conectan y si el uso es doméstico o comercial."
                  : "Every network is different. Before buying equipment, it is better to check router location, real speed, weak areas, Ethernet cabling, number of connected devices and whether the use is home or commercial."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El objetivo no es solo poner un repetidor. El objetivo es que la red funcione de forma estable, con buena cobertura, velocidad real y una configuración adecuada para el uso diario."
                  : "The goal is not just to add a repeater. The goal is to make the network stable, with good coverage, real speed and the right configuration for everyday use."}
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
                  ? "El precio final depende del número de equipos, cableado, altura, acceso, tipo de pared, configuración, materiales y tiempo necesario."
                  : "Final price depends on number of devices, cabling, height, access, wall type, configuration, materials and time required."}
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
              ? "Redes para viviendas, oficinas, bares, tiendas y almacenes"
              : "Networks for homes, offices, bars, shops and warehouses"}
          </h2>

          <p className="mx-auto mt-4 max-w-4xl leading-8 text-neutral-700">
            {isEs
              ? "Una red doméstica y una red de negocio no se diseñan igual. En un local comercial pueden convivir TPV, cámaras, WiFi de clientes, ordenadores, tablets, música, impresoras, puntos de acceso y switches PoE."
              : "A home network and a business network are not designed the same way. In a commercial unit, POS, cameras, guest WiFi, computers, tablets, music, printers, access points and PoE switches may all run together."}
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
                  ? "Por qué elegir THEVULGO para WiFi y redes"
                  : "Why choose THEVULGO for WiFi and networking"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "No se trata solo de conectar un router. Una red estable necesita diagnóstico, ubicación correcta de equipos, cableado limpio, configuración adecuada y pruebas reales después de la instalación."
                  : "It is not just about connecting a router. A stable network needs diagnosis, proper device placement, tidy cabling, correct configuration and real testing after installation."}
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
              ? "De diagnóstico a red funcionando"
              : "From diagnosis to working network"}
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
                <Cable className="h-4 w-4 text-yellow-500" />
                {isEs ? "Cableado y equipos" : "Cabling and equipment"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "RJ45, Ethernet, switches, PoE y racks pequeños"
                  : "RJ45, Ethernet, switches, PoE and small network cabinets"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Cuando el WiFi no es suficiente, la solución muchas veces es cablear correctamente: punto RJ45, cable Ethernet, switch, patch panel, armario de red o punto de acceso alimentado por PoE."
                  : "When WiFi is not enough, the solution is often proper cabling: RJ45 point, Ethernet cable, switch, patch panel, network cabinet or PoE-powered access point."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Esto es especialmente útil para cámaras IP, TPV, ordenadores, televisores, puntos WiFi, oficinas, bares, restaurantes y zonas donde la conexión debe ser estable."
                  : "This is especially useful for IP cameras, POS, computers, TVs, WiFi access points, offices, bars, restaurants and areas where the connection must be stable."}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {(isEs
                ? [
                    "Cable Ethernet",
                    "Tomas RJ45",
                    "Conectores RJ45",
                    "Switches PoE",
                    "Switches gestionables",
                    "Patch panels",
                    "Armarios de red",
                    "Puntos de acceso cableados",
                  ]
                : [
                    "Ethernet cable",
                    "RJ45 sockets",
                    "RJ45 connectors",
                    "PoE switches",
                    "Managed switches",
                    "Patch panels",
                    "Network cabinets",
                    "Wired access points",
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
              <Wifi className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs
                ? "Antes de comprar repetidores"
                : "Before buying repeaters"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Comprar repetidores sin revisar la instalación puede empeorar la red. Antes conviene saber si el problema es el router, la ubicación, interferencias, paredes, saturación de canales, velocidad del proveedor o falta de puntos cableados."
                : "Buying repeaters without checking the installation can make the network worse. First, it is better to know if the issue is the router, placement, interference, walls, channel congestion, provider speed or lack of wired points."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Revisión de ubicación del router",
                    "Prueba de velocidad real",
                    "Detección de zonas sin señal",
                    "Comprobación de canales WiFi",
                    "Recomendación de equipo adecuado",
                  ]
                : [
                    "Router placement check",
                    "Real speed test",
                    "Dead zone detection",
                    "WiFi channel check",
                    "Proper equipment recommendation",
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
                ? "Red de invitados para clientes"
                : "Guest network for clients"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "En negocios, no conviene mezclar el WiFi de clientes con equipos internos como TPV, cámaras, ordenadores o impresoras. Una red de invitados separada mejora orden, seguridad y experiencia del cliente."
                : "In businesses, guest WiFi should not be mixed with internal devices like POS, cameras, computers or printers. A separate guest network improves organization, security and client experience."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "WiFi separado para clientes",
                    "Red interna para equipos",
                    "Mejor control de dispositivos",
                    "Configuración más limpia",
                    "Base para VLANs si hace falta",
                  ]
                : [
                    "Separate WiFi for clients",
                    "Internal network for devices",
                    "Better device control",
                    "Cleaner configuration",
                    "Base for VLANs if needed",
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
                  ? "¿Necesitas ayuda con WiFi, internet o redes en Valencia?"
                  : "Need help with WiFi, internet or networking in Valencia?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos del router, cables, puntos de red o zona sin señal. Revisamos el caso y te damos una estimación clara antes de confirmar la visita."
                  : "Send photos of the router, cables, network points or area with poor signal. We review the case and give you a clear estimate before confirming the visit."}
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