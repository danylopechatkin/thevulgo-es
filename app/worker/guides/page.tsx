import WorkerPortalHeader from "@/app/worker/components/WorkerPortalHeader";
import { requireWorker } from "@/lib/worker-auth";
import { workerGuides } from "@/lib/worker-guides";
import { ArrowRight, BookOpenCheck, Clock3, ShieldAlert } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Contractor training | THEVULGO",
  robots: { index: false, follow: false, noarchive: true },
};

export default async function WorkerGuidesPage() {
  const { worker } = await requireWorker();

  return (
    <main className="min-h-screen bg-[#f4f4f0] px-3 py-5 text-[#111] sm:px-6 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <WorkerPortalHeader fullName={worker.full_name} />

        <section className="mt-5 overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5">
          <div className="grid lg:grid-cols-[1.2fr_.8fr]">
            <div className="p-6 sm:p-9">
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em]">
                <BookOpenCheck className="h-4 w-4" /> Field standards
              </div>
              <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                Installation & job guide library
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
                Review the relevant guide before every unfamiliar assignment.
                Manufacturer instructions, site conditions and applicable laws
                always take priority.
              </p>
            </div>
            <div className="bg-black p-6 text-white sm:p-9">
              <ShieldAlert className="h-8 w-8 text-yellow-400" />
              <h2 className="mt-5 text-xl font-black">Stop-work rule</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                If the wall, wiring, plumbing, structure or requested scope is
                uncertain, stop before causing damage and contact THEVULGO.
                These guides do not replace trade qualifications.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workerGuides.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/worker/guides/${guide.slug}`}
              className="group flex min-h-64 flex-col rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl hover:ring-yellow-400"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-yellow-400 text-sm font-black">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full bg-[#f4f4f0] px-3 py-1.5 text-[10px] font-black uppercase tracking-[.1em] text-gray-600">
                  {guide.category}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-black leading-tight">
                {guide.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                {guide.summary}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 text-sm font-black">
                <span className="flex items-center gap-2 text-gray-500">
                  <Clock3 className="h-4 w-4" /> {guide.duration}
                </span>
                <span className="flex items-center gap-2 text-yellow-700">
                  Open guide{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
