"use client";

import { useState } from "react";
import Link from "next/link";
import { Bath, BookOpen, Building2, Camera, Cable, ChevronDown, CookingPot, Droplets, Hammer, KeyRound, Menu, MessageCircle, Network, PaintRoller, Radio, ShieldCheck, Siren, Sofa, Tv, Wind, Wrench, X, Zap, type LucideIcon } from "lucide-react";
import { marketBasePath, marketName } from "@/lib/cities";
import { marketWhatsAppHref } from "@/lib/marketLinks";
import { useCurrentMarket } from "@/lib/useCurrentMarket";
import { localizedPath } from "@/lib/technicalRoutes";
import { marketServiceHref } from "@/lib/marketLinks";
import { marketSupports, marketSupportsCategory } from "@/lib/markets";

type Props = { locale: "es" | "en" };

export default function MobileHeaderMenu({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const isEs = locale === "es";
  const { market } = useCurrentMarket(locale);
  const city = marketName(market);
  const base = marketBasePath(locale, market);
  const close = () => setOpen(false);
  const renovationBase = market === "valencia" ? localizedPath(locale, isEs ? "reformas-valencia" : "renovations-valencia") : `${base}/reformas`;
  const directLinks = [
    ...(marketSupports(market, "ac") ? [[marketServiceHref(locale, market, "aire-acondicionado"), isEs ? "Aire" : "AC", Wind] as const] : []),
    ...(marketSupportsCategory(market, "handyman") ? [[market === "valencia" ? localizedPath(locale, "handyman-valencia") : `${base}/handyman`, isEs ? "Manitas" : "Handyman", Wrench] as const] : []),
    ...(marketSupportsCategory(market, "tv-mounting") ? [[market === "valencia" ? localizedPath(locale, "montaje-tv-valencia") : `${base}/montaje-tv`, isEs ? "Montaje TV" : "TV Mounting", Tv] as const] : []),
    [localizedPath(locale, "guias"), isEs ? "Guías" : "Guides", BookOpen],
  ] as const;
  const serviceGroups = [
    { title: isEs ? "Más solicitados" : "Most requested", items: [
      { category: "handyman", href: market === "valencia" ? localizedPath(locale, "handyman-valencia") : `${base}/handyman`, label: isEs ? "Manitas" : "Handyman", description: isEs ? "Reparaciones e instalaciones" : "Repairs and installations", icon: Wrench },
      { category: "tv-mounting", href: market === "valencia" ? localizedPath(locale, "montaje-tv-valencia") : `${base}/montaje-tv`, label: isEs ? "Montaje TV" : "TV mounting", description: isEs ? "Soportes, nivelado y cables" : "Brackets, levelling and cables", icon: Tv },
      { category: "furniture", href: marketServiceHref(locale, market, "furniture"), label: isEs ? "Montaje de muebles" : "Furniture assembly", description: isEs ? "IKEA, armarios y estanterías" : "IKEA, wardrobes and shelving", icon: Sofa },
    ] },
    { title: isEs ? "Reparación e instalaciones" : "Repairs & installations", items: [
      { category: "electrical", href: marketServiceHref(locale, market, "electrical"), label: isEs ? "Electricidad" : "Electrical", description: isEs ? "Enchufes e iluminación" : "Sockets and lighting", icon: Zap },
      { category: "plumbing", href: marketServiceHref(locale, market, "plumbing"), label: isEs ? "Fontanería" : "Plumbing", description: isEs ? "Grifos y conexiones" : "Taps and connections", icon: Droplets },
      { category: "drywall", href: marketServiceHref(locale, market, "drywall"), label: isEs ? "Paredes y pladur" : "Walls & drywall", description: isEs ? "Reparaciones y acabados" : "Repairs and finishes", icon: PaintRoller },
    ] },
    { title: isEs ? "Montaje y vivienda" : "Assembly & home", items: [
      { category: "kitchen", href: marketServiceHref(locale, market, "kitchen"), label: isEs ? "Cocinas" : "Kitchens", description: isEs ? "Montaje y ajustes" : "Assembly and adjustments", icon: CookingPot },
      { category: "bathroom", href: marketServiceHref(locale, market, "bathroom"), label: isEs ? "Baños" : "Bathrooms", description: isEs ? "Accesorios y sellados" : "Accessories and sealing", icon: Bath },
      { category: "exterior", href: marketServiceHref(locale, market, "exterior"), label: isEs ? "Exterior" : "Exterior", description: isEs ? "Terrazas e instalaciones" : "Terraces and installations", icon: Hammer },
    ] },
  ];
  const technical = [
    ["cctv", "CCTV", isEs ? "Cámaras, grabación y acceso remoto" : "Cameras, recording and remote viewing", Camera],
    ["redes", isEs ? "WiFi y Redes" : "WiFi & Networks", isEs ? "WiFi, Ethernet y redes profesionales" : "WiFi, Ethernet and business networks", Network],
    ["fiber", isEs ? "Fibra Óptica" : "Fiber Optic", isEs ? "Instalación, fusión y diagnóstico" : "Installation, splicing and diagnosis", Cable],
    ["control-de-acceso", isEs ? "Control de Acceso" : "Access Control", isEs ? "Lectores, PIN y cerraduras" : "Readers, PIN and door locks", KeyRound],
    ["intercom", isEs ? "Videoporteros" : "Intercoms", isEs ? "Audio, vídeo y apertura de puerta" : "Audio, video and door release", Radio],
    ["alarmas", isEs ? "Alarmas Autónomas" : "Standalone Alarms", isEs ? "Sensores y sistemas autogestionados" : "Sensors and self-managed systems", Siren],
    ["seguridad-comercial", isEs ? "Sistemas para Negocios" : "Business Systems", isEs ? "Proyectos técnicos combinados" : "Combined technical projects", ShieldCheck],
  ] as const;
  const renovations: Array<{ label: string; description: string; slug: string; icon: LucideIcon }> = isEs
    ? [{ label: "Electricidad e iluminación", description: "Instalaciones, puntos y mejoras", slug: "electricidad", icon: Hammer }, { label: "Paredes y acabados", description: "Reparación, preparación y pintura", slug: "paredes-techos", icon: PaintRoller }, { label: "Cocinas y baños", description: "Montaje, ajustes y reformas", slug: "cocinas", icon: CookingPot }, { label: "Reformas integrales", description: "Proyectos completos de vivienda", slug: "reformas-integrales", icon: Building2 }]
    : [{ label: "Electrical & lighting", description: "Installations, points and upgrades", slug: "electrical", icon: Hammer }, { label: "Walls & finishes", description: "Repair, preparation and painting", slug: "walls-ceilings", icon: PaintRoller }, { label: "Kitchens & bathrooms", description: "Fitting, adjustments and renovation", slug: "kitchens", icon: CookingPot }, { label: "Full renovations", description: "Complete home projects", slug: "full-renovations", icon: Building2 }];

  return <>
    <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? (isEs ? "Cerrar menú" : "Close menu") : (isEs ? "Abrir menú" : "Open menu")} aria-expanded={open} className="relative z-[60] grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-yellow-400 bg-white text-black shadow-sm transition active:scale-95 xl:hidden">
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>

    {open ? <div className="fixed inset-x-0 bottom-0 top-[65px] z-50 xl:hidden">
      <button type="button" aria-label={isEs ? "Cerrar menú" : "Close menu"} onClick={close} className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
      <div className="relative mx-3 mt-2 max-h-[calc(100dvh-84px)] overflow-y-auto rounded-3xl border border-neutral-200 bg-white p-4 shadow-2xl">
        <div className="mb-4 flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[.18em] text-yellow-600">THEVULGO</p><p className="mt-1 text-xl font-black">{isEs ? "¿Qué necesitas?" : "What do you need?"}</p></div><span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-bold">{city}</span></div>

        <nav className="space-y-2" aria-label={isEs ? "Menú móvil" : "Mobile menu"}>
          <details className="group rounded-2xl border border-neutral-200">
            <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 px-4 py-3 font-black"><Wrench className="h-5 w-5 text-yellow-600" /><span>{isEs ? "Servicios" : "Services"}</span><ChevronDown className="ml-auto h-4 w-4 transition group-open:rotate-180" /></summary>
            <div className="border-t border-neutral-100 p-2">{serviceGroups.map((group) => <div key={group.title} className="mb-2 last:mb-0"><p className="px-3 pb-1 pt-2 text-[10px] font-black uppercase tracking-[.14em] text-neutral-400">{group.title}</p>{group.items.filter((item) => marketSupportsCategory(market, item.category)).map((item) => <MobileCategoryLink key={item.href} href={item.href} label={item.label} description={item.description} Icon={item.icon} close={close} />)}</div>)}<Link href={marketServiceHref(locale, market)} onClick={close} className="mt-1 flex min-h-12 items-center rounded-xl bg-yellow-400 px-4 text-sm font-black text-black">{isEs ? "Ver todos los servicios" : "View all services"}</Link></div>
          </details>

          {marketSupports(market, "technical") ? <details className="group rounded-2xl border border-yellow-200 bg-yellow-50/60">
            <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 px-4 py-3 font-black"><ShieldCheck className="h-5 w-5 text-yellow-600" /><span>{isEs ? "Seguridad y Redes" : "Security & Networks"}</span><ChevronDown className="ml-auto h-4 w-4 transition group-open:rotate-180" /></summary>
            <div className="border-t border-yellow-100 p-2">{technical.filter(([slug]) => marketSupportsCategory(market, slug === "redes" ? "networking" : slug === "control-de-acceso" ? "access-control" : slug === "seguridad-comercial" ? "commercial" : slug)).map(([slug, label, description, Icon]) => <MobileCategoryLink key={slug} href={marketServiceHref(locale, market, slug)} label={label} description={description} Icon={Icon} close={close} />)}<Link href={marketServiceHref(locale, market, "security-networks")} onClick={close} className="mt-1 flex min-h-12 items-center rounded-xl bg-black px-4 text-sm font-black text-white">{isEs ? "Ver todo Seguridad y Redes" : "View all Security & Networks"}</Link></div>
          </details> : null}

          {marketSupports(market, "renovations") ? <details className="group rounded-2xl border border-neutral-200">
            <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 px-4 py-3 font-black"><Hammer className="h-5 w-5 text-yellow-600" /><span>{isEs ? "Reformas" : "Renovations"}</span><ChevronDown className="ml-auto h-4 w-4 transition group-open:rotate-180" /></summary>
            <div className="border-t border-neutral-100 p-2">{renovations.map(({ label, description, slug, icon }) => <MobileCategoryLink key={slug} href={`${renovationBase}/${slug}`} label={label} description={description} Icon={icon} close={close} />)}<Link href={renovationBase} onClick={close} className="mt-1 flex min-h-12 items-center rounded-xl bg-yellow-400 px-4 text-sm font-black text-black">{isEs ? "Ver todas las reformas" : "View all renovations"}</Link></div>
          </details> : null}

          <div className="grid grid-cols-2 gap-2">{directLinks.map(([href, label, Icon]) => <MobileLink key={href} href={href} label={label} Icon={Icon} close={close} compact />)}</div>
        </nav>

        <a href={marketWhatsAppHref({ locale, market })} target="_blank" rel="noopener noreferrer" onClick={close} className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-neutral-950 px-4 py-3 font-black text-white"><MessageCircle className="h-5 w-5 text-yellow-400" />{isEs ? "Escribir por WhatsApp" : "Message on WhatsApp"}</a>
      </div>
    </div> : null}
  </>;
}

function MobileLink({ href, label, Icon, close, compact = false }: { href: string; label: string; Icon: typeof Wrench; close: () => void; compact?: boolean }) {
  return <Link href={href} onClick={close} className={`flex min-h-12 items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 font-black text-black hover:border-yellow-300 hover:bg-yellow-50 ${compact ? "text-sm" : ""}`}><Icon className="h-4 w-4 shrink-0 text-yellow-600" />{label}</Link>;
}

function MobileCategoryLink({ href, label, description, Icon, close }: { href: string; label: string; description: string; Icon: typeof Wrench; close: () => void }) {
  return <Link href={href} onClick={close} className="flex min-h-14 items-center gap-3 rounded-xl px-3 py-2.5 text-neutral-700 hover:bg-white">
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-neutral-950 text-yellow-400"><Icon className="h-4 w-4" /></span>
    <span className="min-w-0"><span className="block text-sm font-black text-black">{label}</span><span className="mt-0.5 block text-xs leading-4 text-neutral-500">{description}</span></span>
  </Link>;
}
