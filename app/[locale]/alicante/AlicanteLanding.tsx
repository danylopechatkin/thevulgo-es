import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, Clock3, Euro, MapPin, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import { ALICANTE_DISTRICTS, humanizeServicePath } from "@/lib/cities";
import { MADRID_ROUTES } from "@/lib/madridRoutes";

const phone = "34610076942";

const categoryCards = [
  ["handyman", "Handyman", "Manitas y reparaciones"],
  ["services/tv-mounting", "TV Mounting", "Instalación de TV"],
  ["services/furniture", "Furniture Assembly", "Montaje de muebles"],
  ["services/electrical", "Electrical", "Electricidad básica"],
  ["services/plumbing", "Plumbing", "Fontanería básica"],
  ["services/drywall", "Drywall", "Pladur y paredes"],
  ["services/repairs", "Repairs", "Pequeñas reparaciones"],
  ["services/doors", "Doors", "Puertas y herrajes"],
  ["services/bathroom", "Bathroom", "Baño"],
  ["services/kitchen", "Kitchen", "Cocina"],
  ["services/smart-home", "Smart Home", "Smart Home"],
  ["services/exterior", "Exterior", "Exterior"],
] as const;

function categoryFor(path: string) {
  if (!path.startsWith("services/")) return "Servicios destacados";
  return path.split("/")[1] || "otros";
}

export default function AlicanteLanding({ locale, servicePath }: { locale: string; servicePath?: string }) {
  const isEs = locale === "es";
  const isHome = !servicePath;
  const serviceName = servicePath ? humanizeServicePath(servicePath, locale) : isEs ? "Servicios de manitas" : "Handyman services";
  const title = isHome
    ? isEs ? "Servicios de manitas en Alicante" : "Handyman services in Alicante"
    : `${serviceName} ${isEs ? "en" : "in"} Alicante`;
  const estimateHref = `/${locale}/estimate?market=alicante${servicePath ? `&service=${encodeURIComponent(servicePath)}` : ""}`;
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(isEs ? `Hola, necesito ${serviceName.toLowerCase()} en Alicante. Zona: ` : `Hi, I need ${serviceName.toLowerCase()} in Alicante. Area: `)}`;
  const related = servicePath
    ? MADRID_ROUTES.filter((route) => route.path !== servicePath && categoryFor(route.path) === categoryFor(servicePath)).slice(0, 12)
    : [];
  const grouped = MADRID_ROUTES.reduce<Record<string, typeof MADRID_ROUTES[number][]>>((result, route) => {
    const key = categoryFor(route.path);
    (result[key] ||= []).push(route);
    return result;
  }, {});

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    url: `https://www.thevulgo.es/${locale}/alicante${servicePath ? `/${servicePath}` : ""}`,
    provider: { "@type": "Organization", name: "THEVULGO", url: "https://www.thevulgo.es", telephone: `+${phone}` },
    areaServed: { "@type": "City", name: "Alicante" },
    serviceType: serviceName,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `https://www.thevulgo.es/${locale}` },
      { "@type": "ListItem", position: 2, name: "Alicante", item: `https://www.thevulgo.es/${locale}/alicante` },
      ...(servicePath ? [{ "@type": "ListItem", position: 3, name: serviceName, item: `https://www.thevulgo.es/${locale}/alicante/${servicePath}` }] : []),
    ],
  };

  return (
    <main className="bg-white pb-20 text-neutral-950 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-[radial-gradient(circle_at_top_right,_#fef08a_0,_#fff_42%)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-sm font-bold text-neutral-600">
            <Link href={`/${locale}/alicante`} className="hover:text-black">THEVULGO · Alicante</Link>
            {servicePath && <><span>/</span><span>{serviceName}</span></>}
          </div>
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-extrabold"><MapPin className="h-4 w-4" /> Alicante capital · zonas de Alicante</div>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? `${serviceName} con presupuesto claro, comunicación rápida y trabajo limpio. Atendemos viviendas, pisos de alquiler, oficinas y pequeños negocios en Alicante.`
                : `${serviceName} with clear pricing, fast communication and clean work. We serve homes, rental apartments, offices and small businesses across Alicante.`}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={estimateHref} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-extrabold shadow-md transition hover:scale-[1.02]">{isEs ? "Calcular presupuesto" : "Build an estimate"}<ArrowRight className="h-5 w-5" /></Link>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-300 bg-white px-6 py-4 font-bold shadow-sm"><MessageCircle className="h-5 w-5" />WhatsApp</a>
            </div>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[[Clock3, isEs ? "Respuesta rápida" : "Fast response"], [Euro, isEs ? "Precio confirmado antes" : "Price agreed first"], [ShieldCheck, isEs ? "Trabajo limpio y cuidado" : "Clean, careful work"]].map(([Icon, label]) => { const I = Icon as typeof Clock3; return <div key={String(label)} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4 font-bold shadow-sm"><I className="h-5 w-5 text-yellow-500" />{String(label)}</div>; })}
          </div>
        </div>
      </section>

      {isHome ? (
        <>
          <section className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="text-3xl font-black">{isEs ? "Servicios disponibles en Alicante" : "Services available in Alicante"}</h2>
            <p className="mt-3 max-w-3xl text-neutral-600">{isEs ? "El mismo catálogo de servicios de THEVULGO, organizado para reservar y medir resultados específicamente en Alicante." : "The same THEVULGO service catalogue, organised for booking and measuring results specifically in Alicante."}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryCards.map(([path, en, es]) => <Link key={path} href={`/${locale}/alicante/${path}`} className="group rounded-3xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md"><Wrench className="h-7 w-7 text-yellow-500" /><h3 className="mt-4 text-xl font-extrabold">{isEs ? es : en}</h3><span className="mt-4 inline-flex items-center gap-1 text-sm font-bold">{isEs ? "Ver servicios" : "View services"}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}
            </div>
          </section>
          <section className="border-y border-neutral-200 bg-neutral-50">
            <div className="mx-auto max-w-7xl px-4 py-16">
              <h2 className="text-3xl font-black">{isEs ? "Catálogo completo" : "Full catalogue"}</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(grouped).map(([group, routes]) => <div key={group}><h3 className="mb-3 text-lg font-extrabold capitalize">{group.replaceAll("-", " ")}</h3><div className="space-y-2">{routes.map((route) => <Link key={route.path} href={`/${locale}/alicante/${route.path}`} className="flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-black"><ArrowRight className="h-3.5 w-3.5 text-yellow-500" />{humanizeServicePath(route.path, locale)}</Link>)}</div></div>)}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <h2 className="text-3xl font-black">{isEs ? `Cómo trabajamos en ${serviceName.toLowerCase()}` : `How our ${serviceName.toLowerCase()} works`}</h2>
              <div className="mt-8 space-y-5">
                {[
                  isEs ? "Envíanos fotos, medidas, ubicación y una descripción del trabajo." : "Send photos, measurements, your location and a description of the job.",
                  isEs ? "Revisamos materiales, acceso, pared o superficie y confirmamos el alcance." : "We review materials, access, wall or surface and confirm the scope.",
                  isEs ? "Acordamos precio y horario antes de la visita en Alicante." : "We agree the price and time before the Alicante visit.",
                  isEs ? "Realizamos el trabajo y dejamos la zona recogida." : "We complete the work and leave the area tidy.",
                ].map((item, index) => <div key={item} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-black">{index + 1}</span><p className="pt-1 text-neutral-700">{item}</p></div>)}
              </div>
            </div>
            <aside className="rounded-3xl border border-yellow-200 bg-yellow-50 p-7">
              <BadgeCheck className="h-9 w-9" /><h2 className="mt-4 text-2xl font-black">{isEs ? "Antes de reservar" : "Before booking"}</h2>
              <ul className="mt-5 space-y-3 text-sm font-semibold text-neutral-700">{[
                isEs ? "Confirma el distrito y código postal" : "Confirm district and postcode",
                isEs ? "Envía fotos generales y de detalle" : "Send overview and detail photos",
                isEs ? "Indica medidas y modelo del producto" : "Include measurements and product model",
                isEs ? "Aclara si hay materiales disponibles" : "Tell us whether materials are available",
              ].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />{item}</li>)}</ul>
            </aside>
          </section>
          {related.length > 0 && <section className="border-y border-neutral-200 bg-neutral-50"><div className="mx-auto max-w-7xl px-4 py-14"><h2 className="text-2xl font-black">{isEs ? "Servicios relacionados en Alicante" : "Related services in Alicante"}</h2><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{related.map((route) => <Link key={route.path} href={`/${locale}/alicante/${route.path}`} className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 font-bold shadow-sm hover:border-yellow-300">{humanizeServicePath(route.path, locale)}<ArrowRight className="h-4 w-4" /></Link>)}</div></div></section>}
        </>
      )}

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-black">{isEs ? "Cobertura en Alicante" : "Alicante coverage"}</h2>
        <p className="mt-3 max-w-3xl text-neutral-600">{isEs ? "La disponibilidad y el coste final se confirman según dirección, acceso, materiales y duración prevista." : "Availability and final cost are confirmed according to address, access, materials and expected duration."}</p>
        <div className="mt-6 flex flex-wrap gap-2">{ALICANTE_DISTRICTS.map((district) => <span key={district} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-semibold">{district}</span>)}</div>
      </section>

      <section className="bg-neutral-950 text-white"><div className="mx-auto max-w-5xl px-4 py-16 text-center"><h2 className="text-3xl font-black">{isEs ? `¿Necesitas ${serviceName.toLowerCase()} en Alicante?` : `Need ${serviceName.toLowerCase()} in Alicante?`}</h2><p className="mx-auto mt-4 max-w-2xl text-neutral-300">{isEs ? "Prepara tu solicitud en el calculador o envíanos fotos por WhatsApp." : "Build your request in the estimator or send us photos by WhatsApp."}</p><Link href={estimateHref} className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 font-extrabold text-black">{isEs ? "Empezar presupuesto" : "Start estimate"}<ArrowRight className="h-5 w-5" /></Link></div></section>
    </main>
  );
}

