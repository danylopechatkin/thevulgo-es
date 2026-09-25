"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Bath, Cable, Camera, ChevronDown, CookingPot, Droplets, Fence, Hammer, KeyRound, LampDesk, Network, PaintRoller, Radio, ShieldCheck, Siren, Sofa, Tv, Wind, Wrench, Zap } from "lucide-react";
import { marketBasePath } from "@/lib/cities";
import { useCurrentMarket } from "@/lib/useCurrentMarket";
import { localizedPath } from "@/lib/technicalRoutes";

type NavLabels = { services: string; tips: string; faq: string; estimate: string };
const navItem = "inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-2 text-[14px] font-bold text-neutral-800 transition hover:bg-neutral-100 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 2xl:px-3 2xl:text-[15px]";
const activeItem = "bg-yellow-50 text-black ring-1 ring-yellow-200";

export default function MarketDesktopNav({ locale, labels }: { locale: string; labels: NavLabels }) {
  const pathname = usePathname();
  const isEs = locale === "es";
  const { market } = useCurrentMarket(locale);
  const cityMarket = market !== "valencia";
  const base = marketBasePath(locale, market);
  const renovationBase = localizedPath(locale, isEs ? "reformas-valencia" : "renovations-valencia");
  const acHref = localizedPath(locale, "services/aire-acondicionado");
  const guidesHref = localizedPath(locale, "guias");
  const handymanHref = cityMarket ? `${base}/handyman` : localizedPath(locale, "handyman-valencia");
  const tvHref = cityMarket ? `${base}/montaje-tv` : localizedPath(locale, "montaje-tv-valencia");
  const servicesHref = `${base}/services`;
  const technicalHref = localizedPath(locale, "services/security-networks");
  const homeServicePath = (path: string) => cityMarket ? servicesHref : localizedPath(locale, path);
  const isActive = (...parts: string[]) => parts.some((part) => pathname === part || pathname.startsWith(`${part}/`));
  const technicalActive = !cityMarket && ["security-networks", "cctv", "redes", "fiber", "control-de-acceso", "intercom", "alarmas", "seguridad-comercial"].some((segment) => pathname.includes(`/services/${segment}`));

  const services = [
    [isEs ? "Manitas y reparaciones" : "Handyman & repairs", cityMarket ? `${base}/handyman` : localizedPath(locale, "handyman-valencia"), Wrench],
    [isEs ? "Montaje de TV" : "TV mounting", cityMarket ? `${base}/montaje-tv` : localizedPath(locale, "montaje-tv-valencia"), Tv],
    [isEs ? "Montaje de muebles" : "Furniture assembly", homeServicePath("services/furniture"), Sofa],
    [isEs ? "Cocinas" : "Kitchens", homeServicePath("services/kitchen"), CookingPot],
    [isEs ? "Electricidad" : "Electrical", homeServicePath("services/electrical"), Zap],
    [isEs ? "Fontanería" : "Plumbing", homeServicePath("services/plumbing"), Droplets],
    [isEs ? "Paredes, pladur y pintura" : "Walls, drywall & painting", homeServicePath("services/drywall"), PaintRoller],
    [isEs ? "Baños" : "Bathrooms", homeServicePath("services/bathroom"), Bath],
    [isEs ? "Exterior" : "Exterior", homeServicePath("services/exterior"), Fence],
  ] as const;
  const technical = [
    ["cctv", "CCTV", isEs ? "Cámaras, NVR/DVR y acceso remoto" : "Cameras, NVR/DVR and remote viewing", Camera],
    ["redes", isEs ? "WiFi y Redes" : "WiFi & Networks", isEs ? "WiFi, Ethernet, RJ45, UniFi y redes profesionales" : "WiFi, Ethernet, RJ45, UniFi and business networks", Network],
    ["fiber", isEs ? "Fibra Óptica" : "Fiber Optic", isEs ? "Instalación, fusión, terminación y diagnóstico" : "Installation, splicing, termination and diagnosis", Cable],
    ["control-de-acceso", isEs ? "Control de Acceso" : "Access Control", isEs ? "RFID, PIN, lectores y cerraduras" : "RFID, PIN, readers and door locks", KeyRound],
    ["intercom", isEs ? "Videoporteros" : "Intercoms", isEs ? "Audio, vídeo, IP y apertura de puerta" : "Audio, video, IP and door release", Radio],
    ["alarmas", isEs ? "Alarmas Autónomas" : "Standalone Alarms", isEs ? "Sensores, sirenas y sistemas autogestionados" : "Sensors, sirens and self-managed systems", Siren],
    ["seguridad-comercial", isEs ? "Sistemas para Negocios" : "Business Systems", isEs ? "Proyectos combinados para locales y oficinas" : "Combined projects for premises and offices", ShieldCheck],
  ] as const;
  const renovationGroups = isEs
    ? [["Instalaciones", [["Electricidad", "electricidad"], ["Iluminación", "iluminacion"], ["Fontanería", "fontaneria"]]], ["Paredes y acabados", [["Paredes y techos", "paredes-techos"], ["Pladur", "pladur"], ["Pintura", "pintura"], ["Suelos y azulejos", "suelos-azulejos"]]], ["Estancias", [["Cocinas", "cocinas"], ["Baños", "banos"], ["Muebles y carpintería", "muebles-carpinteria"]]], ["Viviendas y exterior", [["Reformas integrales", "reformas-integrales"], ["Casas y chalets", "casas-chalets"], ["Terrazas y exterior", "terrazas-exteriores"], ["Construcciones de madera", "construcciones-madera"]]]] as const
    : [["Installations", [["Electrical", "electrical"], ["Lighting", "lighting"], ["Plumbing", "plumbing"]]], ["Walls & finishes", [["Walls & ceilings", "walls-ceilings"], ["Drywall", "drywall-plasterboard"], ["Painting", "painting"], ["Floors & tiles", "floors-tiles"]]], ["Rooms", [["Kitchens", "kitchens"], ["Bathrooms", "bathrooms"], ["Furniture & carpentry", "furniture-carpentry"]]], ["Homes & exterior", [["Full renovations", "full-renovations"], ["Houses & villas", "houses-villas"], ["Terraces & exterior", "terraces-exterior"], ["Wood structures", "wood-structures"]]]] as const;

  return <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex 2xl:gap-1" aria-label={isEs ? "Navegación principal" : "Main navigation"}>
    <Dropdown trigger={<>{labels.services}<ChevronDown className="h-3.5 w-3.5" /></>} active={pathname === servicesHref} panelClass="left-0 w-[520px]">
      <div className="p-5"><p className="text-xs font-black uppercase tracking-[.15em] text-yellow-600">{isEs ? "Servicios para el hogar" : "Home services"}</p><div className="mt-4 grid grid-cols-2 gap-1.5">{services.map(([label, href, Icon]) => <Link key={href} href={href} className="group flex min-h-12 items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-bold text-neutral-700 transition hover:border-yellow-200 hover:bg-yellow-50 hover:text-black"><Icon className="h-4 w-4 shrink-0 text-yellow-600" /><span>{label}</span><ArrowRight className="ml-auto h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" /></Link>)}</div><Link href={servicesHref} className="mt-4 flex items-center justify-between border-t border-neutral-100 px-3 pt-4 text-sm font-black text-black">{isEs ? "Ver todos los servicios" : "View all services"}<ArrowRight className="h-4 w-4" /></Link></div>
    </Dropdown>

    {!cityMarket ? <Dropdown trigger={<><ShieldCheck className="h-4 w-4 text-yellow-600" />{isEs ? "Seguridad y Redes" : "Security & Networks"}<ChevronDown className="h-3.5 w-3.5" /></>} active={technicalActive} panelClass="-left-28 w-[min(860px,calc(100vw-2rem))]">
      <div className="p-6"><p className="text-xs font-black uppercase tracking-[.16em] text-yellow-600">THEVULGO SECURITY & NETWORKS</p><h2 className="mt-2 text-xl font-black text-black">{isEs ? "Seguridad, redes e infraestructura técnica" : "Security, networks and technical infrastructure"}</h2><div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-3">{technical.map(([slug, title, description, Icon]) => <Link key={slug} href={localizedPath(locale, `services/${slug}`)} className="group rounded-2xl border border-transparent p-3.5 transition hover:-translate-y-0.5 hover:border-yellow-200 hover:bg-yellow-50"><div className="flex items-start gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-neutral-950 text-yellow-400"><Icon className="h-4 w-4" /></span><span className="min-w-0"><span className="flex items-center gap-1 text-sm font-black text-black">{title}<ArrowRight className="h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-0.5" /></span><span className="mt-1 block text-xs leading-5 text-neutral-500">{description}</span></span></div></Link>)}</div><div className="mt-5 flex items-center justify-between gap-4 border-t border-neutral-100 pt-5"><Link href={technicalHref} className="inline-flex items-center gap-2 text-sm font-black text-black hover:underline">{isEs ? "Ver todos los servicios técnicos" : "View all technical services"}<ArrowRight className="h-4 w-4" /></Link><Link href={`${localizedPath(locale, "estimate")}?category=commercial&service=commercial-project-review`} className="inline-flex min-h-11 items-center rounded-xl bg-yellow-400 px-5 text-sm font-black text-black hover:bg-yellow-300">{isEs ? "Configurar proyecto" : "Configure project"}</Link></div></div>
    </Dropdown> : null}

    {!cityMarket ? <Dropdown trigger={<><Hammer className="h-4 w-4 text-yellow-600" />{isEs ? "Reformas" : "Renovations"}<ChevronDown className="h-3.5 w-3.5" /></>} active={isActive(renovationBase)} panelClass="-left-80 w-[min(860px,calc(100vw-2rem))]">
      <div className="p-6"><p className="text-xs font-black uppercase tracking-[.16em] text-yellow-600">{isEs ? "Reformas en Valencia" : "Renovations in Valencia"}</p><div className="mt-5 grid grid-cols-4 gap-x-7">{renovationGroups.map(([title, links]) => <div key={title}><p className="min-h-9 border-b border-yellow-100 pb-3 text-xs font-black uppercase leading-4 tracking-[.12em] text-neutral-500">{title}</p><div className="mt-3 space-y-1">{links.map(([label, slug]) => <Link key={slug} href={`${renovationBase}/${slug}`} className="block rounded-lg px-2 py-2 text-sm font-bold leading-5 text-neutral-700 hover:bg-yellow-50 hover:text-black">{label}</Link>)}</div></div>)}</div><Link href={renovationBase} className="mt-5 flex min-h-11 items-center justify-center rounded-xl bg-yellow-400 px-4 text-sm font-black text-black hover:bg-yellow-300">{isEs ? "Ver todas las reformas" : "View all renovations"}</Link></div>
    </Dropdown> : null}

    {!cityMarket ? <Link href={acHref} className={`${navItem} ${isActive(acHref) ? activeItem : ""}`}><Wind className="h-4 w-4 text-yellow-600" />{isEs ? "Aire" : "AC"}</Link> : null}
    <Link href={handymanHref} className={`${navItem} ${isActive(handymanHref) ? activeItem : ""}`}><Wrench className="h-4 w-4 text-yellow-600" />{isEs ? "Manitas" : "Handyman"}</Link>
    <Link href={tvHref} className={`${navItem} ${isActive(tvHref) ? activeItem : ""}`}><Tv className="h-4 w-4 text-yellow-600" />{isEs ? "Montaje TV" : "TV Mounting"}</Link>
    <Link href={guidesHref} className={`${navItem} hidden 2xl:inline-flex ${isActive(guidesHref) ? activeItem : ""}`}><LampDesk className="h-4 w-4 text-yellow-600" />{labels.tips}</Link>
  </nav>;
}

function Dropdown({ trigger, active, panelClass, children }: { trigger: React.ReactNode; active: boolean; panelClass: string; children: React.ReactNode }) {
  return <div className="group relative shrink-0"><button type="button" aria-haspopup="true" className={`${navItem} ${active ? activeItem : ""}`}>{trigger}</button><div className={`invisible absolute top-full z-50 translate-y-1 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${panelClass}`}><div className="rounded-3xl border border-neutral-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,.16)]">{children}</div></div></div>;
}
