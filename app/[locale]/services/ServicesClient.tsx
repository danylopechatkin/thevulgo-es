"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowRight,
  Wrench,
  Zap,
  Droplets,
  Hammer,
  DoorOpen,
  Paintbrush,
  ShieldCheck,
  ChefHat,
  Bath,
  Home,
  House,
  Wifi,
  Camera,
  Siren,
  KeyRound,
  Satellite,
  Building2,
  Fan,
  Wind,
} from "lucide-react";
import { localizedPath } from "@/lib/technicalRoutes";

export default function ServicesClient() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";
  const t = useTranslations("services");

  const services = [
    {
      key: "airConditioning",
      slug: "aire-acondicionado",
      icon: <Wind className="h-5 w-5" />,
    },
    {
      key: "ceilingFans",
      slug: "instalacion-ventilador-techo-valencia",
      icon: <Fan className="h-5 w-5" />,
    },
    {
      key: "tvMounting",
      slug: "tv-mounting",
      icon: <Wrench className="h-5 w-5" />,
    },
    {
      key: "furniture",
      slug: "furniture",
      icon: <Hammer className="h-5 w-5" />,
    },
    {
      key: "electrical",
      slug: "electrical",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      key: "plumbing",
      slug: "plumbing",
      icon: <Droplets className="h-5 w-5" />,
    },
    {
      key: "repairs",
      slug: "repairs",
      icon: <Wrench className="h-5 w-5" />,
    },
    {
      key: "drywall",
      slug: "drywall",
      icon: <Paintbrush className="h-5 w-5" />,
    },
    {
      key: "doors",
      slug: "doors",
      icon: <DoorOpen className="h-5 w-5" />,
    },
    {
      key: "smartHome",
      slug: "smart-home",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      key: "networking",
      slug: "redes",
      icon: <Wifi className="h-5 w-5" />,
    },
    {
      key: "cctv",
      slug: "cctv",
      icon: <Camera className="h-5 w-5" />,
    },
    {
      key: "alarmSystems",
      slug: "alarmas",
      icon: <Siren className="h-5 w-5" />,
    },
    {
      key: "accessControl",
      slug: "control-de-acceso",
      icon: <KeyRound className="h-5 w-5" />,
    },
    {
      key: "starlinkInternet",
      slug: "starlink",
      icon: <Satellite className="h-5 w-5" />,
    },
    {
      key: "commercialSecurity",
      slug: "seguridad-comercial",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      key: "kitchen",
      slug: "kitchen",
      icon: <ChefHat className="h-5 w-5" />,
    },
    {
      key: "bathroom",
      slug: "bathroom",
      icon: <Bath className="h-5 w-5" />,
    },
    {
      key: "moveIn",
      slug: "move-in",
      icon: <Home className="h-5 w-5" />,
    },
    {
      key: "exterior",
      slug: "exterior",
      icon: <House className="h-5 w-5" />,
    },
  ];
  const technicalSlugs = new Set([
    "redes",
    "cctv",
    "alarmas",
    "control-de-acceso",
    "starlink",
    "seguridad-comercial",
  ]);
  const homeServices = services.filter((service) => !technicalSlugs.has(service.slug));
  const technicalServices = services.filter((service) => technicalSlugs.has(service.slug));
  const serviceCard = (service: (typeof services)[number], technical = false) => (
    <button
      key={service.slug}
      onClick={() => router.push(localizedPath(locale, `services/${service.slug}`))}
      className={`group flex h-full min-h-[260px] flex-col rounded-2xl border p-6 text-left shadow-lg transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-2xl ${technical ? "border-neutral-700 bg-neutral-950 text-white" : "border-yellow-400 bg-white text-black"}`}
    >
      <div className="flex items-start justify-between gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">{service.icon}</div><span className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${technical ? "bg-neutral-800 text-yellow-400" : "bg-red-500 text-white"}`}>{t(`items.${service.key}.badge`)}</span></div>
      <h2 className="mt-4 text-xl font-extrabold">{t(`items.${service.key}.title`)}</h2>
      <p className={`mt-2 line-clamp-3 text-sm leading-relaxed ${technical ? "text-neutral-300" : "text-gray-700"}`} dangerouslySetInnerHTML={{ __html: t.raw(`items.${service.key}.desc`) as string }} />
      <div className="mt-4 text-sm font-extrabold text-yellow-500">{t(`items.${service.key}.price`)}</div>
      <div className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-extrabold">{t("viewService")}<span className="text-yellow-400 transition-transform duration-200 group-hover:translate-x-1"><ArrowRight className="h-4 w-4" /></span></div>
    </button>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-black">
      <section className="relative px-4 py-20 sm:py-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
          <div className="absolute right-10 top-24 h-[320px] w-[320px] rounded-full bg-yellow-100/60 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              {t("badge")}
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
              {t("title")}
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:text-lg">
              {t("subtitle")}
            </p>
          </div>

          <button
            onClick={() => router.push(localizedPath(locale, "handyman-valencia"))}
            className="group mt-10 grid w-full gap-5 rounded-3xl border-2 border-yellow-400 bg-neutral-950 p-6 text-left text-white shadow-xl transition hover:-translate-y-1 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-black uppercase tracking-wide text-black">
                <Wrench className="h-4 w-4" /> {isEs ? "Todos los trabajos pequeños" : "All small jobs"}
              </div>
              <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                {isEs ? "Manitas en Valencia" : "Handyman in Valencia"}
              </h2>
              <p className="mt-2 max-w-3xl leading-7 text-neutral-300">
                {isEs
                  ? "Muebles, TV, ventiladores, lámparas, espejos, estantes, cortinas, puertas, accesorios y varias tareas pequeñas en una sola visita."
                  : "Furniture, TVs, ceiling fans, lights, mirrors, shelves, curtains, doors, accessories and several small tasks in one visit."}
              </p>
            </div>
            <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-black text-black">
              {isEs ? "Ver trabajos" : "View jobs"} <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </span>
          </button>

          <h2 className="mt-12 text-3xl font-black">{isEs ? "Servicios populares para el hogar" : "Popular Home Services"}</h2>
          <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{homeServices.map((service) => serviceCard(service))}</div>

          <div className="mt-16 rounded-3xl bg-neutral-950 p-6 text-white sm:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[.16em] text-yellow-400">THEVULGO SECURITY & NETWORKS</p><h2 className="mt-3 text-3xl font-black">{isEs ? "Seguridad, redes e instalaciones técnicas" : "Security, networks & technical installations"}</h2><p className="mt-3 max-w-3xl text-neutral-300">{isEs ? "CCTV, WiFi profesional, fibra, control de acceso, videoporteros y proyectos combinados para viviendas y negocios." : "CCTV, professional WiFi, fiber, access control, intercom and combined infrastructure for homes and businesses."}</p></div><button onClick={() => router.push(localizedPath(locale, "services/security-networks"))} className="shrink-0 rounded-xl bg-yellow-400 px-5 py-3 font-black text-black">{isEs ? "Ver división técnica" : "Explore technical division"}</button></div>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{technicalServices.map((service) => serviceCard(service, true))}</div>
          </div>

          <div className="mt-14 rounded-3xl border border-yellow-400 bg-white p-6 shadow-xl sm:p-8">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-2xl font-extrabold text-black">
                  {t("cta.title")}
                </p>
                <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
                  {t("cta.text")}
                </p>
              </div>

              <button
                onClick={() => router.push(localizedPath(locale, "estimate"))}
                className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg transition hover:scale-[1.02]"
              >
                {t("cta.button")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
