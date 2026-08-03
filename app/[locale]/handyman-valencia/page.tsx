import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  Clock3,
  DoorOpen,
  Euro,
  Image as ImageIcon,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  Plug,
  ShieldCheck,
  Sofa,
  Star,
  Tv,
  Wrench,
} from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs
    ? "Manitas en Valencia | Montaje y Reparaciones | THEVULGO"
    : "Handyman in Valencia | Assembly and Repairs | THEVULGO";
  const description = isEs
    ? "Manitas profesional en Valencia para montaje de TV y muebles, puertas, espejos, enchufes y pequeñas reparaciones. Presupuesto por WhatsApp."
    : "Professional handyman in Valencia for TV and furniture assembly, doors, mirrors, outlets and small repairs. Quote by WhatsApp.";
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/handyman-valencia`,
      languages: {
        es: `${baseUrl}/es/handyman-valencia`,
        en: `${baseUrl}/en/handyman-valencia`,
        "x-default": `${baseUrl}/es/handyman-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/handyman-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function HandymanValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola. Necesito un servicio de manitas en Valencia.\n\nTrabajo:\nZona:\n¿Cuándo lo necesito?:\nAdjunto fotos:"
      : "Hi. I need a handyman service in Valencia.\n\nJob:\nArea:\nWhen do I need it?:\nI am attaching photos:"
  );
  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;
  const callHref = `tel:+${phone}`;

  const services = [
    { title: isEs ? "Montaje de TV" : "TV mounting", price: "49 €", href: `/${locale}/montaje-tv-valencia`, icon: Tv },
    { title: isEs ? "Montaje de muebles" : "Furniture assembly", price: "45 €", href: `/${locale}/montaje-muebles-valencia`, icon: Sofa },
    { title: isEs ? "Ajuste de puertas" : "Door adjustments", price: "35 €", href: `/${locale}/services/doors`, icon: DoorOpen },
    { title: isEs ? "Enchufes e interruptores" : "Outlets and switches", price: "35 €", href: `/${locale}/cambio-enchufe-valencia`, icon: Plug },
    { title: isEs ? "Espejos y estanterías" : "Mirrors and shelves", price: "35 €", href: `/${locale}/services/bathroom/mirror-installation-valencia`, icon: Wrench },
    { title: isEs ? "Pequeñas reparaciones" : "Small repairs", price: "35 €", href: `/${locale}/services/pequenas-reparaciones-valencia`, icon: ShieldCheck },
  ];

  const reviews = isEs
    ? [
        {
          name: "Alice Barra",
          text: "Muy educado, llegó puntual, instaló bien el ventilador de techo y dejó todo limpio. Precios razonables. Lo recomiendo.",
          note: "Reseña real de Google · traducción mostrada por Google",
        },
        {
          name: "Iris Cases",
          text: "Fueron rápidos y muy profesionales. Vinieron el mismo día que contacté. ¡Gracias por el trabajo realizado!",
          note: "Reseña real de Google · traducción mostrada por Google",
        },
        {
          name: "Catherine Salisbury",
          text: "Como gestora de más de 45 propiedades, dependo de profesionales de confianza, y Dany ha demostrado ser exactamente eso. Le he encargado muchos trabajos durante el último año: siempre es puntual, fiable, comunicativo y minucioso. Trabaja de forma limpia y profesional, con precios justos. Muy recomendable.",
          note: "Reseña real de Google · traducción del original",
        },
      ]
    : [
        {
          name: "Alice Barra",
          text: "Very polite, arrived on time, installed the ceiling fan well and left everything clean. Reasonable prices. I recommend him.",
          note: "Real Google review",
        },
        {
          name: "Iris Cases",
          text: "They were quick and very professional. They came the same day I contacted them. Thank you for the work done!",
          note: "Real Google review",
        },
        {
          name: "Catherine Salisbury",
          text: "As a property and rental manager overseeing more than 45 properties, I rely heavily on trustworthy professionals—and Dany has proven to be exactly that. I’ve called on Dany many times over the past year for a wide range of tasks. He is always punctual, reliable, communicative, and thorough. His workmanship is clean and professional, his pricing is fair, and he is a great person to work with. Highly recommended.",
          note: "Real Google review",
        },
      ];

  const faqs = isEs
    ? [
        ["¿Cuánto cuesta un manitas en Valencia?", "Los trabajos pequeños suelen empezar desde 35–49 €. Confirmamos el precio antes de la visita según fotos, materiales y dificultad."],
        ["¿Puedo enviar fotos por WhatsApp?", "Sí. Envía fotos, una descripción, medidas aproximadas y tu zona para recibir una estimación más clara."],
        ["¿Podéis hacer varios trabajos en una visita?", "Sí. Envía la lista completa para preparar herramientas, materiales y organizar mejor el tiempo."],
        ["¿En qué zonas trabajáis?", "Valencia ciudad y zonas cercanas. Consulta tu ubicación por WhatsApp antes de confirmar."],
      ]
    : [
        ["How much does a handyman in Valencia cost?", "Small jobs usually start from €35–49. We confirm the price before the visit based on photos, materials and difficulty."],
        ["Can I send photos by WhatsApp?", "Yes. Send photos, a description, approximate measurements and your area for a clearer estimate."],
        ["Can you do several jobs in one visit?", "Yes. Send the full list so we can prepare tools, materials and organise the time better."],
        ["Which areas do you cover?", "Valencia city and nearby areas. Check your location by WhatsApp before confirming."],
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Servicio de manitas en Valencia" : "Handyman service in Valencia",
    url: `${baseUrl}/${locale}/handyman-valencia`,
    provider: { "@type": "LocalBusiness", name: "THEVULGO", telephone: `+${phone}`, areaServed: "Valencia" },
    areaServed: "Valencia",
  };

  return (
    <main className="bg-white pb-20 text-neutral-950 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-[radial-gradient(circle_at_top_right,_#fef08a_0,_#fff_38%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-bold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              {isEs ? "Valencia y alrededores" : "Valencia and nearby"}
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
              {isEs ? "Manitas en Valencia para reparaciones y montaje" : "Handyman in Valencia for repairs and assembly"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Montamos TV y muebles, ajustamos puertas, colgamos espejos y realizamos pequeñas reparaciones. Envía fotos y recibe un presupuesto claro por WhatsApp."
                : "We mount TVs and furniture, adjust doors, hang mirrors and handle small repairs. Send photos and get a clear quote by WhatsApp."}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm font-bold">
              {[isEs ? "Desde 35 €" : "From €35", isEs ? "Respuesta rápida" : "Fast response", isEs ? "Presupuesto antes de empezar" : "Quote before starting", "ES / EN"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-white">
                  <Check className="h-4 w-4 text-yellow-400" /> {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-300">
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Enviar fotos y pedir presupuesto" : "Send photos and request a quote"}
              </a>
              <a href={callHref} className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-4 font-bold shadow-sm">
                <Phone className="h-5 w-5" /> {isEs ? "Llamar ahora" : "Call now"}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-neutral-950 p-7 text-white shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-yellow-400">{isEs ? "Pide presupuesto en 1 minuto" : "Request a quote in 1 minute"}</p>
            <h2 className="mt-3 text-3xl font-black">{isEs ? "Solo necesitamos 4 datos" : "We only need 4 details"}</h2>
            <div className="mt-6 space-y-4">
              {[isEs ? "Qué trabajo necesitas" : "What job you need", isEs ? "Fotos claras" : "Clear photos", isEs ? "Barrio o zona" : "Neighbourhood or area", isEs ? "Cuándo lo necesitas" : "When you need it"].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-neutral-700 bg-neutral-900 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-black text-black">{index + 1}</span>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-neutral-300">{isEs ? "Te diremos qué se puede hacer, el precio orientativo y la disponibilidad antes de confirmar." : "We will tell you what can be done, the guide price and availability before confirming."}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[.2em] text-yellow-600">{isEs ? "Servicios populares" : "Popular services"}</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">{isEs ? "Lo que más nos piden" : "What clients ask for most"}</h2>
            <p className="mt-3 max-w-2xl text-neutral-600">{isEs ? "Elige el servicio que necesitas y consulta ejemplos, precios orientativos y disponibilidad." : "Choose the service you need and check examples, guide prices and availability."}</p>
          </div>
          <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 font-bold underline decoration-yellow-400 decoration-4 underline-offset-4">{isEs ? "Ver todos los servicios" : "See all services"} <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400"><service.icon className="h-6 w-6" /></span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-black">{isEs ? "desde" : "from"} {service.price}</span>
              </div>
              <h3 className="mt-5 text-xl font-black">{service.title}</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold">{isEs ? "Ver detalles" : "View details"} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[.2em] text-yellow-600">{isEs ? "Precios claros" : "Clear prices"}</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">{isEs ? "Sabes el precio antes de confirmar" : "Know the price before confirming"}</h2>
              <p className="mt-4 leading-7 text-neutral-600">{isEs ? "Revisamos fotos, medidas, materiales, acceso y dificultad. El precio final se confirma antes de empezar." : "We review photos, measurements, materials, access and difficulty. The final price is confirmed before starting."}</p>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 font-bold text-white"><MessageCircle className="h-5 w-5 text-yellow-400" />{isEs ? "Consultar mi trabajo" : "Ask about my job"}</a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <span className="font-semibold">{service.title}</span><span className="ml-3 shrink-0 font-black">{isEs ? "desde" : "from"} {service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="flex gap-1 text-yellow-400" aria-label="5 estrellas">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">{isEs ? "Opiniones de clientes" : "Customer reviews"}</h2>
              <p className="mt-3 text-neutral-300">{isEs ? "Experiencias compartidas en Google." : "Experiences shared on Google."}</p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-yellow-400"><BadgeCheck className="h-5 w-5" /> Google Reviews</div>
          </div>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className={`rounded-2xl border p-6 ${review.placeholder ? "border-dashed border-yellow-500/60 bg-yellow-400/10" : "border-neutral-700 bg-neutral-900"}`}>
                <div className="flex gap-1 text-yellow-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-5 leading-7 text-neutral-100">“{review.text}”</blockquote>
                <p className="mt-5 font-black">{review.name}</p>
                <p className={`mt-1 text-xs leading-5 ${review.placeholder ? "font-bold text-yellow-300" : "text-neutral-400"}`}>{review.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[.2em] text-yellow-600">{isEs ? "Cómo funciona" : "How it works"}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{isEs ? "De las fotos al trabajo terminado" : "From photos to a finished job"}</h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-4">
          {[
            [isEs ? "Envía fotos" : "Send photos", isEs ? "Trabajo, medidas y zona." : "Job, measurements and area."],
            [isEs ? "Recibe estimación" : "Get an estimate", isEs ? "Precio y materiales claros." : "Clear price and materials."],
            [isEs ? "Confirma horario" : "Confirm a time", isEs ? "Según disponibilidad." : "Based on availability."],
            [isEs ? "Trabajo y revisión" : "Work and check", isEs ? "Limpio, firme y funcionando." : "Clean, secure and working."],
          ].map(([title, text], index) => (
            <div key={title} className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-black">{index + 1}</span>
              <h3 className="mt-5 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-yellow-200 bg-yellow-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="flex items-center gap-2 font-bold"><Clock3 className="h-5 w-5" />{isEs ? "Consulta la próxima disponibilidad" : "Check the next availability"}</p>
            <h2 className="mt-3 text-3xl font-black">{isEs ? "¿Tienes uno o varios trabajos pendientes?" : "Do you have one or several jobs waiting?"}</h2>
            <p className="mt-3 text-neutral-700">{isEs ? "Envía la lista completa y fotos. Te diremos qué se puede hacer, cuánto cuesta y cuándo podemos ir." : "Send the full list and photos. We will tell you what can be done, the price and when we can come."}</p>
          </div>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-6 py-4 font-black text-white shadow-lg"><MessageCircle className="h-5 w-5 text-yellow-400" />{isEs ? "Pedir presupuesto" : "Request a quote"}</a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="text-center"><p className="text-sm font-black uppercase tracking-[.2em] text-yellow-600">FAQ</p><h2 className="mt-3 text-3xl font-black">{isEs ? "Preguntas frecuentes" : "Frequently asked questions"}</h2></div>
        <div className="mt-8 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white px-6 shadow-sm">
          {faqs.map(([q, a]) => <details key={q} className="group py-5"><summary className="cursor-pointer list-none font-black">{q}</summary><p className="mt-3 leading-7 text-neutral-600">{a}</p></details>)}
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
          <ImageIcon className="mx-auto h-9 w-9 text-yellow-400" />
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">{isEs ? "Enséñanos el trabajo" : "Show us the job"}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">{isEs ? "Envía fotos, medidas aproximadas y tu zona. Recibirás una respuesta más útil y un presupuesto más claro." : "Send photos, approximate measurements and your area. You will get a more useful response and a clearer quote."}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-black text-black"><MessageCircle className="h-5 w-5" />WhatsApp</a>
            <Link href={`/${locale}/estimate?category=handyman`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 px-6 py-4 font-bold">{isEs ? "Abrir formulario" : "Open form"}<ArrowRight className="h-5 w-5" /></Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-neutral-400"><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />Valencia</span><span className="inline-flex items-center gap-2"><Languages className="h-4 w-4" />ES / EN</span><span className="inline-flex items-center gap-2"><Euro className="h-4 w-4" />{isEs ? "Precio confirmado" : "Price confirmed"}</span></div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-800 bg-neutral-950 p-3 shadow-2xl md:hidden">
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-black text-black"><MessageCircle className="h-5 w-5" />{isEs ? "Enviar fotos por WhatsApp" : "Send photos by WhatsApp"}</a>
      </div>
    </main>
  );
}
