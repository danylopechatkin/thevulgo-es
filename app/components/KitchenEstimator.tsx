"use client";

import { useMemo, useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";
import { buildWhatsAppHref } from "@/lib/commercial";

export default function KitchenEstimator({
  locale,
  basePrice,
}: {
  locale: string;
  basePrice: number;
}) {
  const es = locale === "es";
  const [units, setUnits] = useState(4);
  const [worktop, setWorktop] = useState(false);
  const [appliances, setAppliances] = useState(1);
  const total = useMemo(
    () =>
      Math.max(basePrice, units * 55 + (worktop ? 180 : 0) + appliances * 45),
    [units, worktop, appliances, basePrice],
  );
  const href = `${buildWhatsAppHref("kitchen", locale)}%0A${encodeURIComponent(es ? `Estimación orientativa: ${units} módulos, encimera: ${worktop ? "sí" : "no"}, ${appliances} electrodomésticos.` : `Indicative estimate: ${units} units, worktop: ${worktop ? "yes" : "no"}, ${appliances} appliances.`)}`;
  return (
    <div
      id="kitchen-estimator"
      className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl md:p-8"
    >
      <div className="flex items-center gap-3">
        <Calculator />
        <h2 className="text-2xl font-black">
          {es ? "Estimador rápido" : "Quick kitchen estimator"}
        </h2>
      </div>
      <p className="mt-2 text-sm text-neutral-600">
        {es
          ? "Una orientación inicial. Confirmamos el precio con tu plano y fotos."
          : "A starting estimate. We confirm the price from your plan and photos."}
      </p>
      <div className="mt-7 grid gap-5 sm:grid-cols-3">
        <label className="text-sm font-bold">
          {es ? "Módulos" : "Cabinet units"}
          <input
            className="mt-2 w-full rounded-xl border border-neutral-300 p-3"
            type="number"
            min="1"
            max="30"
            value={units}
            onChange={(e) => setUnits(Math.max(1, Number(e.target.value)))}
          />
        </label>
        <label className="text-sm font-bold">
          {es ? "Electrodomésticos" : "Appliances"}
          <input
            className="mt-2 w-full rounded-xl border border-neutral-300 p-3"
            type="number"
            min="0"
            max="12"
            value={appliances}
            onChange={(e) => setAppliances(Math.max(0, Number(e.target.value)))}
          />
        </label>
        <label className="flex items-center gap-3 rounded-xl border border-neutral-300 p-3 text-sm font-bold sm:mt-7">
          <input
            type="checkbox"
            checked={worktop}
            onChange={(e) => setWorktop(e.target.checked)}
          />
          {es ? "Instalar encimera" : "Fit worktop"}
        </label>
      </div>
      <div className="mt-7 flex flex-col gap-4 rounded-2xl bg-neutral-950 p-5 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {es ? "Estimación orientativa" : "Indicative estimate"}
          </p>
          <p className="text-3xl font-black">€{total}</p>
        </div>
        <a
          href={href}
          data-event="kitchen_plan_click"
          data-service="kitchen"
          data-cta-location="estimator"
          className="rounded-xl bg-[#ffcc00] px-5 py-3 text-center font-black text-black"
        >
          <MessageCircle className="mr-2 inline" size={18} />
          {es ? "Enviar plano y fotos" : "Send plan and photos"}
        </a>
      </div>
    </div>
  );
}
