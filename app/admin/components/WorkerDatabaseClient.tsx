"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarClock,
  ChevronRight,
  Database,
  DollarSign,
  KeyRound,
  Mail,
  Search,
  ShieldAlert,
  Trash2,
  X,
} from "lucide-react";
import AdminNav from "./AdminNav";

type Worker = {
  user_id: string;
  full_name: string;
  email: string;
  phone: string;
  contractor_status: string;
  created_at: string;
  password_created_at?: string | null;
  onboarding_invite_email_status?: string | null;
  onboarding_invite_email_delivered_at?: string | null;
  welcome_email_status?: string | null;
};

type AssignmentOrder = {
  order_number?: number;
  category?: string;
  preferred_date?: string;
  preferred_time?: string;
  scheduled_at?: string;
  total?: number;
  status?: string;
  payment_received_at?: string | null;
  payment_method?: string | null;
  area?: string;
  city?: string;
};
type Assignment = {
  id: string;
  worker_id: string;
  status: string;
  worker_share?: number;
  assigned_at?: string;
  completed_at?: string | null;
  response_status?: string;
  orders?: AssignmentOrder | AssignmentOrder[] | null;
};

export default function WorkerDatabaseClient() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [target, setTarget] = useState<Worker | null>(null);
  const [profile, setProfile] = useState<Worker | null>(null);
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(() => {
    void fetch("/api/admin/workers", { cache: "no-store" }).then(
      async (response) => {
        const body = await response.json();
        setLoading(false);
        if (!response.ok) {
          setError(body.error || "Could not load the worker database.");
          return;
        }
        setWorkers(body.workers || []);
        setAssignments(body.assignments || []);
      },
    );
  }, []);

  useEffect(() => void load(), [load]);

  const assignmentCounts = useMemo(() => {
    const counts = new Map<string, number>();
    assignments.forEach((item) =>
      counts.set(item.worker_id, (counts.get(item.worker_id) || 0) + 1),
    );
    return counts;
  }, [assignments]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return workers.filter((worker) => {
      const matchesStatus =
        status === "all" || worker.contractor_status === status;
      const matchesQuery =
        !needle ||
        [worker.full_name, worker.email, worker.phone, worker.user_id].some(
          (value) => value?.toLowerCase().includes(needle),
        );
      return matchesStatus && matchesQuery;
    });
  }, [query, status, workers]);

  async function deleteCompletely() {
    if (!target || confirmation.trim() !== target.full_name) return;
    setDeleting(true);
    setError("");
    setMessage("");
    const response = await fetch(
      `/api/admin/workers/${target.user_id}?force=true`,
      { method: "DELETE" },
    );
    const body = await response.json();
    setDeleting(false);
    if (!response.ok) {
      setError(body.error || "Could not delete the worker.");
      return;
    }
    setMessage(
      body.archived
        ? `${target.full_name} was deactivated and can no longer sign in. ${body.affectedOrders || 0} linked orders, assignments, photos and audit records were preserved.`
        : `${target.full_name} was removed from the worker database and sign-in system. This email can now be used again.`,
    );
    setTarget(null);
    setConfirmation("");
    setLoading(true);
    load();
  }

  const active = workers.filter(
    (worker) => worker.contractor_status === "active",
  ).length;
  const waiting = workers.filter(
    (worker) => !worker.password_created_at,
  ).length;

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f4f0] p-3 pb-10 text-[#111] sm:p-6">
      <div className="mx-auto max-w-7xl space-y-5">
        <AdminNav />

        <header className="relative overflow-hidden rounded-[2rem] bg-black p-6 text-white shadow-xl sm:p-9">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-black uppercase tracking-[.14em] text-black">
                <Database className="h-4 w-4" /> Supabase workforce registry
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Worker database
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                Every contractor identity with portal status, job history and
                controlled removal from the Spanish system.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <Metric label="Profiles" value={workers.length} />
              <Metric label="Active" value={active} accent />
              <Metric label="Waiting" value={waiting} />
            </div>
          </div>
        </header>

        {message ? (
          <Notice success text={message} />
        ) : error ? (
          <Notice text={error} />
        ) : null}

        <section className="rounded-[2rem] border border-black/5 bg-white p-4 shadow-sm sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex min-h-14 flex-1 items-center gap-3 rounded-2xl border border-black/10 bg-[#fafaf7] px-4 focus-within:border-yellow-400">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search name, email, phone or profile ID"
                className="w-full bg-transparent text-sm outline-none"
              />
            </label>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className="min-h-14 rounded-2xl border border-black/10 bg-white px-4 text-sm font-bold outline-none focus:border-yellow-400"
            >
              <option value="all">All statuses</option>
              <option value="invited">Invited</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
              <option value="deactivated">Deactivated</option>
            </select>
          </div>

          <div className="mt-5 overflow-hidden rounded-3xl border border-black/8">
            <div className="hidden grid-cols-[1.4fr_1.3fr_.7fr_.65fr_.55fr] gap-4 bg-black px-5 py-3 text-[11px] font-black uppercase tracking-wider text-white/60 lg:grid">
              <span>Worker</span>
              <span>Access</span>
              <span>Created</span>
              <span>Jobs</span>
              <span>Action</span>
            </div>
            {loading ? (
              <p className="p-8 text-center text-sm text-gray-500">
                Loading secure database…
              </p>
            ) : filtered.length ? (
              filtered.map((worker) => (
                <article
                  key={worker.user_id}
                  className="grid min-w-0 gap-4 border-t border-black/8 p-5 first:border-t-0 lg:grid-cols-[1.4fr_1.3fr_.7fr_.65fr_.55fr] lg:items-center"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black font-black text-yellow-400">
                      {worker.full_name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <h2 className="truncate font-black">
                        {worker.full_name}
                      </h2>
                      <p className="truncate text-sm text-gray-500">
                        {worker.email}
                      </p>
                      <p className="mt-1 truncate font-mono text-[10px] text-gray-400">
                        {worker.user_id}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Status
                      icon={<KeyRound />}
                      label="Password"
                      value={worker.password_created_at ? "Created" : "Waiting"}
                      ok={Boolean(worker.password_created_at)}
                    />
                    <Status
                      icon={<Mail />}
                      label="Invitation"
                      value={
                        worker.onboarding_invite_email_delivered_at
                          ? "Delivered"
                          : worker.onboarding_invite_email_status || "Not sent"
                      }
                      ok={Boolean(worker.onboarding_invite_email_delivered_at)}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-gray-400 lg:hidden">
                      Created
                    </p>
                    <p className="text-sm font-bold">
                      {new Date(worker.created_at).toLocaleDateString("en-IE")}
                    </p>
                    <span
                      className={`mt-1 inline-block rounded-full px-2 py-1 text-[10px] font-black uppercase ${worker.contractor_status === "active" ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-600"}`}
                    >
                      {worker.contractor_status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 text-yellow-600" />
                    <span className="font-black">
                      {assignmentCounts.get(worker.user_id) || 0}
                    </span>
                    <span className="text-xs text-gray-500">jobs</span>
                  </div>
                  <div className="grid gap-2">
                    <button
                      type="button"
                      onClick={() => setProfile(worker)}
                      className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-black px-3 text-xs font-black text-white transition hover:bg-yellow-400 hover:text-black"
                    >
                      Profile <ChevronRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTarget(worker);
                        setConfirmation("");
                        setError("");
                      }}
                      className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 text-xs font-black text-red-700 transition hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="h-4 w-4" /> Delete
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="p-10 text-center text-sm text-gray-500">
                No workers match this view.
              </div>
            )}
          </div>
        </section>
      </div>

      {profile ? (
        <WorkerFinanceProfile
          worker={profile}
          assignments={assignments.filter(
            (item) => item.worker_id === profile.user_id,
          )}
          onClose={() => setProfile(null)}
        />
      ) : null}

      {target ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-3 backdrop-blur-sm sm:items-center">
          <section
            className="w-full max-w-xl rounded-[2rem] bg-white p-5 shadow-2xl sm:p-7"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-2xl bg-red-100 p-3 text-red-700">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <button
                type="button"
                onClick={() => setTarget(null)}
                className="rounded-xl border p-2"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <h2 className="mt-5 text-2xl font-black">
              Delete worker completely?
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              This removes <strong>{target.full_name}</strong> from Supabase
              Auth, worker profiles, assignments, payouts, messages, documents
              and job photos. Order records remain and receive a permanent audit
              entry. The email can then be registered again.
            </p>
            <label className="mt-5 block text-sm font-bold">
              Type <span className="font-black">{target.full_name}</span> to
              confirm
              <input
                autoFocus
                value={confirmation}
                onChange={(event) => setConfirmation(event.target.value)}
                className="mt-2 min-h-14 w-full rounded-2xl border border-black/15 px-4 outline-none focus:border-red-500"
              />
            </label>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTarget(null)}
                className="min-h-14 rounded-2xl border font-black"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={deleting || confirmation.trim() !== target.full_name}
                onClick={() => void deleteCompletely()}
                className="min-h-14 rounded-2xl bg-red-600 px-3 font-black text-white disabled:cursor-not-allowed disabled:opacity-35"
              >
                {deleting ? "Deleting securely…" : "Delete completely"}
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}

function WorkerFinanceProfile({
  worker,
  assignments,
  onClose,
}: {
  worker: Worker;
  assignments: Assignment[];
  onClose: () => void;
}) {
  const rows = assignments.map((assignment) => ({
    assignment,
    order: assignmentOrder(assignment),
  }));
  const completed = rows.filter(
    ({ assignment, order }) =>
      assignment.status === "completed" ||
      order?.status === "completed" ||
      Boolean(order?.payment_received_at),
  );
  const gross = completed.reduce(
    (sum, { order }) => sum + Number(order?.total || 0),
    0,
  );
  const workerEarned = completed.reduce(
    (sum, { assignment }) => sum + Number(assignment.worker_share || 0),
    0,
  );
  const companyEarned = Math.max(0, gross - workerEarned);
  const upcoming = rows
    .filter(
      ({ order }) =>
        order?.scheduled_at &&
        order.status !== "completed" &&
        order.status !== "cancelled",
    )
    .sort(
      (a, b) =>
        new Date(a.order?.scheduled_at || 0).getTime() -
        new Date(b.order?.scheduled_at || 0).getTime(),
    );
  const past = rows
    .filter(
      ({ order }) =>
        order?.scheduled_at &&
        (order.status === "completed" || order.status === "cancelled"),
    )
    .sort(
      (a, b) =>
        new Date(b.order?.scheduled_at || 0).getTime() -
        new Date(a.order?.scheduled_at || 0).getTime(),
    );

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-sm">
      <section
        className="h-full w-full max-w-3xl overflow-y-auto bg-[#f4f4f0] p-4 shadow-2xl sm:p-7"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[.15em] text-yellow-700">
              Worker 360
            </p>
            <h2 className="mt-2 text-3xl font-black">{worker.full_name}</h2>
            <p className="mt-1 text-sm text-gray-500">
              {worker.email} · {worker.phone || "No phone"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border bg-white p-3"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <FinanceMetric
            label="Gross job value"
            value={`$${gross.toFixed(2)}`}
            icon={<DollarSign />}
          />
          <FinanceMetric
            label="Company earned"
            value={`$${companyEarned.toFixed(2)}`}
            accent
            icon={<Database />}
          />
          <FinanceMetric
            label="Worker earned"
            value={`$${workerEarned.toFixed(2)}`}
            icon={<BriefcaseBusiness />}
          />
          <FinanceMetric
            label="Completed jobs"
            value={String(completed.length)}
            icon={<BadgeCheck />}
          />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <CompactMetric
            label="All assignments"
            value={String(assignments.length)}
          />
          <CompactMetric label="Upcoming" value={String(upcoming.length)} />
          <CompactMetric
            label="Next job"
            value={formatAssignmentDate(upcoming[0]?.order?.scheduled_at)}
          />
          <CompactMetric
            label="Last job"
            value={formatAssignmentDate(past[0]?.order?.scheduled_at)}
          />
        </div>

        <section className="mt-5 rounded-[2rem] bg-black p-5 text-white shadow-lg">
          <div className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-yellow-400" />
            <h3 className="text-xl font-black">Next assigned jobs</h3>
          </div>
          <div className="mt-4 space-y-3">
            {upcoming.length ? (
              upcoming.map(({ assignment, order }) => (
                <AssignmentRow
                  key={assignment.id}
                  assignment={assignment}
                  order={order}
                  dark
                />
              ))
            ) : (
              <p className="py-5 text-sm text-white/50">
                No upcoming jobs assigned.
              </p>
            )}
          </div>
        </section>

        <section className="mt-5 rounded-[2rem] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="h-5 w-5 text-yellow-600" />
            <h3 className="text-xl font-black">Complete job history</h3>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Every order assigned to this contractor since the profile was
            created.
          </p>
          <div className="mt-4 space-y-3">
            {rows.length ? (
              rows
                .sort(
                  (a, b) =>
                    new Date(
                      b.order?.scheduled_at || b.assignment.assigned_at || 0,
                    ).getTime() -
                    new Date(
                      a.order?.scheduled_at || a.assignment.assigned_at || 0,
                    ).getTime(),
                )
                .map(({ assignment, order }) => (
                  <AssignmentRow
                    key={assignment.id}
                    assignment={assignment}
                    order={order}
                  />
                ))
            ) : (
              <p className="py-8 text-center text-sm text-gray-500">
                No job history yet.
              </p>
            )}
          </div>
        </section>
      </section>
    </div>
  );
}

function AssignmentRow({
  assignment,
  order,
  dark = false,
}: {
  assignment: Assignment;
  order: AssignmentOrder | null;
  dark?: boolean;
}) {
  return (
    <div
      className={`grid gap-3 rounded-2xl p-4 sm:grid-cols-[1fr_auto] sm:items-center ${dark ? "bg-white/10" : "bg-[#f5f5f1]"}`}
    >
      <div>
        <p className="font-black">
          TVG-ES-{String(order?.order_number || 0).padStart(5, "0")} ·{" "}
          {order?.category || "Service"}
        </p>
        <p
          className={`mt-1 text-sm ${dark ? "text-white/55" : "text-gray-500"}`}
        >
          {formatAssignmentFullDate(order?.scheduled_at)} ·{" "}
          {[order?.area, order?.city].filter(Boolean).join(", ") ||
            "Location unavailable"}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Pill value={assignment.status} dark={dark} />
          <Pill
            value={assignment.response_status || "pending response"}
            dark={dark}
          />
          {order?.payment_received_at ? (
            <Pill
              value={`paid · ${friendlyPayment(order.payment_method)}`}
              success
            />
          ) : null}
        </div>
      </div>
      <div className="sm:text-right">
        <p className="text-lg font-black">
          C${Number(order?.total || 0).toFixed(2)}
        </p>
        <p
          className={`text-xs font-bold ${dark ? "text-yellow-400" : "text-yellow-700"}`}
        >
          Worker: C${Number(assignment.worker_share || 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

function FinanceMetric({
  label,
  value,
  icon,
  accent = false,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-4 ${accent ? "bg-yellow-400" : "bg-white shadow-sm"}`}
    >
      <div className="flex items-center gap-2 text-gray-500 [&_svg]:h-4 [&_svg]:w-4">
        {icon}
        <p className="text-[9px] font-black uppercase tracking-wider">
          {label}
        </p>
      </div>
      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}
function CompactMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-2xl bg-white p-3 shadow-sm">
      <p className="truncate text-[9px] font-black uppercase tracking-wider text-gray-400">
        {label}
      </p>
      <p className="mt-1 truncate text-sm font-black">{value}</p>
    </div>
  );
}
function Pill({
  value,
  dark = false,
  success = false,
}: {
  value: string;
  dark?: boolean;
  success?: boolean;
}) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[9px] font-black uppercase ${success ? "bg-emerald-100 text-emerald-800" : dark ? "bg-white/10 text-white/70" : "bg-white text-gray-600"}`}
    >
      {value.replaceAll("_", " ")}
    </span>
  );
}
function assignmentOrder(assignment: Assignment) {
  const order = assignment.orders;
  return Array.isArray(order) ? order[0] || null : order || null;
}
function formatAssignmentDate(value?: string) {
  return value
    ? new Date(value).toLocaleDateString("en-IE", {
        timeZone: "Europe/Madrid",
      })
    : "—";
}
function formatAssignmentFullDate(value?: string) {
  return value
    ? new Date(value).toLocaleString("en-IE", {
        timeZone: "Europe/Madrid",
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "Date unavailable";
}
function friendlyPayment(value?: string | null) {
  if (value === "e_transfer") return "Bank transfer / Bizum";
  if (value === "cash") return "Cash";
  return value || "recorded";
}

function Metric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div
      className={`min-w-20 rounded-2xl px-3 py-3 text-center ${accent ? "bg-yellow-400 text-black" : "bg-white/10"}`}
    >
      <p className="text-xl font-black">{value}</p>
      <p
        className={`text-[9px] font-black uppercase tracking-wider ${accent ? "text-black/60" : "text-white/50"}`}
      >
        {label}
      </p>
    </div>
  );
}

function Status({
  icon,
  label,
  value,
  ok,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  ok: boolean;
}) {
  return (
    <div className="min-w-0 rounded-xl bg-[#f5f5f1] p-2.5">
      <div className="flex items-center gap-1 text-gray-400 [&_svg]:h-3.5 [&_svg]:w-3.5">
        {icon}
        <span className="truncate font-black uppercase">{label}</span>
      </div>
      <p
        className={`mt-1 truncate font-black ${ok ? "text-emerald-700" : "text-gray-600"}`}
      >
        {value}
      </p>
    </div>
  );
}

function Notice({
  text,
  success = false,
}: {
  text: string;
  success?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border p-4 text-sm font-bold ${success ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-red-200 bg-red-50 text-red-800"}`}
    >
      {success ? (
        <BadgeCheck className="h-5 w-5 shrink-0" />
      ) : (
        <ShieldAlert className="h-5 w-5 shrink-0" />
      )}
      {text}
    </div>
  );
}
