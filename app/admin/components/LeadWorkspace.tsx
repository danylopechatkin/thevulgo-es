"use client";

import {
  buildLeadChanges,
  leadContentHash,
  leadToOrderDraft,
  LEAD_STATUSES,
  LEAD_STATUS_LABELS,
  mergeLeadPatch,
  type Lead,
  type LeadAiProposal,
  type LeadChange,
} from "@/lib/leads";
import { strFromU8, unzipSync } from "fflate";
import { ArrowRight, FileText, Sparkles, Upload, X } from "lucide-react";
import { useMemo, useState } from "react";

type ImportRecord = {
  id: string;
  import_kind: string;
  source_type: string;
  source_files: Array<{ name: string; type: string; size: number }>;
  applied_changes: LeadChange[];
  warnings: string[];
  created_at: string;
};

const blank = {
  full_name: "", phone: "", email: "", language: "unknown", market: "", city: "", area: "",
  postal_code: "", address: "", apartment: "", service_summary: "", structured_services: [],
  category: "Repairs", requested_date: null, requested_time: null, quoted_value: null,
  accepted_value: null, status: "new", next_action: "Reply to the client", follow_up_at: null,
  potential_value: 0, notes: "", source: "whatsapp", ai_summary: "", ai_missing_fields: [], ai_warnings: [],
  lost_reason: "", lost_reason_code: null, lost_reason_comment: null, contact_reference: null,
  converted_order_id: null, last_contacted_at: null,
} satisfies Partial<Lead>;

export default function LeadWorkspace({
  lead,
  onClose,
  onSaved,
}: {
  lead: (Lead & { lead_conversation_imports?: ImportRecord[] }) | null;
  onClose: () => void;
  onSaved: () => Promise<void>;
}) {
  const [form, setForm] = useState<Partial<Lead>>(() => ({ ...blank, ...(lead || {}) }));
  const [text, setText] = useState("");
  const [images, setImages] = useState<Array<{ name: string; dataUrl: string; size: number; type: string }>>([]);
  const [files, setFiles] = useState<Array<{ name: string; size: number; type: string }>>([]);
  const [proposal, setProposal] = useState<LeadAiProposal | null>(null);
  const [changes, setChanges] = useState<LeadChange[]>([]);
  const [selectedChanges, setSelectedChanges] = useState<Set<string>>(new Set());
  const [contentHash, setContentHash] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const history = useMemo(
    () => [...(lead?.lead_conversation_imports || [])].sort((a, b) => b.created_at.localeCompare(a.created_at)),
    [lead],
  );

  const set = (key: keyof Lead, value: unknown) => setForm((current) => ({ ...current, [key]: value }));
  async function addFiles(list: FileList | File[]) {
    const nextFiles: typeof files = [];
    const nextImages: typeof images = [];
    let extracted = "";
    for (const file of Array.from(list).slice(0, 20)) {
      nextFiles.push({ name: file.name, size: file.size, type: file.type || "application/octet-stream" });
      if (/^image\/(jpeg|png|webp)$/i.test(file.type)) {
        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        });
        nextImages.push({ name: file.name, size: file.size, type: file.type, dataUrl });
      } else if (/\.txt$/i.test(file.name) || file.type === "text/plain") {
        extracted += `\n\n--- ${file.name} ---\n${await file.text()}`;
      } else if (/\.zip$/i.test(file.name)) {
        const archive = unzipSync(new Uint8Array(await file.arrayBuffer()));
        for (const [name, bytes] of Object.entries(archive)) {
          if (/\.txt$/i.test(name)) extracted += `\n\n--- ${name} ---\n${strFromU8(bytes)}`;
        }
      }
    }
    setFiles((current) => [...current, ...nextFiles]);
    setImages((current) => [...current, ...nextImages].slice(0, 10));
    if (extracted) setText((current) => `${current}${extracted}`.trim());
  }

  async function analyze() {
    setBusy(true); setError("");
    try {
      const hash = await leadContentHash(text, files.map((file) => `${file.name}:${file.size}`));
      const response = await fetch("/api/admin/ai/parse-lead", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, imageDataUrls: images.map((image) => image.dataUrl), existingLead: lead || undefined }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not analyze conversation");
      const proposed = result.proposal as LeadAiProposal;
      const nextChanges = lead ? buildLeadChanges(form, proposed) : buildLeadChanges({}, proposed);
      setProposal(proposed); setChanges(nextChanges); setSelectedChanges(new Set(nextChanges.map((item) => String(item.field)))); setContentHash(hash);
      if (!lead) setForm((current) => mergeLeadPatch(current as Record<string, unknown>, proposed as Record<string, unknown>) as Partial<Lead>);
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Could not analyze conversation"); }
    finally { setBusy(false); }
  }

  function applyReviewedChanges() {
    const patch = Object.fromEntries(changes.filter((item) => selectedChanges.has(String(item.field))).map((item) => [item.field, item.newValue]));
    setForm((current) => mergeLeadPatch(current as Record<string, unknown>, patch) as Partial<Lead>);
  }

  async function save(event: React.FormEvent) {
    event.preventDefault();
    if (!form.full_name && !form.phone && !form.email) { setError("Add a client name, phone or email."); return; }
    setBusy(true); setError("");
    const applied = lead ? changes.filter((item) => selectedChanges.has(String(item.field))) : changes;
    const reviewedPatch = Object.fromEntries(applied.map((item) => [item.field, item.newValue]));
    const reviewedForm = lead
      ? mergeLeadPatch(form as Record<string, unknown>, reviewedPatch) as Partial<Lead>
      : form;
    const body = {
      ...reviewedForm,
      conversation_import: contentHash && proposal ? {
        content_hash: contentHash,
        source_type: images.length && text ? "mixed" : images.length ? "image" : files.some((file) => file.name.endsWith(".zip")) ? "zip" : files.length ? "txt" : "paste",
        source_files: files,
        raw_text: text,
        extracted_data: proposal,
        applied_changes: applied,
        warnings: proposal.ai_warnings || [],
      } : undefined,
    };
    const response = await fetch(lead ? `/api/admin/leads/${lead.id}` : "/api/admin/leads", {
      method: lead ? "PATCH" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
    });
    const result = await response.json(); setBusy(false);
    if (!response.ok) { setError(result.error || "Could not save lead"); return; }
    await onSaved(); onClose();
  }

  function createOrder() {
    if (!lead) return;
    sessionStorage.setItem("thevulgo_lead_order_draft", JSON.stringify(leadToOrderDraft({ ...lead, ...form } as Lead)));
    window.location.assign("/admin?newOrder=lead");
  }

  function exportLead() {
    if (!lead) return;
    const blob = new Blob([JSON.stringify({ lead: { ...lead, ...form }, conversation_history: history }, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `lead-${lead.id}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 p-2 backdrop-blur-sm sm:p-6">
      <form onSubmit={save} className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#f4f4f0] shadow-2xl">
        <header className="flex items-center justify-between bg-[#111] p-5 text-white sm:px-7">
          <div><p className="text-xs font-black uppercase tracking-[.16em] text-yellow-400">AI lead workspace</p><h2 className="text-2xl font-black">{lead ? lead.full_name || "Lead details" : "New lead"}</h2></div>
          <button type="button" onClick={onClose} className="rounded-xl border border-white/20 p-2"><X /></button>
        </header>
        <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="space-y-4">
            <section className="rounded-3xl border border-black/10 bg-white p-4">
              <p className="flex items-center gap-2 font-black"><Sparkles className="h-5 w-5 text-yellow-500" />Import conversation</p>
              <p className="mt-1 text-sm text-gray-500">Paste WhatsApp text or add TXT, ZIP and screenshots. Nothing is saved until you review it.</p>
              <textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Paste the conversation here…" className="mt-3 min-h-36 w-full rounded-2xl border bg-[#fafaf7] p-3" />
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <label className="flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm font-bold"><Upload className="h-4 w-4" />Add files<input type="file" multiple accept=".txt,.zip,image/jpeg,image/png,image/webp" className="hidden" onChange={(event) => event.target.files && void addFiles(event.target.files)} /></label>
                {files.map((file, index) => <span key={`${file.name}-${index}`} className="rounded-full bg-gray-100 px-2 py-1 text-xs">{file.name}</span>)}
                <button type="button" disabled={busy || (!text.trim() && !images.length)} onClick={() => void analyze()} className="ml-auto rounded-xl bg-yellow-400 px-4 py-2 font-black disabled:opacity-40">{busy ? "Analyzing…" : "Analyze with AI"}</button>
              </div>
            </section>
            {changes.length ? <section className="rounded-3xl border border-yellow-300 bg-yellow-50 p-4"><p className="font-black">Review proposed changes</p><div className="mt-3 space-y-2">{changes.map((change) => <label key={String(change.field)} className="grid cursor-pointer grid-cols-[auto_1fr] gap-3 rounded-xl bg-white p-3 text-sm"><input type="checkbox" checked={selectedChanges.has(String(change.field))} onChange={() => setSelectedChanges((current) => { const next = new Set(current); const key = String(change.field); if (next.has(key)) next.delete(key); else next.add(key); return next; })} /><span><b>{String(change.field).replaceAll("_", " ")}</b><span className="block text-gray-500">{display(change.oldValue)} <ArrowRight className="inline h-3 w-3" /> {display(change.newValue)}</span></span></label>)}</div>{lead ? <button type="button" onClick={applyReviewedChanges} className="mt-3 rounded-xl bg-black px-4 py-2 font-bold text-white">Apply selected to draft</button> : null}</section> : null}
            <LeadFields form={form} set={set} />
          </div>
          <aside className="space-y-4">
            <section className="rounded-3xl bg-[#111] p-5 text-white"><p className="text-xs font-black uppercase tracking-wider text-yellow-400">AI summary</p><p className="mt-2 text-sm text-white/75">{form.ai_summary || "Analyze a conversation to generate a concise lead summary."}</p>{form.ai_missing_fields?.length ? <p className="mt-4 text-sm"><b>Missing:</b> {form.ai_missing_fields.join(", ")}</p> : null}{form.ai_warnings?.length ? <div className="mt-3 rounded-xl bg-orange-400/15 p-3 text-sm text-orange-100">{form.ai_warnings.join(" · ")}</div> : null}</section>
            {lead ? <section className="rounded-3xl border bg-white p-4"><div className="flex items-center justify-between"><p className="font-black">Conversation timeline</p><FileText className="h-5 w-5 text-gray-400" /></div>{history.length ? <div className="mt-3 space-y-3">{history.map((item) => <div key={item.id} className="border-l-2 border-yellow-400 pl-3 text-sm"><b>{item.import_kind === "initial" ? "Initial conversation" : "Conversation update"}</b><p className="text-xs text-gray-500">{new Date(item.created_at).toLocaleString()} · {item.source_type}</p><p className="mt-1 text-gray-600">{item.applied_changes?.length || 0} changes · {item.source_files?.length || 0} files</p></div>)}</div> : <p className="mt-2 text-sm text-gray-500">No imported conversations yet.</p>}</section> : null}
            {lead ? <div className="grid gap-2"><button type="button" onClick={createOrder} className="w-full rounded-2xl border-2 border-black bg-white px-5 py-3 font-black">Create order from lead →</button><button type="button" onClick={exportLead} className="w-full rounded-2xl border px-5 py-3 text-sm font-bold">Export lead history</button></div> : null}
          </aside>
        </div>
        {error ? <p className="mx-4 mb-3 rounded-xl bg-red-50 p-3 text-sm text-red-700 sm:mx-6">{error}</p> : null}
        <footer className="sticky bottom-0 flex justify-end gap-2 border-t bg-white p-4"><button type="button" onClick={onClose} className="rounded-xl border px-5 py-3 font-bold">Cancel</button><button disabled={busy} className="rounded-xl bg-yellow-400 px-6 py-3 font-black">{busy ? "Saving…" : lead ? "Save reviewed changes" : "Create lead"}</button></footer>
      </form>
    </div>
  );
}

function display(value: unknown) { return value == null || value === "" ? "—" : typeof value === "object" ? JSON.stringify(value) : String(value); }
function LeadFields({ form, set }: { form: Partial<Lead>; set: (key: keyof Lead, value: unknown) => void }) {
  const fields: Array<[keyof Lead, string, string]> = [
    ["full_name", "Name", "text"], ["phone", "Phone", "text"], ["email", "Email", "email"], ["language", "Language", "text"],
    ["market", "Market", "text"], ["city", "City", "text"], ["area", "Area", "text"], ["postal_code", "Postal code", "text"],
    ["address", "Address", "text"], ["apartment", "Apartment", "text"], ["category", "Category", "text"], ["potential_value", "Potential value", "number"],
    ["quoted_value", "Quoted value", "number"], ["accepted_value", "Accepted value", "number"], ["requested_date", "Requested date", "date"], ["requested_time", "Requested time", "time"],
  ];
  return <section className="rounded-3xl border bg-white p-4"><p className="font-black">Lead details</p><div className="mt-3 grid gap-3 sm:grid-cols-2">{fields.map(([key, label, type]) => <label key={key} className="text-sm font-bold">{label}<input type={type} value={String(form[key] ?? "")} onChange={(event) => set(key, type === "number" ? (event.target.value ? Number(event.target.value) : null) : event.target.value)} className="mt-1 min-h-11 w-full rounded-xl border p-3 font-normal" /></label>)}<label className="text-sm font-bold">Status<select value={form.status || "new"} onChange={(event) => set("status", event.target.value)} className="mt-1 min-h-11 w-full rounded-xl border p-3 font-normal">{LEAD_STATUSES.filter((status) => status !== "converted" || form.status === "converted").map((status) => <option key={status} value={status}>{LEAD_STATUS_LABELS[status]}</option>)}</select></label><label className="text-sm font-bold">Follow-up<input type="datetime-local" value={form.follow_up_at?.slice(0, 16) || ""} onChange={(event) => set("follow_up_at", event.target.value ? new Date(event.target.value).toISOString() : null)} className="mt-1 min-h-11 w-full rounded-xl border p-3 font-normal" /></label></div><label className="mt-3 block text-sm font-bold">Service summary<textarea value={form.service_summary || ""} onChange={(event) => set("service_summary", event.target.value)} className="mt-1 min-h-20 w-full rounded-xl border p-3 font-normal" /></label>{form.structured_services?.length ? <div className="mt-3"><p className="text-sm font-bold">Structured services</p><div className="mt-1 space-y-2">{form.structured_services.map((service, index) => <div key={`${service.label}-${index}`} className="grid grid-cols-[1fr_5rem_7rem] gap-2 rounded-xl bg-[#f7f7f4] p-2"><input aria-label={`Service ${index + 1}`} value={service.label} onChange={(event) => set("structured_services", form.structured_services?.map((item, itemIndex) => itemIndex === index ? { ...item, label: event.target.value } : item))} className="rounded-lg border p-2" /><input aria-label={`Quantity ${index + 1}`} type="number" min="1" value={service.quantity || 1} onChange={(event) => set("structured_services", form.structured_services?.map((item, itemIndex) => itemIndex === index ? { ...item, quantity: Number(event.target.value) } : item))} className="rounded-lg border p-2" /><input aria-label={`Price ${index + 1}`} type="number" min="0" placeholder="Price" value={service.price ?? ""} onChange={(event) => set("structured_services", form.structured_services?.map((item, itemIndex) => itemIndex === index ? { ...item, price: event.target.value ? Number(event.target.value) : null } : item))} className="rounded-lg border p-2" /></div>)}</div></div> : null}<label className="mt-3 block text-sm font-bold">Next action<input value={form.next_action || ""} onChange={(event) => set("next_action", event.target.value)} className="mt-1 min-h-11 w-full rounded-xl border p-3 font-normal" /></label><label className="mt-3 block text-sm font-bold">Notes<textarea value={form.notes || ""} onChange={(event) => set("notes", event.target.value)} className="mt-1 min-h-24 w-full rounded-xl border p-3 font-normal" /></label></section>;
}
