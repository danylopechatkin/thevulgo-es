import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Cable,
  Camera,
  CheckCircle2,
  CircleDollarSign,
  KeyRound,
  MessageCircle,
  Network,
  Radio,
  ShieldCheck,
  Siren,
  Wrench,
} from "lucide-react";
import {
  TECHNICAL_CATEGORY_LABELS,
  TECHNICAL_LEAVES,
  type TechnicalLeaf,
  technicalLeafPath,
} from "@/lib/securityNetworkCatalog";
import { localizedPath, localizedUrl } from "@/lib/technicalRoutes";
import { SITE_ORIGIN } from "@/lib/seo";
import { technicalWhatsAppHref } from "@/lib/technicalWhatsApp";

const icons = {
  networking: Network,
  cctv: Camera,
  fiber: Cable,
  "access-control": KeyRound,
  intercom: Radio,
  alarms: Siren,
  commercial: ShieldCheck,
};

export default function TechnicalServiceLanding({
  service,
  locale,
}: {
  service: TechnicalLeaf;
  locale: string;
}) {
  const language = locale === "es" ? "es" : "en";
  const isEs = language === "es";
  const Icon = icons[service.category];
  const categoryLabel = TECHNICAL_CATEGORY_LABELS[service.category][language];
  const path = technicalLeafPath(service);
  const estimateHref = `${localizedPath(locale, "estimate")}?category=${service.category}&service=${service.id}`;
  const whatsappHref = technicalWhatsAppHref(service.category, locale, `${isEs ? "Servicio" : "Service"}: ${service.h1[language]}`);
  const related = service.related
    .map((id) => TECHNICAL_LEAVES.find((item) => item.id === id))
    .filter((item): item is TechnicalLeaf => Boolean(item));
  const price = service.labourPrice
    ? isEs
      ? `Desde ${service.labourPrice} € de mano de obra`
      : `Labour from €${service.labourPrice}`
    : isEs
      ? "Presupuesto según alcance"
      : "Quote based on project scope";

  const faq = [
    {
      q: isEs ? "¿Podéis trabajar con mi sistema actual?" : "Can you work with my existing system?",
      a: isEs
        ? "Sí, primero revisamos compatibilidad, estado del cableado y configuración. Si una parte puede conservarse, no proponemos sustituirla sin motivo."
        : "Yes. We first check compatibility, cabling and configuration. If part of the system can remain, we do not recommend replacing it without a reason.",
    },
    {
      q: isEs ? "¿El equipo está incluido?" : "Is equipment included?",
      a: isEs
        ? "La mano de obra y los equipos se separan claramente. El material se confirma después de definir compatibilidad y requisitos."
        : "Labour and equipment are shown separately. Hardware is confirmed after compatibility and requirements are understood.",
    },
    {
      q: isEs ? "¿Puedo enviar fotos antes?" : "Can I send photos first?",
      a: isEs
        ? "Sí. Las fotos del equipo, recorridos, rack, puerta o zona de instalación ayudan a preparar una estimación más útil."
        : "Yes. Photos of equipment, routes, rack, door or installation area help us prepare a more useful estimate.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.h1[language],
      description: service.description[language],
      url: localizedUrl(locale, path),
      areaServed: { "@type": "City", name: "Valencia" },
      provider: { "@id": "https://www.thevulgo.es/#localbusiness" },
      serviceType: service.intent,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        [isEs ? "Inicio" : "Home", localizedPath(locale)],
        [isEs ? "Servicios" : "Services", localizedPath(locale, "services")],
        [isEs ? "Seguridad y Redes" : "Security & Networks", localizedPath(locale, "services/security-networks")],
        [categoryLabel, localizedPath(locale, service.parentPath)],
        [service.h1[language], localizedPath(locale, path)],
      ].map(([name, item], index) => ({ "@type": "ListItem", position: index + 1, name, item: `${SITE_ORIGIN}${item}` })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
    },
  ];

  return (
    <main className="bg-white text-neutral-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
            <Link href={localizedPath(locale, "services/security-networks")} className="hover:text-yellow-400">{isEs ? "Seguridad y Redes" : "Security & Networks"}</Link>
            <span>/</span>
            <Link href={localizedPath(locale, service.parentPath)} className="hover:text-yellow-400">{categoryLabel}</Link>
            <span>/</span><span className="text-white">{service.h1[language]}</span>
          </nav>
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 md:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-yellow-400"><Icon className="h-4 w-4" />{categoryLabel}</div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">{service.h1[language]}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">{service.intro[language]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={estimateHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-black text-black">{service.priceMode === "surveyRequired" ? (isEs ? "Solicitar revisión del proyecto" : "Request project review") : (isEs ? "Calcular presupuesto" : "Get project estimate")}<ArrowRight className="h-5 w-5" /></Link>
              <a href={whatsappHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-neutral-600 bg-neutral-900 px-6 py-4 font-black text-white"><MessageCircle className="h-5 w-5 text-yellow-400" />{isEs ? "Enviar fotos por WhatsApp" : "Send photos on WhatsApp"}</a>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-700 bg-neutral-900 p-7 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[.14em] text-yellow-400">{isEs ? "Alcance técnico" : "Technical scope"}</p>
            <div className="mt-5 space-y-4">{service.capabilities.map((item) => <div key={item.en} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" /><span className="leading-6 text-neutral-200">{item[language]}</span></div>)}</div>
            <div className="mt-7 border-t border-neutral-700 pt-5"><p className="text-sm text-neutral-400">{isEs ? "Precio" : "Pricing"}</p><p className="mt-1 text-xl font-black">{price}</p><p className="mt-2 text-xs leading-5 text-neutral-400">{isEs ? "Equipos y materiales se cotizan por separado cuando sean necesarios." : "Equipment and materials are quoted separately when required."}</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {service.problems.map((item) => <article key={item.en} className="rounded-2xl border border-neutral-200 p-6 shadow-sm"><Wrench className="h-7 w-7 text-yellow-500" /><h2 className="mt-5 text-xl font-black">{item[language]}</h2><p className="mt-3 text-sm leading-6 text-neutral-600">{isEs ? "Revisamos el sistema, explicamos las opciones y confirmamos el alcance antes de realizar trabajos adicionales." : "We inspect the system, explain the options and confirm scope before additional work is carried out."}</p></article>)}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div><p className="text-sm font-black uppercase tracking-[.16em] text-yellow-600">{isEs ? "Proceso" : "Process"}</p><h2 className="mt-3 text-3xl font-black">{isEs ? "De la revisión a un sistema comprobado" : "From review to a tested system"}</h2><div className="mt-7 space-y-4">{[
              [isEs ? "1. Alcance" : "1. Scope", isEs ? "Nos cuentas el objetivo, cantidades y sistema actual." : "Tell us the objective, quantities and current system."],
              [isEs ? "2. Revisión" : "2. Review", isEs ? "Revisamos fotos, compatibilidad, acceso y recorridos." : "We review photos, compatibility, access and routes."],
              [isEs ? "3. Presupuesto" : "3. Quote", isEs ? "Separamos mano de obra, equipos y materiales." : "Labour, equipment and materials are separated."],
              [isEs ? "4. Instalación" : "4. Installation", isEs ? "Instalamos, configuramos y probamos el funcionamiento." : "We install, configure and test operation."],
            ].map(([title, text]) => <div key={title} className="rounded-2xl bg-white p-5 shadow-sm"><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p></div>)}</div></div>
            <div className="rounded-3xl bg-neutral-950 p-7 text-white"><CircleDollarSign className="h-9 w-9 text-yellow-400" /><h2 className="mt-5 text-3xl font-black">{service.priceMode === "surveyRequired" ? (isEs ? "Requiere revisión del proyecto" : "Project review required") : (isEs ? "Precio claro antes del trabajo" : "Clear price before work")}</h2><p className="mt-4 leading-7 text-neutral-300">{isEs ? "Los trabajos sencillos pueden tener precio fijo de mano de obra. Para cableados, varias puertas, sistemas completos o compatibilidad incierta, preparamos un alcance y presupuesto personalizado." : "Simple work can have a fixed labour price. Cabling, multiple doors, complete systems or uncertain compatibility receive a scoped project quote."}</p><div className="mt-6 rounded-2xl border border-neutral-700 p-5"><p className="font-black">{isEs ? "Visita técnica / diagnóstico — 49 €" : "Technical visit / system diagnosis — €49"}</p><p className="mt-2 text-sm text-neutral-400">{isEs ? "Cuando es la forma correcta de identificar el fallo o definir el proyecto." : "When an on-site review is the right way to identify the fault or define the project."}</p></div></div>
          </div>
        </div>
      </section>

      {service.category === "cctv" ? <section className="mx-auto max-w-7xl px-5 py-12 md:px-8"><div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-6"><h2 className="font-black">{isEs ? "¿Vas a instalar videovigilancia?" : "Planning a CCTV installation?"}</h2><p className="mt-2 text-sm leading-6 text-neutral-700">{isEs ? "Según el uso y la ubicación de las cámaras pueden aplicarse requisitos de protección de datos y señalización. En negocios o espacios abiertos al público, el cliente debe comprobar el cumplimiento aplicable." : "Depending on camera use and location, data-protection and signage requirements may apply. Businesses and public-facing premises should ensure their use complies with applicable requirements."}</p></div></section> : null}
      {service.category === "alarms" ? <section className="mx-auto max-w-7xl px-5 py-12 md:px-8"><div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm leading-6 text-neutral-700">{isEs ? "THEVULGO instala y mantiene sistemas electrónicos autónomos. No se ofrece central receptora de alarmas, vigilancia privada ni aviso policial como servicio propio." : "THEVULGO installs and maintains standalone electronic systems. We do not provide alarm receiving centre, private-security monitoring or police-response services."}</div></section> : null}

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8"><div className="grid gap-10 lg:grid-cols-[1fr_.9fr]"><div><h2 className="text-3xl font-black">FAQ</h2><div className="mt-6 space-y-4">{faq.map((item) => <details key={item.q} className="rounded-2xl border border-neutral-200 p-5"><summary className="cursor-pointer font-black">{item.q}</summary><p className="mt-3 leading-7 text-neutral-600">{item.a}</p></details>)}</div></div><div><h2 className="text-3xl font-black">{isEs ? "Servicios relacionados" : "Related technical services"}</h2><div className="mt-6 grid gap-3">{related.map((item) => <Link key={item.id} href={localizedPath(locale, technicalLeafPath(item))} className="group flex items-center justify-between rounded-2xl border border-neutral-200 p-5 font-black transition hover:border-yellow-400 hover:bg-yellow-50"><span>{item.h1[language]}</span><ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></Link>)}</div></div></div></section>

      <section className="bg-yellow-400"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 md:px-8 lg:flex-row lg:items-center lg:justify-between"><div><div className="flex items-center gap-2 text-sm font-black uppercase tracking-[.14em]"><BadgeCheck className="h-5 w-5" />Valencia & nearby</div><h2 className="mt-3 text-3xl font-black">{isEs ? "Cuéntanos el proyecto y revisamos el siguiente paso" : "Tell us the project and we’ll review the next step"}</h2></div><div className="flex flex-col gap-3 sm:flex-row"><Link href={estimateHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-black text-white">{isEs ? "Calcular presupuesto" : "Get project estimate"}<ArrowRight className="h-5 w-5" /></Link><a href={whatsappHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-black bg-white px-6 py-4 font-black"><MessageCircle className="h-5 w-5" />WhatsApp</a></div></div></section>
    </main>
  );
}
