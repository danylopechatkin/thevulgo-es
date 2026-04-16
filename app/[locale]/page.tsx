"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Wrench,
  ArrowRight,
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
  const locale = useLocale();
  const t = useTranslations("home");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goEstimate = () => router.push(`/${locale}/estimate`);

  const whatsappEnabled = true;

  const WHATSAPP_NUMBER = "14379074913";

  const whatsappText = encodeURIComponent(
    t("whatsappText")
  );

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  const FAQS = [
    {
      q: t("faq.items.0.q"),
      a: t("faq.items.0.a"),
    },
    {
      q: t("faq.items.1.q"),
      a: t("faq.items.1.a"),
    },
    {
      q: t("faq.items.2.q"),
      a: t("faq.items.2.a"),
    },
    {
      q: t("faq.items.3.q"),
      a: t("faq.items.3.a"),
    },
    {
      q: t("faq.items.4.q"),
      a: t("faq.items.4.a"),
    },
    {
      q: t("faq.items.5.q"),
      a: t("faq.items.5.a"),
    },
    {
      q: t("faq.items.6.q"),
      a: t("faq.items.6.a"),
    },
    {
      q: t("faq.items.7.q"),
      a: t("faq.items.7.a"),
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white text-black font-sans">
      {/* HERO */}
      <section
        id="top"
        className="relative min-h-[88vh] overflow-hidden bg-white px-4 pt-24 text-center flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 -top-28 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
          <div className="absolute right-10 top-28 h-[380px] w-[380px] rounded-full bg-yellow-100/70 blur-3xl" />
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400 text-sm font-medium text-gray-800 mb-6 bg-white/80 backdrop-blur shadow-sm">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            {t("hero.badge")}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[56px] lg:text-6xl font-extrabold text-black leading-tight mb-6 text-center">
            <span className="block">{t("hero.title1")}</span>

            <span className="block text-yellow-400 tracking-[0.08em] mt-3">
              {t("hero.title2")}
            </span>

            <span className="block mt-3">{t("hero.title3")}</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {t("hero.descriptionBefore")}{" "}
            <span className="font-semibold text-gray-800">
              {t("hero.descriptionHighlight")}
            </span>
            . {t("hero.descriptionAfter")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={() => router.push(`/${locale}/services`)}
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold shadow-md md:hover:scale-105 transition"
            >
              {t("hero.exploreServices")}
            </button>

            <button
              onClick={goEstimate}
              className="bg-white border border-gray-300 text-black px-8 py-4 rounded-2xl font-semibold shadow-md md:hover:scale-105 transition"
            >
              {t("hero.estimatePrice")}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-700">
            <Chip icon={<Clock className="h-4 w-4" />} text={t("hero.chips.fastReplies")} />
            <Chip icon={<Check className="h-4 w-4" />} text={t("hero.chips.cleanFinish")} />
            <Chip icon={<Wrench className="h-4 w-4" />} text={t("hero.chips.proTools")} />
            <Chip icon={<MapPin className="h-4 w-4" />} text={t("hero.chips.valenciaArea")} />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-10 px-4 bg-white">
        <div className="w-full max-w-7xl mx-auto bg-white border border-yellow-400 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <TrustStat value="24h" label={t("trust.typicalResponse")} />
            <TrustStat value="Clean" label={t("trust.finishDetails")} />
            <TrustStat value="Valencia" label={t("trust.localFocus")} />
            <TrustStat value="Transparent" label={t("trust.pricingScope")} />
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section id="services" className="py-16 sm:py-20 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">{t("featured.title")}</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              {t("featured.subtitle")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title={t("featured.items.0.title")}
              text={t("featured.items.0.text")}
              badge={t("featured.items.0.badge")}
            />
            <FeatureCard
              title={t("featured.items.1.title")}
              text={t("featured.items.1.text")}
              badge={t("featured.items.1.badge")}
            />
            <FeatureCard
              title={t("featured.items.2.title")}
              text={t("featured.items.2.text")}
              badge={t("featured.items.2.badge")}
            />
            <FeatureCard
              title={t("featured.items.3.title")}
              text={t("featured.items.3.text")}
              badge={t("featured.items.3.badge")}
            />
            <FeatureCard
              title={t("featured.items.4.title")}
              text={t("featured.items.4.text")}
              badge={t("featured.items.4.badge")}
            />
            <FeatureCard
              title={t("featured.items.5.title")}
              text={t("featured.items.5.text")}
              badge={t("featured.items.5.badge")}
            />
            <FeatureCard
              title={t("featured.items.6.title")}
              text={t("featured.items.6.text")}
              badge={t("featured.items.6.badge")}
            />
            <FeatureCard
              title={t("featured.items.7.title")}
              text={t("featured.items.7.text")}
              badge={t("featured.items.7.badge")}
            />
            <FeatureCard
              title={t("featured.items.8.title")}
              text={t("featured.items.8.text")}
              badge={t("featured.items.8.badge")}
            />
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => router.push(`/${locale}/services`)}
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-extrabold text-black shadow-lg transition hover:scale-[1.02]"
            >
              {t("featured.viewAll")} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16 sm:py-20 px-4 bg-white">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">{t("how.title")}</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {t("how.subtitle")}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StepCard
              n="1"
              title={t("how.items.0.title")}
              text={t("how.items.0.text")}
              icon={<Wrench className="h-5 w-5" />}
              stepLabel={t("how.step")}
            />
            <StepCard
              n="2"
              title={t("how.items.1.title")}
              text={t("how.items.1.text")}
              icon={<Camera className="h-5 w-5" />}
              stepLabel={t("how.step")}
            />
            <StepCard
              n="3"
              title={t("how.items.2.title")}
              text={t("how.items.2.text")}
              icon={<MessageCircle className="h-5 w-5" />}
              stepLabel={t("how.step")}
            />
            <StepCard
              n="4"
              title={t("how.items.3.title")}
              text={t("how.items.3.text")}
              icon={<Check className="h-5 w-5" />}
              stepLabel={t("how.step")}
            />
            <StepCard
              n="5"
              title={t("how.items.4.title")}
              text={t("how.items.4.text")}
              icon={<BadgeCheck className="h-5 w-5" />}
              stepLabel={t("how.step")}
            />
            <StepCard
              n="6"
              title={t("how.items.5.title")}
              text={t("how.items.5.text")}
              icon={<Sparkles className="h-5 w-5" />}
              stepLabel={t("how.step")}
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="why" className="relative overflow-hidden px-4 py-16 sm:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
          <div className="absolute right-10 top-28 h-[360px] w-[360px] rounded-full bg-yellow-100/60 blur-3xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              {t("why.badge")}
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              {t("why.title")}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              {t("why.subtitle")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <WhyCard
              icon={<Sparkles className="h-5 w-5" />}
              badge={t("why.items.0.badge")}
              title={t("why.items.0.title")}
              text={t("why.items.0.text")}
            />
            <WhyCard
              icon={<Zap className="h-5 w-5" />}
              badge={t("why.items.1.badge")}
              title={t("why.items.1.title")}
              text={t("why.items.1.text")}
            />
            <WhyCard
              icon={<Wrench className="h-5 w-5" />}
              badge={t("why.items.2.badge")}
              title={t("why.items.2.title")}
              text={t("why.items.2.text")}
            />
            <WhyCard
              icon={<ShieldCheck className="h-5 w-5" />}
              badge={t("why.items.3.badge")}
              title={t("why.items.3.title")}
              text={t("why.items.3.text")}
            />
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-400 bg-white p-6 shadow-2xl sm:p-7">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-lg font-extrabold text-black">{t("why.ctaTitle")}</p>
                <p className="mt-1 text-sm text-gray-600">
                  {t("why.ctaText")}
                </p>
              </div>

              <button
                onClick={goEstimate}
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-black shadow-lg transition-transform duration-200 hover:scale-[1.02]"
              >
                {t("why.ctaButton")} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS & GUIDES */}
      <section id="guides" className="py-16 sm:py-20 px-4 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">{t("guides.title")}</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              {t("guides.subtitle")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GuideCard title={t("guides.items.0.title")} text={t("guides.items.0.text")} />
            <GuideCard title={t("guides.items.1.title")} text={t("guides.items.1.text")} />
            <GuideCard title={t("guides.items.2.title")} text={t("guides.items.2.text")} />
            <GuideCard title={t("guides.items.3.title")} text={t("guides.items.3.text")} />
            <GuideCard title={t("guides.items.4.title")} text={t("guides.items.4.text")} />
            <GuideCard title={t("guides.items.5.title")} text={t("guides.items.5.text")} />
            <GuideCard title={t("guides.items.6.title")} text={t("guides.items.6.text")} />
            <GuideCard title={t("guides.items.7.title")} text={t("guides.items.7.text")} />
            <GuideCard title={t("guides.items.8.title")} text={t("guides.items.8.text")} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20 px-4 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">{t("faq.title")}</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              {t("faq.subtitle")}
            </p>
          </div>

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

      {/* CONTACT / PICKER */}
      <section id="contact" className="relative overflow-hidden py-16 sm:py-20">
        <ServicePickerSection
          onPick={(slug) => router.push(`/${locale}/services/${slug}`)}
          onOpenEstimate={() => router.push(`/${locale}/services`)}
          whatsappEnabled={whatsappEnabled}
          whatsappHref={whatsappHref}
        />
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-white border-t border-gray-200 px-4">
        <p className="text-lg font-extrabold">{t("footer.brand")}</p>
        <p className="text-gray-500 mt-2">
          © {new Date().getFullYear()} {t("footer.rights")}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-gray-600">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 bg-white">
            <MapPin className="h-4 w-4" /> {t("footer.location")}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 bg-white">
            <Clock className="h-4 w-4" /> {t("footer.fastResponse")}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 bg-white">
            <ShieldCheck className="h-4 w-4" /> {t("footer.cleanFinish")}
          </span>
        </div>
      </footer>
    </div>
  );
}

/* ================= Components ================= */

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
  stepLabel,
}: {
  n: string;
  title: string;
  text: string;
  icon: React.ReactNode;
  stepLabel: string;
}) {
  return (
    <div className="bg-white border border-yellow-400 rounded-2xl p-6 shadow-xl md:hover:shadow-2xl transition md:hover:scale-[1.02] text-left">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
          {icon}
        </div>
        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-red-500 text-white">
          {stepLabel} {n}
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
  const t = useTranslations("home");
  const items = [
    {
      title: t("picker.items.0.title"),
      desc: t.raw("picker.items.0.desc") as string,
      slug: "tv-mounting",
      badge: t("picker.items.0.badge"),
    },
    {
      title: t("picker.items.1.title"),
      desc: t.raw("picker.items.1.desc") as string,
      slug: "furniture",
      badge: t("picker.items.1.badge"),
    },
    {
      title: t("picker.items.2.title"),
      desc: t.raw("picker.items.2.desc") as string,
      slug: "electrical",
      badge: t("picker.items.2.badge"),
    },
    {
      title: t("picker.items.3.title"),
      desc: t.raw("picker.items.3.desc") as string,
      slug: "plumbing",
      badge: t("picker.items.3.badge"),
    },
    {
      title: t("picker.items.4.title"),
      desc: t.raw("picker.items.4.desc") as string,
      slug: "repairs",
      badge: t("picker.items.4.badge"),
    },
    {
      title: t("picker.items.5.title"),
      desc: t.raw("picker.items.5.desc") as string,
      slug: "drywall",
      badge: t("picker.items.5.badge"),
    },
    {
      title: t("picker.items.6.title"),
      desc: t.raw("picker.items.6.desc") as string,
      slug: "doors",
      badge: t("picker.items.6.badge"),
    },
    {
      title: t("picker.items.7.title"),
      desc: t.raw("picker.items.7.desc") as string,
      slug: "smart-home",
      badge: t("picker.items.7.badge"),
    },
    {
      title: t("picker.items.8.title"),
      desc: t.raw("picker.items.8.desc") as string,
      slug: "kitchen",
      badge: t("picker.items.8.badge"),
    },
    {
      title: t("picker.items.9.title"),
      desc: t.raw("picker.items.9.desc") as string,
      slug: "bathroom",
      badge: t("picker.items.9.badge"),
    },
    {
      title: t("picker.items.10.title"),
      desc: t.raw("picker.items.10.desc") as string,
      slug: "move-in",
      badge: t("picker.items.10.badge"),
    },
    {
      title: t("picker.items.11.title"),
      desc: t.raw("picker.items.11.desc") as string,
      slug: "exterior",
      badge: t("picker.items.11.badge"),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute left-1/2 top-[-160px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />
        <div className="absolute right-[-160px] top-[120px] h-[420px] w-[420px] rounded-full bg-yellow-100/70 blur-3xl" />
        <div className="absolute left-[-180px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-yellow-100/60 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl overflow-x-hidden px-4 py-8 max-[720px]:py-6 max-[640px]:py-5">
        <div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-yellow-400 bg-white p-8 pb-10 shadow-xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              {t("picker.badge")}
            </div>

            <h2 className="mt-4 font-extrabold tracking-tight text-black text-4xl max-[720px]:text-3xl max-[640px]:text-2xl">
              {t("picker.title")}
            </h2>

            <p className="mt-3 text-gray-600 text-base max-[720px]:text-sm max-[640px]:text-xs">
              {t("picker.subtitle")}
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg transition hover:scale-[1.02]"
              >
                {t("picker.openAll")} <ArrowRight className="h-4 w-4" />
              </button>

              {whatsappEnabled ? (
                <a
                  href={whatsappHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:scale-[1.02]"
                >
                  <MessageSquare className="h-4 w-4" /> {t("picker.whatsapp")}
                </a>
              ) : (
                <button
                  disabled
                  title={t("picker.whatsappDisabled")}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md opacity-60 cursor-not-allowed"
                >
                  <MessageSquare className="h-4 w-4" /> {t("picker.whatsapp")}
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
                    {t("picker.seeDetails")}
                    <span className="text-yellow-400 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 text-center text-xs text-gray-500">
            {t("picker.bottomNote")}
          </div>
        </div>
      </div>
    </section>
  );
}