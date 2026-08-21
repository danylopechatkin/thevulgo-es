import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Wind } from "lucide-react";
import WhatsAppLink from "@/app/components/WhatsAppLink";
import { AC_SEO_PAGES, getAcSeoPage } from "@/lib/acSeoPages";
import { getAcSeoContent } from "@/lib/acSeoContent";
import { SITE_ORIGIN } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; acPath: string[] }> };
const baseUrl = SITE_ORIGIN;

export function generateStaticParams() {
  return ["es", "en"].flatMap((locale) => AC_SEO_PAGES.map((page) => ({ locale, acPath: page.path.split("/") })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, acPath } = await params;
  const page = getAcSeoPage(acPath.join("/"));
  if (!page) return {};
  const isEs = locale === "es";
  const title = `${isEs ? page.titleEs : page.titleEn} | THEVULGO`;
  const description = isEs ? page.descriptionEs : page.descriptionEn;
  const path = `/${locale}/${page.path}`;
  return { title, description, alternates: { canonical: `${baseUrl}${path}`, languages: { es: `${baseUrl}/es/${page.path}`, en: `${baseUrl}/en/${page.path}` } }, openGraph: { title, description, url: `${baseUrl}${path}`, type: "website", siteName: "THEVULGO" }, robots: { index: true, follow: true } };
}

export default async function AcSeoLanding({ params }: Props) {
  const { locale, acPath } = await params;
  const page = getAcSeoPage(acPath.join("/"));
  if (!page) notFound();
  const isEs = locale === "es";
  const title = isEs ? page.titleEs : page.titleEn;
  const description = isEs ? page.descriptionEs : page.descriptionEn;
  const estimateHref = `/${locale}/estimate?category=air-conditioning`;
  const cluster = AC_SEO_PAGES.filter((item) => item.category === page.category && item.path !== page.path).slice(0, 6);
  const bullets = isEs ? ["Atención en Valencia y alrededores", "Diagnóstico y alcance confirmados antes del trabajo", "Trabajo limpio y comunicación directa"] : ["Service in Valencia and surrounding areas", "Diagnosis and scope confirmed before work", "Clean work and direct communication"];
  const isBrand = page.category === "brand";
  const content = getAcSeoContent(page, isEs ? "es" : "en");

  return <main className="min-h-screen bg-white text-black"><section className="relative overflow-hidden px-4 py-16 sm:py-24"><div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-50 via-white to-white" /><div className="absolute -right-24 -top-20 -z-10 h-96 w-96 rounded-full bg-yellow-200/60 blur-3xl" /><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center"><div><div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-bold shadow-sm"><Wind className="h-4 w-4 text-yellow-600" />{isEs ? "Aire acondicionado · Valencia" : "Air conditioning · Valencia"}</div><h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{description}</p>{isBrand && <p className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm font-semibold text-neutral-700">{isEs ? "THEVULGO es un servicio técnico independiente y no está afiliado oficialmente a la marca." : "THEVULGO is an independent service provider and is not officially affiliated with the brand."}</p>}<div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={estimateHref} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-black shadow-lg transition hover:scale-[1.02]">{isEs ? "Pedir presupuesto" : "Get an estimate"}<ArrowRight className="h-5 w-5" /></Link><WhatsAppLink source={`ac-seo-${page.path}`} service={title} className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-4 font-black">WhatsApp</WhatsAppLink></div></div><aside className="rounded-[2rem] border-2 border-yellow-400 bg-neutral-950 p-7 text-white shadow-xl"><Clock3 className="h-7 w-7 text-yellow-400" /><h2 className="mt-5 text-2xl font-black">{isEs ? "Una visita clara, sin sorpresas" : "A clear visit, no surprises"}</h2><ul className="mt-6 space-y-4">{bullets.map((bullet) => <li key={bullet} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-400" /><span>{bullet}</span></li>)}</ul><div className="mt-7 border-t border-white/15 pt-5 text-sm text-neutral-300"><ShieldCheck className="mr-2 inline h-4 w-4 text-yellow-400" />{isEs ? "Presupuesto antes de empezar" : "Quote before work begins"}</div></aside></div></section><section className="px-4 py-16"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-black">{content.isGuide ? (isEs ? "Guía práctica" : "Practical guide") : (isEs ? "Qué revisamos en este servicio" : "What we review in this service")}</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-neutral-600">{content.intro}</p><div className="mt-8 grid gap-5 md:grid-cols-3">{content.work.map((item, index) => <article key={item} className="rounded-2xl border border-neutral-200 p-6 shadow-sm"><p className="text-xs font-black text-yellow-600">0{index + 1}</p><p className="mt-3 font-bold leading-7">{item}</p></article>)}</div></div></section><section className="border-y border-neutral-100 bg-neutral-50 px-4 py-16"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2"><div><h2 className="text-3xl font-black">{isEs ? "Cómo preparar la visita" : "How to prepare the visit"}</h2><ul className="mt-6 space-y-4">{content.prep.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-600" />{item}</li>)}</ul></div><div><h2 className="text-3xl font-black">{isEs ? "Qué puede afectar al alcance" : "What can affect the scope"}</h2><ul className="mt-6 space-y-4">{content.factors.map((item) => <li key={item} className="flex gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-yellow-600" />{item}</li>)}</ul></div></div></section><section className="px-4 py-16"><div className="mx-auto max-w-5xl"><h2 className="text-3xl font-black">{isEs ? "Preguntas frecuentes" : "Frequently asked questions"}</h2><div className="mt-7 space-y-4">{content.faqs.map((faq) => <article key={faq.q} className="rounded-2xl border border-neutral-200 p-6 shadow-sm"><h3 className="text-lg font-black">{faq.q}</h3><p className="mt-3 leading-7 text-neutral-600">{faq.a}</p></article>)}</div></div></section>{cluster.length > 0 && <section className="px-4 py-16"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-black">{isEs ? "Servicios relacionados" : "Related services"}</h2><div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{cluster.map((item) => <Link key={item.path} href={`/${locale}/${item.path}`} className="rounded-2xl border border-yellow-300 bg-white p-5 font-bold shadow-sm transition hover:-translate-y-0.5 hover:border-yellow-400">{isEs ? item.titleEs : item.titleEn}<ArrowRight className="mt-4 h-4 w-4 text-yellow-600" /></Link>)}</div></div></section>}<section className="bg-yellow-50 px-4 py-16"><div className="mx-auto max-w-4xl rounded-3xl border border-yellow-400 bg-white p-8 text-center shadow-lg"><h2 className="text-3xl font-black">{isEs ? "¿Quieres que revisemos tu caso?" : "Want us to review your case?"}</h2><p className="mt-3 text-neutral-600">{isEs ? "Solicita presupuesto o escríbenos por WhatsApp con fotos y una breve descripción." : "Request an estimate or message us on WhatsApp with photos and a short description."}</p><WhatsAppLink source={`ac-seo-footer-${page.path}`} service={title} className="mt-6 inline-flex rounded-2xl bg-yellow-400 px-7 py-4 font-black">WhatsApp</WhatsAppLink></div></section></main>;
}
