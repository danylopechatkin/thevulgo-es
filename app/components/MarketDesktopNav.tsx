"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Bath, Building2, Cable, Camera, ChevronDown, CookingPot, Droplets, Fence, Hammer, KeyRound, Lightbulb, Network, PaintRoller, PanelsTopLeft, Radio, ShieldCheck, Siren, Sofa, Trees, Tv, Wind, Wrench, Zap, type LucideIcon } from "lucide-react";
import { marketBasePath, marketName } from "@/lib/cities";
import { useCurrentMarket } from "@/lib/useCurrentMarket";
import { localizedPath } from "@/lib/technicalRoutes";
import { marketEstimateHref, marketServiceHref } from "@/lib/marketLinks";
import { marketSupports } from "@/lib/markets";

type NavLabels = { services: string; tips: string; faq: string; estimate: string };
type MegaMenuItem = { id: string; href: string; title: string; description: string; icon: LucideIcon };
const navItem = "inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-2 text-[14px] font-bold text-neutral-800 transition hover:bg-neutral-100 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 2xl:px-3 2xl:text-[15px]";
const activeItem = "bg-yellow-50 text-black ring-1 ring-yellow-200";

export default function MarketDesktopNav({ locale, labels }: { locale: string; labels: NavLabels }) {
  const pathname = usePathname();
  const isEs = locale === "es";
  const { market } = useCurrentMarket(locale);
  const base = marketBasePath(locale, market);
  const renovationBase = market === "valencia" ? localizedPath(locale, isEs ? "reformas-valencia" : "renovations-valencia") : `${base}/reformas`;
  const acHref = marketServiceHref(locale, market, "aire-acondicionado");
  const guidesHref = localizedPath(locale, "guias");
  const handymanHref = market === "valencia" ? localizedPath(locale, "handyman-valencia") : `${base}/handyman`;
  const tvHref = market === "valencia" ? localizedPath(locale, "montaje-tv-valencia") : `${base}/montaje-tv`;
  const servicesHref = marketServiceHref(locale, market);
  const technicalHref = marketServiceHref(locale, market, "security-networks");
  const homeServicePath = (path: string) => market === "valencia" ? localizedPath(locale, path) : `${base}/${path}`;
  const isActive = (...parts: string[]) => parts.some((part) => pathname === part || pathname.startsWith(`${part}/`));
  const technicalActive = ["security-networks", "cctv", "redes", "fiber", "control-de-acceso", "intercom", "alarmas", "seguridad-comercial"].some((segment) => pathname.includes(`/services/${segment}`));

  const services = [
    { id: "handyman", title: isEs ? "Manitas y reparaciones" : "Handyman & repairs", description: isEs ? "Pequeñas reparaciones, instalación y mantenimiento" : "Small repairs, installation and maintenance", href: handymanHref, icon: Wrench },
    { id: "tv", title: isEs ? "Montaje de TV" : "TV mounting", description: isEs ? "Instalación, soportes y recolocación" : "Installation, brackets and repositioning", href: tvHref, icon: Tv },
    { id: "furniture", title: isEs ? "Montaje de muebles" : "Furniture assembly", description: isEs ? "IKEA, armarios, estanterías y mobiliario" : "IKEA, wardrobes, shelving and furniture", href: homeServicePath("services/furniture"), icon: Sofa },
    { id: "kitchen", title: isEs ? "Cocinas" : "Kitchens", description: isEs ? "Montaje, ajustes y pequeñas reparaciones" : "Assembly, adjustments and small repairs", href: homeServicePath("services/kitchen"), icon: CookingPot },
    { id: "electrical", title: isEs ? "Electricidad" : "Electrical", description: isEs ? "Enchufes, interruptores, iluminación y montaje" : "Sockets, switches, lighting and installation", href: homeServicePath("services/electrical"), icon: Zap },
    { id: "plumbing", title: isEs ? "Fontanería" : "Plumbing", description: isEs ? "Grifos, sanitarios, conexiones y reparaciones" : "Taps, sanitary fittings, connections and repairs", href: homeServicePath("services/plumbing"), icon: Droplets },
    { id: "drywall", title: isEs ? "Paredes y pladur" : "Walls & drywall", description: isEs ? "Reparaciones, agujeros, pladur y acabados" : "Repairs, holes, drywall and finishes", href: homeServicePath("services/drywall"), icon: PaintRoller },
    { id: "bathroom", title: isEs ? "Baños" : "Bathrooms", description: isEs ? "Sanitarios, accesorios, silicona y montaje" : "Sanitary fittings, accessories, silicone and assembly", href: homeServicePath("services/bathroom"), icon: Bath },
    { id: "exterior", title: isEs ? "Exterior" : "Exterior", description: isEs ? "Terrazas, exterior y pequeñas instalaciones" : "Terraces, outdoor areas and small installations", href: homeServicePath("services/exterior"), icon: Fence },
  ] satisfies MegaMenuItem[];
  const technical = [
    { id: "cctv", href: marketServiceHref(locale, market, "cctv"), title: "CCTV", description: isEs ? "Cámaras, NVR/DVR y acceso remoto" : "Cameras, NVR/DVR and remote viewing", icon: Camera },
    { id: "networking", href: marketServiceHref(locale, market, "redes"), title: isEs ? "WiFi y Redes" : "WiFi & Networks", description: isEs ? "WiFi, Ethernet, RJ45, UniFi y redes profesionales" : "WiFi, Ethernet, RJ45, UniFi and business networks", icon: Network },
    { id: "fiber", href: marketServiceHref(locale, market, "fiber"), title: isEs ? "Fibra Óptica" : "Fiber Optic", description: isEs ? "Instalación, fusión, terminación y diagnóstico" : "Installation, splicing, termination and diagnosis", icon: Cable },
    { id: "access", href: marketServiceHref(locale, market, "control-de-acceso"), title: isEs ? "Control de Acceso" : "Access Control", description: isEs ? "RFID, PIN, lectores y cerraduras" : "RFID, PIN, readers and door locks", icon: KeyRound },
    { id: "intercom", href: marketServiceHref(locale, market, "intercom"), title: isEs ? "Videoporteros" : "Intercoms", description: isEs ? "Audio, vídeo, IP y apertura de puerta" : "Audio, video, IP and door release", icon: Radio },
    { id: "alarms", href: marketServiceHref(locale, market, "alarmas"), title: isEs ? "Alarmas Autónomas" : "Standalone Alarms", description: isEs ? "Sensores, sirenas y sistemas autogestionados" : "Sensors, sirens and self-managed systems", icon: Siren },
    { id: "commercial", href: marketServiceHref(locale, market, "seguridad-comercial"), title: isEs ? "Sistemas para Negocios" : "Business Systems", description: isEs ? "Proyectos combinados para locales y oficinas" : "Combined projects for premises and offices", icon: ShieldCheck },
  ] satisfies MegaMenuItem[];
  const renovations = [
    { slug: isEs ? "electricidad" : "electrical", title: isEs ? "Electricidad" : "Electrical", description: isEs ? "Instalaciones, puntos eléctricos y mejoras" : "Installations, electrical points and upgrades", icon: Zap },
    { slug: isEs ? "iluminacion" : "lighting", title: isEs ? "Iluminación" : "Lighting", description: isEs ? "Lámparas, focos y soluciones de iluminación" : "Lights, spotlights and lighting solutions", icon: Lightbulb },
    { slug: isEs ? "fontaneria" : "plumbing", title: isEs ? "Fontanería" : "Plumbing", description: isEs ? "Instalaciones y modificaciones de fontanería" : "Plumbing installation and alterations", icon: Droplets },
    { slug: isEs ? "paredes-techos" : "walls-ceilings", title: isEs ? "Paredes y techos" : "Walls & ceilings", description: isEs ? "Reparación, preparación y acabado" : "Repair, preparation and finishing", icon: PaintRoller },
    { slug: isEs ? "pladur" : "drywall-plasterboard", title: isEs ? "Pladur" : "Drywall", description: isEs ? "Tabiques, techos, reparaciones y estructuras" : "Partitions, ceilings, repairs and structures", icon: PanelsTopLeft },
    { slug: isEs ? "pintura" : "painting", title: isEs ? "Pintura" : "Painting", description: isEs ? "Pintura interior y acabados" : "Interior painting and finishes", icon: PaintRoller },
    { slug: isEs ? "suelos-azulejos" : "floors-tiles", title: isEs ? "Suelos y azulejos" : "Floors & tiles", description: isEs ? "Reparación, colocación y acabados" : "Repair, installation and finishes", icon: PanelsTopLeft },
    { slug: isEs ? "cocinas" : "kitchens", title: isEs ? "Cocinas" : "Kitchens", description: isEs ? "Montaje y reformas de cocina" : "Kitchen fitting and renovation", icon: CookingPot },
    { slug: isEs ? "banos" : "bathrooms", title: isEs ? "Baños" : "Bathrooms", description: isEs ? "Mejoras y reformas de baño" : "Bathroom improvements and renovation", icon: Bath },
    { slug: isEs ? "muebles-carpinteria" : "furniture-carpentry", title: isEs ? "Muebles y carpintería" : "Furniture & carpentry", description: isEs ? "Ajustes, montaje y carpintería" : "Adjustments, assembly and carpentry", icon: Sofa },
    { slug: isEs ? "reformas-integrales" : "full-renovations", title: isEs ? "Reformas integrales" : "Full renovations", description: isEs ? "Proyectos completos de vivienda" : "Complete home projects", icon: Building2 },
    { slug: isEs ? "terrazas-exteriores" : "terraces-exterior", title: isEs ? "Terrazas y exterior" : "Terraces & exterior", description: isEs ? "Mejoras para terrazas y espacios exteriores" : "Improvements for terraces and outdoor spaces", icon: Trees },
  ].map((item) => ({ ...item, id: item.slug, href: `${renovationBase}/${item.slug}` })) satisfies MegaMenuItem[];

  return <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex 2xl:gap-1" aria-label={isEs ? "Navegación principal" : "Main navigation"}>
    <Dropdown trigger={<>{labels.services}<ChevronDown className="h-3.5 w-3.5" /></>} active={pathname === servicesHref} panelClass="left-0 w-[min(880px,calc(100vw-2rem))]">
      <ServicesMegaMenu isEs={isEs} items={services} allHref={servicesHref} guidesHref={guidesHref} estimateHref={marketEstimateHref(locale, market)} />
    </Dropdown>

    {marketSupports(market, "technical") ? <Dropdown trigger={<><ShieldCheck className="h-4 w-4 text-yellow-600" />{isEs ? "Seguridad y Redes" : "Security & Networks"}<ChevronDown className="h-3.5 w-3.5" /></>} active={technicalActive} panelClass="-left-28 w-[min(860px,calc(100vw-2rem))]">
      <MegaMenuContent eyebrow="THEVULGO SECURITY & NETWORKS" title={isEs ? "Seguridad, redes e infraestructura técnica" : "Security, networks and technical infrastructure"} items={technical} allHref={technicalHref} allLabel={isEs ? "Ver todos los servicios técnicos" : "View all technical services"} ctaHref={marketEstimateHref(locale, market, "category=commercial&service=commercial-project-review")} ctaLabel={isEs ? "Configurar proyecto" : "Configure project"} />
    </Dropdown> : null}

    {marketSupports(market, "renovations") ? <Dropdown trigger={<><Hammer className="h-4 w-4 text-yellow-600" />{isEs ? "Reformas" : "Renovations"}<ChevronDown className="h-3.5 w-3.5" /></>} active={isActive(renovationBase)} panelClass="-left-80 w-[min(860px,calc(100vw-2rem))]">
      <MegaMenuContent eyebrow={isEs ? `REFORMAS EN ${marketName(market).toUpperCase()}` : `RENOVATIONS IN ${marketName(market).toUpperCase()}`} title={isEs ? "Reformas, mejoras y acabados" : "Renovations, improvements and finishes"} items={renovations} allHref={renovationBase} allLabel={isEs ? "Ver todas las reformas" : "View all renovations"} ctaHref={marketEstimateHref(locale, market)} ctaLabel={isEs ? "Pedir presupuesto" : "Get estimate"} />
    </Dropdown> : null}

    {marketSupports(market, "ac") ? <Link href={acHref} className={`${navItem} ${isActive(acHref) ? activeItem : ""}`}><Wind className="h-4 w-4 text-yellow-600" />{isEs ? "Aire" : "AC"}</Link> : null}
    <Link href={handymanHref} className={`${navItem} ${isActive(handymanHref) ? activeItem : ""}`}><Wrench className="h-4 w-4 text-yellow-600" />{isEs ? "Manitas" : "Handyman"}</Link>
    <Link href={tvHref} className={`${navItem} ${isActive(tvHref) ? activeItem : ""}`}><Tv className="h-4 w-4 text-yellow-600" />{isEs ? "Montaje TV" : "TV Mounting"}</Link>
  </nav>;
}

function ServicesMegaMenu({ isEs, items, allHref, guidesHref, estimateHref }: { isEs: boolean; items: MegaMenuItem[]; allHref: string; guidesHref: string; estimateHref: string }) {
  const [tab, setTab] = useState<"popular" | "repairs" | "assembly">("popular");
  const groups = {
    popular: ["handyman", "tv", "furniture", "kitchen", "electrical", "plumbing"],
    repairs: ["electrical", "plumbing", "drywall", "bathroom", "exterior", "handyman"],
    assembly: ["furniture", "kitchen", "tv", "drywall", "bathroom", "exterior"],
  } as const;
  const visibleItems = groups[tab].map((id) => items.find((item) => item.id === id)).filter((item): item is MegaMenuItem => Boolean(item));
  const tabs = [
    ["popular", isEs ? "Más solicitados" : "Most requested"],
    ["repairs", isEs ? "Reparación e instalaciones" : "Repairs & installations"],
    ["assembly", isEs ? "Montaje y vivienda" : "Assembly & home"],
  ] as const;
  return <div className="p-6">
    <p className="text-xs font-black uppercase tracking-[.16em] text-yellow-600">{isEs ? "SERVICIOS THEVULGO" : "THEVULGO SERVICES"}</p>
    <h2 className="mt-2 text-xl font-black text-black">{isEs ? "Servicios para tu hogar" : "Services for your home"}</h2>
    <div role="tablist" aria-label={isEs ? "Grupos de servicios" : "Service groups"} className="mt-4 grid grid-cols-3 gap-1 rounded-2xl bg-neutral-100 p-1">
      {tabs.map(([id, label]) => <button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => setTab(id)} className={`min-h-10 rounded-xl px-3 text-xs font-black transition ${tab === id ? "bg-white text-black shadow-sm" : "text-neutral-500 hover:text-black"}`}>{label}</button>)}
    </div>
    <div role="tabpanel" className="mt-4 grid grid-cols-3 gap-2">{visibleItems.map((item) => <MegaMenuCard key={item.id} item={item} />)}</div>
    <div className="mt-5 flex items-center justify-between gap-4 border-t border-neutral-100 pt-5">
      <div className="flex items-center gap-5"><Link href={allHref} className="inline-flex items-center gap-2 text-sm font-black text-black hover:underline">{isEs ? "Ver todos los servicios" : "View all services"}<ArrowRight className="h-4 w-4" /></Link><Link href={guidesHref} className="text-sm font-bold text-neutral-500 hover:text-black hover:underline">{isEs ? "Guías y consejos" : "Guides & tips"}</Link></div>
      <Link href={estimateHref} className="inline-flex min-h-11 items-center rounded-xl bg-yellow-400 px-5 text-sm font-black text-black transition hover:bg-yellow-300">{isEs ? "Pedir presupuesto" : "Get estimate"}</Link>
    </div>
  </div>;
}

function MegaMenuContent({ eyebrow, title, items, allHref, allLabel, secondaryHref, secondaryLabel, ctaHref, ctaLabel }: { eyebrow: string; title: string; items: MegaMenuItem[]; allHref: string; allLabel: string; secondaryHref?: string; secondaryLabel?: string; ctaHref: string; ctaLabel: string }) {
  return <div className="p-6">
    <p className="text-xs font-black uppercase tracking-[.16em] text-yellow-600">{eyebrow}</p>
    <h2 className="mt-2 text-xl font-black text-black">{title}</h2>
    <div className="mt-5 grid grid-cols-3 gap-2">{items.map((item) => <MegaMenuCard key={item.href} item={item} />)}</div>
    <div className="mt-5 flex items-center justify-between gap-4 border-t border-neutral-100 pt-5">
      <div className="flex items-center gap-5"><Link href={allHref} className="inline-flex items-center gap-2 text-sm font-black text-black hover:underline">{allLabel}<ArrowRight className="h-4 w-4" /></Link>{secondaryHref && secondaryLabel ? <Link href={secondaryHref} className="text-sm font-bold text-neutral-500 hover:text-black hover:underline">{secondaryLabel}</Link> : null}</div>
      <Link href={ctaHref} className="inline-flex min-h-11 items-center rounded-xl bg-yellow-400 px-5 text-sm font-black text-black transition hover:bg-yellow-300">{ctaLabel}</Link>
    </div>
  </div>;
}

function MegaMenuCard({ item }: { item: MegaMenuItem }) {
  const Icon = item.icon;
  return <Link href={item.href} className="group rounded-2xl border border-transparent p-3.5 transition hover:-translate-y-0.5 hover:border-yellow-200 hover:bg-yellow-50">
    <span className="flex items-start gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-neutral-950 text-yellow-400"><Icon className="h-4 w-4" /></span>
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-sm font-black text-black">{item.title}<ArrowRight className="h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-0.5" /></span>
        <span className="mt-1 block text-xs leading-5 text-neutral-500">{item.description}</span>
      </span>
    </span>
  </Link>;
}

function Dropdown({ trigger, active, panelClass, children }: { trigger: React.ReactNode; active: boolean; panelClass: string; children: React.ReactNode }) {
  return <div className="group relative shrink-0"><button type="button" aria-haspopup="true" className={`${navItem} ${active ? activeItem : ""}`}>{trigger}</button><div className={`invisible absolute top-full z-50 translate-y-1 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${panelClass}`}><div className="rounded-3xl border border-neutral-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,.16)]">{children}</div></div></div>;
}
