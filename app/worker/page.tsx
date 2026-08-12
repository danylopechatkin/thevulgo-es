import { requireWorker } from "@/lib/worker-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import {
  Banknote,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarClock,
  ShieldAlert,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import WorkerPortalHeader from "./components/WorkerPortalHeader";
import WorkerSchedule, {
  type WorkerScheduleJob,
} from "./components/WorkerSchedule";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Contractor portal | THEVULGO",
  robots: { index: false, follow: false, noarchive: true },
};
export default async function WorkerPage() {
  const { worker } = await requireWorker();
  const admin = getSupabaseAdmin();
  const { data: assignments } = await admin
    .from("worker_assignments")
    .select(
      "id, access_token, status, response_status, worker_share, assigned_at, access_revoked_at, orders(order_number, full_name, city, area, preferred_date, preferred_time, total, category)",
    )
    .eq("worker_id", worker.user_id)
    .order("assigned_at", { ascending: false });
  const activeAssignments = (assignments || []).filter(
    (assignment) => !assignment.access_revoked_at,
  );
  const scheduleJobs: WorkerScheduleJob[] = activeAssignments.flatMap(
    (assignment) => {
      const order = Array.isArray(assignment.orders)
        ? assignment.orders[0]
        : assignment.orders;
      if (!order?.preferred_date) return [];
      return [
        {
          id: assignment.id,
          accessToken: assignment.access_token,
          orderNumber: order.order_number,
          date: order.preferred_date,
          time: order.preferred_time?.slice(0, 5) || "",
          area: order.area || "",
          city: order.city || "",
          category: order.category || "",
          share: Number(assignment.worker_share || 0),
          status:
            assignment.response_status === "accepted"
              ? assignment.status
              : assignment.response_status || "pending",
        },
      ];
    },
  );
  const { data: ledger } = await admin
    .from("worker_financial_ledger")
    .select("id, entry_type, amount, status, due_at, settled_at, created_at, orders(order_number, category)")
    .eq("worker_id", worker.user_id)
    .order("created_at", { ascending: false });
  const assignmentIds = activeAssignments.map((assignment) => assignment.id);
  const cashRows = assignmentIds.length
    ? (
        await admin
          .from("worker_cash_records")
          .select("assignment_id, cash_amount, company_amount_due, remittance_status, remittance_due_at")
          .in("assignment_id", assignmentIds)
      ).data || []
    : [];
  const pendingPayout = (ledger || [])
    .filter(
      (entry) =>
        entry.entry_type === "online_job_earning" && entry.status === "pending",
    )
    .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
  const paidEarnings = (ledger || [])
    .filter(
      (entry) =>
        entry.entry_type === "online_job_earning" && entry.status === "paid",
    )
    .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
  const cashDue = cashRows
    .filter((record) => record.remittance_status !== "remitted")
    .reduce((sum, record) => sum + Number(record.company_amount_due || 0), 0);
  return (
    <main className="min-h-screen bg-[#f4f4f0] px-3 py-5 text-[#111] sm:px-6 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <WorkerPortalHeader fullName={worker.full_name} />

        <section className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em]">
              <BriefcaseBusiness className="h-4 w-4" /> Assigned work
            </div>
            <h1 className="mt-5 text-3xl font-black sm:text-4xl">
              Hi, {worker.full_name.split(" ")[0]}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Your active jobs, secure instructions and expected contractor
              share are kept together here.
            </p>
          </div>
          <Link
            href="/worker/guides"
            className="group rounded-[2rem] bg-yellow-400 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
          >
            <BookOpenCheck className="h-8 w-8" />
            <h2 className="mt-5 text-2xl font-black">Training library</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-black/65">
              Review installation standards, fixing methods, safety boundaries
              and job closeout steps.
            </p>
            <span className="mt-5 inline-flex font-black">Open guides →</span>
          </Link>
        </section>

        <WorkerSchedule jobs={scheduleJobs} />

        <section className="mt-5 rounded-[2rem] bg-[#111] p-5 text-white shadow-xl sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.15em] text-yellow-400">
                Private contractor finance
              </p>
              <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                My money
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Online job earnings are reviewed for the next Monday payout.
              </p>
            </div>
            <WalletCards className="h-9 w-9 text-yellow-400" />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="rounded-2xl bg-yellow-400 p-4 text-black">
              <CalendarClock className="h-5 w-5" />
              <p className="mt-4 text-[10px] font-black uppercase tracking-[.12em] text-black/60">
                Next Monday payout
              </p>
              <b className="mt-1 block text-2xl">C${pendingPayout.toFixed(2)}</b>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <WalletCards className="h-5 w-5 text-yellow-400" />
              <p className="mt-4 text-[10px] font-black uppercase tracking-[.12em] text-gray-400">
                Online earnings paid
              </p>
              <b className="mt-1 block text-2xl">C${paidEarnings.toFixed(2)}</b>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <Banknote className="h-5 w-5 text-yellow-400" />
              <p className="mt-4 text-[10px] font-black uppercase tracking-[.12em] text-gray-400">
                Cash due to company
              </p>
              <b className={`mt-1 block text-2xl ${cashDue > 0 ? "text-red-300" : ""}`}>
                C${cashDue.toFixed(2)}
              </b>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <BriefcaseBusiness className="h-5 w-5 text-yellow-400" />
              <p className="mt-4 text-[10px] font-black uppercase tracking-[.12em] text-gray-400">
                Active jobs
              </p>
              <b className="mt-1 block text-2xl">{activeAssignments.length}</b>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.14em] text-yellow-700">
                Private assignments
              </p>
              <h2 className="mt-1 text-2xl font-black">My jobs</h2>
            </div>
            <span className="rounded-full bg-[#f4f4f0] px-3 py-1.5 text-xs font-black text-gray-600">
              {activeAssignments.length}{" "}
              active
            </span>
          </div>
          <div className="mt-6 grid gap-4">
            {activeAssignments.length ? (
              activeAssignments
                .map((assignment) => {
                  const order = Array.isArray(assignment.orders)
                    ? assignment.orders[0]
                    : assignment.orders;
                  return (
                    <Link
                      key={assignment.id}
                      href={`/worker/jobs/${assignment.access_token}`}
                      className="rounded-3xl border border-yellow-300 bg-[#fffdf7] p-5 transition hover:border-yellow-500 hover:shadow-lg"
                    >
                      <div className="flex justify-between gap-3">
                        <b>
                          TVG-ES-{String(order?.order_number).padStart(5, "0")}
                        </b>
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-black">
                          {(assignment.response_status === "accepted"
                            ? assignment.status
                            : assignment.response_status || "pending"
                          ).replaceAll("_", " ")}
                        </span>
                      </div>
                      <p className="mt-3 text-lg font-black">
                        {order?.preferred_date} ·{" "}
                        {order?.preferred_time?.slice(0, 5)}
                      </p>
                      <p className="mt-1 text-gray-600">
                        {order?.area}, {order?.city}
                      </p>
                      <p className="mt-3 font-black">
                        Your expected share: C$
                        {Number(assignment.worker_share).toFixed(2)}
                      </p>
                    </Link>
                  );
                })
            ) : (
              <div className="rounded-3xl border border-dashed border-black/15 bg-[#fafafa] p-8 text-center">
                <ShieldAlert className="mx-auto h-7 w-7 text-yellow-600" />
                <p className="mt-3 font-black">No jobs assigned yet</p>
                <p className="mt-1 text-sm text-gray-500">
                  New assignments will appear here automatically.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
