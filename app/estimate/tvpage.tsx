"use client";

import React, { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const META: Record<string, { title: string; desc: string }> = {
  mounting: { title: "Mounting & Wall Installs", desc: "Estimate TV, shelves, mirrors, brackets installs." },
  furniture: { title: "Furniture & Assembly", desc: "Estimate assembly + wall fixing." },
  drywall: { title: "Drywall & Finishing", desc: "Estimate patching / finishing work." },
  electrical: { title: "Basic Electrical", desc: "Estimate lights, switches, sockets installs." },
  plumbing: { title: "Fontanería Básica", desc: "Estimate faucets, sinks, toilets, small leaks." },
  audio: { title: "Audio & Built-ins", desc: "Estimate soundbar / speakers / cable routing." },
  cables: { title: "Cable Concealment", desc: "Estimate raceway or in-wall routing." },
  doors: { title: "Doors & Hardware", desc: "Estimate handles, hinges, closers, alignment fixes." },
  repairs: { title: "Small Repairs", desc: "Estimate small fixes and touch-ups." },
};

export default function EstimateSlugPage() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "mounting";

  const meta = META[slug] ?? { title: "Calculator", desc: "Estimate your job." };

  // пример заглушки расчета (потом заменим логикой под каждый slug)
  const [qty, setQty] = useState(1);
  const [complexity, setComplexity] = useState<"standard" | "complex">("standard");

  const estimate = useMemo(() => {
    const base = 60; // placeholder
    const mult = complexity === "complex" ? 1.6 : 1;
    return Math.round(base * qty * mult);
  }, [qty, complexity]);

  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
            <div className="w-9 h-9 rounded-full bg-yellow-400 text-black font-extrabold flex items-center justify-center">
              V
            </div>
            <div className="font-extrabold tracking-tight">
              THEVULGO <span className="font-semibold text-gray-500">· Valencia</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/estimate")}
              className="bg-white border border-gray-300 text-black px-4 py-2 rounded-2xl font-semibold shadow-sm hover:shadow-md transition"
            >
              All calculators
            </button>
          </div>
        </div>
      </header>

      {/* honey background */}
      <section className="relative py-14 px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
          <div className="absolute right-10 top-32 h-[360px] w-[360px] rounded-full bg-yellow-100/60 blur-3xl" />
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Price calculator
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold">{meta.title}</h1>
            <p className="mt-3 text-gray-600">{meta.desc}</p>
          </div>

          {/* Calculator card */}
          <div className="mt-10 bg-white border border-yellow-400 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="border border-gray-200 rounded-2xl p-5">
                <p className="text-sm text-gray-500">Quantity</p>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    className="w-10 h-10 rounded-xl border border-gray-300 font-black"
                    onClick={() => setQty((v) => Math.max(1, v - 1))}
                  >
                    −
                  </button>
                  <div className="text-2xl font-extrabold w-12 text-center">{qty}</div>
                  <button
                    className="w-10 h-10 rounded-xl border border-gray-300 font-black"
                    onClick={() => setQty((v) => v + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <p className="text-sm text-gray-500">Complexity</p>
                <div className="mt-3 flex gap-3">
                  <button
                    onClick={() => setComplexity("standard")}
                    className={`flex-1 rounded-2xl px-4 py-3 font-bold border transition ${
                      complexity === "standard"
                        ? "bg-yellow-400 text-black border-yellow-400"
                        : "bg-white text-black border-gray-300"
                    }`}
                  >
                    Standard
                  </button>
                  <button
                    onClick={() => setComplexity("complex")}
                    className={`flex-1 rounded-2xl px-4 py-3 font-bold border transition ${
                      complexity === "complex"
                        ? "bg-yellow-400 text-black border-yellow-400"
                        : "bg-white text-black border-gray-300"
                    }`}
                  >
                    Complex
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-yellow-400 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-600">Estimated price (placeholder)</p>
              <div className="mt-2 text-4xl font-extrabold text-black">{estimate}€</div>
              <p className="mt-2 text-sm text-gray-500">
                This is a starting estimate. Final price depends on details and photos.
              </p>
            </div>

            {/* CTA row */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => router.push("/estimate")}
                className="flex-1 bg-white border border-gray-300 text-black px-6 py-4 rounded-2xl font-bold shadow-sm hover:shadow-md transition"
              >
                Pick another category
              </button>

              <button
                disabled
                className="flex-1 bg-yellow-400 text-black px-6 py-4 rounded-2xl font-extrabold shadow-md opacity-70 cursor-not-allowed"
                title="WhatsApp number not set yet"
              >
                WhatsApp (coming soon)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}