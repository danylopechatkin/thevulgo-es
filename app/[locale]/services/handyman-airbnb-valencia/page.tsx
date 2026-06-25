import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Euro,
  Hammer,
  Home,
  KeyRound,
  Layers,
  MapPin,
  MessageCircle,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  BedDouble,
  Drill,
  DoorOpen,
  Plug,
  Tv,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "handyman-airbnb-valencia";

const areas = [
  "Valencia",
  "Ruzafa",
  "Benimaclet",
  "Campanar",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
];

const services = [
  {
    title: "Reparaciones rápidas entre huéspedes",
    text: "Solucionamos pequeños desperfectos antes de la siguiente entrada: agujeros, rozaduras, manillas, bisagras, enchufes, luces y detalles visibles.",
    icon: Wrench,
  },
  {
    title: "Retoques de pintura y paredes",
    text: "Tapamos marcas, arañazos y golpes pequeños para que el apartamento vuelva a verse limpio y cuidado en fotos y visitas.",
    icon: Paintbrush,
  },
  {
    title: "Montaje y ajuste de muebles",
    text: "Montamos camas, mesitas, estanterías, percheros, sillas, mesas y muebles auxiliares para apartamentos turísticos.",
    icon: BedDouble,
  },
  {
    title: "TV, soportes y decoración",
    text: "Colgamos televisores, cuadros, espejos, cortinas, barras, estantes y accesorios de baño o cocina.",
    icon: Tv,
  },
  {
    title: "Preparación para check-in",
    text: "Ayudamos a dejar el piso listo antes de la llegada del huésped: revisión visual, ajustes y pequeños trabajos urgentes.",
    icon: KeyRound,
  },
  {
    title: "Electricidad básica",
    text: "Cambio de enchufes, interruptores, lámparas, plafones y pequeños puntos eléctricos visibles.",
    icon: Plug,
  },
];

const problems = [
  "Agujeros de tacos o tornillos en paredes",
  "Manillas flojas o puertas que rozan",
  "Sillas, camas o muebles sueltos",
  "Marcas negras, golpes y rozaduras",
  "Estantes o accesorios descolgados",
  "Luces, enchufes o interruptores dañados",
  "TV, cuadros o espejos mal fijados",
  "Detalles visibles antes del check-in",
];

const steps = [
  {
    title: "Envíanos fotos por WhatsApp",
    text: "Manda fotos o vídeo del apartamento y de los desperfectos.",
  },
  {
    title: "Te damos precio claro",
    text: "Calculamos trabajo, materiales aproximados y disponibilidad.",
  },
  {
    title: "Vamos al apartamento",
    text: "Realizamos los arreglos con cuidado, limpieza y rapidez.",
  },
  {
    title: "Piso listo para huéspedes",
    text: "Dejamos los detalles importantes resueltos antes del check-in.",
  },
];

const faqs = [
  {
    q: "¿Trabajáis con apartamentos Airbnb en Valencia?",
    a: "Sí. Ayudamos con reparaciones, montaje, retoques y preparación de apartamentos turísticos en Valencia.",
  },
  {
    q: "¿Podéis venir entre un check-out y un check-in?",
    a: "Sí, cuando hay disponibilidad podemos hacer trabajos rápidos el mismo día o en una franja concreta.",
  },
  {
    q: "¿Hacéis pequeños retoques de pintura?",
    a: "Sí. Podemos tapar agujeros, lijar, aplicar masilla rápida y hacer retoques de pintura en zonas pequeñas.",
  },
  {
    q: "¿Traéis materiales?",
    a: "Podemos llevar materiales básicos o comprarlos según el trabajo. Para pintura exacta normalmente hay que confirmar color.",
  },
  {
    q: "¿El precio es fijo?",
    a: "El precio depende de fotos, cantidad de trabajos, materiales y urgencia. Siempre damos una estimación clara antes de empezar.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Handyman para Airbnb en Valencia | Reparaciones rápidas"
    : "Airbnb Handyman in Valencia | Fast Repairs";

  const description = isEs
    ? "Handyman para Airbnb en Valencia. Reparaciones rápidas, retoques de pintura, montaje de muebles, TV, accesorios y preparación de apartamentos turísticos."
    : "Airbnb handyman in Valencia. Fast repairs, paint touch-ups, furniture assembly, TV mounting and apartment preparation.";

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

export default async function HandymanAirbnbValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito un handyman para un apartamento Airbnb en Valencia. Quiero enviar fotos para presupuesto."
      : "Hi, I need a handyman for an Airbnb apartment in Valencia. I’d like to send photos for an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;
  const estimateHref = `/${locale}/estimate?category=handyman`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Handyman para Airbnb en Valencia",
    serviceType: "Airbnb handyman and apartment repairs",
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
      "Handyman para apartamentos Airbnb en Valencia: reparaciones rápidas, retoques de pintura, montaje de muebles, TV, accesorios y preparación antes del check-in.",
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
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
              <Sparkles className="h-4 w-4" />
              Handyman para Airbnb en Valencia
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reparaciones rápidas para apartamentos Airbnb en Valencia
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Dejamos tu apartamento listo antes del próximo huésped:
              reparaciones pequeñas, retoques de pintura, montaje de muebles,
              accesorios, TV, luces y detalles visibles.
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
                ["Desde 35 €", "Trabajos pequeños"],
                ["Valencia", "Zonas céntricas y alrededores"],
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
                  <Home className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Servicio rápido</p>
                  <h2 className="text-2xl font-semibold">
                    Piso listo para huéspedes
                  </h2>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Reparaciones antes del check-in",
                  "Retoques de pintura y pared",
                  "Montaje de muebles y accesorios",
                  "TV, espejos, cuadros y estantes",
                  "Trabajo limpio y precio claro",
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
                Ideal para propietarios, gestores de Airbnb, pisos turísticos y
                apartamentos de alquiler temporal.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Clock3,
              title: "Rápido",
              text: "Pensado para urgencias entre huéspedes.",
            },
            {
              icon: ShieldCheck,
              title: "Cuidado",
              text: "Trabajos limpios y detalles visibles bien terminados.",
            },
            {
              icon: Euro,
              title: "Claro",
              text: "Precio estimado antes de empezar el trabajo.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <item.icon className="h-7 w-7 text-amber-300" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-neutral-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Servicios para Airbnb
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Todo lo pequeño que puede afectar una reseña
            </h2>
            <p className="mt-4 text-neutral-300">
              En apartamentos turísticos, los detalles importan: una manilla
              floja, una marca en la pared o una lámpara rota puede afectar la
              experiencia del huésped.
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
            Arreglos rápidos antes de la entrada del huésped
          </h2>
          <p className="mt-4 text-neutral-300">
            Puedes enviarnos fotos del piso y te diremos qué se puede resolver
            rápido, qué materiales hacen falta y cuándo podemos ir.
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
          {problems.map((problem) => (
            <div
              key={problem}
              className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
              <span className="text-neutral-300">{problem}</span>
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
              Cómo trabajamos
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
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
              <CalendarCheck className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-semibold">
              Ideal para gestores de pisos turísticos
            </h2>
            <p className="mt-4 text-neutral-300">
              Si gestionas varios apartamentos en Valencia, puedes contactarnos
              cuando aparezcan pequeños desperfectos entre reservas. Trabajamos
              con fotos, lista de tareas y prioridad por urgencia.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-amber-400 p-3 text-neutral-950">
              <BadgeCheck className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-semibold">
              Mejor presentación, mejores reseñas
            </h2>
            <p className="mt-4 text-amber-100">
              Un apartamento limpio visualmente, sin detalles rotos ni marcas
              evidentes, transmite más confianza y mejora la experiencia del
              huésped desde el primer minuto.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Zonas
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Handyman para Airbnb en Valencia y alrededores
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950 px-4 py-2 text-sm text-neutral-300"
              >
                <MapPin className="h-4 w-4 text-amber-300" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 text-neutral-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-amber-400 p-8 text-neutral-950 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                ¿Necesitas preparar un Airbnb antes del próximo huésped?
              </h2>
              <p className="mt-4 max-w-2xl text-neutral-800">
                Envíanos fotos por WhatsApp y te damos una estimación rápida
                para reparaciones, retoques, montaje o preparación del piso.
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