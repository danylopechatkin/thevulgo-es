"use client";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { readConsent, saveConsent, type ConsentState } from "@/lib/analytics/consent";
import { trackMarketingEvent } from "@/lib/client-attribution";

export default function AnalyticsConsent({ locale }: { locale: string }) {
  const es = locale === "es";
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => { const saved = readConsent(); setConsent(saved); setOpen(!saved); }, []);
  const update = (analytics: boolean, advertising: boolean) => {
    const value = saveConsent({ analytics, advertising }); setConsent(value); setOpen(false);
    if (analytics) trackMarketingEvent("page_view", { source: "consent_granted", metadata: { consent_updated: true } });
  };
  return <>
    {consent?.analytics ? <Analytics /> : null}
    {consent?.advertising ? <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18261040714" strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','AW-18261040714');`}</Script>
    </> : null}
    {open ? <section className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-2xl rounded-3xl border border-black/10 bg-white p-5 shadow-2xl" role="dialog" aria-label={es ? "Preferencias de privacidad" : "Privacy preferences"}>
      <h2 className="text-lg font-black">{es ? "Tu privacidad" : "Your privacy"}</h2>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{es ? "Usamos almacenamiento esencial para formularios. La analítica y la publicidad son opcionales y puedes cambiar tu elección." : "Essential storage supports forms. Analytics and advertising are optional, and you can change your choice."}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-black" onClick={() => update(true, true)}>{es ? "Aceptar todo" : "Accept all"}</button>
        <button className="rounded-xl border px-4 py-2 text-sm font-bold" onClick={() => update(true, false)}>{es ? "Solo analítica" : "Analytics only"}</button>
        <button className="rounded-xl border px-4 py-2 text-sm font-bold" onClick={() => update(false, false)}>{es ? "Solo esencial" : "Essential only"}</button>
      </div>
    </section> : <button onClick={() => setOpen(true)} className="fixed bottom-2 left-2 z-[80] rounded-full border bg-white/90 px-3 py-1.5 text-[11px] font-bold shadow-sm backdrop-blur">{es ? "Analítica" : "Analytics settings"}</button>}
  </>;
}
