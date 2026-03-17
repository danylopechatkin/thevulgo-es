"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const ESTIMATE_ITEMS = [
  {
    title: "Mounting & Wall Installs",
    desc: "TVs, shelves, mirrors, brackets — clean level finish.",
    slug: "mounting",
    badge: "Top",
  },
  {
    title: "Furniture & Assembly",
    desc: "IKEA / general assembly + secure fixing to walls.",
    slug: "furniture",
    badge: "Popular",
  },
  {
    title: "Drywall & Finishing",
    desc: "Cutouts, patching, skim coat, sanding, paint prep.",
    slug: "drywall",
    badge: "Pro",
  },
  {
    title: "Basic Electrical",
    desc: "Lights, switches, sockets, tidy mounting (no rewiring).",
    slug: "electrical",
    badge: "Safe",
  },
  {
    title: "Fontanería Básica",
    desc: "Faucets, sinks, toilets, valves, small leaks.",
    slug: "plumbing",
    badge: "Fast",
  },
  {
    title: "Audio & Built-ins",
    desc: "Soundbars, speakers, clean cable routing.",
    slug: "audio",
    badge: "Clean",
  },
  {
    title: "Cable Concealment",
    desc: "Raceways + in-wall routing when suitable.",
    slug: "cables",
    badge: "Premium",
  },
  {
    title: "Doors & Hardware",
    desc: "Handles, hinges, closers (basic), alignment fixes.",
    slug: "doors",
    badge: "Fix",
  },
  {
    title: "Small Repairs",
    desc: "Sealing, silicone, minor fixes, home touch-ups.",
    slug: "repairs",
    badge: "Quick",
  },
];

export default function EstimateHubPage() {
  const router = useRouter();

  return (
    <div className="bg-white text-black font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="w-9 h-9 rounded-full bg-yellow-400 text-black font-extrabold flex items-center justify-center">
              V
            </div>
            <div className="font-extrabold tracking-tight">
              THEVULGO <span className="font-semibold text-gray-500">· Valencia</span>
            </div>
          </div>

          <button
            onClick={() => router.push("/")}
            className="bg-white border border-gray-300 text-black px-4 py-2 rounded-2xl font-semibold shadow-sm hover:shadow-md transition"
          >
            Back to Home
          </button>
        </div>
      </header>

      {/* Full-screen picker (no scroll inside, fits viewport) */}
      <section className="relative w-full bg-white h-[calc(100vh-72px)] overflow-hidden">
        {/* same honey background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 top-[-160px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />
          <div className="absolute right-[-160px] top-[120px] h-[420px] w-[420px] rounded-full bg-yellow-100/70 blur-3xl" />
          <div className="absolute left-[-180px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-yellow-100/60 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 h-full flex py-8 max-[720px]:py-6 max-[640px]:py-5">
          <div className="w-full rounded-[28px] border border-yellow-400 bg-white shadow-xl p-8 pb-10 max-[720px]:p-5 max-[720px]:pb-8 max-[640px]:p-4 max-[640px]:pb-7 flex flex-col">
            {/* header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                Price estimate • Pick a calculator
              </div>

              <h1 className="mt-4 font-extrabold tracking-tight text-black text-4xl max-[720px]:text-3xl max-[640px]:text-2xl">
                Choose a calculator
              </h1>

              <p className="mt-3 text-gray-600 text-base max-[720px]:text-sm max-[640px]:text-xs">
                Select a service category to estimate price with a dedicated calculator.
              </p>
            </div>

            {/* grid */}
            <div className="mt-6 max-[720px]:mt-5 flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-[720px]:gap-3 max-[640px]:gap-2 content-start pb-4">
              {ESTIMATE_ITEMS.map((x) => (
                <button
                  key={x.slug}
                  onClick={() => router.push(`/estimate/${x.slug}`)}
                  className="
                    group relative rounded-2xl
                    border border-yellow-400 bg-white
                    text-left shadow-md
                    transition-all duration-200
                    hover:shadow-xl hover:scale-[1.02] hover:-translate-y-[2px]
                    hover:bg-yellow-50/40 hover:border-yellow-500
                    p-6 max-[720px]:p-4 max-[640px]:p-3
                    flex flex-col justify-between
                    min-h-[152px]
                    max-[720px]:min-h-[126px]
                    max-[640px]:min-h-[110px]
                  "
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md h-11 w-11 max-[720px]:h-10 max-[720px]:w-10 max-[640px]:h-9 max-[640px]:w-9">
                      <span className="font-black max-[640px]:text-sm">V</span>
                    </div>

                    <span className="rounded-full bg-red-500 text-white font-extrabold uppercase tracking-wide text-[10px] px-2 py-1 max-[640px]:text-[9px]">
                      {x.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="mt-4 font-extrabold text-black text-base max-[720px]:text-sm max-[640px]:text-[13px]">
                      {x.title}
                    </h3>

                    {/* hide desc on smaller screens to guarantee no scroll */}
                    <p className="mt-2 text-gray-600 leading-relaxed text-sm max-[820px]:hidden">
                      {x.desc}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 font-extrabold text-black text-sm max-[720px]:text-[13px] max-[640px]:text-[12px]">
                      Open calculator <ArrowRight className="h-4 w-4 text-yellow-400" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* small bottom hint */}
            <div className="mt-2 max-[640px]:hidden rounded-2xl border border-yellow-400 bg-white px-5 py-3 text-center shadow-sm">
              <p className="text-sm text-gray-700">
                Valencia • Clean finish • Fast response • Transparent pricing
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}