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
} from "lucide-react";

export default function ServicesPage() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("services");

  const services = [
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

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <button
                key={service.slug}
                onClick={() => router.push(`/${locale}/services/${service.slug}`)}
                className="group rounded-2xl border border-yellow-400 bg-white p-6 text-left shadow-lg transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {service.icon}
                  </div>

                  <span className="rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    {t(`items.${service.key}.badge`)}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-extrabold text-black">
                  {t(`items.${service.key}.title`)}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {t(`items.${service.key}.desc`)}
                </p>

                <div className="mt-4 text-sm font-extrabold text-yellow-500">
                  {t(`items.${service.key}.price`)}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-black">
                  {t("viewService")}
                  <span className="text-yellow-400 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            ))}
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
                onClick={() => router.push(`/${locale}/estimate`)}
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