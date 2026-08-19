"use client";
import { whatsappNumber } from "@/app/site-config";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import WorkerPaymentPanel from "./WorkerPaymentPanel";
type JobMessage = {
  id: string;
  message_type: "note" | "question";
  body: string;
  email_status: string;
  email_delivered_at: string | null;
  created_at: string;
};
type JobPhoto = {
  id: string;
  type: "before" | "after" | "issue";
  fileName: string;
  uploadedAt: string;
  url: string | null;
};
type Props = {
  assignment: {
    id: string;
    status: string;
    responseStatus: string;
    workerShare: number;
    completionNotes: string;
    emailLinkViewedAt: string | null;
    acceptedAt: string | null;
    declinedAt: string | null;
  };
  order: {
    id: string;
    number: number;
    name: string;
    city: string;
    area: string;
    postalCode: string;
    address: string;
    apartment: string;
    addressDetails: string;
    date: string;
    time: string;
    category: string;
    services: Array<{ label: string; qty: number; subtotal: number }>;
    notes: string;
    total: number;
    paymentMethod: string | null;
  };
  decision: "accept" | "decline" | null;
  initialMessages: JobMessage[];
};
const money = (value: number) =>
  new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(
    value,
  );
export default function WorkerJobClient({
  assignment,
  order,
  decision,
  initialMessages,
}: Props) {
  const router = useRouter();
  useEffect(() => {
    const refresh = () => {
      if (document.visibilityState === "visible") router.refresh();
    };
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", refresh);
    const interval = window.setInterval(refresh, 30_000);
    return () => {
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", refresh);
      window.clearInterval(interval);
    };
  }, [router]);

  const [status, setStatus] = useState(assignment.status),
    [responseStatus, setResponseStatus] = useState(assignment.responseStatus),
    [notes, setNotes] = useState(assignment.completionNotes),
    [jobMessage, setJobMessage] = useState(""),
    [jobMessages, setJobMessages] = useState(initialMessages),
    [photos, setPhotos] = useState<JobPhoto[]>([]),
    [photosLoading, setPhotosLoading] = useState(true),
    [deletingPhotoId, setDeletingPhotoId] = useState<string | null>(null),
    [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false);
  const responseHandled = useRef(false);
  const maps = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${order.address}, ${order.area}, ${order.city}, ${order.postalCode}`)}`;
  const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi THEVULGO, I have a question about assigned job TVG-ES-${String(order.number).padStart(5, "0")}.`)}`;
  const photoLabel = (type: JobPhoto["type"]) =>
    type === "before" ? "Before" : type === "after" ? "After" : "Issue";

  const loadPhotos = useCallback(async () => {
    setPhotosLoading(true);
    try {
      const response = await fetch(`/api/worker/photos?assignmentId=${assignment.id}`, { cache: "no-store" });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Could not load your work photos.");
      setPhotos(body.photos || []);
    } catch (cause) {
      setMessage(cause instanceof Error ? cause.message : "Could not load your work photos.");
    } finally {
      setPhotosLoading(false);
    }
  }, [assignment.id]);
  useEffect(() => {
    const timer = window.setTimeout(() => void loadPhotos(), 0);
    return () => window.clearTimeout(timer);
  }, [loadPhotos]);
  async function update(values: Record<string, unknown>) {
    setBusy(true);
    const response = await fetch(`/api/worker/assignments/${assignment.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const body = await response.json();
    setBusy(false);
    if (!response.ok) {
      setMessage(body.error || "Could not update job.");
      return false;
    }
    setMessage("Saved successfully.");
    return true;
  }
  useEffect(() => {
    if (responseHandled.current) return;
    responseHandled.current = true;
    const responseValue =
      decision === "accept"
        ? "accepted"
        : decision === "decline"
          ? "declined"
          : null;
    void fetch(`/api/worker/assignments/${assignment.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        responseValue
          ? {
              responseStatus: responseValue,
              emailLinkViewed: true,
              activityEvent: "job_page_viewed",
            }
          : {
              emailLinkViewed: true,
              activityEvent: "job_page_viewed",
            },
      ),
    })
      .then(async (response) => {
        const body = await response.json();
        if (!response.ok)
          throw new Error(body.error || "Could not record your response.");
        if (responseValue) {
          setResponseStatus(responseValue);
          setMessage(
            responseValue === "accepted"
              ? "Job accepted. THEVULGO has been notified."
              : "Job declined. THEVULGO has been notified and your access is now closed.",
          );
        }
      })
      .catch((cause) =>
        setMessage(
          cause instanceof Error
            ? cause.message
            : "Could not record your response.",
        ),
      );
  }, [assignment.id, decision]);

  function trackAction(
    activityEvent: "route_opened" | "whatsapp_contact_opened",
  ) {
    void fetch(`/api/worker/assignments/${assignment.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activityEvent }),
      keepalive: true,
    });
  }

  async function saveMessage(type: "note" | "question") {
    const body = jobMessage.trim();
    if (!body) {
      setMessage("Write a note or question first.");
      return;
    }
    setBusy(true);
    setMessage(
      type === "question"
        ? "Sending your question to THEVULGO…"
        : "Saving your private job note…",
    );
    const response = await fetch(
      `/api/worker/assignments/${assignment.id}/messages`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, body }),
      },
    );
    const result = await response.json();
    setBusy(false);
    if (result.message)
      setJobMessages((current) => [result.message, ...current]);
    if (!response.ok) {
      setMessage(result.error || "Your message could not be saved.");
      return;
    }
    setJobMessage("");
    setMessage(
      type === "question"
        ? "Question sent to THEVULGO successfully."
        : "Private job note saved successfully.",
    );
  }
  async function deletePhoto(photo: JobPhoto) {
    const confirmed = window.confirm(`Delete this ${photoLabel(photo.type).toLowerCase()} photo?`);
    if (!confirmed) return;
    setDeletingPhotoId(photo.id);
    const response = await fetch("/api/worker/photos", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ assignmentId: assignment.id, photoId: photo.id }),
    });
    const body = await response.json();
    setDeletingPhotoId(null);
    if (!response.ok) {
      setMessage(body.error || "Could not delete photo.");
      return;
    }
    setPhotos((current) => current.filter((item) => item.id !== photo.id));
    setMessage(`${photoLabel(photo.type)} photo deleted.`);
  }

  async function respond(value: "accepted" | "declined") {
    const ok = await update({ responseStatus: value, emailLinkViewed: true });
    if (!ok) return;
    setResponseStatus(value);
    setMessage(
      value === "accepted"
        ? "Job accepted. THEVULGO has been notified."
        : "Job declined. THEVULGO has been notified and your access is now closed.",
    );
  }
  async function saveProgress(value: string, label: string) {
    setMessage(`Saving “${label}”…`);
    const ok = await update({ status: value, completionNotes: notes });
    if (!ok) return;
    setStatus(value);
    setMessage(`Saved: ${label}.`);
  }
  async function upload(type: "before" | "after" | "issue", file?: File) {
    if (!file) return;
    const form = new FormData();
    form.set("assignmentId", assignment.id);
    form.set("type", type);
    form.set("file", file);
    setBusy(true);
    const response = await fetch("/api/worker/photos", {
      method: "POST",
      body: form,
    });
    const body = await response.json();
    setBusy(false);
    setMessage(
      response.ok
        ? `${type === "after" ? "After" : type === "before" ? "Before" : "Issue"} photo uploaded.`
        : body.error || "Could not upload photo.",
    );
    if (response.ok) await loadPhotos();
  }
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-3 py-4 pb-16 sm:px-5 sm:py-6">
      <div className="mx-auto max-w-3xl space-y-4 sm:space-y-5">
        <header className="overflow-hidden rounded-[28px] bg-black text-white shadow-xl shadow-black/10">
          <div className="p-5 sm:p-7">
            <p className="text-[11px] font-black uppercase tracking-[.18em] text-yellow-400">
              THEVULGO · Contractor workspace
            </p>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                  TVG-ES-{String(order.number).padStart(5, "0")}
                </h1>
                <p className="mt-2 text-sm font-bold text-gray-300">
                  {order.date} · {order.time?.slice(0, 5)} Madrid time
                </p>
              </div>
              <span className="self-start rounded-full bg-yellow-400 px-4 py-2 text-xs font-black uppercase text-black">
                {status.replaceAll("_", " ")}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 border-t border-white/15 bg-white/5">
            <div className="p-4 sm:p-5">
              <p className="text-[10px] font-black uppercase tracking-[.14em] text-gray-400">
                Order total
              </p>
              <p className="mt-1 text-xl font-black sm:text-2xl">
                {money(order.total)}
              </p>
            </div>
            <div className="border-l border-white/15 p-4 sm:p-5">
              <p className="text-[10px] font-black uppercase tracking-[.14em] text-yellow-400">
                Your 50% share
              </p>
              <p className="mt-1 text-xl font-black text-yellow-400 sm:text-2xl">
                {money(assignment.workerShare)}
              </p>
            </div>
          </div>
        </header>
        <section
          className={`rounded-[28px] border p-5 shadow-sm sm:p-6 ${responseStatus === "accepted" ? "border-emerald-200 bg-emerald-50" : responseStatus === "declined" ? "border-red-200 bg-red-50" : "border-yellow-300 bg-white"}`}
        >
          <p className="text-xs font-black uppercase tracking-[.14em] text-gray-500">
            Assignment response
          </p>
          <h2 className="mt-2 text-2xl font-black">
            {responseStatus === "accepted"
              ? "Job accepted"
              : responseStatus === "declined"
                ? "Job declined"
                : "Can you complete this job?"}
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            {responseStatus === "accepted"
              ? "THEVULGO can see your acceptance. Keep the job status updated as you travel and work."
              : responseStatus === "declined"
                ? "The order has been released for reassignment. Contact THEVULGO if this was selected by mistake."
                : "Review the customer, location, scope, appointment and payment before responding."}
          </p>
          {responseStatus === "pending" ? (
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                disabled={busy}
                onClick={() => void respond("accepted")}
                className="rounded-2xl bg-yellow-400 px-5 py-4 font-black disabled:opacity-50"
              >
                Accept job
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => void respond("declined")}
                className="rounded-2xl border border-red-200 bg-white px-5 py-4 font-black text-red-700 disabled:opacity-50"
              >
                I cannot accept
              </button>
            </div>
          ) : null}
        </section>
        <section className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <WorkerSectionTitle number="01" title="Where to go" />
          <p className="mt-3 font-bold">
            {order.address}
            {order.apartment ? `, ${order.apartment}` : ""}
          </p>
          <p className="text-gray-600">
            {order.area}, {order.city} {order.postalCode}
          </p>
          {order.addressDetails ? (
            <p className="mt-2 text-sm text-gray-600">{order.addressDetails}</p>
          ) : null}
          <a
            href={maps}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackAction("route_opened")}
            className="mt-5 flex min-h-14 w-full items-center justify-center rounded-2xl bg-yellow-400 px-5 py-3 text-center font-black shadow-md shadow-yellow-200 transition active:scale-[.99]"
          >
            Open Google Maps directions
          </a>
        </section>
        <section className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <WorkerSectionTitle number="02" title="Customer & work" />
          <p className="mt-3 font-black">{order.name}</p>
          <p className="mt-1 text-xs font-bold text-gray-500">
            Customer email and phone are private. Contact THEVULGO if you need
            help reaching the customer.
          </p>
          <p className="mt-2 text-gray-600">{order.category}</p>
          <div className="mt-4 space-y-2">
            {order.services.map((service, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-4 rounded-2xl border border-yellow-100 bg-yellow-50/70 px-4 py-3"
              >
                <span>
                  {service.label} × {service.qty}
                </span>
                <b>{money(Number(service.subtotal))}</b>
              </div>
            ))}
          </div>
          {order.notes ? (
            <p className="mt-4 rounded-xl border p-3 text-sm">
              <b>Customer notes:</b> {order.notes}
            </p>
          ) : null}
        </section>
        <section className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <WorkerSectionTitle number="03" title="Notes and questions" />
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Save a private job note or email a question to THEVULGO. Every
            action is saved securely with this job.
          </p>
          <textarea
            value={jobMessage}
            maxLength={2000}
            onChange={(event) => setJobMessage(event.target.value)}
            placeholder="Write a job note or ask THEVULGO a question…"
            className="mt-4 min-h-32 w-full rounded-2xl border border-gray-300 bg-gray-50 p-4 outline-none transition focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100"
          />
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              disabled={busy || !jobMessage.trim()}
              onClick={() => void saveMessage("note")}
              className="min-h-14 rounded-2xl border border-black px-4 py-3 font-black transition active:scale-[.99] disabled:opacity-40"
            >
              Save private note
            </button>
            <button
              type="button"
              disabled={busy || !jobMessage.trim()}
              onClick={() => void saveMessage("question")}
              className="min-h-14 rounded-2xl bg-yellow-400 px-4 py-3 font-black transition active:scale-[.99] disabled:opacity-40"
            >
              Email question to THEVULGO
            </button>
          </div>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackAction("whatsapp_contact_opened")}
            className="mt-3 flex min-h-14 w-full items-center justify-center rounded-2xl bg-black px-4 py-3 text-center font-black text-white transition active:scale-[.99]"
          >
            Contact THEVULGO on WhatsApp
          </a>
          {jobMessages.length ? (
            <div className="mt-5 space-y-2">
              <p className="text-xs font-black uppercase tracking-[.12em] text-gray-500">
                Communication history
              </p>
              {jobMessages.map((item) => (
                <div key={item.id} className="rounded-2xl bg-[#f4f4f0] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <b className="capitalize">{item.message_type}</b>
                    <span className="text-xs font-bold text-gray-500">
                      {new Intl.DateTimeFormat("en-IE", {
                        dateStyle: "medium",
                        timeStyle: "short",
                        timeZone: "Europe/Madrid",
                      }).format(new Date(item.created_at))}
                    </span>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-700">
                    {item.body}
                  </p>
                  {item.message_type === "question" ? (
                    <p className="mt-2 text-xs font-bold text-gray-500">
                      Email:{" "}
                      {item.email_delivered_at
                        ? "delivered"
                        : item.email_status}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </section>
        <section className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <WorkerSectionTitle number="04" title="Job progress" />
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Tap each stage as the job moves forward. Every update is saved in
            your job record.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ["en_route", "I am on the way"],
              ["arrived", "I arrived"],
              ["in_progress", "Work started"],
              ["completed", "Complete job"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={status === value}
                disabled={busy || responseStatus !== "accepted"}
                onClick={() => void saveProgress(value, label)}
                className={`min-h-16 rounded-2xl border px-5 py-4 text-left font-bold transition disabled:cursor-not-allowed disabled:opacity-40 ${status === value ? "border-yellow-500 bg-yellow-100 ring-2 ring-yellow-300" : "border-gray-300 bg-white shadow-sm active:scale-[.99]"}`}
              >
                <span className="flex items-center justify-between gap-3">
                  {label}
                  {status === value ? (
                    <span className="rounded-full bg-black px-2 py-1 text-[10px] font-black uppercase text-white">
                      Saved
                    </span>
                  ) : null}
                </span>
              </button>
            ))}
          </div>
          {message ? (
            <div
              role="status"
              aria-live="polite"
              className={`mt-4 rounded-2xl border p-4 text-sm font-bold ${message.includes("Could") || message.includes("required") || message.includes("Accept this") ? "border-red-200 bg-red-50 text-red-700" : message.startsWith("Saving") ? "border-yellow-300 bg-yellow-50 text-yellow-900" : "border-emerald-200 bg-emerald-50 text-emerald-800"}`}
            >
              {message}
            </div>
          ) : null}
          {responseStatus !== "accepted" ? (
            <p className="mt-3 rounded-xl bg-gray-100 p-3 text-sm font-bold text-gray-600">
              Accept the assignment before updating job progress.
            </p>
          ) : null}
          <label className="mt-5 block text-sm font-bold">
            Completion / issue notes
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              className="mt-2 min-h-28 w-full rounded-2xl border border-gray-300 bg-gray-50 p-4 font-normal outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100"
            />
          </label>
          <button
            disabled={busy}
            onClick={() => void update({ completionNotes: notes })}
            className="mt-3 min-h-12 w-full rounded-2xl border border-yellow-400 px-4 py-3 font-bold transition active:scale-[.99] sm:w-auto"
          >
            Save notes
          </button>
        </section>
        <section className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <WorkerSectionTitle number="05" title="Required work photos" />
          <p className="mt-2 text-sm text-gray-600">
            Upload before and after photos. An after photo is required to
            complete the job.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {(["before", "after", "issue"] as const).map((type) => (
              <label
                key={type}
                className="flex min-h-20 cursor-pointer items-center justify-center rounded-2xl border border-yellow-300 bg-yellow-50/60 p-4 text-center font-bold capitalize transition active:scale-[.99]"
              >
                Upload {type}
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  multiple
                  className="sr-only"
                  onChange={async (event) => {
                    for (const file of Array.from(event.target.files || [])) await upload(type, file);
                    event.currentTarget.value = "";
                  }}
                />
              </label>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="font-black text-gray-900">Your uploaded photos</h3>
                <p className="mt-1 text-xs font-medium text-gray-500">Visible to you and the THEVULGO CRM for this job only.</p>
              </div>
              <span className="rounded-full bg-black px-3 py-1 text-xs font-black text-white">{photos.length}</span>
            </div>
            {photosLoading ? <p className="mt-4 text-sm font-semibold text-gray-500">Loading your photos…</p> : photos.length ? (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {photos.map((photo) => (
                  <article key={photo.id} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    {photo.url ? <img src={photo.url} alt={`${photoLabel(photo.type)} work photo`} className="aspect-square w-full object-cover" /> : <div className="flex aspect-square items-center justify-center bg-gray-100 text-xs font-bold text-gray-500">Preview unavailable</div>}
                    <div className="p-3">
                      <p className="font-black text-gray-900">{photoLabel(photo.type)} photo</p>
                      <p className="mt-1 truncate text-[11px] text-gray-500" title={photo.fileName}>{photo.fileName}</p>
                      <p className="mt-1 text-[11px] text-gray-500">{new Date(photo.uploadedAt).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}</p>
                      <div className="mt-3 flex gap-2">
                        {photo.url ? <a href={photo.url} target="_blank" rel="noreferrer" className="flex-1 rounded-xl border border-gray-300 px-2 py-2 text-center text-xs font-black text-gray-800">View</a> : null}
                        <button type="button" disabled={busy || deletingPhotoId === photo.id} onClick={() => void deletePhoto(photo)} className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-black text-red-700 disabled:opacity-50">{deletingPhotoId === photo.id ? "Deleting…" : "Delete"}</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : <p className="mt-4 rounded-xl border border-dashed border-gray-300 bg-white p-4 text-sm font-semibold text-gray-500">No work photos uploaded yet. They will appear here immediately after upload.</p>}
          </div>
        </section>
        <WorkerPaymentPanel
          assignmentId={assignment.id}
          orderTotal={order.total}
          accepted={responseStatus === "accepted"}
        />
      </div>
    </main>
  );
}

function WorkerSectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-xs font-black text-black">
        {number}
      </span>
      <h2 className="text-xl font-black tracking-tight sm:text-2xl">{title}</h2>
    </div>
  );
}
