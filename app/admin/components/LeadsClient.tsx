"use client";

import { SERVICE_CATALOG } from "@/lib/serviceCatalog";
import {
  ACTIVE_LEAD_STATUSES,
  LEAD_STATUSES,
  LEAD_STATUS_LABELS,
  type Lead,
  type LeadStatus,
} from "@/lib/leads";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AdminSectionNav from "./AdminSectionNav";

type Mode = "leads" | "today";

const emptyForm = {
  full_name: "",
  phone: "",
  email: "",
  service_summary: "",
  category: "Repairs",
  status: "new" as LeadStatus,
  next_action: "Reply to the client",
  follow_up_at: "",
  potential_value: "",
  notes: "",
};

const toLocalInput = (value: string | null) => {
  if (!value) return "";
  const date = new Date(value);
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 16);
};

const formatDateTime = (value: string | null) =>
  value
    ? new Intl.DateTimeFormat("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Europe/Madrid",
      }).format(new Date(value))
    : "No reminder set";

const getDefaultFollowUp = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(10, 0, 0, 0);
  return toLocalInput(date.toISOString());
};

export default function LeadsClient({ mode }: { mode: Mode }) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "active" | "all">("active");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Lead | null>(null);
  const [form, setForm] = useState({ ...emptyForm, follow_up_at: getDefaultFollowUp() });
  const [saving, setSaving] = useState(false);
  const [referenceNow] = useState(() => Date.now());
  const [aiLeadText, setAiLeadText] = useState("");
  const [parsingLead, setParsingLead] = useState(false);

  const loadLeads = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/admin/leads${mode === "today" ? "?scope=today" : ""}`);
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not load leads");
      setLeads(result.leads || []);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Could not load leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let active = true;
    const endpoint = `/api/admin/leads${mode === "today" ? "?scope=today" : ""}`;

    fetch(endpoint)
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Could not load leads");
        return result.leads || [];
      })
      .then((data) => {
        if (active) setLeads(data);
      })
      .catch((loadError: unknown) => {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : "Could not load leads");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [mode]);

  const filteredLeads = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesQuery =
        !cleanQuery ||
        [lead.full_name, lead.phone, lead.email, lead.service_summary, lead.notes]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(cleanQuery));
      const matchesStatus =
        mode === "today" ||
        statusFilter === "all" ||
        (statusFilter === "active"
          ? ACTIVE_LEAD_STATUSES.includes(lead.status)
          : lead.status === statusFilter);
      return matchesQuery && matchesStatus;
    });
  }, [leads, mode, query, statusFilter]);

  const todayStats = useMemo(() => {
    const now = referenceNow;
    const endToday = new Date(referenceNow);
    endToday.setHours(23, 59, 59, 999);
    return {
      overdue: leads.filter((lead) => !lead.follow_up_at || new Date(lead.follow_up_at).getTime() < now).length,
      dueToday: leads.filter((lead) => {
        if (!lead.follow_up_at) return false;
        const time = new Date(lead.follow_up_at).getTime();
        return time >= now && time <= endToday.getTime();
      }).length,
      value: leads.reduce((sum, lead) => sum + Number(lead.potential_value || 0), 0),
    };
  }, [leads, referenceNow]);

  const openCreate = () => {
    setEditing(null);
    setForm({ ...emptyForm, follow_up_at: getDefaultFollowUp() });
    setAiLeadText("");
    setShowForm(true);
  };

  const openEdit = (lead: Lead) => {
    setEditing(lead);
    setForm({
      full_name: lead.full_name,
      phone: lead.phone,
      email: lead.email,
      service_summary: lead.service_summary,
      category: lead.category,
      status: lead.status,
      next_action: lead.next_action,
      follow_up_at: toLocalInput(lead.follow_up_at),
      potential_value: String(lead.potential_value || ""),
      notes: lead.notes,
    });
    setAiLeadText("");
    setShowForm(true);
  };

  const saveLead = async () => {
    if (!form.full_name.trim() && !form.phone.trim() && !form.email.trim()) {
      setError("Add a client name, phone or email");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const response = await fetch(editing ? `/api/admin/leads/${editing.id}` : "/api/admin/leads", {
        method: editing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          follow_up_at: form.follow_up_at ? new Date(form.follow_up_at).toISOString() : null,
          potential_value: Number(form.potential_value || 0),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not save lead");
      setShowForm(false);
      await loadLeads();
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Could not save lead");
    } finally {
      setSaving(false);
    }
  };

  const fillLeadWithAi = async () => {
    if (!aiLeadText.trim()) return;
    setParsingLead(true);
    setError("");
    try {
      const response = await fetch("/api/admin/ai/parse-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: aiLeadText.trim(), imageDataUrls: [] }),
      });
      const result = await response.json();
      if (!response.ok || !result.order) throw new Error(result.error || "AI could not read this conversation");
      const order = result.order as {
        fullName?: string | null;
        phone?: string | null;
        email?: string | null;
        category?: string;
        notes?: string | null;
        services?: Array<{ label?: string; price?: number | null; qty?: number }>;
      };
      const services = order.services || [];
      const serviceSummary = services
        .map((service) => service.label)
        .filter(Boolean)
        .join(", ");
      const potentialValue = services.reduce(
        (sum, service) => sum + Number(service.price || 0) * Number(service.qty || 1),
        0
      );
      setForm((current) => ({
        ...current,
        full_name: order.fullName || current.full_name,
        phone: order.phone || current.phone,
        email: order.email || current.email,
        category: order.category || current.category,
        service_summary: serviceSummary || current.service_summary,
        potential_value: potentialValue ? String(potentialValue) : current.potential_value,
        notes: order.notes || aiLeadText.trim(),
      }));
    } catch (parseError) {
      setError(parseError instanceof Error ? parseError.message : "AI could not read this conversation");
    } finally {
      setParsingLead(false);
    }
  };

  const updateLead = async (lead: Lead, updates: Record<string, unknown>) => {
    setError("");
    try {
      const response = await fetch(`/api/admin/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not update lead");
      setLeads((current) =>
        mode === "today" && ["converted", "lost"].includes(result.lead.status)
          ? current.filter((item) => item.id !== lead.id)
          : current.map((item) => (item.id === lead.id ? result.lead : item))
      );
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : "Could not update lead");
    }
  };

  const snooze = (lead: Lead, days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    date.setHours(10, 0, 0, 0);
    void updateLead(lead, { follow_up_at: date.toISOString() });
  };

  return (
    <main className="min-h-screen bg-[#fffdf7] px-3 py-4 text-black sm:p-6">
      <div className="mx-auto max-w-7xl space-y-5">
        <AdminSectionNav />

        <header className="flex flex-col gap-4 rounded-3xl border border-yellow-400 bg-white p-5 shadow-md sm:flex-row sm:items-end sm:justify-between sm:p-7">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">
              {mode === "today" ? "Daily focus" : "WhatsApp pipeline"}
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {mode === "today" ? "What needs attention today" : "Leads"}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              {mode === "today"
                ? "Overdue follow-ups and conversations that need your next action."
                : "Keep every potential client until they book or clearly decline."}
            </p>
          </div>
          <button
            type="button"
            onClick={openCreate}
            className="rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-extrabold shadow-md transition hover:scale-[1.01]"
          >
            + Add lead
          </button>
        </header>

        {mode === "today" && (
          <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Stat label="Overdue / no date" value={todayStats.overdue} danger />
            <Stat label="Due later today" value={todayStats.dueToday} />
            <Stat label="Potential value" value={`€${todayStats.value.toFixed(0)}`} />
          </section>
        )}

        <section className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, phone or service…"
              className="min-w-0 flex-1 rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-yellow-400"
            />
            {mode === "leads" && (
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as LeadStatus | "active" | "all")}
                className="rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-yellow-400"
              >
                <option value="active">Active leads</option>
                <option value="all">All leads</option>
                {LEAD_STATUSES.map((status) => (
                  <option key={status} value={status}>{LEAD_STATUS_LABELS[status]}</option>
                ))}
              </select>
            )}
          </div>
        </section>

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="rounded-3xl bg-white p-10 text-center text-sm font-bold text-gray-500">Loading leads…</div>
        ) : filteredLeads.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <p className="text-xl font-extrabold">Nothing needs attention</p>
            <p className="mt-2 text-sm text-gray-500">
              {mode === "today" ? "Your follow-up list is clear." : "Add the first lead."}
            </p>
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {filteredLeads.map((lead) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                onEdit={() => openEdit(lead)}
                onUpdate={(updates) => void updateLead(lead, updates)}
                onSnooze={(days) => snooze(lead, days)}
                now={referenceNow}
              />
            ))}
          </section>
        )}
      </div>

      {showForm && (
        <LeadForm
          form={form}
          setForm={setForm}
          editing={Boolean(editing)}
          saving={saving}
          aiLeadText={aiLeadText}
          setAiLeadText={setAiLeadText}
          parsingLead={parsingLead}
          onParse={() => void fillLeadWithAi()}
          onClose={() => setShowForm(false)}
          onSave={() => void saveLead()}
        />
      )}
    </main>
  );
}

function LeadCard({
  lead,
  onEdit,
  onUpdate,
  onSnooze,
  now,
}: {
  lead: Lead;
  onEdit: () => void;
  onUpdate: (updates: Record<string, unknown>) => void;
  onSnooze: (days: number) => void;
  now: number;
}) {
  const overdue = !lead.follow_up_at || new Date(lead.follow_up_at).getTime() < now;
  const phoneDigits = lead.phone.replace(/[^\d+]/g, "");
  const photoUrls = lead.notes.match(/https:\/\/[^\s]+/g) || [];
  const whatsappHref = phoneDigits
    ? `https://wa.me/${phoneDigits.replace(/^\+/, "")}?text=${encodeURIComponent(
        `Hola ${lead.full_name || ""}, quería hacer seguimiento sobre ${lead.service_summary || "el servicio"}.`
      )}`
    : "";

  return (
    <article className={`rounded-3xl border bg-white p-5 shadow-md ${overdue ? "border-red-300" : "border-yellow-400"}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xl font-extrabold">{lead.full_name || lead.phone || lead.email}</p>
          <p className="mt-1 text-sm text-gray-500">{lead.phone || lead.email || "No contact details"}</p>
        </div>
        <span className="shrink-0 rounded-full bg-yellow-100 px-3 py-1 text-[11px] font-extrabold uppercase">
          {LEAD_STATUS_LABELS[lead.status]}
        </span>
      </div>

      <p className="mt-4 text-base font-bold">{lead.service_summary || "Service not specified"}</p>
      {lead.notes && <p className="mt-2 line-clamp-3 whitespace-pre-line text-sm leading-6 text-gray-600">{lead.notes}</p>}
      {photoUrls.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {photoUrls.map((url, index) => (
            <a key={url} href={url} target="_blank" rel="noreferrer" className="rounded-xl border border-yellow-400 bg-yellow-50 px-3 py-2 text-xs font-extrabold text-black">
              Open photo {index + 1}
            </a>
          ))}
        </div>
      )}

      <div className={`mt-4 rounded-2xl p-3 ${overdue ? "bg-red-50" : "bg-[#fffbea]"}`}>
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Next action</p>
        <p className="mt-1 font-extrabold">{lead.next_action || "Set the next action"}</p>
        <p className={`mt-1 text-sm font-bold ${overdue ? "text-red-700" : "text-gray-600"}`}>
          {formatDateTime(lead.follow_up_at)}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {whatsappHref && (
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-xl bg-green-600 px-3 py-2 text-sm font-extrabold text-white">
            WhatsApp
          </a>
        )}
        {lead.phone && <a href={`tel:${lead.phone}`} className="rounded-xl border border-gray-300 px-3 py-2 text-sm font-bold">Call</a>}
        <button type="button" onClick={onEdit} className="rounded-xl border border-gray-300 px-3 py-2 text-sm font-bold">Edit</button>
        <Link href={`/admin?lead=${lead.id}`} className="rounded-xl bg-black px-3 py-2 text-sm font-extrabold text-white">
          Convert to booking
        </Link>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-3">
        <span className="text-xs font-bold text-gray-500">Remind:</span>
        {[1, 3, 7].map((days) => (
          <button key={days} type="button" onClick={() => onSnooze(days)} className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-bold">
            {days === 1 ? "Tomorrow" : `${days} days`}
          </button>
        ))}
        <select
          value={lead.status}
          onChange={(event) => onUpdate({ status: event.target.value })}
          className="ml-auto rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-xs font-bold"
        >
          {LEAD_STATUSES.map((status) => <option key={status} value={status}>{LEAD_STATUS_LABELS[status]}</option>)}
        </select>
      </div>
    </article>
  );
}

function LeadForm({ form, setForm, editing, saving, aiLeadText, setAiLeadText, parsingLead, onParse, onClose, onSave }: {
  form: typeof emptyForm;
  setForm: React.Dispatch<React.SetStateAction<typeof emptyForm>>;
  editing: boolean;
  saving: boolean;
  aiLeadText: string;
  setAiLeadText: (value: string) => void;
  parsingLead: boolean;
  onParse: () => void;
  onClose: () => void;
  onSave: () => void;
}) {
  const set = (key: keyof typeof emptyForm, value: string) => setForm((current) => ({ ...current, [key]: value }));
  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/50 p-3 pt-[max(1rem,env(safe-area-inset-top))] sm:items-center sm:p-6">
      <div className="max-h-[calc(100dvh-2rem)] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Sales pipeline</p><h2 className="mt-1 text-2xl font-extrabold">{editing ? "Edit lead" : "Add lead"}</h2></div>
          <button type="button" onClick={onClose} className="rounded-xl border border-gray-300 px-3 py-2 text-sm font-bold">Close</button>
        </div>
        {!editing && (
          <div className="mt-6 rounded-2xl border border-yellow-400 bg-[#fffdf4] p-4">
            <label className="block text-sm font-extrabold">Quick fill from WhatsApp</label>
            <textarea
              value={aiLeadText}
              onChange={(event) => setAiLeadText(event.target.value)}
              placeholder="Paste the client message or conversation here…"
              className="mt-2 min-h-24 w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-yellow-400"
            />
            <button
              type="button"
              onClick={onParse}
              disabled={parsingLead || !aiLeadText.trim()}
              className="mt-2 rounded-xl bg-black px-4 py-2.5 text-sm font-extrabold text-white disabled:opacity-50"
            >
              {parsingLead ? "Reading conversation…" : "Fill lead with AI"}
            </button>
          </div>
        )}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Client name"><input value={form.full_name} onChange={(e) => set("full_name", e.target.value)} placeholder="Name" className="input" /></Field>
          <Field label="Phone"><input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+34…" className="input" /></Field>
          <Field label="Email"><input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="Optional" className="input" /></Field>
          <Field label="Category"><select value={form.category} onChange={(e) => set("category", e.target.value)} className="input">{Object.keys(SERVICE_CATALOG).map((category) => <option key={category}>{category}</option>)}</select></Field>
          <div className="sm:col-span-2"><Field label="What does the client need?"><input value={form.service_summary} onChange={(e) => set("service_summary", e.target.value)} placeholder="Install a ceiling fan…" className="input" /></Field></div>
          <Field label="Status"><select value={form.status} onChange={(e) => set("status", e.target.value)} className="input">{LEAD_STATUSES.map((status) => <option key={status} value={status}>{LEAD_STATUS_LABELS[status]}</option>)}</select></Field>
          <Field label="Potential value"><input type="number" min="0" step="1" value={form.potential_value} onChange={(e) => set("potential_value", e.target.value)} placeholder="€" className="input" /></Field>
          <Field label="Next action"><input value={form.next_action} onChange={(e) => set("next_action", e.target.value)} placeholder="Write again when the fan arrives" className="input" /></Field>
          <Field label="Reminder"><input type="datetime-local" value={form.follow_up_at} onChange={(e) => set("follow_up_at", e.target.value)} className="input" /></Field>
          <div className="sm:col-span-2"><Field label="Conversation notes"><textarea value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Important details from WhatsApp…" className="input min-h-28 resize-y" /></Field></div>
        </div>
        <button type="button" onClick={onSave} disabled={saving} className="mt-6 w-full rounded-2xl bg-yellow-400 px-5 py-4 text-sm font-extrabold shadow-md disabled:opacity-60">
          {saving ? "Saving…" : editing ? "Save changes" : "Save lead"}
        </button>
      </div>
      <style jsx>{`.input{width:100%;border:1px solid #d1d5db;border-radius:1rem;padding:.75rem 1rem;font-size:.875rem;outline:none;background:white;color:black}.input:focus{border-color:#facc15}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm font-extrabold">{label}</span>{children}</label>;
}

function Stat({ label, value, danger = false }: { label: string; value: string | number; danger?: boolean }) {
  return <div className={`rounded-2xl border bg-white p-4 shadow-sm ${danger ? "border-red-300" : "border-yellow-400"}`}><p className="text-xs font-bold text-gray-500">{label}</p><p className={`mt-1 text-3xl font-extrabold ${danger ? "text-red-600" : "text-black"}`}>{value}</p></div>;
}
