import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, MessageCircle, Network, ShieldCheck } from "lucide-react";
import { localizedPath, localizedUrl } from "@/lib/technicalRoutes";
import { technicalWhatsAppHref } from "@/lib/technicalWhatsApp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const es = locale === "es";
  const path = "services/seguridad-comercial";
  const canonical = localizedUrl(locale, path);
  return {
    title: es ? "Seguridad y Redes para Negocios en Valencia | THEVULGO" : "Business Security & Network Infrastructure Valencia | THEVULGO",
    description: es ? "CCTV, redes, WiFi, fibra, control de acceso, videoporteros, alarmas autónomas y cableado para negocios en Valencia." : "CCTV, networks, WiFi, fiber, access control, intercom, standalone alarms and cabling for Valencia businesses.",
    alternates: { canonical, languages: { en: localizedUrl("en", path), es: localizedUrl("es", path), "x-default": localizedUrl("en", path) } },
    openGraph: { title: es ? "Infraestructura técnica para negocios" : "Business Security & Network Infrastructure", description: es ? "Un alcance coordinado para CCTV, redes, acceso y conectividad." : "One coordinated scope for CCTV, networks, access and connectivity.", url: canonical, type: "website" },
  };
}

const businesses = [
  ["Office", "Oficina", ["Structured cabling", "WiFi APs", "VLAN", "CCTV", "Access control", "Rack"]],
  ["Shop / Retail", "Tienda / Retail", ["CCTV", "POS network", "Staff WiFi", "Guest WiFi", "Stock-room access"]],
  ["Restaurant / Bar", "Restaurante / Bar", ["CCTV", "POS", "Guest WiFi", "Back-office network", "Storage access"]],
  ["Gym", "Gimnasio", ["Member access", "CCTV", "WiFi", "Reception network", "Time attendance"]],
  ["Clinic", "Clínica", ["Staff network", "Guest WiFi", "Access", "Intercom", "CCTV planning"]],
  ["Coworking", "Coworking", ["Managed WiFi", "VLAN", "Door access", "CCTV", "Meeting-room network"]],
  ["Warehouse", "Almacén", ["Wide-area WiFi", "CCTV", "Fiber backbone", "Access doors", "Rack"]],
  ["Hotel", "Hotel", ["Guest WiFi", "Back-office network", "CCTV", "Access", "Fiber links"]],
  ["Salon", "Salón", ["WiFi", "POS network", "CCTV", "Staff access", "Intercom"]],
] as const;

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const es = locale === "es";
  const estimate = `${localizedPath(locale, "estimate")}?category=commercial&service=commercial-project-review`;
  return <main className="bg-white text-neutral-950">
    <section className="bg-neutral-950 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.15fr_.85fr] lg:items-center"><div><div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/50 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-yellow-400"><ShieldCheck className="h-4 w-4" />THEVULGO SECURITY & NETWORKS</div><h1 className="mt-7 text-4xl font-black leading-[1.04] sm:text-6xl">{es ? "Seguridad y Redes para Negocios en Valencia" : "Business Security & Network Infrastructure"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">{es ? "CCTV, red, WiFi, fibra, cableado, control de acceso, videoporteros y alarmas autónomas bajo un único alcance técnico." : "CCTV, networks, WiFi, fiber, cabling, access control, intercom and standalone alarms under one coordinated technical scope."}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={estimate} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-black text-black">{es ? "Solicitar revisión del proyecto" : "Request project review"}<ArrowRight className="h-5 w-5" /></Link><a href={technicalWhatsAppHref("commercial", locale)} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-neutral-600 px-6 py-4 font-black"><MessageCircle className="h-5 w-5 text-yellow-400" />WhatsApp</a></div></div><div className="rounded-3xl border border-neutral-700 bg-neutral-900 p-7"><Network className="h-9 w-9 text-yellow-400" /><h2 className="mt-5 text-2xl font-black">{es ? "Un proyecto, sistemas coordinados" : "One project, coordinated systems"}</h2><div className="mt-5 space-y-3">{["CCTV + PoE + NVR", "WiFi + LAN + VLAN", "Access + intercom + locks", "Cat6/Cat6A + rack + fiber", es ? "Diagnóstico y mejoras existentes" : "Existing-system diagnosis and upgrades"].map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-yellow-400" />{item}</div>)}</div></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8"><p className="text-sm font-black uppercase tracking-[.16em] text-yellow-600">{es ? "Por tipo de negocio" : "By business type"}</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">{es ? "Infraestructura adaptada al uso real" : "Infrastructure designed for real operations"}</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{businesses.map(([en, esTitle, systems]) => <article key={en} className="flex min-h-72 flex-col rounded-2xl border border-neutral-200 p-6 shadow-sm"><Building2 className="h-7 w-7 text-yellow-500" /><h3 className="mt-5 text-2xl font-black">{es ? esTitle : en}</h3><ul className="mt-5 space-y-2">{systems.map((item) => <li key={item} className="flex gap-2 text-sm text-neutral-600"><CheckCircle2 className="h-4 w-4 shrink-0 text-yellow-500" />{item}</li>)}</ul><Link href={estimate} className="mt-auto inline-flex items-center gap-2 pt-6 font-black underline decoration-yellow-400 underline-offset-4">{es ? "Configurar alcance" : "Configure scope"}<ArrowRight className="h-4 w-4" /></Link></article>)}</div></section>
    <section className="border-y border-neutral-200 bg-neutral-50"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 lg:grid-cols-3">{[[es ? "1. Revisión" : "1. Review", es ? "Objetivos, cantidades, equipo existente y recorridos." : "Objectives, quantities, existing equipment and routes."], [es ? "2. Alcance" : "2. Scope", es ? "Mano de obra, equipos y materiales claramente separados." : "Labour, equipment and materials clearly separated."], [es ? "3. Ejecución" : "3. Delivery", es ? "Instalación, configuración, pruebas y entrega comprensible." : "Installation, configuration, testing and a clear handover."]].map(([title, text]) => <div key={title} className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-xl font-black">{title}</h2><p className="mt-3 leading-7 text-neutral-600">{text}</p></div>)}</div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8"><div className="rounded-3xl bg-yellow-400 p-8 lg:flex lg:items-center lg:justify-between lg:gap-10"><div><h2 className="text-3xl font-black">{es ? "No fingimos un precio exacto sin conocer el proyecto" : "We do not invent an exact price before understanding the project"}</h2><p className="mt-3 max-w-3xl leading-7">{es ? "Los trabajos sencillos pueden tener precio fijo. Los sistemas combinados requieren revisión de compatibilidad, cantidades y recorridos." : "Simple work can have a fixed price. Combined systems require review of compatibility, quantities and routes."}</p></div><Link href={estimate} className="mt-6 inline-flex min-h-14 shrink-0 items-center justify-center rounded-xl bg-black px-6 py-4 font-black text-white lg:mt-0">{es ? "Enviar proyecto" : "Send project brief"}</Link></div></section>
  </main>;
}
