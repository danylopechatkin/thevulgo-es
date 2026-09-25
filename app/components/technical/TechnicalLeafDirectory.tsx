import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTechnicalLeaves, technicalLeafPath, type TechnicalCategoryId } from "@/lib/securityNetworkCatalog";
import { localizedPath } from "@/lib/technicalRoutes";

export default function TechnicalLeafDirectory({ category, locale }: { category: TechnicalCategoryId; locale: string }) {
  const language = locale === "es" ? "es" : "en";
  const isEs = language === "es";
  const leaves = getTechnicalLeaves(category);

  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <p className="text-sm font-black uppercase tracking-[.16em] text-yellow-600">
          {isEs ? "Servicios especializados" : "Specialist services"}
        </p>
        <h2 className="mt-3 text-3xl font-black">
          {isEs ? "Encuentra el servicio para tu proyecto" : "Find the right service for your project"}
        </h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {leaves.map((leaf) => (
            <Link key={leaf.id} href={localizedPath(locale, technicalLeafPath(leaf))} className="group flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-5 font-black transition hover:border-yellow-400 hover:shadow-md">
              <span>{leaf.h1[language]}</span>
              <ArrowRight className="h-5 w-5 shrink-0 transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
