import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export type SmallJobCopy = {
  badge: string;
  title: string;
  intro: string;
  startingPrice: string;
  includedTitle: string;
  includedIntro: string;
  included: string[];
  processTitle: string;
  process: Array<[string, string]>;
  faqTitle: string;
  faqs: Array<[string, string]>;
  relatedTitle: string;
  whatsappMessage: string;
  whatsappLabel: string;
  formLabel: string;
  finalTitle: string;
  finalText: string;
};

type RelatedService = {
  title: string;
  description: string;
  href: string;
};

type Props = {
  locale: string;
  path: string;
  serviceName: string;
  copy: SmallJobCopy;
  related: RelatedService[];
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";

export default function SmallJobLanding({ locale, path, serviceName, copy, related }: Props) {
  const pageUrl = `${baseUrl}/${locale}/${path}`;
  const whatsappHref = `https://wa.me/${phone}?text=${encodeURIComponent(copy.whatsappMessage)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    url: pageUrl,
    areaServed: { "@type": "City", name: "Valencia" },
    provider: {
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: baseUrl,
      telephone: `+${phone}`,
      priceRange: "€€",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "THEVULGO", item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: locale === "es" ? "Manitas" : "Handyman", item: `${baseUrl}/${locale}/handyman-valencia` },
      { "@type": "ListItem", position: 3, name: serviceName, item: pageUrl },
    ],
  };

  return (
    <main className="bg-white pb-20 text-neutral-950 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="border-b border-yellow-200 bg-[radial-gradient(circle_at_top_right,_#fef08a_0,_#fff_42%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-black shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" /> {copy.badge}
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">{copy.intro}</p>
            <div className="mt-7 flex flex-wrap gap-2 text-sm font-bold">
              <span className="rounded-full bg-neutral-950 px-4 py-2 text-white">{copy.startingPrice}</span>
              <span className="rounded-full bg-yellow-100 px-4 py-2">Valencia & nearby</span>
              <span className="rounded-full bg-yellow-100 px-4 py-2">ES / EN</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-black shadow-lg transition hover:bg-yellow-300">
                <MessageCircle className="h-5 w-5" /> {copy.whatsappLabel}
              </a>
              <Link href={`/${locale}/estimate?category=handyman`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-4 font-bold shadow-sm">
                {copy.formLabel} <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-neutral-950 p-7 text-white shadow-2xl">
            <Wrench className="h-9 w-9 text-yellow-400" />
            <h2 className="mt-4 text-3xl font-black">{copy.includedTitle}</h2>
            <p className="mt-3 leading-7 text-neutral-300">{copy.includedIntro}</p>
            <ul className="mt-6 space-y-3">
              {copy.included.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-neutral-700 bg-neutral-900 p-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-center text-3xl font-black sm:text-4xl">{copy.processTitle}</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {copy.process.map(([title, text], index) => (
            <div key={title} className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-black">{index + 1}</span>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-2 leading-7 text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="text-3xl font-black sm:text-4xl">{copy.relatedTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-6 text-neutral-600">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-bold">{locale === "es" ? "Ver servicio" : "View service"}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <h2 className="text-center text-3xl font-black sm:text-4xl">{copy.faqTitle}</h2>
        <div className="mt-8 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 px-6 shadow-sm">
          {copy.faqs.map(([question, answer]) => (
            <details key={question} className="py-5">
              <summary className="cursor-pointer list-none font-black">{question}</summary>
              <p className="mt-3 leading-7 text-neutral-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center lg:px-8">
          <ShieldCheck className="mx-auto h-9 w-9 text-yellow-400" />
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">{copy.finalTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-neutral-300">{copy.finalText}</p>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-black text-black">
            <MessageCircle className="h-5 w-5" /> {copy.whatsappLabel}
          </a>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-neutral-400"><Clock3 className="h-4 w-4" /> {locale === "es" ? "Precio confirmado antes de la visita" : "Price confirmed before the visit"}</p>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-800 bg-neutral-950 p-3 shadow-2xl md:hidden">
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-black text-black">
          <MessageCircle className="h-5 w-5" /> {copy.whatsappLabel}
        </a>
      </div>
    </main>
  );
}
