"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowRight,
  Check,
  Drill,
  Hammer,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Tv,
  Wrench,
} from "lucide-react";
import AvailabilityBadge from "@/app/components/AvailabilityBadge";
import MobileStickyCta from "@/app/components/MobileStickyCta";
import AcCleaningPromoCard from "@/app/components/AcCleaningPromoCard";
import HomeQuickRequestCard from "@/app/components/HomeQuickRequestCard";
import { buildWhatsAppHref, type CommercialService } from "@/lib/commercial";
import type { Market } from "@/lib/cities";
import { getCatalogServices } from "@/lib/serviceCatalog";
import { acDeepCleaningPromotion } from "@/lib/acPromotion";

type Props = { locale?: string; city?: string; market?: Market };

export default function HomeClient({
  locale: localeProp,
  city = "Valencia",
  market = "valencia",
}: Props) {
  const routeParams = useParams<{ locale?: string }>();
  const locale = localeProp ?? routeParams.locale ?? "en";
  const es = locale === "es";
  const base = market === "valencia" ? `/${locale}` : `/${locale}/${market}`;
  const price = (category: string, fallback: number) =>
    getCatalogServices(category)[0]?.price ?? fallback;
  const serviceHref = (slug: string) => `${base}/${slug}`;
  const generalWa = buildWhatsAppHref("general", locale, city);
  const cards: Array<{
    icon: typeof Tv;
    service: CommercialService;
    title: string;
    text: string;
    price: number;
    href: string;
  }> = [
    {
      icon: Tv,
      service: "tv",
      title: es ? "Montaje de TV" : "TV mounting",
      text: es
        ? "Soporte, nivelado y cables bien resueltos."
        : "Secure bracket, clean levelling and tidy cables.",
      price: price("TV Mounting", 59),
      href: serviceHref("montaje-tv-valencia"),
    },
    {
      icon: Hammer,
      service: "handyman",
      title: es ? "Manitas y reparaciones" : "Handyman & repairs",
      text: es
        ? "Una visita para esa lista que llevas aplazando."
        : "One visit for the jobs you have been putting off.",
      price: price("Handyman", 35),
      href: serviceHref("handyman-valencia"),
    },
    {
      icon: PackageCheck,
      service: "furniture",
      title: es ? "Montaje de muebles" : "Furniture assembly",
      text: es
        ? "IKEA y otras marcas, montado correctamente."
        : "IKEA and other brands, assembled correctly.",
      price: price("Furniture Assembly", 49),
      href: serviceHref("montaje-muebles-valencia"),
    },
    {
      icon: Wrench,
      service: "repairs",
      title: es ? "Reparaciones del hogar" : "Home repairs",
      text: es
        ? "Puertas, bisagras, sellados, paredes y pequeños daños."
        : "Doors, hinges, sealing, walls and everyday damage.",
      price: price("Repairs", 35),
      href: serviceHref("services/repairs"),
    },
  ];
  const secondary = es
    ? [
        "Cortinas y estores",
        "Estantes y espejos",
        "Lámparas",
        "Silicona y sellados",
        "Ajustes de puertas",
        "Reparaciones pequeñas",
      ]
    : [
        "Curtains and blinds",
        "Shelves and mirrors",
        "Light fittings",
        "Silicone and sealing",
        "Door adjustments",
        "Small repairs",
      ];

  return (
    <main className="bg-white text-neutral-950">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_75%_20%,#fff4b8_0,transparent_38%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_.9fr] md:px-8 md:py-24">
          <div>
            <AvailabilityBadge locale={locale} />
            <p className="mt-6 text-sm font-black uppercase tracking-[.18em] text-neutral-500">
              THEVULGO · {city}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
              {es
                ? `Manitas, montaje y reparaciones en ${city}`
                : `Handyman, mounting & home repairs in ${city}`}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              {es
                ? "Montaje de TV, montaje de muebles, manitas y reparaciones del hogar. Envía fotos, recibe un precio claro y reserva la visita por WhatsApp."
                : "TV mounting, furniture assembly, handyman visits and home repairs. Send photos, get a clear price and book through WhatsApp."}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={generalWa}
                data-event="whatsapp_click"
                data-cta-location="hero"
                data-service="general"
                className="rounded-xl bg-[#ffcc00] px-6 py-4 text-center font-black shadow-lg shadow-yellow-200"
              >
                <MessageCircle className="mr-2 inline" size={20} />
                {es ? "Pedir presupuesto por WhatsApp" : "Get a WhatsApp quote"}
              </a>
              <a
                href="#services"
                data-event="services_click"
                data-cta-location="hero"
                className="rounded-xl border border-neutral-300 px-6 py-4 text-center font-bold"
              >
                {es ? "Ver servicios" : "Explore services"}
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-neutral-700">
              {[
                es ? "Respuesta rápida" : "Fast reply",
                es ? "Precio acordado" : "Price agreed first",
                es ? "Trabajo limpio" : "Clean finish",
              ].map((x) => (
                <span key={x}>
                  <Check className="mr-1 inline text-emerald-600" size={16} />
                  {x}
                </span>
              ))}
            </div>
          </div>
          <HomeQuickRequestCard locale={locale} city={city} />
        </div>
      </section>

      {market === "valencia" && acDeepCleaningPromotion.active && (
  <div className="mt-8">
    <AcCleaningPromoCard locale={locale} source="homepage" variant="home" />
  </div>
)}

      <section
        id="services"
        className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
      >
        <p className="text-sm font-black uppercase tracking-[.18em] text-neutral-500">
          {es ? "Servicios principales" : "Core services"}
        </p>
        <h2 className="mt-3 text-3xl font-black sm:text-5xl">
          {es
            ? "Elige el trabajo. Nosotros lo resolvemos."
            : "Choose the job. We’ll sort it."}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(
            ({ icon: Icon, service, title, text, price: from, href }) => (
              <article
                key={service}
                className="flex flex-col rounded-2xl border border-neutral-200 p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon size={30} />
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-neutral-600">
                  {text}
                </p>
                <p className="mt-6 text-sm font-bold">
                  {es ? "Precio de referencia" : "Reference price"}{" "}
                  <span className="text-2xl">€{from}</span>
                </p>
                <Link
                  href={href}
                  data-event="service_view"
                  data-cta-location="service-card"
                  data-service={service}
                  className="mt-4 inline-flex items-center gap-2 font-black underline decoration-[#ffcc00] decoration-4 underline-offset-4"
                >
                  {es ? "Ver precios" : "View prices"}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={buildWhatsAppHref(service, locale, city)}
                  data-event="whatsapp_click"
                  data-cta-location="service-card"
                  data-service={service}
                  className="mt-5 rounded-xl bg-neutral-950 px-4 py-3 text-center text-sm font-bold text-white"
                >
                  WhatsApp
                </a>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8">
          <div>
            <Drill className="text-[#ffcc00]" size={34} />
            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              {es
                ? "Una visita. Varios trabajos."
                : "One visit. Multiple jobs."}
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-neutral-300">
              {es
                ? "TV, estantes, lámparas, ajustes y pequeñas reparaciones: dinos todo lo que necesitas para preparar una visita eficiente."
                : "TVs, shelves, lights, adjustments and small repairs: tell us the full list so we can plan an efficient visit."}
            </p>
          </div>
          <div className="flex items-center">
            <a
              href={buildWhatsAppHref("handyman", locale, city)}
              data-event="multi_job_click"
              data-cta-location="multi-job"
              data-service="handyman"
              className="w-full rounded-2xl bg-[#ffcc00] p-6 text-center text-xl font-black text-black"
            >
              {es ? "Enviar lista y fotos" : "Send your list and photos"}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          {es ? "Más ayuda para tu hogar" : "More help around your home"}
        </h2>
        <div className="mt-7 flex flex-wrap gap-3">
          {secondary.map((x) => (
            <a
              key={x}
              href={buildWhatsAppHref("general", locale, city)}
              data-event="secondary_service_click"
              data-cta-location="service-card"
              className="rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-bold hover:border-black hover:bg-neutral-50"
            >
              {x}
            </a>
          ))}
        </div>
        {market === "valencia" && (
          <div className="mt-12 grid gap-6 rounded-3xl bg-[#fff5c2] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="text-sm font-black uppercase tracking-widest">
                {es ? "Pack mudanza" : "Move-in setup"}
              </p>
              <h2 className="mt-2 text-3xl font-black">
                {es
                  ? "Deja la vivienda lista de una vez"
                  : "Get the whole home ready at once"}
              </h2>
              <p className="mt-3 text-neutral-700">
                {es
                  ? "Muebles, TV, cortinas, estantes y pequeños ajustes en una visita planificada."
                  : "Furniture, TV, curtains, shelves and small fixes in one planned visit."}
              </p>
            </div>
            <a
              href={buildWhatsAppHref("move-in", locale, city)}
              data-event="move_in_click"
              data-cta-location="service-card"
              data-service="move-in"
              className="rounded-xl bg-black px-6 py-4 text-center font-black text-white"
            >
              {es ? "Planear mi visita" : "Plan my visit"}
            </a>
          </div>
        )}
      </section>

      <section className="border-y border-neutral-200 bg-[#fffdf5]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[.18em] text-yellow-600">
              {es ? "El servicio adecuado" : "The right service"}
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              {es
                ? "Cuéntanos el resultado, no el nombre del oficio"
                : "Tell us the result, not the trade name"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              {es
                ? "No necesitas saber si el trabajo corresponde a un montador, manitas o técnico. Con fotos, medidas y una breve lista podemos definir el alcance y separar cualquier tarea que requiera un profesional autorizado."
                : "You do not need to decide whether the job needs an installer, handyman or specialist. Photos, dimensions and a short list let us define the scope and identify anything that needs a licensed professional."}
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {(es
              ? [
                  [
                    "Trabajo único",
                    "Una TV, un mueble o una reparación concreta con alcance definido.",
                  ],
                  [
                    "Lista de pendientes",
                    "Agrupamos trabajos compatibles para aprovechar mejor una visita.",
                  ],
                  [
                    "Proyecto de reforma",
                    "Varias estancias, acabados u oficios con planificación y presupuesto por fases.",
                  ],
                ]
              : [
                  [
                    "One clear job",
                    "A TV, a piece of furniture or one repair with a defined scope.",
                  ],
                  [
                    "A list of jobs",
                    "We group compatible tasks to make one visit more efficient.",
                  ],
                  [
                    "Renovation project",
                    "Several rooms, finishes or trades planned and quoted in stages.",
                  ],
                ]
            ).map(([title, text], index) => (
              <article
                key={title}
                className={`rounded-3xl p-6 ${index === 1 ? "bg-neutral-950 text-white" : "border border-neutral-200 bg-white"}`}
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ffcc00] font-black text-black">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p
                  className={`mt-3 leading-7 ${index === 1 ? "text-neutral-300" : "text-neutral-600"}`}
                >
                  {text}
                </p>
              </article>
            ))}
          </div>
          {market === "valencia" && (
            <Link
              href={es ? "/es/reformas-valencia" : "/renovations-valencia"}
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 font-black transition hover:border-black"
            >
              {es
                ? "Explorar reformas en Valencia"
                : "Explore renovations in Valencia"}
              <ArrowRight size={17} />
            </Link>
          )}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="text-3xl font-black">
            {es ? "Cómo funciona" : "How it works"}
          </h2>
          <div className="mt-9 grid gap-6 md:grid-cols-4">
            {(es
              ? [
                  ["1", "Envía fotos", "Cuéntanos qué necesitas."],
                  ["2", "Precio claro", "Confirmamos alcance y coste."],
                  ["3", "Elegimos hora", "Acordamos una franja de visita."],
                  ["4", "Trabajo terminado", "Limpio, probado y revisado."],
                ]
              : [
                  ["1", "Send photos", "Tell us what needs doing."],
                  ["2", "Clear price", "We confirm scope and cost."],
                  ["3", "Pick a time", "We agree a visit window."],
                  ["4", "Job completed", "Clean, tested and checked."],
                ]
            ).map(([n, t, d]) => (
              <div key={n}>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffcc00] font-black">
                  {n}
                </span>
                <h3 className="mt-4 font-black">{t}</h3>
                <p className="mt-1 text-sm text-neutral-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[.18em] text-neutral-500">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              {es ? "Antes de reservar" : "Before you book"}
            </h2>
            <p className="mt-4 leading-7 text-neutral-600">
              {es
                ? "La mejor estimación empieza con fotos claras, medidas aproximadas y la lista completa de trabajos."
                : "The best estimate starts with clear photos, approximate dimensions and your complete job list."}
            </p>
          </div>
          <div className="space-y-3">
            {(es
              ? [
                  [
                    "¿Puedo pedir varios trabajos en la misma visita?",
                    "Sí. Envíanos la lista completa para comprobar qué tareas son compatibles y preparar tiempo, herramientas y materiales.",
                  ],
                  [
                    "¿Cómo confirmáis el precio?",
                    "Revisamos fotos, medidas, soporte, acceso y acabado esperado. Confirmamos el alcance antes de empezar.",
                  ],
                  [
                    "¿Trabajáis con clientes que hablan inglés?",
                    "Sí. Toda la información principal y el proceso de presupuesto están disponibles en español e inglés.",
                  ],
                  [
                    "¿Hacéis reformas además de trabajos pequeños?",
                    "Sí. Las reformas se valoran con un alcance separado, mediciones y visita técnica cuando corresponde.",
                  ],
                ]
              : [
                  [
                    "Can I book several jobs in one visit?",
                    "Yes. Send the complete list so we can check compatibility and plan time, tools and materials.",
                  ],
                  [
                    "How do you confirm the price?",
                    "We review photos, dimensions, substrate, access and the expected finish, then confirm scope before work starts.",
                  ],
                  [
                    "Can I communicate in English?",
                    "Yes. The main information and quotation journey are available in both English and Spanish.",
                  ],
                  [
                    "Do you handle renovations as well as small jobs?",
                    "Yes. Renovations use a separate scope, measurements and a site visit where appropriate.",
                  ],
                ]
            ).map(([question, answer]) => (
              <details
                key={question}
                className="rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-black">
                  {question}
                </summary>
                <p className="mt-3 leading-7 text-neutral-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <ShieldCheck className="mx-auto" size={40} />
        <h2 className="mt-5 text-4xl font-black">
          {es
            ? "¿Qué quieres resolver esta semana?"
            : "What do you want sorted this week?"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
          {es
            ? "Envíanos unas fotos. Te diremos qué necesitamos, el precio y la primera disponibilidad."
            : "Send a few photos. We’ll confirm what is needed, the price and the first availability."}
        </p>
        <a
          href={generalWa}
          data-event="whatsapp_click"
          data-cta-location="final"
          data-service="general"
          className="mt-8 inline-block rounded-xl bg-[#ffcc00] px-7 py-4 font-black"
        >
          {es ? "Hablar por WhatsApp" : "Talk on WhatsApp"}
        </a>
      </section>
      <MobileStickyCta
        href={generalWa}
        locale={locale}
        servicesHref="#services"
      />
    </main>
  );
}
