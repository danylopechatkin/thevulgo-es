import type { Metadata } from "next";
import Link from "next/link";
import {
  AlarmClock,
  ArrowRight,
  BadgeCheck,
  BellRing,
  Building2,
  Cable,
  Camera,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Cpu,
  DoorOpen,
  EthernetPort,
  Eye,
  Fingerprint,
  HardDrive,
  KeyRound,
  Laptop,
  LockKeyhole,
  MapPin,
  MessageCircle,
  MonitorCheck,
  Network,
  PlugZap,
  Radio,
  Router,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Smartphone,
  Store,
  TabletSmartphone,
  UserCheck,
  Video,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";

const pageUrl = `${baseUrl}/en/services/commercial-security`;

const whatsappText =
  "Hello THEVULGO, I need commercial security service for my business in Valencia. I can send photos/videos of the place and explain what I need.";

const areas = [
  "Valencia",
  "Campanar",
  "Ruzafa",
  "Russafa",
  "Benimaclet",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mestalla",
  "Camins al Grau",
  "Ayora",
  "Algirós",
  "Malvarrosa",
  "Poblats Marítims",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
  "Manises",
  "Quart de Poblet",
  "Xirivella",
  "Alaquàs",
  "Sagunto",
  "Cullera",
  "Gandía",
];

const serviceCards = [
  {
    title: "CCTV Camera Installation",
    description:
      "Professional camera installation for offices, bars, shops, warehouses and commercial premises.",
    icon: Camera,
  },
  {
    title: "Alarm System Setup",
    description:
      "Alarm sensors, sirens, control panels and basic alarm configuration for business protection.",
    icon: BellRing,
  },
  {
    title: "Access Control Systems",
    description:
      "Keypad, card, fob and electric lock systems for staff-only doors and private areas.",
    icon: Fingerprint,
  },
  {
    title: "NVR / DVR Setup",
    description:
      "Recorder installation, camera pairing, storage check and recording configuration.",
    icon: HardDrive,
  },
  {
    title: "Remote Mobile Viewing",
    description:
      "Secure access to cameras from mobile phone, tablet or computer when supported by your system.",
    icon: Smartphone,
  },
  {
    title: "Network for Security Devices",
    description:
      "Router, switch, access point and wired connection setup for cameras, alarms and access devices.",
    icon: Network,
  },
  {
    title: "RJ45 & Data Cabling",
    description:
      "Ethernet cable routing, RJ45 termination, patching and practical cable organization.",
    icon: EthernetPort,
  },
  {
    title: "Wi-Fi Coverage for Business",
    description:
      "Access point placement and Wi-Fi coverage improvements for commercial security systems.",
    icon: Wifi,
  },
  {
    title: "Electric Door Locks",
    description:
      "Electric strike, magnetic lock, exit button and access-controlled door solutions.",
    icon: LockKeyhole,
  },
  {
    title: "Door Entry Systems",
    description:
      "Commercial entry control for offices, shops, storage rooms and staff areas.",
    icon: DoorOpen,
  },
  {
    title: "Motion Detection Alerts",
    description:
      "Motion alerts, app notifications and basic event rules for everyday business use.",
    icon: ShieldAlert,
  },
  {
    title: "Security Inspection",
    description:
      "On-site review of blind spots, exposed cables, weak network points and existing equipment.",
    icon: Eye,
  },
  {
    title: "Camera Troubleshooting",
    description:
      "Fix camera offline issues, unstable recording, weak signal, power problems and network faults.",
    icon: Wrench,
  },
  {
    title: "Commercial Sirens",
    description:
      "Indoor and outdoor siren installation for visible and audible business protection.",
    icon: Siren,
  },
  {
    title: "Smart Security Upgrades",
    description:
      "Upgrade an existing CCTV, alarm or access system without replacing everything unnecessarily.",
    icon: Zap,
  },
  {
    title: "Staff Access Zones",
    description:
      "Separate access for staff rooms, storage areas, offices, kitchens and private business zones.",
    icon: UserCheck,
  },
  {
    title: "Business Monitoring Screens",
    description:
      "Monitor setup for viewing cameras from reception, office, bar counter or manager room.",
    icon: MonitorCheck,
  },
  {
    title: "Complete Security Planning",
    description:
      "Practical plan for camera positions, network, access control and future security expansion.",
    icon: ClipboardCheck,
  },
];

const prices = [
  {
    name: "Security inspection",
    price: "from €49",
    text: "Best for checking an existing system, camera positions, blind spots, network problems or access needs.",
    items: [
      "On-site inspection",
      "Basic diagnosis",
      "Recommendations",
      "Final quote before work",
    ],
  },
  {
    name: "Small business setup",
    price: "from €99",
    text: "For small CCTV, alarm, recorder, network or access control tasks in offices, bars and shops.",
    items: [
      "Small installation work",
      "Device connection",
      "Basic configuration",
      "Photos/video quote possible",
    ],
  },
  {
    name: "Complete commercial security",
    price: "custom quote",
    text: "For multiple cameras, access control, cabling, NVR/DVR, Wi-Fi, network and full business security upgrades.",
    items: [
      "Custom project plan",
      "Multiple devices",
      "Clean cable routing",
      "System configuration",
    ],
  },
];

const clientTypes = [
  "Offices",
  "Bars",
  "Restaurants",
  "Retail shops",
  "Beauty salons",
  "Warehouses",
  "Clinics",
  "Gyms",
  "Coworking spaces",
  "Small supermarkets",
  "Storage rooms",
  "Rental premises",
  "Dental clinics",
  "Hair salons",
  "Showrooms",
  "Repair shops",
  "Training rooms",
  "Commercial units",
];

const process = [
  {
    title: "Send photos or video",
    text: "Show us the entrance, camera points, doors, recorder, router, cables or current devices.",
    icon: Smartphone,
  },
  {
    title: "We check the best solution",
    text: "We review what you already have and what is really needed for your business.",
    icon: ClipboardCheck,
  },
  {
    title: "Clear quote before work",
    text: "You receive a clear price range or final quote before the installation starts.",
    icon: CircleDollarSign,
  },
  {
    title: "Installation and setup",
    text: "We install, connect, configure and test the system so it is practical to use.",
    icon: Wrench,
  },
];

const whyChoose = [
  "Business-focused security solutions",
  "CCTV, alarm, access and network in one service",
  "Clean installation with practical cable routing",
  "Clear price before work starts",
  "Upgrade existing systems when possible",
  "Support for offices, bars, shops and commercial spaces",
  "WhatsApp communication with photos and videos",
  "Valencia and nearby areas",
];

const faqs = [
  {
    question: "Do you install CCTV cameras for businesses in Valencia?",
    answer:
      "Yes. We install CCTV cameras for offices, bars, restaurants, shops, warehouses and other commercial spaces in Valencia and nearby areas.",
  },
  {
    question: "Can you install access control for a commercial door?",
    answer:
      "Yes. We can install access control solutions such as keypads, fobs, card readers, electric strikes, magnetic locks and exit buttons, depending on the door and the business needs.",
  },
  {
    question: "Can you repair an existing CCTV or alarm system?",
    answer:
      "Yes. We can inspect and troubleshoot existing cameras, recorders, alarms, access control devices, network connections and cabling.",
  },
  {
    question: "How much does commercial security installation cost?",
    answer:
      "Small commercial security work starts from €99. A security inspection starts from €49. Full systems with multiple cameras, cabling, access control or network work require a custom quote.",
  },
  {
    question: "Can you connect cameras to my phone?",
    answer:
      "Yes, when the camera system supports remote access. We can help configure mobile viewing, app access and basic notifications.",
  },
  {
    question: "Do you work with bars, restaurants and shops?",
    answer:
      "Yes. We work with bars, restaurants, retail shops, offices, salons, clinics, gyms, warehouses and other commercial premises.",
  },
  {
    question: "Can you improve my current security system without replacing everything?",
    answer:
      "Yes. In many cases we can improve camera positions, fix cabling, add a switch, improve Wi-Fi, configure the recorder or add access control without replacing the whole system.",
  },
  {
    question: "Do you install network equipment for security systems?",
    answer:
      "Yes. We can install and organize routers, switches, access points, PoE devices and Ethernet cabling needed for cameras and security devices.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title:
      "Commercial Security Valencia | CCTV, Alarm & Access Control | THEVULGO",
    description:
      "Commercial security installation in Valencia. CCTV cameras, alarm systems, access control, NVR/DVR, Wi-Fi, cabling and network security for offices, bars, shops and businesses from €99.",
    alternates: {
      canonical: pageUrl,
      languages: {
        en: pageUrl,
        es: `${baseUrl}/es/services/seguridad-comercial`,
      },
    },
    openGraph: {
      title:
        "Commercial Security Valencia | CCTV, Alarm & Access Control | THEVULGO",
      description:
        "CCTV, alarm, access control and network security installation for businesses in Valencia.",
      url: pageUrl,
      siteName: "THEVULGO",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og/commercial-security-valencia.jpg`,
          width: 1200,
          height: 630,
          alt: "Commercial security installation in Valencia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Commercial Security Valencia | CCTV, Alarm & Access Control | THEVULGO",
      description:
        "Security solutions for offices, bars, shops and businesses in Valencia.",
      images: [`${baseUrl}/og/commercial-security-valencia.jpg`],
    },
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
  };
}

export default async function CommercialSecurityPage({ params }: Props) {
  await params;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "THEVULGO",
    url: baseUrl,
    telephone: `+${phone}`,
    image: `${baseUrl}/og/commercial-security-valencia.jpg`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressRegion: "Valencia",
      addressCountry: "ES",
    },
    areaServed: areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Security Installation in Valencia",
    serviceType:
      "CCTV installation, alarm setup, access control and business network security",
    provider: {
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: baseUrl,
      telephone: `+${phone}`,
    },
    areaServed: {
      "@type": "City",
      name: "Valencia",
    },
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
    description:
      "Commercial security installation and upgrade service in Valencia for offices, bars, shops and businesses. CCTV cameras, alarm systems, access control, NVR/DVR, network setup, Wi-Fi and mobile viewing.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/en`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/en/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Commercial Security",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <main className="min-h-screen bg-white text-black">
        <section className="relative overflow-hidden border-b border-neutral-200 bg-[radial-gradient(circle_at_top_left,#fff4c2,transparent_34%),linear-gradient(180deg,#ffffff_0%,#fafafa_100%)]">
          <div className="absolute left-0 top-0 h-full w-full opacity-[0.03]">
            <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-black uppercase tracking-wide text-neutral-900 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-yellow-500" />
                Business Security Valencia
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-black sm:text-6xl lg:text-7xl">
                Commercial Security Installation in Valencia
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 text-neutral-700">
                Network, CCTV, alarm and access control solutions for offices,
                bars, restaurants, shops and commercial spaces in Valencia.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-yellow-400 px-5 py-3 text-base font-black text-black">
                  from €99
                </span>
                <span className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-base font-bold text-neutral-800">
                  CCTV · Alarm · Access
                </span>
                <span className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-base font-bold text-neutral-800">
                  Valencia & nearby areas
                </span>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    whatsappText,
                  )}`}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-base font-black text-white transition hover:bg-neutral-800"
                >
                  Get quote on WhatsApp
                  <MessageCircle className="h-5 w-5" />
                </Link>

                <Link
                  href="#prices"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-neutral-300 bg-white px-7 py-4 text-base font-black text-black transition hover:border-black"
                >
                  See prices
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  "Clear quote before work",
                  "Business-focused setup",
                  "Photos/video estimate",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-500" />
                    <span className="text-sm font-bold text-neutral-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-yellow-300 blur-3xl" />
              <div className="absolute -bottom-8 right-0 h-48 w-48 rounded-full bg-neutral-200 blur-3xl" />

              <div className="relative rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-2xl">
                <div className="rounded-[1.5rem] border border-yellow-300 bg-yellow-50 p-6">
                  <div className="flex items-center justify-between">
                    <div className="rounded-3xl bg-yellow-400 p-5 shadow-lg">
                      <Building2 className="h-10 w-10 text-black" />
                    </div>
                    <div className="rounded-full bg-red-500 px-5 py-2 text-sm font-black uppercase tracking-wide text-white">
                      Business
                    </div>
                  </div>

                  <h2 className="mt-10 text-4xl font-black tracking-tight text-black">
                    Protect your business with a clean, practical setup.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-neutral-700">
                    We help small and medium businesses install, fix and upgrade
                    CCTV, alarms, access control and the network behind them.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        icon: Camera,
                        text: "Camera coverage",
                      },
                      {
                        icon: BellRing,
                        text: "Alarm devices",
                      },
                      {
                        icon: KeyRound,
                        text: "Controlled access",
                      },
                      {
                        icon: Router,
                        text: "Network stability",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.text}
                          className="rounded-2xl bg-white p-5 shadow-sm"
                        >
                          <Icon className="h-7 w-7 text-yellow-500" />
                          <p className="mt-3 font-black text-neutral-900">
                            {item.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 rounded-2xl bg-black p-5 text-white">
                    <div className="flex items-center gap-3">
                      <Clock3 className="h-6 w-6 text-yellow-400" />
                      <p className="font-black">Fast WhatsApp estimate</p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-neutral-300">
                      Send photos or a short video of your premises, doors,
                      router, recorder or cameras. We will tell you what is
                      possible and what the price depends on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8">
            <div className="grid gap-4 rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm md:grid-cols-4">
              {[
                {
                  icon: Camera,
                  label: "CCTV",
                  value: "Camera systems",
                },
                {
                  icon: BellRing,
                  label: "Alarm",
                  value: "Sensors & sirens",
                },
                {
                  icon: Fingerprint,
                  label: "Access",
                  value: "Keypad / fob / lock",
                },
                {
                  icon: Network,
                  label: "Network",
                  value: "Router / switch / Wi-Fi",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                  >
                    <Icon className="h-7 w-7 text-yellow-500" />
                    <p className="mt-4 text-sm font-black uppercase tracking-wide text-neutral-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg font-black text-black">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                Commercial security services
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
                CCTV, alarms, access control and network setup in one service.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                We work with practical business security: cameras, recorders,
                sensors, access devices, door locks, Wi-Fi, switches, cabling
                and mobile viewing.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-sm">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-7 text-2xl font-black tracking-tight text-black">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-neutral-700">
                      {service.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-black">
                      Ask for this service
                      <ChevronRight className="h-4 w-4 text-yellow-500 transition group-hover:translate-x-1" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="prices"
          className="border-y border-neutral-200 bg-neutral-50 px-6 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                  Prices
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
                  Clear commercial security prices before work starts.
                </h2>
                <p className="mt-5 text-lg leading-8 text-neutral-700">
                  The final price depends on the number of devices, cable
                  distance, wall/ceiling type, access to power, recorder type,
                  network condition and configuration needed.
                </p>

                <div className="mt-8 rounded-[2rem] border border-yellow-300 bg-yellow-50 p-6">
                  <div className="flex items-start gap-4">
                    <BadgeCheck className="mt-1 h-7 w-7 shrink-0 text-yellow-500" />
                    <div>
                      <h3 className="text-xl font-black text-black">
                        No hidden price during the work
                      </h3>
                      <p className="mt-3 text-base leading-7 text-neutral-700">
                        Before starting, we explain what is included and what
                        would change the price. For bigger projects, we can
                        inspect the premises first and prepare a clean quote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {prices.map((price) => (
                  <article
                    key={price.name}
                    className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm"
                  >
                    <h3 className="text-2xl font-black tracking-tight text-black">
                      {price.name}
                    </h3>

                    <p className="mt-5 text-3xl font-black text-yellow-500">
                      {price.price}
                    </p>

                    <p className="mt-5 text-base leading-7 text-neutral-700">
                      {price.text}
                    </p>

                    <ul className="mt-7 space-y-4">
                      {price.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
                          <span className="text-sm font-bold leading-6 text-neutral-800">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                  Client types
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
                  Security solutions for many types of businesses.
                </h2>
                <p className="mt-5 text-lg leading-8 text-neutral-700">
                  We focus on small and medium commercial spaces that need a
                  practical and reliable setup without overcomplicating the
                  project.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {clientTypes.map((type) => (
                    <div
                      key={type}
                      className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                    >
                      <Store className="h-5 w-5 shrink-0 text-yellow-500" />
                      <span className="font-bold text-neutral-800">
                        {type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-neutral-200 bg-neutral-950 p-8 text-white shadow-2xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-400 text-black">
                  <ShieldCheck className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-4xl font-black tracking-tight">
                  The system must be easy to use every day.
                </h3>

                <p className="mt-5 text-lg leading-8 text-neutral-300">
                  A commercial security system is not only about devices. It
                  must be installed cleanly, connected correctly, recorded
                  reliably and be simple enough for the owner or staff to use.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Clear camera view",
                    "Stable recording",
                    "Controlled access",
                    "Practical notifications",
                    "Clean cabling",
                    "Network stability",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                      <p className="mt-3 font-black text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-neutral-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                What we can improve
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
                We can install a new system or improve what you already have.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                Many businesses already have cameras, a recorder, router or
                alarm devices — but the system is unstable, poorly configured or
                not useful in real situations.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Camera blind spots",
                  text: "We check if important areas are not visible or camera angles are not useful.",
                  icon: Eye,
                },
                {
                  title: "Offline cameras",
                  text: "We troubleshoot power, cable, recorder, IP, Wi-Fi or network problems.",
                  icon: Video,
                },
                {
                  title: "Weak Wi-Fi",
                  text: "We improve router, switch or access point setup for stable device connection.",
                  icon: Wifi,
                },
                {
                  title: "Messy cables",
                  text: "We organize cables, trunking, RJ45 ends and practical cable routes.",
                  icon: Cable,
                },
                {
                  title: "No mobile access",
                  text: "We configure app viewing when the system supports remote connection.",
                  icon: TabletSmartphone,
                },
                {
                  title: "Recorder issues",
                  text: "We check recording, storage, playback, camera pairing and basic settings.",
                  icon: HardDrive,
                },
                {
                  title: "Uncontrolled doors",
                  text: "We add keypad, fob or electric lock access for staff and private areas.",
                  icon: DoorOpen,
                },
                {
                  title: "Old equipment plan",
                  text: "We tell you what can stay, what should be replaced and what can be upgraded.",
                  icon: Cpu,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400">
                      <Icon className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="mt-6 text-xl font-black text-black">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-700">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
                <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="lg:sticky lg:top-8">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                  Process
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
                  Simple process from first message to finished setup.
                </h2>
                <p className="mt-5 text-lg leading-8 text-neutral-700">
                  We keep the process clear: first we understand the place, then
                  we recommend the right solution, confirm the price and complete
                  the installation.
                </p>

                <Link
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    whatsappText,
                  )}`}
                  className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-base font-black text-white transition hover:bg-neutral-800"
                >
                  Start with WhatsApp
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div>

              <div className="grid gap-5">
                {process.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <article
                      key={step.title}
                      className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7"
                    >
                      <div className="flex flex-col gap-6 sm:flex-row">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-yellow-400 text-2xl font-black text-black">
                          {index + 1}
                        </div>

                        <div>
                          <div className="flex items-center gap-3">
                            <Icon className="h-6 w-6 text-yellow-500" />
                            <h3 className="text-2xl font-black tracking-tight text-black">
                              {step.title}
                            </h3>
                          </div>

                          <p className="mt-4 text-base leading-7 text-neutral-700">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-neutral-950 px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                  Why choose THEVULGO
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  One team for cameras, access, alarms, cabling and network.
                </h2>
                <p className="mt-5 text-lg leading-8 text-neutral-300">
                  Commercial security depends on more than one device. Cameras
                  need stable power and network. Access control needs correct
                  door hardware. Recorders need storage and configuration.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <CheckCircle2 className="h-6 w-6 text-yellow-400" />
                    <p className="mt-4 font-black leading-6 text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "For owners",
                  text: "You get a practical setup that helps you check the business, control access and reduce weak points.",
                  icon: Building2,
                },
                {
                  title: "For staff",
                  text: "The system should be simple enough for daily use without confusing instructions or unnecessary complexity.",
                  icon: UserCheck,
                },
                {
                  title: "For future upgrades",
                  text: "We can prepare the installation so it is easier to add cameras, access points or access control later.",
                  icon: PlugZap,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
                  >
                    <Icon className="h-9 w-9 text-yellow-400" />
                    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-neutral-300">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                Security details
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
                Small technical details make a big difference.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                Bad cable routing, weak Wi-Fi, wrong camera angles or poor
                recorder settings can make an expensive system almost useless.
                We focus on practical installation that works in real business
                conditions.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <article className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7">
                <Camera className="h-10 w-10 text-yellow-500" />
                <h3 className="mt-6 text-2xl font-black text-black">
                  Camera placement
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-700">
                  We look at entrances, cash desk, storage, corridors, customer
                  areas and blind spots. The goal is not only to install a
                  camera, but to make the view useful.
                </p>
              </article>

              <article className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7">
                <Router className="h-10 w-10 text-yellow-500" />
                <h3 className="mt-6 text-2xl font-black text-black">
                  Network stability
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-700">
                  CCTV and smart security devices often depend on the router,
                  switch, access point and cable quality. We check the network
                  path before blaming the camera.
                </p>
              </article>

              <article className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7">
                <KeyRound className="h-10 w-10 text-yellow-500" />
                <h3 className="mt-6 text-2xl font-black text-black">
                  Access logic
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-700">
                  Access control must match the real use of the door: staff
                  entry, storage room, private office, emergency exit or
                  customer entrance.
                </p>
              </article>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400">
                    <HardDrive className="h-7 w-7 text-black" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-black">
                      Recording and playback
                    </h3>
                    <p className="mt-4 text-base leading-7 text-neutral-700">
                      If your camera records but you cannot easily find events,
                      the system is not practical. We can check recording mode,
                      storage, camera pairing and playback basics.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400">
                    <Smartphone className="h-7 w-7 text-black" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-black">
                      Mobile access
                    </h3>
                    <p className="mt-4 text-base leading-7 text-neutral-700">
                      When supported by the system, we help connect the camera
                      app, test remote viewing and explain the basic daily use
                      so you can check your business from your phone.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-yellow-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                  Before installation
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
                  What to send us for a faster quote.
                </h2>
                <p className="mt-5 text-lg leading-8 text-neutral-700">
                  Photos and short videos help us understand the place and give
                  a more accurate estimate before the visit.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Photos of entrances, doors and customer areas",
                  "Photos of the router, recorder, switch or current equipment",
                  "Short video showing where cameras or access control should go",
                  "Approximate number of cameras, doors or devices needed",
                  "Information about existing cables, Wi-Fi or power sockets",
                  "Opening hours or preferred time for installation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-yellow-200 bg-white p-5"
                  >
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-yellow-500" />
                    <p className="font-bold leading-7 text-neutral-800">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
                <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                Service areas
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
                Commercial security service in Valencia and nearby areas.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                We work across Valencia city and nearby towns. Send your
                location on WhatsApp and we will confirm availability.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-bold text-neutral-800"
                >
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-neutral-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                  FAQ
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
                  Commercial security questions.
                </h2>
                <p className="mt-5 text-lg leading-8 text-neutral-700">
                  Answers for CCTV, alarm, access control, network and business
                  security installation in Valencia.
                </p>
              </div>

              <div className="grid gap-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-black text-black">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-neutral-700">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2.5rem] bg-black shadow-2xl">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 text-white sm:p-12 lg:p-16">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                    Get a quote
                  </p>

                  <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                    Need CCTV, alarm or access control for your business?
                  </h2>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
                    Send photos or a short video of your business premises. We
                    will check the best solution and explain the price before
                    work starts.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href={`https://wa.me/${phone}?text=${encodeURIComponent(
                        whatsappText,
                      )}`}
                      className="inline-flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-7 py-4 text-base font-black text-black transition hover:bg-yellow-300"
                    >
                      WhatsApp quote
                      <MessageCircle className="h-5 w-5" />
                    </Link>

                    <Link
                      href="/en/services"
                      className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-base font-black text-white transition hover:bg-white/15"
                    >
                      View all services
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-yellow-400 p-8 text-black sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
                  <ShieldCheck className="h-14 w-14" />

                  <h3 className="mt-8 text-3xl font-black tracking-tight">
                    Fast estimate checklist
                  </h3>

                  <ul className="mt-6 space-y-4">
                    {[
                      "Business type and address",
                      "Photos/videos of the place",
                      "Number of cameras or doors",
                      "Existing equipment photos",
                      "Preferred date and time",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                        <span className="font-black leading-6">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}