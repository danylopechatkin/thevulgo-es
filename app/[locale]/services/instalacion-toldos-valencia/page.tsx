import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Drill,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Sun,
  Umbrella,
  Users,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/instalacion-toldos-valencia";

const whatsappText =
  "Hola, necesito instalar un toldo en Valencia. Quiero pedir presupuesto.";

const areas = [
  "Valencia",
  "Ruzafa",
  "Russafa",
  "Benimaclet",
  "Campanar",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mestalla",
  "Algirós",
  "Malvarrosa",
  "Cabanyal",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
];



const faqs = [
  {
    question: "¿Cuánto cuesta instalar un toldo en Valencia?",
    answer:
      "La instalación de toldos en Valencia empieza desde 99 €. El precio final depende del tamaño del toldo, tipo de pared, altura de instalación, número de soportes y si es necesario trabajar entre dos personas.",
  },
  {
    question: "¿Instaláis toldos comprados en Leroy Merlin?",
    answer:
      "Sí. Instalamos toldos comprados en Leroy Merlin, incluyendo modelos manuales, toldos Naterial, toldos Calima y otros modelos similares.",
  },
  {
    question: "¿Puedo enviar fotos por WhatsApp para recibir presupuesto?",
    answer:
      "Sí. Puede enviar fotos del lugar de instalación, medidas del toldo y el modelo o enlace del producto. Con esa información podemos preparar un presupuesto rápido.",
  },
  {
    question: "¿Hace falta una segunda persona para instalar un toldo grande?",
    answer:
      "En toldos grandes, especialmente de casi 4 metros o más, normalmente es recomendable trabajar entre dos personas para hacer una instalación segura y correcta.",
  },
  {
    question: "¿Instaláis toldos manuales y eléctricos?",
    answer:
      "Sí. Instalamos toldos manuales y toldos eléctricos. En toldos eléctricos, el presupuesto puede variar si hace falta conexión o adaptación eléctrica.",
  },
];

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const title =
    "Instalación de Toldos en Valencia | Desde 99€ | THEVULGO";
  const description =
    "Instalación de toldos en Valencia desde 99€. Montaje de toldos manuales, Leroy Merlin, Naterial, Calima, terraza y patio. Presupuesto rápido por WhatsApp.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/${slug}`,
      siteName: "THEVULGO Valencia",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function InstalacionToldosValenciaPage({
  params,
}: Props) {
  const { locale } = await params;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const pageUrl = `${baseUrl}/${locale}/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "THEVULGO Valencia",
      image: `${baseUrl}/og-image.jpg`,
      url: baseUrl,
      telephone: `+${phone}`,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressRegion: "Valencia",
        addressCountry: "ES",
      },
      areaServed: areas.map((area) => ({
        "@type": "City",
        name: area,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Instalación de toldos en Valencia",
      serviceType: "Instalación de toldos",
      provider: {
        "@type": "LocalBusiness",
        name: "THEVULGO Valencia",
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
      },
    },
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: `${baseUrl}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Servicios",
          item: `${baseUrl}/${locale}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Instalación de toldos en Valencia",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-yellow-50/40 to-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-5 py-3 text-sm font-bold text-neutral-900 shadow-sm">
                <MapPin className="h-4 w-4 text-yellow-600" />
                Servicio profesional en Valencia
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-neutral-950 md:text-7xl">
                Instalación de Toldos{" "}
                <span className="text-yellow-500">en Valencia</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
                Montaje profesional de toldos manuales y eléctricos desde{" "}
                <strong className="text-neutral-950">99€</strong>. Instalamos
                toldos para terraza, patio, balcón y fachada, incluyendo modelos
                de Leroy Merlin, Naterial y Calima.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 text-base font-black text-neutral-950 shadow-lg shadow-yellow-400/30 transition hover:bg-yellow-300"
                >
                  Pedir presupuesto por WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-8 py-4 text-base font-black text-neutral-950 shadow-sm transition hover:border-neutral-950"
                >
                  Llamar ahora
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Instalación desde 99€",
                  "Toldos manuales y eléctricos",
                  "Leroy Merlin, Naterial, Calima",
                  "Valencia y alrededores",
                  "Trabajo seguro y nivelado",
                  "Presupuesto por WhatsApp",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold text-neutral-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-400 bg-white p-6 shadow-2xl shadow-neutral-900/10">
              <div className="rounded-3xl bg-yellow-400 p-8 text-neutral-950 shadow-lg">
                <Umbrella className="h-12 w-12" />
                <p className="mt-8 text-sm font-black uppercase tracking-[0.2em]">
                  THEVULGO VALENCIA
                </p>
                <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl">
                  Toldo instalado. Sombra lista. Sin complicaciones.
                </h2>
                <p className="mt-6 text-lg leading-8">
                  Revisamos la pared, marcamos los soportes, nivelamos el toldo
                  y dejamos una instalación limpia, segura y preparada para el
                  uso diario.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-yellow-300 bg-yellow-50/70 p-5">
                  <Clock3 className="mb-4 h-6 w-6 text-yellow-600" />
                  <h3 className="font-black">Fast replies</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Respuesta rápida por WhatsApp
                  </p>
                </div>

                <div className="rounded-2xl border border-yellow-300 bg-yellow-50/70 p-5">
                  <Euro className="mb-4 h-6 w-6 text-yellow-600" />
                  <h3 className="font-black">Clear price</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Precio claro antes de perforar
                  </p>
                </div>

                <div className="rounded-2xl border border-yellow-300 bg-yellow-50/70 p-5">
                  <Drill className="mb-4 h-6 w-6 text-yellow-600" />
                  <h3 className="font-black">Pro tools</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Herramientas profesionales
                  </p>
                </div>

                <div className="rounded-2xl border border-yellow-300 bg-yellow-50/70 p-5">
                  <ShieldCheck className="mb-4 h-6 w-6 text-yellow-600" />
                  <h3 className="font-black">Safe mounting</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Fijación segura y nivelada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
                <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                  Precios orientativos
                </p>
                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  Precio claro para instalar un toldo en Valencia
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                  Cada instalación depende del tamaño del toldo, del tipo de
                  pared, de la altura y del número de soportes. Por eso siempre
                  revisamos fotos antes de confirmar el presupuesto final.
                </p>
              </div>

              <div className="rounded-[2rem] border border-yellow-400/40 bg-white/5 p-6">
                <div className="rounded-3xl bg-yellow-400 p-7 text-neutral-950">
                  <p className="text-sm font-black uppercase tracking-[0.2em]">
                    Desde
                  </p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-7xl font-black leading-none">99€</span>
                    <span className="mb-2 text-lg font-bold">
                      instalación básica
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-7">
                    Para toldos pequeños o instalaciones sencillas con acceso
                    cómodo y pared adecuada.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Toldo pequeño",
                  price: "desde 99€",
                  text: "Instalación sencilla de toldo pequeño en terraza, patio o balcón.",
                  icon: Umbrella,
                },
                {
                  title: "Toldo mediano",
                  price: "120€ - 170€",
                  text: "Montaje de toldo manual con soportes estándar y acceso cómodo.",
                  icon: Sun,
                },
                {
                  title: "Toldo grande",
                  price: "175€ - 250€",
                  text: "Toldos de gran tamaño, normalmente con ayuda de segunda persona.",
                  icon: Users,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                  >
                    <Icon className="h-9 w-9 text-yellow-400" />
                    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                    <p className="mt-3 text-3xl font-black text-yellow-400">
                      {item.price}
                    </p>
                    <p className="mt-4 leading-7 text-neutral-300">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-black">
                    ¿Quiere saber el precio exacto?
                  </h3>
                  <p className="mt-2 max-w-3xl text-neutral-300">
                    Envíenos fotos del lugar, medidas del toldo y el enlace o
                    modelo. Le damos una respuesta rápida por WhatsApp.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-black text-neutral-950 transition hover:bg-yellow-300"
                >
                  Enviar fotos
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                Tipos de toldos
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Instalamos toldos para terraza, patio, balcón y fachada
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Trabajamos con toldos manuales, toldos eléctricos, toldos de
                brazos extensibles y modelos comprados en grandes superficies.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Toldos manuales",
                  text: "Montaje de toldos con manivela, brazos extensibles y soportes de pared.",
                  icon: Wrench,
                },
                {
                  title: "Toldos eléctricos",
                  text: "Instalación de toldos motorizados. El precio puede variar si hace falta conexión eléctrica.",
                  icon: Sparkles,
                },
                {
                  title: "Toldos de terraza",
                  text: "Soluciones para terrazas privadas, patios interiores y zonas exteriores de vivienda.",
                  icon: Home,
                },
                {
                  title: "Toldos de balcón",
                  text: "Instalación de toldos compactos para balcones y ventanas con buena orientación solar.",
                  icon: Sun,
                },
                {
                  title: "Toldos Leroy Merlin",
                  text: "Instalamos toldos comprados en Leroy Merlin, incluyendo Naterial, Calima y modelos similares.",
                  icon: Store,
                },
                {
                  title: "Toldos grandes",
                  text: "Para modelos anchos o pesados podemos trabajar entre dos personas para mayor seguridad.",
                  icon: Users,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100">
                      <Icon className="h-7 w-7 text-yellow-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                    <p className="mt-4 leading-7 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-yellow-50/70 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                Leroy Merlin · Naterial · Calima
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                ¿Ha comprado un toldo y necesita instalarlo?
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-700">
                Muchos clientes compran el toldo por su cuenta y después buscan
                un instalador para montarlo correctamente. Podemos revisar el
                modelo, el manual, la pared y preparar una instalación limpia y
                segura.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Revisamos el modelo antes de instalar",
                  "Comprobamos medidas, soportes y ubicación",
                  "Marcamos los puntos de perforación",
                  "Nivelamos el toldo antes de fijarlo",
                  "Usamos fijaciones adecuadas según la pared",
                  "Probamos apertura y cierre al terminar",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-500" />
                    <span className="font-bold text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-300 bg-white p-7 shadow-xl">
              <div className="rounded-3xl bg-neutral-950 p-8 text-white">
                <PackageCheck className="h-12 w-12 text-yellow-400" />
                <h3 className="mt-7 text-3xl font-black">
                  Datos que necesitamos para el presupuesto
                </h3>
                <p className="mt-5 leading-8 text-neutral-300">
                  Para calcular el precio correctamente, solo necesitamos unas
                  fotos y algunos datos básicos.
                </p>
              </div>

              <div className="mt-6 grid gap-4">
                {[
                  {
                    label: "Fotos del lugar",
                    text: "Una foto frontal y otra lateral de la pared donde irá el toldo.",
                  },
                  {
                    label: "Medidas del toldo",
                    text: "Ancho y salida aproximada. Por ejemplo: 3,95 m x 3 m.",
                  },
                  {
                    label: "Modelo o enlace",
                    text: "El nombre del producto o enlace de Leroy Merlin, Amazon u otra tienda.",
                  },
                  {
                    label: "Ubicación",
                    text: "Barrio o zona de Valencia para organizar la visita.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-neutral-200 p-5"
                  >
                    <h4 className="font-black">{item.label}</h4>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                  Proceso de trabajo
                </p>
                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  Cómo hacemos la instalación
                </h2>
                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  Una instalación correcta empieza antes de perforar. Primero
                  comprobamos la pared, la altura, los obstáculos y las
                  instrucciones del fabricante.
                </p>

                <div className="mt-8 rounded-3xl bg-neutral-950 p-7 text-white">
                  <ShieldCheck className="h-10 w-10 text-yellow-400" />
                  <h3 className="mt-5 text-2xl font-black">
                    Seguridad antes que rapidez
                  </h3>
                  <p className="mt-4 leading-7 text-neutral-300">
                    Un toldo mal fijado puede ser peligroso con viento o uso
                    diario. Por eso revisamos bien la pared y los soportes antes
                    de confirmar el montaje.
                  </p>
                </div>
              </div>

              <div className="grid gap-5">
                {[
                  {
                    step: "01",
                    title: "Envío de fotos",
                    text: "Nos manda fotos del lugar, medidas del toldo y modelo o enlace del producto.",
                  },
                  {
                    step: "02",
                    title: "Presupuesto claro",
                    text: "Confirmamos el precio antes de desplazarnos y antes de hacer cualquier trabajo.",
                  },
                  {
                    step: "03",
                    title: "Revisión de pared",
                    text: "Comprobamos zona de montaje, altura, obstáculos, fachada y puntos de fijación.",
                  },
                  {
                    step: "04",
                    title: "Marcado y perforación",
                    text: "Marcamos los soportes, perforamos con herramienta adecuada y fijamos la estructura.",
                  },
                  {
                    step: "05",
                    title: "Nivelación y prueba",
                    text: "Nivelamos el toldo, ajustamos la posición y probamos apertura y cierre.",
                  },
                  {
                    step: "06",
                    title: "Zona limpia",
                    text: "Dejamos el área ordenada y explicamos recomendaciones básicas de uso.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:grid-cols-[80px_1fr]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-2xl font-black">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 leading-7 text-neutral-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
                <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                Zonas de servicio
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Instalación de toldos en Valencia y alrededores
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-300">
                Trabajamos en Valencia ciudad y zonas cercanas. Puede enviarnos
                su ubicación por WhatsApp y le confirmamos disponibilidad.
              </p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="font-bold">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] bg-yellow-400 p-8 text-neutral-950 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h3 className="text-3xl font-black md:text-4xl">
                    ¿Ya tiene el toldo comprado?
                  </h3>
                  <p className="mt-4 max-w-3xl text-lg leading-8">
                    Envíenos fotos del lugar, medidas y modelo. Le daremos un
                    presupuesto rápido y podremos acordar el día y la hora.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-neutral-950 px-8 py-4 font-black text-white transition hover:bg-neutral-800"
                >
                  Pedir presupuesto
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                  Por qué elegirnos
                </p>
                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  Un manitas profesional para montar su toldo sin líos
                </h2>
                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  THEVULGO está pensado para trabajos rápidos, claros y bien
                  organizados: montaje, instalación, reparación y pequeñas
                  mejoras del hogar en Valencia.
                </p>

                <div className="mt-8 grid gap-4">
                  {[
                    "Respuesta rápida por WhatsApp",
                    "Precio claro antes del trabajo",
                    "Trabajo limpio y ordenado",
                    "Herramientas profesionales",
                    "Instalación segura y nivelada",
                    "Flexibilidad de horarios",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <BadgeCheck className="h-6 w-6 text-yellow-500" />
                      <span className="font-bold text-neutral-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      icon: CalendarCheck,
                      title: "Cita flexible",
                      text: "Buscamos un horario cómodo para usted.",
                    },
                    {
                      icon: Euro,
                      title: "Desde 99€",
                      text: "Precio adaptado al tamaño y dificultad.",
                    },
                    {
                      icon: Drill,
                      title: "Montaje preciso",
                      text: "Medición, marcado, perforación y nivelación.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Fijación segura",
                      text: "Soportes bien colocados y comprobados.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-3xl bg-white p-6 shadow-sm"
                      >
                        <Icon className="h-8 w-8 text-yellow-500" />
                        <h3 className="mt-5 text-xl font-black">
                          {item.title}
                        </h3>
                        <p className="mt-3 leading-7 text-neutral-600">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50/70 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                Servicios relacionados
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                También podemos ayudarle con otros trabajos del hogar
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Si además del toldo necesita instalar lámparas, montar muebles,
                colgar una TV o hacer pequeñas reparaciones, puede pedirlo en el
                mismo presupuesto.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Montaje de TV",
                  href: `/${locale}/services/montaje-tv-valencia`,
                  icon: Home,
                },
                {
                  title: "Montaje de muebles",
                  href: `/${locale}/services/montaje-muebles-valencia`,
                  icon: Hammer,
                },
                {
                  title: "Instalar lámparas",
                  href: `/${locale}/services/instalacion-lampara-valencia`,
                  icon: Sparkles,
                },
                {
                  title: "Reparaciones hogar",
                  href: `/${locale}/handyman-valencia`,
                  icon: Wrench,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Icon className="h-8 w-8 text-yellow-500" />
                    <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-neutral-950">
                      Ver servicio
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                FAQ
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Preguntas frecuentes sobre instalación de toldos
              </h2>
            </div>

            <div className="mt-12 grid gap-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="text-xl font-black">{faq.question}</h3>
                  <p className="mt-4 leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              ))}

              {[
                {
                  question: "¿Cuánto tarda la instalación de un toldo?",
                  answer:
                    "Depende del tamaño y del tipo de pared. Un toldo pequeño puede instalarse relativamente rápido, mientras que un toldo grande puede requerir más tiempo y dos personas.",
                },
                {
                  question: "¿Qué pasa si la pared no es adecuada?",
                  answer:
                    "Si vemos que la pared no permite una fijación segura, se lo indicaremos antes de continuar. En algunos casos pueden ser necesarios anclajes especiales o una solución diferente.",
                },
                {
                  question: "¿El precio incluye materiales?",
                  answer:
                    "El precio básico es para la mano de obra. Si hacen falta tacos especiales, anclaje químico u otros materiales adicionales, se confirma antes de instalarlos.",
                },
                {
                  question: "¿Pueden instalar el toldo el mismo día?",
                  answer:
                    "En algunos casos sí, dependiendo de la agenda, zona y dificultad del montaje. Lo mejor es enviar fotos por WhatsApp para confirmar disponibilidad.",
                },
                {
                  question: "¿Instaláis toldos en patios interiores?",
                  answer:
                    "Sí. Instalamos toldos en patios, terrazas y zonas exteriores siempre que haya acceso seguro y una pared adecuada para fijar los soportes.",
                },
                {
                  question: "¿Puedo ayudar durante la instalación?",
                  answer:
                    "En algunos toldos grandes puede hacer falta una segunda persona para sujetar el toldo durante el montaje. Si el cliente puede ayudar y la instalación lo permite, se puede ajustar el presupuesto.",
                },
              ].map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="text-xl font-black">{faq.question}</h3>
                  <p className="mt-4 leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400">
              <Umbrella className="h-10 w-10 text-neutral-950" />
            </div>

            <h2 className="mt-8 text-4xl font-black tracking-tight md:text-6xl">
              Instalación de toldos en Valencia desde 99€
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              Envíenos fotos del lugar, medidas y modelo del toldo. Le
              responderemos con un presupuesto claro y disponibilidad para la
              instalación.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-black text-neutral-950 transition hover:bg-yellow-300"
              >
                WhatsApp presupuesto
                <MessageCircle className="h-5 w-5" />
              </a>

              <a
                href={`tel:+${phone}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-black text-white transition hover:border-yellow-400"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}