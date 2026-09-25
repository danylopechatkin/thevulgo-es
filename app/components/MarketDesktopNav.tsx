"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Bath, Building2, Cable, Camera, ChevronDown, CookingPot, Droplets, Fence, Hammer, KeyRound, Lightbulb, Network, PaintRoller, PanelsTopLeft, Radio, ShieldCheck, Siren, Sofa, Trees, Tv, Wind, Wrench, Zap, type LucideIcon } from "lucide-react";
import { marketBasePath } from "@/lib/cities";
import { useCurrentMarket } from "@/lib/useCurrentMarket";
import { localizedPath } from "@/lib/technicalRoutes";

type NavLabels = { services: string; tips: string; faq: string; estimate: string };
type MegaMenuItem = { href: string; title: string; description: string; icon: LucideIcon };
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
    { title: isEs ? "Manitas y reparaciones" : "Handyman & repairs", description: isEs ? "Pequeñas reparaciones, instalación y mantenimiento" : "Small repairs, installation and maintenance", href: cityMarket ? `${base}/handyman` : localizedPath(locale, "handyman-valencia"), icon: Wrench },
    { title: isEs ? "Montaje de TV" : "TV mounting", description: isEs ? "Instalación, soportes y recolocación" : "Installation, brackets and repositioning", href: cityMarket ? `${base}/montaje-tv` : localizedPath(locale, "montaje-tv-valencia"), icon: Tv },
    { title: isEs ? "Montaje de muebles" : "Furniture assembly", description: isEs ? "IKEA, armarios, estanterías y mobiliario" : "IKEA, wardrobes, shelving and furniture", href: homeServicePath("services/furniture"), icon: Sofa },
    { title: isEs ? "Cocinas" : "Kitchens", description: isEs ? "Montaje, ajustes y pequeñas reparaciones" : "Assembly, adjustments and small repairs", href: homeServicePath("services/kitchen"), icon: CookingPot },
    { title: isEs ? "Electricidad" : "Electrical", description: isEs ? "Enchufes, interruptores, iluminación y montaje" : "Sockets, switches, lighting and installation", href: homeServicePath("services/electrical"), icon: Zap },
    { title: isEs ? "Fontanería" : "Plumbing", description: isEs ? "Grifos, sanitarios, conexiones y reparaciones" : "Taps, sanitary fittings, connections and repairs", href: homeServicePath("services/plumbing"), icon: Droplets },
    { title: isEs ? "Paredes y pladur" : "Walls & drywall", description: isEs ? "Reparaciones, agujeros, pladur y acabados" : "Repairs, holes, drywall and finishes", href: homeServicePath("services/drywall"), icon: PaintRoller },
    { title: isEs ? "Baños" : "Bathrooms", description: isEs ? "Sanitarios, accesorios, silicona y montaje" : "Sanitary fittings, accessories, silicone and assembly", href: homeServicePath("services/bathroom"), icon: Bath },
    { title: isEs ? "Exterior" : "Exterior", description: isEs ? "Terrazas, exterior y pequeñas instalaciones" : "Terraces, outdoor areas and small installations", href: homeServicePath("services/exterior"), icon: Fence },
  ] satisfies MegaMenuItem[];
  const technical = [
    { href: localizedPath(locale, "services/cctv"), title: "CCTV", description: isEs ? "Cámaras, NVR/DVR y acceso remoto" : "Cameras, NVR/DVR and remote viewing", icon: Camera },
    { href: localizedPath(locale, "services/redes"), title: isEs ? "WiFi y Redes" : "WiFi & Networks", description: isEs ? "WiFi, Ethernet, RJ45, UniFi y redes profesionales" : "WiFi, Ethernet, RJ45, UniFi and business networks", icon: Network },
    { href: localizedPath(locale, "services/fiber"), title: isEs ? "Fibra Óptica" : "Fiber Optic", description: isEs ? "Instalación, fusión, terminación y diagnóstico" : "Installation, splicing, termination and diagnosis", icon: Cable },
    { href: localizedPath(locale, "services/control-de-acceso"), title: isEs ? "Control de Acceso" : "Access Control", description: isEs ? "RFID, PIN, lectores y cerraduras" : "RFID, PIN, readers and door locks", icon: KeyRound },
    { href: localizedPath(locale, "services/intercom"), title: isEs ? "Videoporteros" : "Intercoms", description: isEs ? "Audio, vídeo, IP y apertura de puerta" : "Audio, video, IP and door release", icon: Radio },
    { href: localizedPath(locale, "services/alarmas"), title: isEs ? "Alarmas Autónomas" : "Standalone Alarms", description: isEs ? "Sensores, sirenas y sistemas autogestionados" : "Sensors, sirens and self-managed systems", icon: Siren },
    { href: localizedPath(locale, "services/seguridad-comercial"), title: isEs ? "Sistemas para Negocios" : "Business Systems", description: isEs ? "Proyectos combinados para locales y oficinas" : "Combined projects for premises and offices", icon: ShieldCheck },
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
  ].map((item) => ({ ...item, href: `${renovationBase}/${item.slug}` })) satisfies MegaMenuItem[];

  return <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex 2xl:gap-1" aria-label={isEs ? "Navegación principal" : "Main navigation"}>
    <Dropdown trigger={<>{labels.services}<ChevronDown className="h-3.5 w-3.5" /></>} active={pathname === servicesHref} panelClass="left-0 w-[min(880px,calc(100vw-2rem))]">
      <MegaMenuContent eyebrow={isEs ? "SERVICIOS THEVULGO" : "THEVULGO SERVICES"} title={isEs ? "Servicios para tu hogar" : "Services for your home"} items={services} allHref={servicesHref} allLabel={isEs ? "Ver todos los servicios" : "View all services"} secondaryHref={guidesHref} secondaryLabel={isEs ? "Guías y consejos" : "Guides & tips"} ctaHref={localizedPath(locale, "estimate")} ctaLabel={isEs ? "Pedir presupuesto" : "Get estimate"} />
    </Dropdown>

    {!cityMarket ? <Dropdown trigger={<><ShieldCheck className="h-4 w-4 text-yellow-600" />{isEs ? "Seguridad y Redes" : "Security & Networks"}<ChevronDown className="h-3.5 w-3.5" /></>} active={technicalActive} panelClass="-left-28 w-[min(860px,calc(100vw-2rem))]">
      <MegaMenuContent eyebrow="THEVULGO SECURITY & NETWORKS" title={isEs ? "Seguridad, redes e infraestructura técnica" : "Security, networks and technical infrastructure"} items={technical} allHref={technicalHref} allLabel={isEs ? "Ver todos los servicios técnicos" : "View all technical services"} ctaHref={`${localizedPath(locale, "estimate")}?category=commercial&service=commercial-project-review`} ctaLabel={isEs ? "Configurar proyecto" : "Configure project"} />
    </Dropdown> : null}

    {!cityMarket ? <Dropdown trigger={<><Hammer className="h-4 w-4 text-yellow-600" />{isEs ? "Reformas" : "Renovations"}<ChevronDown className="h-3.5 w-3.5" /></>} active={isActive(renovationBase)} panelClass="-left-80 w-[min(860px,calc(100vw-2rem))]">
      <MegaMenuContent eyebrow={isEs ? "REFORMAS EN VALENCIA" : "RENOVATIONS IN VALENCIA"} title={isEs ? "Reformas, mejoras y acabados" : "Renovations, improvements and finishes"} items={renovations} allHref={renovationBase} allLabel={isEs ? "Ver todas las reformas" : "View all renovations"} ctaHref={localizedPath(locale, "estimate")} ctaLabel={isEs ? "Pedir presupuesto" : "Get estimate"} />
    </Dropdown> : null}

    {!cityMarket ? <Link href={acHref} className={`${navItem} ${isActive(acHref) ? activeItem : ""}`}><Wind className="h-4 w-4 text-yellow-600" />{isEs ? "Aire" : "AC"}</Link> : null}
    <Link href={handymanHref} className={`${navItem} ${isActive(handymanHref) ? activeItem : ""}`}><Wrench className="h-4 w-4 text-yellow-600" />{isEs ? "Manitas" : "Handyman"}</Link>
    <Link href={tvHref} className={`${navItem} ${isActive(tvHref) ? activeItem : ""}`}><Tv className="h-4 w-4 text-yellow-600" />{isEs ? "Montaje TV" : "TV Mounting"}</Link>
  </nav>;
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
