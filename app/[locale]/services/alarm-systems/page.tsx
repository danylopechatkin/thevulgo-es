import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Building2,
  CheckCircle2,
  Clock3,
  Euro,
  Home,
  KeyRound,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Radio,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Store,
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

const alarmPages = [
  {
    slug: "alarm-installation-valencia",
    en: "Alarm Installation",
    es: "Instalación de alarma",
    descEn: "Alarm system installation for homes, offices, shops, restaurants and commercial spaces.",
    descEs: "Instalación de alarmas para viviendas, oficinas, tiendas, restaurantes y locales.",
    icon: Siren,
  },
  {
    slug: "wireless-alarm-valencia",
    en: "Wireless Alarm",
    es: "Alarma inalámbrica",
    descEn: "Wireless alarm setup with sensors, siren, keypad, app and basic security configuration.",
    descEs: "Alarma inalámbrica con sensores, sirena, teclado, app y configuración básica.",
    icon: Radio,
  },
  {
    slug: "wired-alarm-valencia",
    en: "Wired Alarm",
    es: "Alarma cableada",
    descEn: "Wired alarm installation, cabling, sensors, sirens and control panel setup.",
    descEs: "Instalación de alarma cableada, cableado, sensores, sirenas y central.",
    icon: Zap,
  },
  {
    slug: "home-alarm-valencia",
    en: "Home Alarm",
    es: "Alarma para vivienda",
    descEn: "Alarm systems for apartments, houses, entrances, terraces, garages and storage areas.",
    descEs: "Alarmas para pisos, casas, entradas, terrazas, garajes y trasteros.",
    icon: Home,
  },
  {
    slug: "office-alarm-valencia",
    en: "Office Alarm",
    es: "Alarma para oficina",
    descEn: "Office alarm systems for entrances, work areas, storage, reception and sensitive rooms.",
    descEs: "Alarmas para oficinas, entradas, zonas de trabajo, almacén y recepción.",
    icon: Building2,
  },
  {
    slug: "restaurant-alarm-valencia",
    en: "Restaurant Alarm",
    es: "Alarma para restaurante",
    descEn: "Alarm systems for bars, restaurants, cafés, kitchens, terraces and cash areas.",
    descEs: "Alarmas para bares, restaurantes, cafés, cocinas, terrazas y zonas de caja.",
    icon: Store,
  },
  {
    slug: "shop-alarm-valencia",
    en: "Shop Alarm",
    es: "Alarma para tienda",
    descEn: "Shop alarm installation for entrances, stockrooms, POS areas and commercial units.",
    descEs: "Alarmas para tiendas, entradas, almacenes, TPV y locales comerciales.",
    icon: Store,
  },
  {
    slug: "ajax-alarm-valencia",
    en: "Ajax Alarm",
    es: "Alarma Ajax",
    descEn: "Ajax alarm installation, sensors, sirens, keypad, hub and mobile app setup.",
    descEs: "Instalación Ajax, sensores, sirenas, teclado, hub y configuración de app móvil.",
    icon: ShieldCheck,
  },
  {
    slug: "hikvision-alarm-valencia",
    en: "Hikvision Alarm",
    es: "Alarma Hikvision",
    descEn: "Hikvision alarm setup with sensors, keypad, app, hub and security configuration.",
    descEs: "Configuración de alarma Hikvision con sensores, teclado, app, hub y seguridad.",
    icon: ShieldAlert,
  },
  {
    slug: "dsc-alarm-valencia",
    en: "DSC Alarm",
    es: "Alarma DSC",
    descEn: "DSC alarm checks, installation support, sensors, siren and system configuration.",
    descEs: "Revisión e instalación de alarma DSC, sensores, sirena y configuración.",
    icon: Bell,
  },
  {
    slug: "paradox-alarm-valencia",
    en: "Paradox Alarm",
    es: "Alarma Paradox",
    descEn: "Paradox alarm setup, maintenance, sensors, keypad checks and configuration.",
    descEs: "Configuración, mantenimiento, sensores, teclado y revisión de alarma Paradox.",
    icon: KeyRound,
  },
  {
    slug: "alarm-maintenance-valencia",
    en: "Alarm Maintenance",
    es: "Mantenimiento de alarma",
    descEn: "Alarm maintenance, sensor checks, siren tests, battery checks and app review.",
    descEs: "Mantenimiento de alarma, sensores, sirena, batería y revisión de app.",
    icon: Wrench,
  },
  {
    slug: "alarm-repair-valencia",
    en: "Alarm Repair",
    es: "Reparación de alarma",
    descEn: "Troubleshooting alarm faults, offline devices, false alarms and sensor issues.",
    descEs: "Diagnóstico de fallos, dispositivos offline, falsas alarmas y problemas de sensores.",
    icon: Wrench,
  },
  {
    slug: "alarm-upgrade-valencia",
    en: "Alarm Upgrade",
    es: "Actualización de alarma",
    descEn: "Upgrade old alarm systems with new sensors, app control, siren or better coverage.",
    descEs: "Mejora de alarmas antiguas con sensores, app, sirena o mejor cobertura.",
    icon: Settings,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Alarmas en Valencia | Instalación, sensores y seguridad | THEVULGO"
    : "Alarm Systems in Valencia | Installation, Sensors & Security | THEVULGO";

  const description = isEs
    ? "Instalación y configuración de alarmas en Valencia: alarmas cableadas e inalámbricas, sensores, sirenas, teclados, Ajax, Hikvision, DSC, Paradox, mantenimiento y reparación."
    : "Alarm system installation and configuration in Valencia: wired and wireless alarms, sensors, sirens, keypads, Ajax, Hikvision, DSC, Paradox, maintenance and repair.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "alarmas valencia",
          "instalacion alarma valencia",
          "alarma casa valencia",
          "alarma negocio valencia",
          "alarma oficina valencia",
          "alarma restaurante valencia",
          "alarma tienda valencia",
          "alarma ajax valencia",
          "alarma hikvision valencia",
          "alarma dsc valencia",
          "alarma paradox valencia",
          "mantenimiento alarma valencia",
          "reparacion alarma valencia",
        ]
      : [
          "alarm systems valencia",
          "alarm installation valencia",
          "home alarm valencia",
          "business alarm valencia",
          "office alarm valencia",
          "restaurant alarm valencia",
          "shop alarm valencia",
          "ajax alarm valencia",
          "hikvision alarm valencia",
          "dsc alarm valencia",
          "paradox alarm valencia",
          "alarm maintenance valencia",
          "alarm repair valencia",
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
      canonical: `${baseUrl}/${locale}/services/alarm-systems`,
      languages: {
        es: `${baseUrl}/es/services/alarm-systems`,
        en: `${baseUrl}/en/services/alarm-systems`,
        "x-default": `${baseUrl}/es/services/alarm-systems`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/alarm-systems`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}
export default async function AlarmSystemsPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/services/alarm-systems`;
  const estimateHref = `/${locale}/estimate?category=alarm-systems`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito ayuda con una alarma o sistema de seguridad en Valencia. Quiero pedir presupuesto."
      : "Hi, I need help with an alarm or security system in Valencia. I’d like to request an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const prices = isEs
    ? [
        ["Diagnóstico de alarma", "desde 49 €"],
        ["Instalación de alarma inalámbrica", "desde 69 €"],
        ["Instalación de alarma cableada", "desde 89 €"],
        ["Configuración de sensores", "desde 49 €"],
        ["Configuración de app / hub", "desde 49 €"],
        ["Instalación de sirena", "desde 59 €"],
        ["Alarma para negocio", "desde 99 €"],
        ["Mantenimiento / revisión", "desde 49 €"],
      ]
    : [
        ["Alarm diagnostics", "from €49"],
        ["Wireless alarm installation", "from €69"],
        ["Wired alarm installation", "from €89"],
        ["Sensor configuration", "from €49"],
        ["App / hub setup", "from €49"],
        ["Siren installation", "from €59"],
        ["Business alarm", "from €99"],
        ["Maintenance / check", "from €49"],
      ];

  const clientTypes = [
    {
      title: isEs ? "Viviendas y apartamentos" : "Homes and apartments",
      text: isEs
        ? "Alarmas para pisos, casas, entradas, terrazas, garajes, trasteros y zonas vulnerables."
        : "Alarms for apartments, houses, entrances, terraces, garages, storage rooms and vulnerable areas.",
      icon: Home,
    },
    {
      title: isEs ? "Oficinas y locales" : "Offices and units",
      text: isEs
        ? "Sistemas de alarma para accesos, zonas de trabajo, recepción, almacén y salas internas."
        : "Alarm systems for access points, work areas, reception, storage and internal rooms.",
      icon: Building2,
    },
    {
      title: isEs ? "Bares y restaurantes" : "Bars and restaurants",
      text: isEs
        ? "Alarmas para entrada, caja, cocina, almacén, terraza, cierre nocturno y zonas sensibles."
        : "Alarms for entrance, cash desk, kitchen, storage, terrace, night closing and sensitive areas.",
      icon: Store,
    },
    {
      title: isEs ? "Tiendas y comercios" : "Shops and retail",
      text: isEs
        ? "Alarmas para tiendas, TPV, escaparate, almacén, puerta principal y control básico de intrusión."
        : "Alarms for shops, POS areas, storefront, storage, main door and basic intrusion control.",
      icon: Store,
    },
  ];

  const process = isEs
    ? [
        ["1. Envía fotos", "Manda fotos de puertas, ventanas, central, sensores o sistema actual."],
        ["2. Revisamos el caso", "Se define si conviene alarma inalámbrica, cableada, sensores, sirena o app."],
        ["3. Presupuesto claro", "Se calcula instalación, configuración, materiales, altura, acceso y tiempo."],
        ["4. Instalación y ajuste", "Se colocan sensores, sirena, teclado, hub o central y se configura el sistema."],
        ["5. Prueba final", "Se comprueba armado, desarmado, sensores, sirena, notificaciones y app."],
      ]
    : [
        ["1. Send photos", "Send photos of doors, windows, control panel, sensors or current system."],
        ["2. Review the case", "We check if wireless alarm, wired alarm, sensors, siren or app setup is best."],
        ["3. Clear estimate", "Installation, configuration, materials, height, access and time are estimated."],
        ["4. Install and setup", "Sensors, siren, keypad, hub or control panel are installed and configured."],
        ["5. Final testing", "Arm, disarm, sensors, siren, notifications and app are tested."],
      ];

  const whyChoose = isEs
    ? [
        "Instalación limpia de sensores, sirenas y teclados",
        "Alarmas para viviendas, oficinas, bares y tiendas",
        "Ayuda con Ajax, Hikvision, DSC y Paradox",
        "Configuración de app, hub y notificaciones",
        "Revisión de falsas alarmas y sensores offline",
        "Mantenimiento y actualización de sistemas antiguos",
        "Soluciones cableadas e inalámbricas",
        "Comunicación directa por WhatsApp",
      ]
    : [
        "Clean installation of sensors, sirens and keypads",
        "Alarms for homes, offices, bars and shops",
        "Help with Ajax, Hikvision, DSC and Paradox",
        "App, hub and notification setup",
        "False alarm and offline sensor checks",
        "Maintenance and upgrade of older systems",
        "Wired and wireless solutions",
        "Direct communication by WhatsApp",
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar una alarma en Valencia?",
          a: "Depende del tipo de alarma, número de sensores, sirena, teclado, hub, cableado y configuración. Una instalación básica puede empezar desde 69–89 €.",
        },
        {
          q: "¿Instaláis alarmas inalámbricas?",
          a: "Sí. Podemos instalar alarmas inalámbricas con sensores, sirenas, teclado, hub, app móvil y configuración básica.",
        },
        {
          q: "¿Instaláis alarmas cableadas?",
          a: "Sí. También podemos ayudar con alarmas cableadas, sensores, sirenas, central y revisión de cableado.",
        },
        {
          q: "¿Trabajáis con Ajax, Hikvision, DSC y Paradox?",
          a: "Sí. Podemos ayudar con instalación, configuración, mantenimiento y revisión de sistemas Ajax, Hikvision, DSC, Paradox y otros compatibles.",
        },
        {
          q: "¿Podéis reparar una alarma que da falsas alarmas?",
          a: "Sí. Se puede revisar si el problema viene de sensores, batería, mala ubicación, configuración, cableado o comunicación con la central.",
        },
        {
          q: "¿Puedo comprar yo la alarma?",
          a: "Sí. Puedes comprar el equipo y enviarnos el modelo o enlace antes de la instalación para revisar compatibilidad.",
        },
        {
          q: "¿Se puede configurar la app del móvil?",
          a: "Sí. Podemos configurar la app, usuarios, notificaciones y funciones básicas si el sistema lo permite.",
        },
        {
          q: "¿Trabajáis con negocios?",
          a: "Sí. Trabajamos con oficinas, bares, restaurantes, tiendas, almacenes y otros locales comerciales.",
        },
      ]
    : [
        {
          q: "How much does alarm installation in Valencia cost?",
          a: "It depends on alarm type, number of sensors, siren, keypad, hub, cabling and configuration. A basic installation can start from €69–89.",
        },
        {
          q: "Do you install wireless alarms?",
          a: "Yes. We can install wireless alarms with sensors, sirens, keypad, hub, mobile app and basic configuration.",
        },
        {
          q: "Do you install wired alarms?",
          a: "Yes. We can also help with wired alarms, sensors, sirens, control panels and cabling checks.",
        },
        {
          q: "Do you work with Ajax, Hikvision, DSC and Paradox?",
          a: "Yes. We can help with installation, configuration, maintenance and checks for Ajax, Hikvision, DSC, Paradox and other compatible systems.",
        },
        {
          q: "Can you repair an alarm with false alarms?",
          a: "Yes. We can check if the issue comes from sensors, battery, poor placement, configuration, cabling or communication with the control panel.",
        },
        {
          q: "Can I buy the alarm myself?",
          a: "Yes. You can buy the equipment and send us the model or link before installation so compatibility can be checked.",
        },
        {
          q: "Can you configure the mobile app?",
          a: "Yes. We can configure the app, users, notifications and basic functions if the system supports it.",
        },
        {
          q: "Do you work with businesses?",
          a: "Yes. We work with offices, bars, restaurants, shops, warehouses and other commercial premises.",
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
          ? "Alarmas y sistemas de seguridad en Valencia"
          : "Alarm systems and security in Valencia",
        serviceType: isEs
          ? "Instalación y configuración de alarmas"
          : "Alarm installation and configuration",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Instalación, configuración, mantenimiento y reparación de alarmas cableadas e inalámbricas, sensores, sirenas, teclados, Ajax, Hikvision, DSC y Paradox en Valencia."
          : "Installation, configuration, maintenance and repair of wired and wireless alarms, sensors, sirens, keypads, Ajax, Hikvision, DSC and Paradox in Valencia.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de alarmas en Valencia"
            : "Alarm system services in Valencia",
          itemListElement: alarmPages.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: isEs ? item.es : item.en,
              url: `${baseUrl}/${locale}/services/alarm-systems/${item.slug}`,
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
            name: isEs ? "Alarmas" : "Alarm Systems",
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
                ? "Alarmas y sistemas de seguridad en Valencia"
                : "Alarm systems and security installation in Valencia"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Instalación, configuración, mantenimiento y reparación de alarmas para viviendas, oficinas, bares, restaurantes, tiendas y locales comerciales. Alarmas cableadas e inalámbricas, sensores, sirenas, teclados, app móvil y sistemas como Ajax, Hikvision, DSC y Paradox."
                : "Installation, configuration, maintenance and repair of alarm systems for homes, offices, bars, restaurants, shops and commercial units. Wired and wireless alarms, sensors, sirens, keypads, mobile app setup and systems such as Ajax, Hikvision, DSC and Paradox."}
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
                    ? "Envía fotos de sensores, central, sirena o sistema actual."
                    : "Send photos of sensors, control panel, siren or current system.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Seguridad para negocio" : "Business security",
                  text: isEs
                    ? "Alarmas para entradas, caja, almacén y zonas sensibles."
                    : "Alarms for entrances, cash desk, storage and sensitive areas.",
                },
                {
                  icon: MonitorSmartphone,
                  title: isEs ? "App y notificaciones" : "App and notifications",
                  text: isEs
                    ? "Configuración de usuarios, avisos y control desde móvil."
                    : "User setup, alerts and mobile control configuration.",
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
              <Siren className="h-4 w-4" />
              {isEs ? "Servicios de alarmas" : "Alarm services"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Elige el servicio de alarma que necesitas"
                : "Choose the alarm service you need"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "Estas tarjetas serán después páginas individuales para SEO y campañas de Google Ads: instalación de alarmas, alarmas inalámbricas, cableadas, Ajax, Hikvision, DSC, Paradox, mantenimiento, reparación y actualización."
                : "These cards will later become individual SEO and Google Ads landing pages: alarm installation, wireless alarms, wired alarms, Ajax, Hikvision, DSC, Paradox, maintenance, repair and upgrades."}
            </p>
          </div>

          <Link
            href={`/${locale}/estimate?category=alarm-systems`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto" : "Request estimate"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {alarmPages.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/services/alarm-systems/${item.slug}`}
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
                  ? "Presupuesto claro para alarmas, sensores y sirenas"
                  : "Clear estimate for alarms, sensors and sirens"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio depende del tipo de alarma, número de sensores, sirenas, teclado, hub, cableado, app, altura, acceso y dificultad de configuración."
                  : "The price depends on alarm type, number of sensors, sirens, keypad, hub, cabling, app setup, height, access and configuration difficulty."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de instalar, revisamos las zonas vulnerables: puerta principal, ventanas, terraza, garaje, almacén, caja, oficina o acceso nocturno."
                  : "Before installation, we review vulnerable areas: main door, windows, terrace, garage, storage, cash desk, office or night access."}
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
                  ? "El precio final depende del equipo, sensores, cableado, altura, acceso, tipo de pared, configuración, materiales y tiempo necesario."
                  : "Final price depends on equipment, sensors, cabling, height, access, wall type, configuration, materials and time required."}
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
              ? "Alarmas para viviendas, oficinas, restaurantes y tiendas"
              : "Alarms for homes, offices, restaurants and shops"}
          </h2>

          <p className="mx-auto mt-4 max-w-4xl leading-8 text-neutral-700">
            {isEs
              ? "Un sistema de alarma debe proteger las zonas correctas: entrada, ventanas, terraza, almacén, caja, oficina, garaje y cualquier punto vulnerable."
              : "An alarm system should protect the right areas: entrance, windows, terrace, storage, cash desk, office, garage and any vulnerable point."}
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
                  ? "Por qué elegir THEVULGO para alarmas"
                  : "Why choose THEVULGO for alarm systems"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "No se trata solo de colocar sensores. Una alarma útil necesita buena ubicación, configuración correcta, pruebas reales, app funcionando y comunicación clara con el cliente."
                  : "It is not just about placing sensors. A useful alarm needs good placement, correct configuration, real testing, a working app and clear communication with the client."}
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
              ? "De fotos por WhatsApp a alarma funcionando"
              : "From WhatsApp photos to working alarm"}
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
                <MonitorSmartphone className="h-4 w-4 text-yellow-500" />
                {isEs ? "App y control remoto" : "App and remote control"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "App móvil, usuarios, sensores y notificaciones"
                  : "Mobile app, users, sensors and notifications"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Una alarma moderna debe ser fácil de usar. Podemos ayudar con configuración de app, usuarios, notificaciones, sensores, modos de armado y revisión básica del sistema."
                  : "A modern alarm should be easy to use. We can help with app setup, users, notifications, sensors, arming modes and basic system review."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "También podemos revisar sensores offline, falsas alarmas, baterías bajas, mala ubicación de detectores o problemas de comunicación."
                  : "We can also check offline sensors, false alarms, low batteries, poor detector placement or communication issues."}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {(isEs
                ? [
                    "Configuración de app móvil",
                    "Usuarios y permisos",
                    "Sensores de puerta y ventana",
                    "Detectores de movimiento",
                    "Sirenas interiores o exteriores",
                    "Revisión de batería",
                    "Falsas alarmas",
                    "Sistema offline",
                  ]
                : [
                    "Mobile app setup",
                    "Users and permissions",
                    "Door and window sensors",
                    "Motion detectors",
                    "Indoor or outdoor sirens",
                    "Battery check",
                    "False alarms",
                    "Offline system",
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
              <Siren className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs ? "Antes de instalar una alarma" : "Before installing an alarm"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Antes de colocar sensores o sirenas, hay que definir qué zonas proteger, cómo se entra al espacio, si hay mascotas, qué puertas o ventanas son vulnerables y si el sistema será cableado o inalámbrico."
                : "Before placing sensors or sirens, it is important to define which areas to protect, how the space is entered, whether there are pets, which doors or windows are vulnerable and whether the system will be wired or wireless."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Puerta principal",
                    "Ventanas vulnerables",
                    "Terraza o balcón",
                    "Garaje o almacén",
                    "Mascotas y zonas de paso",
                  ]
                : [
                    "Main door",
                    "Vulnerable windows",
                    "Terrace or balcony",
                    "Garage or storage",
                    "Pets and movement areas",
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
              {isEs ? "Alarmas para negocios" : "Alarm systems for businesses"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Para negocios, la alarma suele trabajar junto con cámaras, red, router, control de acceso y cierre del local. Una instalación bien pensada ayuda a proteger caja, entrada, almacén y zonas sensibles."
                : "For businesses, an alarm often works together with cameras, network, router, access control and closing routines. A well-planned installation helps protect cash desk, entrance, storage and sensitive areas."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Entrada y cierre nocturno",
                    "Zona de caja",
                    "Almacén y stock",
                    "Oficina o despacho",
                    "Integración con seguridad existente",
                  ]
                : [
                    "Entrance and night closing",
                    "Cash desk area",
                    "Storage and stock",
                    "Office or private room",
                    "Integration with existing security",
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
                  ? "¿Necesitas instalar o revisar una alarma en Valencia?"
                  : "Need to install or check an alarm in Valencia?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos de puertas, ventanas, sensores, sirena, central o sistema actual. Revisamos el caso y te damos una estimación clara antes de confirmar la visita."
                  : "Send photos of doors, windows, sensors, siren, control panel or current system. We review the case and give you a clear estimate before confirming the visit."}
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