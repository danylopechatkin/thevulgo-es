"use client";

import { useEffect, useState } from "react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  FileBadge,
  IdCard,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Send,
  Trash2,
  Upload,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import AdminNav from "./AdminNav";

type Worker = {
  user_id: string;
  full_name: string;
  email: string;
  phone: string;
  primary_city?: string;
  service_cities?: string[];
  contractor_status: string;
  legal_first_name: string;
  legal_last_name: string;
  residential_address: string;
  admin_onboarding_notes?: string;
  password_created_at?: string | null;
  data_policy_accepted_at?: string | null;
  data_policy_version?: string | null;
  onboarding_invite_email_status?: string | null;
  onboarding_invite_sent_at?: string | null;
  onboarding_invite_email_delivered_at?: string | null;
  onboarding_invite_email_opened_at?: string | null;
  onboarding_invite_email_error?: string | null;
  welcome_email_status?: string | null;
  welcome_email_sent_at?: string | null;
  welcome_email_delivered_at?: string | null;
  welcome_email_opened_at?: string | null;
  welcome_email_error?: string | null;
};
type WorkerActivity = {
  id: string;
  worker_id: string;
  event_type: string;
  detail: string;
  metadata?: Record<string, unknown>;
  created_at: string;
};
type WorkerAssignment = {
  id: string;
  order_id: string;
  worker_id: string;
  status: string;
  response_status?: "pending" | "accepted" | "declined";
  assigned_at?: string | null;
  email_link_viewed_at?: string | null;
  accepted_at?: string | null;
  declined_at?: string | null;
  worker_email_status?: string | null;
  worker_email_delivery_status?: string | null;
  worker_notified_at?: string | null;
  worker_email_last_event_at?: string | null;
  worker_email_delivered_at?: string | null;
  worker_email_opened_at?: string | null;
  response_email_kind?: "accepted" | "declined" | null;
  response_email_status?: string | null;
  response_email_sent_at?: string | null;
  response_email_last_event_at?: string | null;
  response_email_delivered_at?: string | null;
  response_email_opened_at?: string | null;
  orders?:
    | { order_number?: number; category?: string; preferred_date?: string }
    | Array<{
        order_number?: number;
        category?: string;
        preferred_date?: string;
      }>
    | null;
};
type WorkerForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  primaryCity: string;
  residentialAddress: string;
  notes: string;
};
const emptyForm: WorkerForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  primaryCity: "Valencia",
  residentialAddress: "",
  notes: "",
};

export default function WorkersClient() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [activity, setActivity] = useState<WorkerActivity[]>([]);
  const [assignments, setAssignments] = useState<WorkerAssignment[]>([]);
  const [selectedWorkerId, setSelectedWorkerId] = useState<string | null>(null);
  const [form, setForm] = useState<WorkerForm>(emptyForm);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">(
    "success",
  );
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  const load = () =>
    void fetch("/api/admin/workers")
      .then((response) => response.json())
      .then((body) => {
        setWorkers(body.workers || []);
        setActivity(body.activity || []);
        setAssignments(body.assignments || []);
      });

  useEffect(load, []);

  const update = (field: keyof WorkerForm, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  async function createWorker(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement | null;
    const sendInvite = submitter?.value !== "save-only";
    setSaving(true);
    setMessage("");
    const response = await fetch("/api/admin/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, sendInvite }),
    });
    const body = await response.json();
    setSaving(false);
    setMessageType(response.ok ? "success" : "error");
    setMessage(
      response.ok
        ? body.inviteSent
          ? "Private worker profile created. The password invitation has been sent."
          : "Draft worker profile saved. No email or portal invitation was sent."
        : body.error || "Could not create the worker profile.",
    );
    if (response.ok || body.profileCreated) {
      setForm(emptyForm);
      load();
    }
  }

  async function sendInvitation(workerId: string) {
    setSaving(true);
    setMessage("");
    const response = await fetch(`/api/admin/workers/${workerId}/invite`, {
      method: "POST",
    });
    const body = await response.json();
    setSaving(false);
    setMessageType(response.ok ? "success" : "error");
    setMessage(
      response.ok
        ? "A new branded password invitation was sent. The previous link is no longer valid."
        : body.error || "Could not send the password invitation.",
    );
    load();
  }

  async function deleteWorker(worker: Worker) {
    setDeleting(true);
    setDeleteError("");
    setMessage("");
    try {
      // A worker with past jobs is safely archived instead of deleting the
      // order, payment and audit history that belongs to the business.
      const response = await fetch(
        `/api/admin/workers/${worker.user_id}?force=true`,
        { method: "DELETE" },
      );
      const body = await response.json();
      setMessageType(response.ok ? "success" : "error");
      if (!response.ok) {
        const error = body.error || "Could not remove this worker.";
        setDeleteError(error);
        setMessage(error);
        return;
      }

      setMessage(
        body.archived
          ? `${worker.full_name} was removed from the active workforce. Their completed job, payment and audit history was kept safely in Worker DB.`
          : `${worker.full_name} was permanently removed from THEVULGO CRM and authentication.`,
      );
      setSelectedWorkerId(null);
      load();
    } catch {
      const error = "Connection error. Please try removing this worker again.";
      setMessageType("error");
      setDeleteError(error);
      setMessage(error);
    } finally {
      setDeleting(false);
    }
  }

  async function uploadDocument(workerId: string, type: string, file?: File) {
    if (!file) return;
    setMessage("");
    const body = new FormData();
    body.set("type", type);
    body.set("file", file);
    const response = await fetch(`/api/admin/workers/${workerId}/documents`, {
      method: "POST",
      body,
    });
    const result = await response.json();
    setMessageType(response.ok ? "success" : "error");
    setMessage(
      response.ok
        ? `${type.replace("_", " ")} saved in private storage.`
        : result.error || "Could not upload the document.",
    );
  }

  const activeWorkers = workers.filter(
    (worker) => worker.contractor_status === "active",
  ).length;
  const selectedWorker = workers.find(
    (worker) => worker.user_id === selectedWorkerId,
  );

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f4f0] p-3 pb-[max(1rem,env(safe-area-inset-bottom))] text-[#111] sm:p-6">
      <div className="mx-auto max-w-7xl space-y-5">
        <AdminNav />

        <header className="relative overflow-hidden rounded-[1.75rem] bg-[#111] p-5 text-white shadow-xl sm:rounded-[2rem] sm:p-8">
          <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-black uppercase tracking-[.14em] text-black">
                <ShieldCheck className="h-4 w-4" /> Private operations
              </div>
              <h1 className="mt-4 text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl">
                Contractor workforce
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                Create contractor records, protect identity documents and send
                secure portal access from one place.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MiniMetric label="Profiles" value={workers.length} />
              <MiniMetric label="Active" value={activeWorkers} yellow />
            </div>
          </div>
        </header>

        {message ? (
          <div
            className={`flex items-center gap-3 rounded-2xl border p-4 text-sm font-bold shadow-sm ${messageType === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-red-200 bg-red-50 text-red-800"}`}
          >
            {messageType === "success" ? (
              <BadgeCheck className="h-5 w-5 shrink-0" />
            ) : (
              <ShieldCheck className="h-5 w-5 shrink-0" />
            )}
            {message}
          </div>
        ) : null}

        <section className="grid overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm lg:grid-cols-[1.55fr_.7fr]">
          <form onSubmit={createWorker} className="p-5 sm:p-7">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-yellow-400 p-3">
                <Plus className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black">Create worker profile</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Enter the contractor&apos;s verified information yourself.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <Field label="Legal first name" icon={<UserRound />} required>
                <input
                  required
                  autoComplete="off"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={(event) => update("firstName", event.target.value)}
                />
              </Field>
              <Field label="Legal last name" icon={<UserRound />} required>
                <input
                  required
                  autoComplete="off"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={(event) => update("lastName", event.target.value)}
                />
              </Field>
              <Field label="Email for portal access" icon={<Mail />} required>
                <input
                  required
                  type="email"
                  placeholder="worker@email.com"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                />
              </Field>
              <Field label="Phone" icon={<Phone />}>
                <input
                  type="tel"
                  placeholder="+34 600 000 000"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                />
              </Field>
              <Field label="Primary city" icon={<MapPin />} required>
                <select
                  required
                  value={form.primaryCity}
                  onChange={(event) => update("primaryCity", event.target.value)}
                >
                  {['Valencia', 'Madrid', 'Barcelona', 'Alicante'].map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Residential address" icon={<MapPin />}>
                  <input
                    placeholder="Street, unit, city, postal code"
                    value={form.residentialAddress}
                    onChange={(event) =>
                      update("residentialAddress", event.target.value)
                    }
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Private onboarding notes" icon={<LockKeyhole />}>
                  <textarea
                    placeholder="Internal notes visible only to CRM administrators"
                    value={form.notes}
                    onChange={(event) => update("notes", event.target.value)}
                  />
                </Field>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                value="save-only"
                disabled={saving}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-4 font-black transition hover:border-yellow-500 hover:bg-yellow-50 disabled:opacity-50"
              >
                <LockKeyhole className="h-5 w-5" />
                {saving ? "Saving profile…" : "Save profile only — no email"}
              </button>
              <button
                type="submit"
                value="invite"
                disabled={saving}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-4 font-black shadow-[0_8px_25px_rgba(250,204,21,.28)] transition hover:bg-yellow-300 disabled:opacity-50"
              >
                <Mail className="h-5 w-5" />
                {saving
                  ? "Creating secure profile…"
                  : "Create profile & send password invite"}
              </button>
            </div>
          </form>

          <aside className="border-t border-black/5 bg-[#faf9f2] p-6 lg:border-l lg:border-t-0 lg:p-7">
            <p className="text-xs font-black uppercase tracking-[.15em] text-yellow-700">
              Secure onboarding
            </p>
            <h3 className="mt-3 text-2xl font-black">What happens next</h3>
            <div className="mt-6 space-y-5">
              <OnboardingStep
                number="01"
                title="Profile created"
                text="Personal information stays inside the Spanish CRM."
              />
              <OnboardingStep
                number="02"
                title="Password invitation"
                text="The contractor receives an email and creates only their password."
              />
              <OnboardingStep
                number="03"
                title="Jobs assigned"
                text="You assign work from inside each CRM order."
              />
            </div>
            <div className="mt-7 rounded-2xl bg-black p-4 text-sm leading-6 text-white/70">
              <LockKeyhole className="mb-3 h-5 w-5 text-yellow-400" />
              Identity documents are private and never visible to customers or
              other contractors.
            </div>
          </aside>
        </section>

        <section className="w-full min-w-0 max-w-full overflow-hidden rounded-[2rem] border border-black/5 bg-white p-4 shadow-sm sm:p-7">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-yellow-700">
                <UsersRound className="h-5 w-5" />
                <p className="text-xs font-black uppercase tracking-[.14em]">
                  Workforce directory
                </p>
              </div>
              <h2 className="mt-2 text-2xl font-black">Worker profiles</h2>
            </div>
            <p className="text-sm text-gray-500">
              {workers.length} total profiles
            </p>
          </div>

          {workers.length ? (
            <div className="mt-6 grid w-full min-w-0 max-w-full grid-cols-1 gap-4 xl:grid-cols-2">
              {workers.map((worker) => (
                <article
                  key={worker.user_id}
                  className="group w-full min-w-0 max-w-full overflow-hidden rounded-3xl border border-black/8 bg-[#fbfbf8] p-4 transition hover:border-yellow-400 hover:shadow-md sm:p-5"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setDeleteError("");
                      setSelectedWorkerId(worker.user_id);
                    }}
                    className="block w-full min-w-0 max-w-full overflow-hidden text-left"
                    aria-label={`Open ${worker.full_name} worker profile`}
                  >
                    <div className="flex min-w-0 max-w-full items-start justify-between gap-2 sm:gap-4">
                      <div className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-lg font-black text-yellow-400">
                          {(worker.legal_first_name || worker.full_name || "W")
                            .slice(0, 1)
                            .toUpperCase()}
                          {(worker.legal_last_name || "")
                            .slice(0, 1)
                            .toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <h3 className="truncate text-lg font-black">
                            {worker.full_name}
                          </h3>
                          <p className="truncate text-sm text-gray-500">
                            {worker.email} · {worker.primary_city || "Valencia"}
                          </p>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                        <span
                          className={`rounded-full px-2 py-1 text-[9px] font-black uppercase sm:px-3 sm:text-[11px] ${worker.contractor_status === "active" ? "bg-emerald-100 text-emerald-800" : "bg-gray-200 text-gray-700"}`}
                        >
                          {worker.contractor_status}
                        </span>
                        <ChevronRight className="h-5 w-5 text-gray-300 transition group-hover:translate-x-1 group-hover:text-yellow-600" />
                      </div>
                    </div>

                    <div className="mt-5 grid min-w-0 max-w-full gap-2 overflow-hidden text-sm text-gray-600">
                      <ProfileLine
                        icon={<Phone />}
                        value={worker.phone || "No phone recorded"}
                      />
                      <ProfileLine
                        icon={<MapPin />}
                        value={
                          worker.residential_address ||
                          "No residential address recorded"
                        }
                      />
                      <ProfileLine
                        icon={<BriefcaseBusiness />}
                        value="Independent contractor · 50% job share"
                      />
                    </div>

                    <div className="mt-5 grid min-w-0 max-w-full grid-cols-2 gap-2 overflow-hidden border-t border-black/8 pt-4">
                      <CompactStatus
                        label="Password"
                        value={
                          worker.password_created_at ? "Created" : "Waiting"
                        }
                        ok={Boolean(worker.password_created_at)}
                      />
                      <CompactStatus
                        label="Invitation"
                        value={friendlyEmailStatus(
                          worker.onboarding_invite_email_status,
                        )}
                        ok={Boolean(
                          worker.onboarding_invite_email_delivered_at ||
                          worker.onboarding_invite_email_opened_at,
                        )}
                      />
                    </div>
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 flex flex-col items-center rounded-3xl border border-dashed border-gray-300 bg-[#fafaf7] px-5 py-14 text-center">
              <div className="rounded-2xl bg-yellow-100 p-4">
                <UsersRound className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-black">
                No worker profiles yet
              </h3>
              <p className="mt-1 max-w-sm text-sm text-gray-500">
                Create the first contractor profile above. Their secure password
                invitation will be sent automatically.
              </p>
            </div>
          )}
        </section>
      </div>

      {selectedWorker ? (
        <WorkerProfileModal
          worker={selectedWorker}
          activity={activity.filter(
            (event) => event.worker_id === selectedWorker.user_id,
          )}
          assignments={assignments.filter(
            (assignment) => assignment.worker_id === selectedWorker.user_id,
          )}
          saving={saving}
          deleting={deleting}
          onClose={() => {
            setDeleteError("");
            setSelectedWorkerId(null);
          }}
          onInvite={() => void sendInvitation(selectedWorker.user_id)}
          onDocument={(type, file) =>
            void uploadDocument(selectedWorker.user_id, type, file)
          }
          onDelete={() => void deleteWorker(selectedWorker)}
          deleteError={deleteError}
        />
      ) : null}
    </main>
  );
}

function WorkerProfileModal({
  worker,
  activity,
  assignments,
  saving,
  deleting,
  onClose,
  onInvite,
  onDocument,
  onDelete,
  deleteError,
}: {
  worker: Worker;
  activity: WorkerActivity[];
  assignments: WorkerAssignment[];
  saving: boolean;
  deleting: boolean;
  onClose: () => void;
  onInvite: () => void;
  onDocument: (type: string, file?: File) => void;
  onDelete: () => void;
  deleteError: string;
}) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const canDelete = deleteConfirmation.trim() === worker.full_name.trim();
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 p-2 backdrop-blur-sm sm:p-5">
      <div className="mx-auto my-2 max-w-5xl overflow-hidden rounded-[2rem] bg-[#f4f4f0] shadow-2xl sm:my-8 sm:rounded-[2.5rem]">
        <header className="relative overflow-hidden bg-black p-5 text-white sm:p-8">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-yellow-400 text-xl font-black text-black sm:h-16 sm:w-16">
                {(worker.legal_first_name || worker.full_name).slice(0, 1)}
                {(worker.legal_last_name || "").slice(0, 1)}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[.14em] text-yellow-400">
                  Private worker profile
                </p>
                <h2 className="mt-1 truncate text-2xl font-black sm:text-4xl">
                  {worker.full_name}
                </h2>
                <p className="mt-1 truncate text-sm text-white/55">
                  {worker.email}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close worker profile"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/5 transition hover:bg-white/15"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="space-y-4 p-3 sm:p-6">
          <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <LifecycleCard
              label="Invitation email"
              value={friendlyEmailStatus(worker.onboarding_invite_email_status)}
              detail={latestEmailDetail(
                worker.onboarding_invite_sent_at,
                worker.onboarding_invite_email_delivered_at,
                worker.onboarding_invite_email_opened_at,
              )}
              ok={Boolean(
                worker.onboarding_invite_email_delivered_at ||
                worker.onboarding_invite_email_opened_at,
              )}
            />
            <LifecycleCard
              label="Password"
              value={
                worker.password_created_at ? "Created securely" : "Not created"
              }
              detail={formatCrmTime(worker.password_created_at)}
              ok={Boolean(worker.password_created_at)}
            />
            <LifecycleCard
              label="Data policy"
              value={worker.data_policy_accepted_at ? "Accepted" : "Waiting"}
              detail={
                worker.data_policy_accepted_at
                  ? `Version ${worker.data_policy_version || "recorded"}`
                  : "Required before activation"
              }
              ok={Boolean(worker.data_policy_accepted_at)}
            />
            <LifecycleCard
              label="Welcome email"
              value={friendlyEmailStatus(worker.welcome_email_status)}
              detail={latestEmailDetail(
                worker.welcome_email_sent_at,
                worker.welcome_email_delivered_at,
                worker.welcome_email_opened_at,
              )}
              ok={Boolean(
                worker.welcome_email_delivered_at ||
                worker.welcome_email_opened_at,
              )}
            />
          </section>

          <section className="grid gap-4 lg:grid-cols-[1fr_.78fr]">
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.13em] text-yellow-700">
                    Verified by admin
                  </p>
                  <h3 className="mt-1 text-2xl font-black">
                    Contractor information
                  </h3>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-black uppercase ${worker.contractor_status === "active" ? "bg-emerald-100 text-emerald-800" : "bg-gray-200 text-gray-700"}`}
                >
                  {worker.contractor_status}
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <DetailBox
                  label="Legal first name"
                  value={
                    worker.legal_first_name || worker.full_name.split(" ")[0]
                  }
                />
                <DetailBox
                  label="Legal last name"
                  value={
                    worker.legal_last_name ||
                    worker.full_name.split(" ").slice(1).join(" ")
                  }
                />
                <DetailBox label="Email" value={worker.email} />
                <DetailBox
                  label="Phone"
                  value={worker.phone || "Not recorded"}
                />
                <div className="sm:col-span-2">
                  <DetailBox
                    label="Residential address"
                    value={worker.residential_address || "Not recorded"}
                  />
                </div>
                <div className="sm:col-span-2">
                  <DetailBox
                    label="Private onboarding notes"
                    value={worker.admin_onboarding_notes || "No private notes"}
                  />
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-black p-4 text-sm leading-6 text-white/65">
                <LockKeyhole className="mr-2 inline h-4 w-4 text-yellow-400" />
                Password value is encrypted by Supabase Auth and can never be
                viewed in this CRM. Only setup status and time are recorded.
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.75rem] bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-yellow-700" />
                  <h3 className="text-xl font-black">Secure access</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Send a branded one-time password link. A new link
                  automatically cancels the previous one.
                </p>
                {!worker.password_created_at ? (
                  <button
                    type="button"
                    disabled={saving}
                    onClick={onInvite}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-4 py-4 font-black transition hover:bg-yellow-300 disabled:opacity-50"
                  >
                    <Mail className="h-5 w-5" />{" "}
                    {saving
                      ? "Sending…"
                      : worker.onboarding_invite_sent_at
                        ? "Send new invitation"
                        : "Send password invitation"}
                  </button>
                ) : (
                  <div className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800">
                    <CheckCircle2 className="h-5 w-5 shrink-0" /> Secure access
                    is active
                  </div>
                )}
              </div>

              <div className="rounded-[1.75rem] bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center gap-2">
                  <FileBadge className="h-5 w-5 text-yellow-700" />
                  <h3 className="text-xl font-black">Private documents</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Files are uploaded by a CRM administrator to private Spanish
                  storage.
                </p>
                <div className="mt-4 grid gap-2">
                  <DocumentButton
                    label="Upload driver licence"
                    icon={<IdCard />}
                    onFile={(file) => onDocument("driver_licence", file)}
                  />
                  <DocumentButton
                    label="Upload government ID"
                    icon={<ShieldCheck />}
                    onFile={(file) => onDocument("government_id", file)}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-2">
                <Clock3 className="h-5 w-5 text-yellow-700" />
                <h3 className="text-xl font-black">
                  Onboarding & email history
                </h3>
              </div>
              <div className="mt-5 space-y-3">
                {activity.length ? (
                  activity.map((event) => (
                    <div
                      key={event.id}
                      className="flex gap-3 rounded-2xl bg-[#f7f7f4] p-4"
                    >
                      <ActivityIcon type={event.event_type} />
                      <div className="min-w-0">
                        <p className="font-black capitalize">
                          {event.event_type.replaceAll("_", " ")}
                        </p>
                        <p className="mt-1 break-words text-sm leading-5 text-gray-500">
                          {event.detail}
                        </p>
                        <p className="mt-2 text-[11px] font-bold text-gray-400">
                          {formatCrmTime(event.created_at)}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <EmptyHistory text="No onboarding events recorded yet." />
                )}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-5 w-5 text-yellow-700" />
                <h3 className="text-xl font-black">Assigned jobs & emails</h3>
              </div>
              <div className="mt-5 space-y-3">
                {assignments.length ? (
                  assignments.map((assignment) => {
                    const order = Array.isArray(assignment.orders)
                      ? assignment.orders[0]
                      : assignment.orders;
                    return (
                      <div
                        key={assignment.id}
                        className="rounded-2xl border border-black/6 bg-[#f7f7f4] p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-black">
                              TVG-ES-
                              {String(order?.order_number || "—").padStart(
                                5,
                                "0",
                              )}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {order?.category || "Assigned job"} ·{" "}
                              {order?.preferred_date || "Date pending"}
                            </p>
                          </div>
                          <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase">
                            {assignment.response_status
                              ? assignment.response_status.replaceAll("_", " ")
                              : assignment.status.replaceAll("_", " ")}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
                          <EmailPill
                            label="Sent"
                            date={assignment.worker_notified_at}
                          />
                          <EmailPill
                            label="Delivered"
                            date={assignment.worker_email_delivered_at}
                          />
                          <EmailPill
                            label="Opened"
                            date={
                              assignment.email_link_viewed_at ||
                              assignment.worker_email_opened_at
                            }
                          />
                          <EmailPill
                            label="Accepted"
                            date={assignment.accepted_at}
                          />
                          <EmailPill
                            label="Declined"
                            date={assignment.declined_at}
                          />
                          <EmailPill
                            label={`${assignment.response_email_kind || "Response"} email sent`}
                            date={assignment.response_email_sent_at}
                          />
                          <EmailPill
                            label="Response email delivered"
                            date={assignment.response_email_delivered_at}
                          />
                          <EmailPill
                            label="Response email opened"
                            date={assignment.response_email_opened_at}
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <EmptyHistory text="No assigned jobs or job emails yet." />
                )}
              </div>
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-red-200 bg-red-50 p-5 sm:p-6">
            {!deleteOpen ? (
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.13em] text-red-700">
                    Danger zone
                  </p>
                  <h3 className="mt-1 text-xl font-black">
                    Remove worker from THEVULGO
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-red-900/65">
                    Deletes their login, profile and private identity files.
                    Workers with job history cannot be permanently deleted.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setDeleteOpen(true)}
                  className="flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-red-300 bg-white px-5 py-3.5 font-black text-red-700 transition hover:bg-red-100"
                >
                  <Trash2 className="h-5 w-5" /> Delete worker
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[.13em] text-red-700">
                      Permanent deletion confirmation
                    </p>
                    <h3 className="mt-1 text-xl font-black">
                      Type the worker&apos;s full name
                    </h3>
                    <p className="mt-1 text-sm text-red-900/65">
                      Enter <strong>{worker.full_name}</strong> exactly to
                      enable deletion.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setDeleteOpen(false);
                      setDeleteConfirmation("");
                    }}
                    aria-label="Cancel worker deletion"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-red-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <input
                  value={deleteConfirmation}
                  onChange={(event) =>
                    setDeleteConfirmation(event.target.value)
                  }
                  placeholder={worker.full_name}
                  className="mt-4 w-full rounded-2xl border border-red-200 bg-white px-4 py-4 font-bold outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100"
                />
                {deleteError ? (
                  <p className="mt-3 rounded-xl border border-red-200 bg-white px-3 py-2 text-sm font-bold text-red-700">
                    {deleteError}
                  </p>
                ) : null}
                <button
                  type="button"
                  disabled={!canDelete || deleting}
                  onClick={onDelete}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 px-5 py-4 font-black text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-200"
                >
                  <Trash2 className="h-5 w-5" />
                  {deleting ? "Deleting worker…" : "Permanently delete worker"}
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function CompactStatus({
  label,
  value,
  ok,
}: {
  label: string;
  value: string;
  ok: boolean;
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl bg-white p-3">
      <p className="text-[9px] font-black uppercase tracking-[.12em] text-gray-400">
        {label}
      </p>
      <p
        className={`mt-1 truncate text-xs font-black ${ok ? "text-emerald-700" : "text-gray-600"}`}
      >
        {value}
      </p>
    </div>
  );
}

function LifecycleCard({
  label,
  value,
  detail,
  ok,
}: {
  label: string;
  value: string;
  detail: string;
  ok: boolean;
}) {
  return (
    <div
      className={`rounded-[1.5rem] border p-4 shadow-sm ${ok ? "border-emerald-100 bg-emerald-50" : "border-black/5 bg-white"}`}
    >
      <div className="flex items-center gap-2">
        {ok ? (
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        ) : (
          <Clock3 className="h-5 w-5 text-gray-400" />
        )}
        <p className="text-[10px] font-black uppercase tracking-[.11em] text-gray-500">
          {label}
        </p>
      </div>
      <p className="mt-3 font-black">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{detail}</p>
    </div>
  );
}

function DetailBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="h-full rounded-2xl bg-[#f7f7f4] p-4">
      <p className="text-[10px] font-black uppercase tracking-[.11em] text-gray-400">
        {label}
      </p>
      <p className="mt-2 break-words text-sm font-bold leading-6">{value}</p>
    </div>
  );
}

function ActivityIcon({ type }: { type: string }) {
  const failed = /failed|bounced|complained/.test(type);
  const success = /delivered|opened|created|accepted/.test(type);
  return (
    <span
      className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${failed ? "bg-red-100 text-red-700" : success ? "bg-emerald-100 text-emerald-700" : "bg-yellow-100 text-yellow-800"}`}
    >
      {failed ? (
        <CircleAlert className="h-5 w-5" />
      ) : success ? (
        <CheckCircle2 className="h-5 w-5" />
      ) : (
        <Clock3 className="h-5 w-5" />
      )}
    </span>
  );
}

function EmptyHistory({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-[#fafaf7] px-4 py-10 text-center text-sm text-gray-500">
      {text}
    </div>
  );
}

function EmailPill({ label, date }: { label: string; date?: string | null }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 ${date ? "bg-emerald-100 text-emerald-800" : "bg-gray-200 text-gray-500"}`}
    >
      {label}: {date ? "yes" : "no"}
    </span>
  );
}

function friendlyEmailStatus(status?: string | null) {
  if (!status) return "Not sent";
  return status
    .replaceAll("_", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function formatCrmTime(value?: string | null) {
  if (!value) return "Not recorded";
  return new Intl.DateTimeFormat("en-IE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Madrid",
  }).format(new Date(value));
}

function latestEmailDetail(
  sent?: string | null,
  delivered?: string | null,
  opened?: string | null,
) {
  if (opened) return `Opened ${formatCrmTime(opened)}`;
  if (delivered) return `Delivered ${formatCrmTime(delivered)}`;
  if (sent) return `Sent ${formatCrmTime(sent)}`;
  return "No email recorded";
}

function MiniMetric({
  label,
  value,
  yellow = false,
}: {
  label: string;
  value: number;
  yellow?: boolean;
}) {
  return (
    <div
      className={`min-w-28 rounded-2xl p-4 ${yellow ? "bg-yellow-400 text-black" : "bg-white/10 text-white"}`}
    >
      <p className="text-[10px] font-black uppercase tracking-[.12em] opacity-55">
        {label}
      </p>
      <p className="mt-1 text-3xl font-black">{value}</p>
    </div>
  );
}
function Field({
  label,
  icon,
  required = false,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  required?: boolean;
  children: React.ReactElement<{ className?: string }>;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[.08em] text-gray-600">
        {icon && <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>}
        {label}
        {required ? <i className="text-yellow-600">*</i> : null}
      </span>
      <span className="block [&>input]:w-full [&>input]:rounded-2xl [&>input]:border [&>input]:border-black/10 [&>input]:bg-[#f7f7f4] [&>input]:px-4 [&>input]:py-3.5 [&>input]:outline-none [&>input]:transition [&>input]:focus:border-yellow-500 [&>input]:focus:bg-white [&>input]:focus:ring-4 [&>input]:focus:ring-yellow-100 [&>textarea]:min-h-28 [&>textarea]:w-full [&>textarea]:resize-y [&>textarea]:rounded-2xl [&>textarea]:border [&>textarea]:border-black/10 [&>textarea]:bg-[#f7f7f4] [&>textarea]:px-4 [&>textarea]:py-3.5 [&>textarea]:outline-none [&>textarea]:focus:border-yellow-500 [&>textarea]:focus:bg-white [&>textarea]:focus:ring-4 [&>textarea]:focus:ring-yellow-100">
        {children}
      </span>
    </label>
  );
}
function OnboardingStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-xs font-black">
        {number}
      </span>
      <div>
        <p className="font-black">{title}</p>
        <p className="mt-1 text-sm leading-5 text-gray-500">{text}</p>
      </div>
    </div>
  );
}
function ProfileLine({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-2">
      <span className="mt-0.5 shrink-0 text-gray-400 [&>svg]:h-4 [&>svg]:w-4">
        {icon}
      </span>
      <span className="min-w-0 [overflow-wrap:anywhere]">{value}</span>
    </div>
  );
}
function DocumentButton({
  label,
  icon,
  onFile,
}: {
  label: string;
  icon: React.ReactNode;
  onFile: (file?: File) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-3 text-sm font-black transition hover:border-yellow-500 hover:bg-yellow-50">
      <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      {label}
      <Upload className="h-4 w-4 text-gray-400" />
      <input
        className="sr-only"
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={(event) => onFile(event.target.files?.[0])}
      />
    </label>
  );
}
