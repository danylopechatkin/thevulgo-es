import Link from "next/link";

export default function RelatedJobs({ locale }: { locale: string }) {
  const es = locale === "es";
  const jobs = es ? [["Colgar TV", "/es/montaje-tv-valencia"], ["Montar muebles", "/es/montaje-muebles-valencia"], ["Manitas", "/es/handyman-valencia"]] : [["Mount a TV", "/en/montaje-tv-valencia"], ["Assemble furniture", "/en/montaje-muebles-valencia"], ["Handyman visit", "/en/handyman-valencia"]];
  return <aside className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"><h2 className="text-lg font-black">{es ? "Ya que estamos allí" : "While we’re there"}</h2><p className="mt-1 text-sm text-neutral-600">{es ? "Agrupa varios trabajos en una visita y ahorra tiempo." : "Bundle several jobs into one visit and save time."}</p><div className="mt-4 flex flex-wrap gap-2">{jobs.map(([label, href]) => <Link key={href} href={href} className="rounded-full border border-neutral-300 bg-white px-3 py-2 text-sm font-bold hover:border-black">{label}</Link>)}</div></aside>;
}
