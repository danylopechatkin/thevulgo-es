import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  DoorOpen,
  Drill,
  Euro,
  FileCheck2,
  Hammer,
  Home,
  KeyRound,
  Layers,
  MapPin,
  MessageCircle,
  Paintbrush,
  Plug,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "fin-contrato-alquiler-valencia";

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
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
];

const services = [
  {
    title: "Reparación de agujeros en paredes",
    text: "Tapamos agujeros de tacos, tornillos, cuadros, estanterías, soportes de TV y accesorios retirados antes de entregar la vivienda.",
    icon: Drill,
  },
  {
    title: "Retoques de pintura",
    text: "Hacemos retoques visibles en paredes con marcas, rozaduras, manchas pequeñas o zonas dañadas por muebles.",
    icon: Paintbrush,
  },
  {
    title: "Pequeñas reparaciones generales",
    text: "Ajustamos manillas, bisagras, puertas, cajones, accesorios sueltos, zócalos y detalles que pueden afectar la revisión final.",
    icon: Wrench,
  },
  {
    title: "Revisión antes de entregar llaves",
    text: "Revisamos visualmente los puntos más importantes para que el piso esté mejor presentado antes de la entrega.",
    icon: FileCheck2,
  },
  {
    title: "Luces, enchufes y accesorios",
    text: "Cambiamos lámparas pequeñas, enchufes, interruptores, tapas, accesorios de baño y otros elementos visibles.",
    icon: Plug,
  },
  {
    title: "Preparación rápida para propietarios",
    text: "También ayudamos a propietarios que necesitan dejar el piso listo entre un inquilino y el siguiente.",
    icon: KeyRound,
  },
];

const commonIssues = [
  "Agujeros de cuadros, estanterías o soportes de TV",
  "Marcas negras detrás de muebles o cabeceros",
  "Rozaduras en pasillos, esquinas y zonas de paso",
  "Pequeños golpes en paredes o esquinas",
  "Manillas flojas o puertas que rozan",
  "Accesorios de baño sueltos o retirados",
  "Tacos antiguos visibles en paredes",
  "Lámparas o plafones mal instalados",
  "Enchufes, tapas o interruptores dañados",
  "Cajones, bisagras o muebles desajustados",
  "Zócalos despegados o pequeños remates",
  "Detalles que pueden descontarse de la fianza",
];

const process = [
  {
    title: "Envías fotos",
    text: "Manda fotos o vídeo de las paredes, agujeros, desperfectos y detalles que quieres arreglar.",
  },
  {
    title: "Estimamos precio",
    text: "Te damos una orientación clara de mano de obra, materiales y tiempo aproximado.",
  },
  {
    title: "Hacemos los arreglos",
    text: "Reparamos agujeros, retocamos pintura y solucionamos pequeños desperfectos visibles.",
  },
  {
    title: "Piso listo para entregar",
    text: "Dejamos el piso más limpio visualmente antes de la revisión final o entrega de llaves.",
  },
];

const benefits = [
  {
    title: "Evita discusiones por la fianza",
    text: "Un piso con paredes cuidadas y detalles reparados reduce problemas durante la revisión final.",
  },
  {
    title: "Mejor presentación",
    text: "Los arreglos pequeños cambian mucho la impresión general de la vivienda.",
  },
  {
    title: "Servicio rápido",
    text: "Ideal para los últimos días antes de mudarte o entregar las llaves.",
  },
  {
    title: "Precio claro",
    text: "Trabajamos con fotos para darte una estimación antes de desplazarnos.",
  },
];

const faqs = [
  {
    q: "¿Hacéis reparaciones antes de entregar un piso de alquiler?",
    a: "Sí. Reparamos agujeros, marcas, rozaduras, pequeños desperfectos, accesorios sueltos y detalles visibles antes del fin del contrato de alquiler.",
  },
  {
    q: "¿Podéis tapar agujeros de cuadros o soportes de TV?",
    a: "Sí. Podemos retirar tacos, rellenar agujeros, lijar y preparar la zona para que quede más discreta.",
  },
  {
    q: "¿Hacéis retoques de pintura pequeños?",
    a: "Sí. Hacemos retoques de pintura en zonas pequeñas. Para igualar el color al máximo, es mejor tener la pintura original o una muestra.",
  },
  {
    q: "¿Cuánto cuesta preparar un piso antes de entregar llaves?",
    a: "Depende de la cantidad de agujeros, estado de las paredes, materiales y urgencia. Los trabajos pequeños pueden empezar desde 35 €.",
  },
  {
    q: "¿Podéis venir el mismo día?",
    a: "Depende de la disponibilidad y la zona. Envíanos fotos por WhatsApp y te diremos la opción más rápida.",
  },
  {
    q: "¿Traéis materiales?",
    a: "Podemos llevar materiales básicos como masilla, lija y herramientas. Si hace falta pintura exacta, normalmente se confirma aparte.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reparaciones antes del fin del contrato de alquiler en Valencia"
    : "End of Rental Contract Repairs in Valencia";

  const description = isEs
    ? "Reparaciones antes de entregar un piso de alquiler en Valencia. Tapar agujeros, retoques de pintura, paredes, accesorios, puertas, enchufes y pequeños desperfectos."
    : "End of rental contract repairs in Valencia. Wall holes, paint touch-ups, small repairs, accessories, doors, sockets and final apartment preparation.";

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
      type: "website",
    },
  };
}

export default async function FinContratoAlquilerValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito reparaciones antes del fin del contrato de alquiler en Valencia. Quiero enviar fotos para presupuesto."
      : "Hi, I need repairs before the end of a rental contract in Valencia. I’d like to send photos for an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;
  const estimateHref = `/${locale}/estimate?category=repairs`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reparaciones antes del fin del contrato de alquiler en Valencia",
    serviceType: "End of rental contract apartment repairs",
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    provider: {
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: baseUrl,
      telephone: `+${phone}`,
      areaServed: "Valencia",
    },
    description:
      "Reparaciones antes de entregar un piso de alquiler en Valencia: tapar agujeros, retoques de pintura, paredes, accesorios, puertas, enchufes y pequeños desperfectos.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "35",
      availability: "https://schema.org/InStock",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbLd = {
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
        name: "Reparaciones fin contrato alquiler",
        item: `${baseUrl}/${locale}/${slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_36%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
              <Sparkles className="h-4 w-4" />
              Reparaciones antes de entregar un piso
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reparaciones antes del fin del contrato de alquiler en Valencia
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Arreglamos agujeros, marcas, rozaduras, pequeños desperfectos,
              accesorios sueltos y detalles visibles antes de entregar las
              llaves del piso.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappHref}
                className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
              >
                Pedir presupuesto por WhatsApp
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Abrir formulario
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Desde 35 €", "Pequeñas reparaciones"],
                ["Valencia", "Centro y alrededores"],
                ["Fotos primero", "Precio claro antes de ir"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="text-xl font-semibold text-white">
                    {title}
                  </div>
                  <div className="mt-1 text-sm text-neutral-400">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-neutral-900 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-amber-400 p-3 text-neutral-950">
                  <KeyRound className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">
                    Antes de entregar llaves
                  </p>
                  <h2 className="text-2xl font-semibold">
                    Piso más limpio visualmente
                  </h2>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Tapar agujeros de tacos y tornillos",
                  "Retoques de pintura en paredes",
                  "Arreglar manillas, puertas y accesorios",
                  "Preparar el piso para revisión final",
                  "Evitar detalles que pueden descontar de la fianza",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-amber-300" />
                    <span className="text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-amber-400/10 p-5 text-amber-100">
                Ideal para inquilinos que quieren entregar el piso en buen
                estado y propietarios que preparan la vivienda para el próximo
                alquiler.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            {
              icon: Clock3,
              title: "Rápido",
              text: "Para los últimos días antes de entregar llaves.",
            },
            {
              icon: ShieldCheck,
              title: "Limpio",
              text: "Acabados cuidados en detalles visibles.",
            },
            {
              icon: Euro,
              title: "Claro",
              text: "Estimación antes de empezar el trabajo.",
            },
            {
              icon: BadgeCheck,
              title: "Práctico",
              text: "Soluciones reales para desperfectos pequeños.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <item.icon className="h-7 w-7 text-amber-300" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Servicio
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Reparaciones pequeñas que ayudan antes de la revisión final
            </h2>
            <p className="mt-4 text-neutral-300">
              Cuando termina un contrato de alquiler, los detalles visibles
              importan. Una pared con agujeros, marcas o accesorios sueltos
              puede crear problemas al entregar la vivienda.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-6"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Problemas comunes
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Lo que normalmente se arregla antes de entregar un piso
          </h2>
          <p className="mt-4 text-neutral-300">
            Puedes enviarnos fotos de cada zona y te diremos qué se puede
            reparar rápido, qué materiales hacen falta y cuánto puede costar.
          </p>

          <Link
            href={whatsappHref}
            className="mt-7 inline-flex items-center rounded-2xl bg-white px-6 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            Enviar fotos ahora
            <MessageCircle className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {commonIssues.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
              <span className="text-neutral-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Proceso
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Cómo trabajamos antes del fin del alquiler
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-bold text-neutral-950">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
              <Home className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-semibold">
              Para inquilinos que entregan el piso
            </h2>
            <p className="mt-4 text-neutral-300">
              Si vas a dejar una vivienda, podemos ayudarte con los detalles
              típicos: agujeros de cuadros, marcas en paredes, manillas flojas,
              accesorios retirados y pequeños daños visibles.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400 p-3 text-neutral-950">
              <DoorOpen className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-semibold">
              Para propietarios y gestores
            </h2>
            <p className="mt-4 text-amber-100">
              También preparamos pisos entre alquileres: arreglos rápidos,
              revisión visual, montaje de accesorios y pequeños retoques antes
              de enseñar o volver a alquilar la vivienda.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Ventajas
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Por qué arreglar antes de entregar las llaves
              </h2>
              <p className="mt-4 text-neutral-300">
                No siempre hace falta una reforma. Muchas veces basta con
                solucionar los puntos visibles que se revisan al final del
                contrato.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-white/10 bg-neutral-950 p-6"
                >
                  <Star className="h-6 w-6 text-amber-300" />
                  <h3 className="mt-5 text-lg font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Paredes y pintura
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Tapar agujeros y mejorar paredes antes de la entrega
              </h2>
              <p className="mt-4 text-neutral-300">
                Los agujeros de tacos, soportes de TV, estanterías, cuadros o
                cortinas son una de las cosas más visibles al entregar un piso.
                Podemos rellenar, lijar y hacer retoques para que la pared quede
                mucho más presentable.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Agujeros de tacos",
                "Marcas de muebles",
                "Rozaduras de mudanza",
                "Pequeños golpes",
                "Zonas con pintura saltada",
                "Remates antes de revisión",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-950 p-4"
                >
                  <Brush className="h-5 w-5 text-amber-300" />
                  <span className="text-sm text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Lista rápida
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Qué revisar antes del fin del contrato
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {[
                "Paredes donde había cuadros o estanterías",
                "Zona de TV y soporte retirado",
                "Pasillos y esquinas golpeadas",
                "Puertas, manillas y bisagras",
                "Baño: accesorios, portarrollos, toalleros",
                "Cocina: tiradores, enchufes, luces",
                "Habitaciones: cabecero, mesitas, armarios",
                "Salón: marcas de muebles y rozaduras",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-sm leading-6 text-neutral-300">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Zonas
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Reparaciones antes de entregar piso en Valencia y alrededores
          </h2>
          <p className="mt-4 text-neutral-300">
            Trabajamos en Valencia ciudad y zonas cercanas. Para confirmar
            disponibilidad, envíanos ubicación aproximada y fotos del trabajo.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300"
            >
              <MapPin className="h-4 w-4 text-amber-300" />
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Preguntas frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-3xl border border-white/10 bg-neutral-950 p-6"
                >
                  <h3 className="text-lg font-semibold">{faq.q}</h3>
                  <p className="mt-3 text-neutral-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Hammer,
              title: "Trabajo pequeño",
              text: "No necesitas contratar una reforma grande para resolver desperfectos básicos.",
            },
            {
              icon: Layers,
              title: "Materiales básicos",
              text: "Masilla, lija, herramientas y pequeños consumibles según el tipo de reparación.",
            },
            {
              icon: CalendarCheck,
              title: "Antes de la entrega",
              text: "Organizamos el trabajo según la fecha de revisión o entrega de llaves.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <item.icon className="h-7 w-7 text-amber-300" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-amber-400 p-8 text-neutral-950 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                ¿Tienes que entregar un piso de alquiler en Valencia?
              </h2>
              <p className="mt-4 max-w-2xl text-neutral-800">
                Envíanos fotos de agujeros, paredes, accesorios y pequeños
                desperfectos. Te damos una estimación rápida para dejar el piso
                mejor preparado antes de entregar las llaves.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={whatsappHref}
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-950 px-6 py-4 font-semibold text-white transition hover:bg-neutral-800"
              >
                WhatsApp
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-950/20 bg-white/40 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-white/60"
              >
                Formulario
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}