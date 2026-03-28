"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Wrench,
  ArrowRight,
  Star,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  BadgeCheck,
  MessageSquare,
  Camera,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goEstimate = () => router.push("/estimate");

  // WhatsApp пока нет номера: оставляем выключенным
const whatsappEnabled = true;

const WHATSAPP_NUMBER = "14379074913"; 
// ⚠️ ВАЖНО: для Канады нужен код страны 1
// Поэтому не 437..., а 1437...

const whatsappText = encodeURIComponent(
  "Hi! I’d like an estimate in Valencia."
);

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;
  return (
    <div className="bg-white text-black font-sans">
      

      {/* HERO */}
      <section
        id="top"
        className="relative min-h-[88vh] pt-24 flex flex-col items-center justify-center text-center bg-white px-4"
      >
        {/* premium background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 -top-28 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
          <div className="absolute right-10 top-28 h-[380px] w-[380px] rounded-full bg-yellow-100/70 blur-3xl" />
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400 text-sm font-medium text-gray-800 mb-6 bg-white/80 backdrop-blur shadow-sm">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Valencia & nearby · Clean finish · Fast response
          </div>

         <h1 className="text-4xl sm:text-5xl md:text-[56px] lg:text-6xl font-extrabold text-black leading-tight mb-6 text-center">
  <span className="block">
    Clean installs in Valencia
  </span>

  <span className="block text-yellow-400 tracking-[0.08em] mt-3">
    NO SURPRISES
  </span>

  <span className="block mt-3">
    No mess. No stress.
  </span>
</h1>

<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
  TV mounting, plumbing, basic electrical and home fixes —{" "}
  <span className="font-semibold text-gray-800">clear pricing before we start</span>.
  You approve before drilling. Cleanup included.
</p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={() => scrollTo("services")}
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold shadow-md md:hover:scale-105 transition"
            >
              Explore Services
            </button>

            <button
              onClick={goEstimate}
              className="bg-white border border-gray-300 text-black px-8 py-4 rounded-2xl font-semibold shadow-md md:hover:scale-105 transition"
            >
              Estimate price
            </button>
          </div>

          {/* mini trust chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-700">
            <Chip icon={<Clock className="h-4 w-4" />} text="Fast replies" />
            <Chip icon={<Check className="h-4 w-4" />} text="Clean finish" />
            <Chip icon={<Wrench className="h-4 w-4" />} text="Pro tools" />
            <Chip icon={<MapPin className="h-4 w-4" />} text="Valencia area" />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-10 px-4 bg-white">
        <div className="w-full max-w-7xl mx-auto bg-white border border-yellow-400 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <TrustStat value="24h" label="Typical response" />
            <TrustStat value="Clean" label="Finish & details" />
            <TrustStat value="Valencia" label="Local focus" />
            <TrustStat value="Transparent" label="Pricing & scope" />
          </div>
        </div>
      </section>

     {/* FEATURED SERVICES */}
<section id="services" className="py-16 sm:py-20 px-4">
  <div className="w-full max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold">Featured services</h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Popular jobs delivered with clean installation and a professional finish.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        title="Wall mounting & installs"
        text="TVs, monitors, shelves, mirrors and brackets — level, secure and precisely aligned."
        badge="Top"
      />
      <FeatureCard
        title="Built-in audio & speakers"
        text="Ceiling and wall speakers, soundbars, and clean cable routing with a tidy finish."
        badge="New"
      />
      <FeatureCard
        title="Drywall & finishing"
        text="Cutouts, patching, skim coat, sanding and paint prep — clean ready-to-finish work."
        badge="Pro"
      />
      <FeatureCard
        title="Furniture & fixtures"
        text="Assembly, anchors, curtain rods, blinds, bathroom accessories and small installs."
        badge="Popular"
      />
      <FeatureCard
        title="Basic plumbing"
        text="Faucets, sinks, toilets, valves and small leaks — done quickly and neatly."
        badge="Fontanería"
      />
      <FeatureCard
        title="Basic electrical"
        text="Lights, switches, sockets, mounting and tidy wiring for clean everyday upgrades."
        badge="Safe"
      />
      <FeatureCard
        title="Smart home & devices"
        text="Cameras, video doorbells, smart locks, sensors and practical device setup for modern homes."
        badge="Smart"
      />
      <FeatureCard
        title="Doors & hardware"
        text="Handles, hinges, closers, latch fixes and small alignment work to improve daily use."
        badge="Fix"
      />
      <FeatureCard
        title="Bathroom installations"
        text="Mirrors, cabinets, holders, shelves and clean fitting work for a more finished bathroom."
        badge="Bath"
      />
    </div>

    <div className="mt-10 text-center">
      <button
        onClick={() => router.push("/services")}
        className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-extrabold text-black shadow-lg transition hover:scale-[1.02]"
      >
        View all services <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </div>
</section>

      {/* HOW IT WORKS */}
<section id="how" className="py-16 sm:py-20 px-4 bg-white">
  <div className="w-full max-w-7xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold">How it works</h2>
    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
      Simple process. Clear communication. Clean result from the first message to the finished job
    </p>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StepCard
        n="1"
        title="Choose a service"
        text="Pick the category that matches your job: TV mounting, plumbing, electrical, drywall, furniture or smart home."
        icon={<Wrench className="h-5 w-5" />}
      />
      <StepCard
        n="2"
        title="Send photos or details"
        text="Share 2–4 photos, your location in Valencia and a short description so the job can be reviewed properly."
        icon={<Camera className="h-5 w-5" />}
      />
      <StepCard
        n="3"
        title="Get a clear estimate"
        text="You receive a transparent price range and clear explanation of what affects the final cost."
        icon={<MessageCircle className="h-5 w-5" />}
      />
      <StepCard
        n="4"
        title="Confirm the booking"
        text="Once the scope is clear, the appointment time is confirmed with the right plan and materials in mind."
        icon={<Check className="h-5 w-5" />}
      />
      <StepCard
        n="5"
        title="Clean professional install"
        text="Measured, aligned and neatly finished work with attention to details, hardware and final presentation."
        icon={<BadgeCheck className="h-5 w-5" />}
      />
      <StepCard
        n="6"
        title="Final check and cleanup"
        text="Before leaving, everything is checked with you and the area is left tidy, clean and ready to use."
        icon={<Sparkles className="h-5 w-5" />}
      />
    </div>
  </div>
</section>

      

      {/* WHY CHOOSE */}
      <section id="why" className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
          <div className="absolute right-10 top-28 h-[360px] w-[360px] rounded-full bg-yellow-100/60 blur-3xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Valencia • Professional Handyman
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Built for clean work and zero headaches
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Premium finish, quick response, and honest guidance — the kind of service
              you’d recommend to a friend.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <WhyCard icon={<Sparkles className="h-5 w-5" />} badge="Quality" title="Clean finish" text="Straight lines, neat edges, tidy details. Your home stays clean." />
            <WhyCard icon={<Zap className="h-5 w-5" />} badge="Speed" title="Fast response" text="Valencia + nearby. Quick scheduling and clear ETA — no chasing." />
            <WhyCard icon={<Wrench className="h-5 w-5" />} badge="All-in-one" title="Multi-skill" text="One specialist for many small jobs — less coordination, better results." />
            <WhyCard icon={<ShieldCheck className="h-5 w-5" />} badge="Trust" title="No surprises" text="Clear scope, honest recommendations, and transparent pricing." />
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-400 bg-white p-6 shadow-2xl sm:p-7">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-lg font-extrabold text-black">Need an estimate today?</p>
                <p className="mt-1 text-sm text-gray-600">
                  Pick a category and open its calculator — you’ll get a clear price range.
                </p>
              </div>

              <button
                onClick={goEstimate}
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-black shadow-lg transition-transform duration-200 hover:scale-[1.02]"
              >
                Get estimate <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS & GUIDES */}
<section id="guides" className="py-16 sm:py-20 px-4 bg-white">
  <div className="w-full max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold">Tips & Guides</h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Short, useful tips to avoid common mistakes and get a cleaner, safer and better-looking result.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <GuideCard
        title="TV mounting height"
        text="The best height depends on sofa distance and screen size. A good rule is to keep the center of the TV close to eye level when seated."
      />
      <GuideCard
        title="Choosing anchors"
        text="Plasterboard, brick and concrete all need different hardware. Wrong anchors can make shelves, TVs or mirrors unsafe."
      />
      <GuideCard
        title="Cable concealment"
        text="Raceway is the fastest clean-looking option. In-wall routing is only suitable when the wall type allows it safely."
      />
      <GuideCard
        title="Before drilling the wall"
        text="Always confirm wall material, cable routes and final height before drilling. Small planning mistakes create expensive fixes later."
      />
      <GuideCard
        title="Mirror positioning"
        text="Bathroom and hallway mirrors should be centered carefully and placed at a height that feels balanced for everyday use."
      />
      <GuideCard
        title="Shelf spacing"
        text="Good shelf installation is not only about level mounting. Spacing, symmetry and surrounding furniture matter too."
      />
      <GuideCard
        title="Small plumbing upgrades"
        text="Replacing faucets, shower heads and visible fittings can improve the feel of a kitchen or bathroom without full renovation."
      />
      <GuideCard
        title="Light fixture planning"
        text="Before replacing a light, check compatibility, mounting base and room purpose to get both practical lighting and clean appearance."
      />
      <GuideCard
        title="Bundle small jobs together"
        text="The most efficient approach is often grouping several small tasks into one visit instead of booking each issue separately."
      />
    </div>
  </div>
</section>

   {/* FAQ */}
<section id="faq" className="py-16 sm:py-20 px-4 bg-white">
  <div className="w-full max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold">FAQ</h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Quick answers to the most common questions.
      </p>
    </div>

    {/* 2 independent columns (no equal-height rows) */}
    <div className="mt-10 max-w-5xl mx-auto md:flex gap-6">
      <div className="flex-1 space-y-4">
        {FAQS.filter((_, i) => i % 2 === 0).map((x) => {
          const idx = FAQS.indexOf(x);
          return (
            <FaqItem
              key={x.q}
              q={x.q}
              a={x.a}
              isOpen={openFaq === idx}
              onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
            />
          );
        })}
      </div>

      <div className="flex-1 space-y-4 mt-4 md:mt-0">
        {FAQS.filter((_, i) => i % 2 === 1).map((x) => {
          const idx = FAQS.indexOf(x);
          return (
            <FaqItem
              key={x.q}
              q={x.q}
              a={x.a}
              isOpen={openFaq === idx}
              onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
            />
          );
        })}
      </div>
    </div>
  </div>
</section>

      {/* CONTACT / PICKER (goes to /estimate/[slug]) */}
      <section id="contact" className="relative py-16 sm:py-20">
       <ServicePickerSection
  onPick={(slug) => router.push(`/services/${slug}`)}
  onOpenEstimate={() => router.push("/services")}
  whatsappEnabled={whatsappEnabled}
  whatsappHref={whatsappHref}
/>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-white border-t border-gray-200 px-4">
        <p className="text-lg font-extrabold">THEVULGO · Valencia</p>
        <p className="text-gray-500 mt-2">
          © {new Date().getFullYear()} TheVulgo. All rights reserved.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-gray-600">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 bg-white">
            <MapPin className="h-4 w-4" /> Valencia, Spain
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 bg-white">
            <Clock className="h-4 w-4" /> Fast response
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 bg-white">
            <ShieldCheck className="h-4 w-4" /> Clean finish
          </span>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 px-4">
        <div className="mx-auto max-w-md rounded-2xl border border-yellow-400 bg-white/95 backdrop-blur shadow-2xl p-3 flex items-center justify-between">
          <div className="text-left">
            <p className="text-xs text-gray-500">Valencia</p>
            <p className="text-sm font-extrabold text-black">Get estimate</p>
          </div>
          <button
            onClick={goEstimate}
            className="rounded-xl bg-yellow-400 px-4 py-2 text-xs font-extrabold text-black shadow-md"
          >
            Estimate →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= Components ================= */

const FAQS = [
  {
    q: "Do you work outside Valencia?",
    a: "THEVULGO primarily serves Valencia and nearby areas. Requests outside the city may still be accepted depending on distance and schedule — simply share your location to confirm availability.",
  },
  {
    q: "Can you provide a price before the visit?",
    a: "In most cases, yes. After reviewing photos and a short description, THEVULGO can provide an estimated price range. Final pricing is confirmed once the full scope and wall conditions are verified.",
  },
  {
    q: "How quickly can the service be scheduled?",
    a: "Many standard jobs can be scheduled the same day or next day depending on availability. Clients always receive a clear confirmation window before the appointment is finalized.",
  },
  {
    q: "Do you bring professional tools and hardware?",
    a: "Yes. THEVULGO arrives fully equipped with professional tools and standard mounting hardware. If specialized anchors or materials are required, suitable options are discussed before installation.",
  },
  {
    q: "Do you handle complex electrical rewiring?",
    a: "No. THEVULGO performs basic electrical tasks such as light fixtures, switches, sockets, and clean mounting work. Complex rewiring must be completed by a licensed electrician.",
  },
  {
    q: "Is it possible to book without an on-site inspection?",
    a: "Yes. Many installations can be confirmed remotely using photos and measurements. If any technical details remain unclear, additional information will be requested before confirming the booking.",
  },
  {
    q: "What information is required to get started?",
    a: "To provide an accurate quote, THEVULGO typically requires 2–4 photos of the area, the service requested, your location in Valencia, and your preferred time window.",
  },
  {
    q: "Is cleanup included after the job?",
    a: "Absolutely. Clean workmanship is a core standard of THEVULGO. The work area is left tidy, and minor debris is removed after installation.",
  },
];



function Chip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 shadow-sm">
      <span className="text-gray-700">{icon}</span>
      <span>{text}</span>
    </span>
  );
}

function FeatureCard({
  title,
  text,
  badge,
}: {
  title: string;
  text: string;
  badge?: string;
}) {
  return (
    <div className="bg-white border border-yellow-400 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-extrabold">{title}</h3>
        {badge ? (
          <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-red-500 text-white">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-gray-700">{text}</p>
    </div>
  );
}

function CategoryCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white border border-yellow-400 rounded-2xl p-6 sm:p-7 shadow-xl md:hover:shadow-2xl transition md:hover:scale-105 text-left">
      <h3 className="text-lg sm:text-xl font-bold text-black">{title}</h3>
      <ul className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base">
        {items.map((t) => (
          <li key={t} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrustStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="select-none">
      <div className="text-2xl sm:text-3xl font-extrabold text-yellow-400">{value}</div>
      <div className="mt-1 text-sm font-semibold text-gray-900">{label}</div>
    </div>
  );
}

function WhyCard({
  icon,
  badge,
  title,
  text,
}: {
  icon: React.ReactNode;
  badge: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-yellow-400 bg-white p-6 shadow-xl transition-transform duration-200 hover:scale-[1.02]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-yellow-200/40 blur-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
          {icon}
        </div>

        <span className="rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-base font-extrabold text-black">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
    </div>
  );
}

function StepCard({
  n,
  title,
  text,
  icon,
}: {
  n: string;
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-yellow-400 rounded-2xl p-6 shadow-xl md:hover:shadow-2xl transition md:hover:scale-[1.02] text-left">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
          {icon}
        </div>
        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-red-500 text-white">
          Step {n}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-extrabold text-black">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

function GuideCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white border border-yellow-400 rounded-2xl p-6 shadow-xl md:hover:shadow-2xl transition md:hover:scale-[1.02] text-left">
      <h3 className="text-lg font-extrabold text-black">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

function ProofCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white border border-yellow-400 rounded-2xl p-6 shadow-xl md:hover:shadow-2xl transition md:hover:scale-[1.02] text-left">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
          {icon}
        </div>
        <span className="rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          PRO
        </span>
      </div>
      <h3 className="mt-4 text-lg font-extrabold text-black">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {items.map((t) => (
          <li key={t} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-yellow-400 bg-white shadow-md transition hover:shadow-xl">
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-5 text-left flex items-center justify-between gap-4"
      >
        <span className="font-extrabold text-black">{q}</span>
        <span
          className={`text-yellow-400 font-extrabold transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== Service Picker ===== */

function ServicePickerSection({
  onPick,
  onOpenEstimate,
  whatsappEnabled,
  whatsappHref,
}: {
  onPick: (slug: string) => void;
  onOpenEstimate: () => void;
  whatsappEnabled: boolean;
  whatsappHref: string;
}) {
  const items = [
  {
    title: "TV Mounting & Wall Installations",
    desc: "<strong>TVs</strong>, shelves, mirrors, cable routing.",
    slug: "tv-mounting",
    badge: "Top",
  },
  {
    title: "Furniture Assembly",
    desc: "<strong>IKEA</strong>, wardrobes, beds, cabinets.",
    slug: "furniture",
    badge: "Popular",
  },
  {
    title: "Electrical Services",
    desc: "<strong>Lights</strong>, switches, sockets, basics.",
    slug: "electrical",
    badge: "Safe",
  },
  {
    title: "Plumbing",
    desc: "<strong>Faucets</strong>, sinks, toilets, leaks.",
    slug: "plumbing",
    badge: "Fast",
  },
  {
    title: "Home Repairs",
    desc: "<strong>Small</strong> fixes and maintenance.",
    slug: "repairs",
    badge: "Quick",
  },
  {
    title: "Walls & Drywall Repairs",
    desc: "<strong>Patching</strong>, anchors, drilling, repairs.",
    slug: "drywall",
    badge: "Pro",
  },
  {
    title: "Doors & Hardware",
    desc: "<strong>Handles</strong>, hinges, locks, closers.",
    slug: "doors",
    badge: "Fix",
  },
  {
    title: "Smart Home & Devices",
    desc: "<strong>Cameras</strong>, locks, doorbells, setup.",
    slug: "smart-home",
    badge: "Smart",
  },
  {
    title: "Kitchen Installations",
    desc: "<strong>Cabinets</strong>, shelves, lights, fittings.",
    slug: "kitchen",
    badge: "Kitchen",
  },
  {
    title: "Bathroom Installations",
    desc: "<strong>Mirrors</strong>, cabinets, holders, fittings.",
    slug: "bathroom",
    badge: "Bath",
  },
  {
    title: "Apartment & Move-In Setup",
    desc: "<strong>Curtains</strong>, furniture, move-in installs.",
    slug: "move-in",
    badge: "Setup",
  },
  {
    title: "House Exterior & Outdoor Work",
    desc: "<strong>Fences</strong>, roofs, facades, outdoor repairs.",
    slug: "exterior",
    badge: "House",
  },
];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 overflow-visible">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute left-1/2 top-[-160px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />
        <div className="absolute right-[-160px] top-[120px] h-[420px] w-[420px] rounded-full bg-yellow-100/70 blur-3xl" />
        <div className="absolute left-[-180px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-yellow-100/60 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 flex py-8 max-[720px]:py-6 max-[640px]:py-5">
       <div className="w-full max-w-6xl mx-auto rounded-[28px] border border-yellow-400 bg-white shadow-xl p-8 pb-10 flex flex-col">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Estimate • Pick a category
            </div>

            <h2 className="mt-4 font-extrabold tracking-tight text-black text-4xl max-[720px]:text-3xl max-[640px]:text-2xl">
              Choose your service
            </h2>

            <p className="mt-3 text-gray-600 text-base max-[720px]:text-sm max-[640px]:text-xs">
              Select a service to get an instant estimate
            </p>

            {/* Dual CTA */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg transition hover:scale-[1.02]"
              >
                Open all services <ArrowRight className="h-4 w-4" />
              </button>

              {whatsappEnabled ? (
                <a
                  href={whatsappHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:scale-[1.02]"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp
                </a>
              ) : (
                <button
                  disabled
                  title="WhatsApp number not set yet"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md opacity-60 cursor-not-allowed"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 max-[720px]:mt-5 flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-[720px]:gap-3 max-[640px]:gap-2 content-start pb-1">
            {items.map((x) => (
              <button
                key={x.slug}
                onClick={() => onPick(x.slug)}
                className="group relative rounded-2xl border border-yellow-400 bg-white text-left shadow-md transition-all duration-200 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-[2px] hover:bg-yellow-50/40 hover:border-yellow-500 p-6 max-[720px]:p-4 max-[640px]:p-3 flex flex-col justify-between min-h-[152px] max-[720px]:min-h-[126px] max-[640px]:min-h-[110px]"
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

                 <p
  className="mt-2 text-gray-800 leading-relaxed text-sm max-[820px]:hidden"
  dangerouslySetInnerHTML={{ __html: x.desc }}
/>

                  <div className="mt-4 inline-flex items-center gap-2 font-extrabold text-black text-sm max-[720px]:text-[13px] max-[640px]:text-[12px]">
  See details
  <span className="text-yellow-400 transition-transform duration-200 group-hover:translate-x-1">
    →
  </span>
</div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 text-center text-xs text-gray-500">
            Transparent pricing — know the cost before booking
          </div>
        </div>
      </div>
    </section>
  );
}
