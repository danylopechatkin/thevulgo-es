import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Euro,
  Fingerprint,
  Hotel,
  KeyRound,
  Landmark,
  Lock,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  ScanFace,
  Settings,
  ShieldCheck,
  Store,
  Timer,
  Warehouse,
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

const accessPages = [
  {
    slug: "access-control-installation-valencia",
    en: "Access Control Installation",
    es: "Instalación de control de acceso",
    descEn: "Access control systems for offices, shops, restaurants, hotels and commercial spaces.",
    descEs: "Sistemas de control de acceso para oficinas, tiendas, restaurantes, hoteles y locales.",
    icon: KeyRound,
  },
  {
    slug: "door-access-systems-valencia",
    en: "Door Access Systems",
    es: "Sistemas de acceso para puertas",
    descEn: "Door access setup with readers, controllers, electric locks and clean installation.",
    descEs: "Acceso para puertas con lectores, controladores, cerraduras eléctricas e instalación limpia.",
    icon: Lock,
  },
  {
    slug: "rfid-installation-valencia",
    en: "RFID Installation",
    es: "Instalación RFID",
    descEn: "RFID readers, cards, tags, access permissions and basic configuration.",
    descEs: "Lectores RFID, tarjetas, llaveros, permisos de acceso y configuración básica.",
    icon: BadgeCheck,
  },
  {
    slug: "keypad-installation-valencia",
    en: "Keypad Installation",
    es: "Instalación de teclado de acceso",
    descEn: "Keypad access installation with codes, users, door release and testing.",
    descEs: "Instalación de teclado con códigos, usuarios, apertura de puerta y pruebas.",
    icon: KeyRound,
  },
  {
    slug: "fingerprint-access-valencia",
    en: "Fingerprint Access",
    es: "Acceso por huella",
    descEn: "Fingerprint access systems for offices, staff rooms, shops and controlled areas.",
    descEs: "Acceso por huella para oficinas, salas de personal, tiendas y zonas controladas.",
    icon: Fingerprint,
  },
  {
    slug: "face-recognition-valencia",
    en: "Face Recognition",
    es: "Reconocimiento facial",
    descEn: "Face recognition access devices, user setup and door access configuration.",
    descEs: "Dispositivos de reconocimiento facial, usuarios y configuración de acceso.",
    icon: ScanFace,
  },
  {
    slug: "office-access-control-valencia",
    en: "Office Access Control",
    es: "Control de acceso para oficinas",
    descEn: "Access control for offices, meeting rooms, staff areas and main entrances.",
    descEs: "Control de acceso para oficinas, salas, zonas de personal y entradas.",
    icon: Building2,
  },
  {
    slug: "restaurant-access-valencia",
    en: "Restaurant Access",
    es: "Control de acceso para restaurantes",
    descEn: "Access systems for restaurants, staff doors, storage rooms, kitchen and private areas.",
    descEs: "Acceso para restaurantes, puertas de personal, almacén, cocina y zonas privadas.",
    icon: Store,
  },
  {
    slug: "warehouse-access-valencia",
    en: "Warehouse Access",
    es: "Control de acceso para almacenes",
    descEn: "Access control for warehouses, stockrooms, loading areas and restricted zones.",
    descEs: "Control de acceso para almacenes, stock, carga y zonas restringidas.",
    icon: Warehouse,
  },
  {
    slug: "hotel-access-valencia",
    en: "Hotel Access",
    es: "Control de acceso para hoteles",
    descEn: "Access solutions for hotels, guest areas, staff doors and service rooms.",
    descEs: "Soluciones de acceso para hoteles, huéspedes, personal y zonas de servicio.",
    icon: Hotel,
  },
  {
    slug: "electric-strike-installation-valencia",
    en: "Electric Strike Installation",
    es: "Instalación de cerradero eléctrico",
    descEn: "Electric strike installation for doors, intercoms, access readers and controllers.",
    descEs: "Cerraderos eléctricos para puertas, videoporteros, lectores y controladores.",
    icon: Lock,
  },
  {
    slug: "magnetic-lock-installation-valencia",
    en: "Magnetic Lock Installation",
    es: "Instalación de cerradura magnética",
    descEn: "Magnetic lock installation for commercial doors, offices and controlled access points.",
    descEs: "Cerraduras magnéticas para puertas comerciales, oficinas y accesos controlados.",
    icon: ShieldCheck,
  },
  {
    slug: "door-controller-valencia",
    en: "Door Controller",
    es: "Controlador de puerta",
    descEn: "Door controller setup for readers, locks, exit buttons and access permissions.",
    descEs: "Controladores de puerta para lectores, cerraduras, pulsadores y permisos.",
    icon: Settings,
  },
  {
    slug: "time-attendance-valencia",
    en: "Time Attendance",
    es: "Control horario",
    descEn: "Time attendance terminals, staff clock-in setup, users and basic reporting.",
    descEs: "Terminales de control horario, fichaje, usuarios y configuración básica.",
    icon: Timer,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Control de acceso en Valencia | RFID, teclados y cerraduras | THEVULGO"
    : "Access Control in Valencia | RFID, Keypads & Door Locks | THEVULGO";

  const description = isEs
    ? "Instalación de control de acceso en Valencia: lectores RFID, teclados, huella, reconocimiento facial, cerraderos eléctricos, cerraduras magnéticas, controladores y control horario."
    : "Access control installation in Valencia: RFID readers, keypads, fingerprint access, face recognition, electric strikes, magnetic locks, door controllers and time attendance.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "control de acceso valencia",
          "instalacion control acceso valencia",
          "rfid valencia",
          "teclado acceso valencia",
          "cerradero electrico valencia",
          "cerradura magnetica valencia",
          "control acceso oficina valencia",
          "control acceso restaurante valencia",
          "control horario valencia",
        ]
      : [
          "access control valencia",
          "access control installation valencia",
          "rfid installation valencia",
          "keypad installation valencia",
          "electric strike installation valencia",
          "magnetic lock installation valencia",
          "office access control valencia",
          "restaurant access control valencia",
          "time attendance valencia",
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
      canonical: `${baseUrl}/${locale}/services/access-control`,
      languages: {
        es: `${baseUrl}/es/services/access-control`,
        en: `${baseUrl}/en/services/access-control`,
        "x-default": `${baseUrl}/es/services/access-control`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/access-control`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}
export default async function AccessControlPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/services/access-control`;
  const estimateHref = `/${locale}/estimate?category=access-control`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito ayuda con control de acceso, cerradura eléctrica o sistema de entrada en Valencia. Quiero pedir presupuesto."
      : "Hi, I need help with access control, electric lock or door access system in Valencia. I’d like to request an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const prices = isEs
    ? [
        ["Diagnóstico de acceso", "desde 49 €"],
        ["Instalación de teclado", "desde 79 €"],
        ["Instalación RFID", "desde 79 €"],
        ["Cerradero eléctrico", "desde 89 €"],
        ["Cerradura magnética", "desde 99 €"],
        ["Controlador de puerta", "desde 99 €"],
        ["Control horario", "desde 89 €"],
        ["Sistema para negocio", "desde 129 €"],
      ]
    : [
        ["Access diagnostics", "from €49"],
        ["Keypad installation", "from €79"],
        ["RFID installation", "from €79"],
        ["Electric strike", "from €89"],
        ["Magnetic lock", "from €99"],
        ["Door controller", "from €99"],
        ["Time attendance", "from €89"],
        ["Business access system", "from €129"],
      ];

  const clientTypes = [
    {
      title: isEs ? "Oficinas y coworkings" : "Offices and coworking spaces",
      text: isEs
        ? "Control de acceso para entrada principal, salas, zonas de personal y espacios compartidos."
        : "Access control for main entrance, rooms, staff areas and shared workspaces.",
      icon: Building2,
    },
    {
      title: isEs ? "Restaurantes y bares" : "Restaurants and bars",
      text: isEs
        ? "Acceso para almacén, cocina, puerta de personal, caja, zonas privadas y cierre del local."
        : "Access for storage, kitchen, staff door, cash area, private zones and closing routines.",
      icon: Store,
    },
    {
      title: isEs ? "Almacenes y naves" : "Warehouses and units",
      text: isEs
        ? "Control para puertas de almacén, stock, zonas restringidas, carga y accesos internos."
        : "Control for warehouse doors, stock, restricted zones, loading areas and internal access.",
      icon: Warehouse,
    },
    {
      title: isEs ? "Hoteles y alojamientos" : "Hotels and accommodation",
      text: isEs
        ? "Soluciones para accesos de personal, habitaciones técnicas, zonas comunes y servicios."
        : "Solutions for staff access, technical rooms, shared areas and service spaces.",
      icon: Hotel,
    },
  ];

  const process = isEs
    ? [
        ["1. Envía fotos", "Manda fotos de la puerta, cerradura, marco, cableado, fuente o sistema actual."],
        ["2. Revisamos el caso", "Se define si conviene RFID, teclado, huella, cerradero, electroimán o controlador."],
        ["3. Presupuesto claro", "Se calcula instalación, materiales, cableado, configuración, altura y acceso."],
        ["4. Instalación y ajuste", "Se instala lector, cerradura, pulsador, controlador o terminal y se configura."],
        ["5. Prueba final", "Se comprueba apertura, cierre, permisos, usuarios, códigos y funcionamiento real."],
      ]
    : [
        ["1. Send photos", "Send photos of the door, lock, frame, cabling, power supply or current system."],
        ["2. Review the case", "We check if RFID, keypad, fingerprint, strike, maglock or controller fits best."],
        ["3. Clear estimate", "Installation, materials, cabling, configuration, height and access are estimated."],
        ["4. Install and setup", "Reader, lock, exit button, controller or terminal is installed and configured."],
        ["5. Final testing", "Opening, closing, permissions, users, codes and real operation are tested."],
      ];

  const whyChoose = isEs
    ? [
        "Instalación limpia de lectores, teclados y cerraduras",
        "Soluciones para oficinas, restaurantes, tiendas y almacenes",
        "RFID, códigos, huella, reconocimiento facial y control horario",
        "Cerraderos eléctricos y cerraduras magnéticas",
        "Controladores de puerta, pulsadores y fuentes de alimentación",
        "Configuración de usuarios, permisos y pruebas reales",
        "Integración práctica con seguridad existente",
        "Comunicación directa por WhatsApp",
      ]
    : [
        "Clean installation of readers, keypads and locks",
        "Solutions for offices, restaurants, shops and warehouses",
        "RFID, codes, fingerprint, face recognition and time attendance",
        "Electric strikes and magnetic locks",
        "Door controllers, exit buttons and power supplies",
        "User, permission setup and real testing",
        "Practical integration with existing security",
        "Direct communication by WhatsApp",
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar control de acceso en Valencia?",
          a: "Depende del tipo de puerta, cerradura, lector, cableado, fuente, controlador y configuración. Una instalación básica puede empezar desde 79–99 €.",
        },
        {
          q: "¿Instaláis lectores RFID?",
          a: "Sí. Podemos instalar lectores RFID, tarjetas, llaveros, permisos de usuario y configuración básica.",
        },
        {
          q: "¿Instaláis teclados de acceso?",
          a: "Sí. Instalamos teclados con códigos, usuarios, apertura de puerta y pruebas de funcionamiento.",
        },
        {
          q: "¿Podéis instalar cerradero eléctrico o cerradura magnética?",
          a: "Sí. Podemos instalar cerraderos eléctricos, cerraduras magnéticas, fuentes de alimentación, pulsadores y controladores compatibles.",
        },
        {
          q: "¿Trabajáis con oficinas, restaurantes y tiendas?",
          a: "Sí. Instalamos control de acceso para oficinas, bares, restaurantes, tiendas, almacenes, hoteles y locales comerciales.",
        },
        {
          q: "¿Se puede instalar control horario?",
          a: "Sí. Podemos instalar terminales de fichaje, usuarios, configuración básica y pruebas de entrada y salida.",
        },
        {
          q: "¿Puedo comprar yo el equipo?",
          a: "Sí. Puedes comprar el equipo y enviarnos el modelo o enlace antes de la instalación para revisar compatibilidad.",
        },
        {
          q: "¿Podéis revisar un sistema que ya no abre la puerta?",
          a: "Sí. Podemos revisar si el fallo viene del lector, cerradura, fuente, cableado, controlador, permisos o configuración.",
        },
      ]
    : [
        {
          q: "How much does access control installation in Valencia cost?",
          a: "It depends on door type, lock, reader, cabling, power supply, controller and configuration. A basic installation can start from €79–99.",
        },
        {
          q: "Do you install RFID readers?",
          a: "Yes. We can install RFID readers, cards, tags, user permissions and basic configuration.",
        },
        {
          q: "Do you install access keypads?",
          a: "Yes. We install keypads with codes, users, door release and operation testing.",
        },
        {
          q: "Can you install an electric strike or magnetic lock?",
          a: "Yes. We can install electric strikes, magnetic locks, power supplies, exit buttons and compatible controllers.",
        },
        {
          q: "Do you work with offices, restaurants and shops?",
          a: "Yes. We install access control for offices, bars, restaurants, shops, warehouses, hotels and commercial units.",
        },
        {
          q: "Can you install time attendance?",
          a: "Yes. We can install clock-in terminals, users, basic configuration and entry/exit testing.",
        },
        {
          q: "Can I buy the equipment myself?",
          a: "Yes. You can buy the equipment and send us the model or link before installation so compatibility can be checked.",
        },
        {
          q: "Can you check a system that no longer opens the door?",
          a: "Yes. We can check if the fault comes from the reader, lock, power supply, cabling, controller, permissions or configuration.",
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
          ? "Control de acceso en Valencia"
          : "Access control in Valencia",
        serviceType: isEs
          ? "Instalación y configuración de control de acceso"
          : "Access control installation and configuration",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Instalación, configuración y revisión de control de acceso, RFID, teclados, huella, reconocimiento facial, cerraderos eléctricos, cerraduras magnéticas, controladores y control horario en Valencia."
          : "Installation, configuration and checks for access control, RFID, keypads, fingerprint, face recognition, electric strikes, magnetic locks, door controllers and time attendance in Valencia.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de control de acceso en Valencia"
            : "Access control services in Valencia",
          itemListElement: accessPages.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: isEs ? item.es : item.en,
              url: `${baseUrl}/${locale}/services/access-control/${item.slug}`,
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
            name: isEs ? "Control de acceso" : "Access Control",
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
                ? "Control de acceso en Valencia para negocios y edificios"
                : "Access control installation in Valencia for businesses and buildings"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Instalación y configuración de sistemas de control de acceso para oficinas, restaurantes, tiendas, almacenes, hoteles y locales comerciales. Lectores RFID, teclados, huella, reconocimiento facial, cerraderos eléctricos, cerraduras magnéticas, controladores de puerta y control horario."
                : "Installation and configuration of access control systems for offices, restaurants, shops, warehouses, hotels and commercial units. RFID readers, keypads, fingerprint access, face recognition, electric strikes, magnetic locks, door controllers and time attendance."}
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
                    ? "Envía fotos de puerta, cerradura, lector o sistema actual."
                    : "Send photos of the door, lock, reader or current system.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Acceso seguro" : "Secure access",
                  text: isEs
                    ? "RFID, códigos, huella, cerraduras eléctricas y controladores."
                    : "RFID, codes, fingerprint, electric locks and controllers.",
                },
                {
                  icon: MonitorSmartphone,
                  title: isEs ? "Usuarios y permisos" : "Users and permissions",
                  text: isEs
                    ? "Configuración de usuarios, tarjetas, códigos y horarios."
                    : "User, card, code and schedule configuration.",
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
              <KeyRound className="h-4 w-4" />
              {isEs ? "Servicios de acceso" : "Access services"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Elige el servicio de control de acceso que necesitas"
                : "Choose the access control service you need"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "Estas tarjetas serán después páginas individuales para SEO y campañas de Google Ads: control de acceso, RFID, teclados, huella, reconocimiento facial, cerraderos eléctricos, cerraduras magnéticas, controladores y control horario."
                : "These cards will later become individual SEO and Google Ads landing pages: access control, RFID, keypads, fingerprint, face recognition, electric strikes, magnetic locks, door controllers and time attendance."}
            </p>
          </div>

          <Link
            href={`/${locale}/estimate?category=access-control`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto" : "Request estimate"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {accessPages.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/services/access-control/${item.slug}`}
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
                  ? "Presupuesto claro para lectores, cerraduras y controladores"
                  : "Clear estimate for readers, locks and controllers"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio depende del tipo de puerta, lector, cerradura, fuente de alimentación, controlador, cableado, permisos, usuarios y dificultad de instalación."
                  : "The price depends on door type, reader, lock, power supply, controller, cabling, permissions, users and installation difficulty."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de instalar, revisamos puerta, marco, tipo de cerradura, alimentación, cableado posible, forma de apertura y uso diario del acceso."
                  : "Before installation, we check the door, frame, lock type, power supply, possible cabling, opening method and daily access use."}
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
                  ? "El precio final depende del equipo, cableado, altura, acceso, tipo de puerta, configuración, materiales y tiempo necesario."
                  : "Final price depends on equipment, cabling, height, access, door type, configuration, materials and time required."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <Landmark className="h-4 w-4" />
            {isEs ? "Para quién" : "Who it is for"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs
              ? "Control de acceso para oficinas, restaurantes, hoteles y almacenes"
              : "Access control for offices, restaurants, hotels and warehouses"}
          </h2>

          <p className="mx-auto mt-4 max-w-4xl leading-8 text-neutral-700">
            {isEs
              ? "Un sistema de acceso debe controlar quién entra, cuándo entra y qué puerta puede abrir: entrada principal, almacén, cocina, oficina, sala técnica o zona restringida."
              : "An access system should control who enters, when they enter and which door they can open: main entrance, storage, kitchen, office, technical room or restricted area."}
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
                  ? "Por qué elegir THEVULGO para control de acceso"
                  : "Why choose THEVULGO for access control"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "No se trata solo de poner un lector. Un acceso útil necesita cerradura adecuada, alimentación estable, configuración de usuarios, pruebas reales y una instalación limpia."
                  : "It is not just about mounting a reader. A useful access system needs the right lock, stable power, user configuration, real testing and clean installation."}
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
              ? "De fotos por WhatsApp a acceso funcionando"
              : "From WhatsApp photos to working access control"}
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
                {isEs ? "Usuarios y permisos" : "Users and permissions"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Tarjetas, códigos, huella, horarios y control horario"
                  : "Cards, codes, fingerprint, schedules and time attendance"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Un sistema de control de acceso puede gestionar usuarios, tarjetas RFID, códigos de teclado, huellas, horarios y permisos por puerta. Esto ayuda a ordenar el acceso de empleados, clientes, proveedores o personal externo."
                  : "An access control system can manage users, RFID cards, keypad codes, fingerprints, schedules and door permissions. This helps organize access for employees, clients, suppliers or external staff."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "También podemos revisar sistemas que no abren la puerta, lectores sin respuesta, cerraduras sin alimentación, controladores mal configurados o problemas de permisos."
                  : "We can also check systems that do not open the door, unresponsive readers, locks without power, misconfigured controllers or permission problems."}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {(isEs
                ? [
                    "Tarjetas RFID",
                    "Códigos de teclado",
                    "Huella dactilar",
                    "Reconocimiento facial",
                    "Horarios de acceso",
                    "Permisos por usuario",
                    "Control horario",
                    "Revisión de fallos",
                  ]
                : [
                    "RFID cards",
                    "Keypad codes",
                    "Fingerprint",
                    "Face recognition",
                    "Access schedules",
                    "User permissions",
                    "Time attendance",
                    "Fault checks",
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
              <Lock className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs
                ? "Antes de instalar control de acceso"
                : "Before installing access control"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Antes de instalar un lector o cerradura, hay que revisar la puerta, el marco, la dirección de apertura, la alimentación, el tipo de cerradura y cómo debe salir la persona desde dentro."
                : "Before installing a reader or lock, the door, frame, opening direction, power supply, lock type and how people exit from inside must be checked."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Tipo de puerta y marco",
                    "Cerradura actual",
                    "Entrada y salida",
                    "Alimentación disponible",
                    "Usuarios y permisos",
                  ]
                : [
                    "Door and frame type",
                    "Current lock",
                    "Entry and exit",
                    "Available power supply",
                    "Users and permissions",
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
                ? "Control de acceso para negocios"
                : "Access control for businesses"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Para negocios, el control de acceso suele trabajar junto con cámaras, alarmas, red, router y cierre del local. Una instalación bien pensada ayuda a controlar entrada, almacén, cocina, oficina y zonas restringidas."
                : "For businesses, access control often works together with cameras, alarms, network, router and closing routines. A well-planned installation helps control entrance, storage, kitchen, office and restricted areas."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Entrada principal",
                    "Almacén y stock",
                    "Cocina o zona privada",
                    "Oficina o sala interna",
                    "Acceso de empleados",
                  ]
                : [
                    "Main entrance",
                    "Storage and stock",
                    "Kitchen or private area",
                    "Office or internal room",
                    "Staff access",
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
                  ? "¿Necesitas control de acceso en Valencia?"
                  : "Need access control in Valencia?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envía fotos de la puerta, cerradura, marco, lector o sistema actual. Revisamos el caso y te damos una estimación clara antes de confirmar la visita."
                  : "Send photos of the door, lock, frame, reader or current system. We review the case and give you a clear estimate before confirming the visit."}
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