"use client";

import AdminNav from "./AdminNav";
import {
  ACTIVE_LEAD_STATUSES,
  LEAD_STATUS_LABELS,
  LEAD_STATUSES,
  type Lead,
  type LeadStatus,
} from "@/lib/leads";
import { useEffect, useMemo, useState } from "react";
import { Clock3, Plus, Search } from "lucide-react";
import {
  ActivityBars,
  CrmHero,
  CrmMetric,
  CrmPanel,
  EmptyCrm,
  MiniBars,
} from "./CrmVisuals";
import LeadWorkspace from "./LeadWorkspace";

const money = (value: number) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value || 0);
const localDate = (value: string | null) =>
  value
    ? new Intl.DateTimeFormat("en-IE", {
        timeZone: "Europe/Madrid",
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(value))
    : "No follow-up set";

export default function LeadsClient({ mode }: { mode: "leads" | "today" }) {
  const [leads, setLeads] = useState<Lead[]>([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(""),
    [filter, setFilter] = useState<LeadStatus | "active" | "all">("active"),
    [search, setSearch] = useState(""),
    [editing, setEditing] = useState<Lead | null>(null),
    [showForm, setShowForm] = useState(false);
  const load = async () => {
    setLoading(true);
    const response = await fetch(
      `/api/admin/leads${mode === "today" ? "?scope=today" : ""}`,
    );
    const result = await response.json();
    if (!response.ok) setError(result.error || "Could not load leads");
    else setLeads(result.leads || []);
    setLoading(false);
  };
  const [referenceNow] = useState(() => Date.now());
  useEffect(() => {
    let active = true;
    void fetch(`/api/admin/leads${mode === "today" ? "?scope=today" : ""}`)
      .then(async (response) => ({ response, result: await response.json() }))
      .then(({ response, result }) => {
        if (!active) return;
        if (!response.ok) setError(result.error || "Could not load leads");
        else setLeads(result.leads || []);
        setLoading(false);
      })
      .catch(() => {
        if (active) {
          setError("Could not load leads");
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, [mode]);
  const isActive = (status: LeadStatus) =>
    (ACTIVE_LEAD_STATUSES as readonly LeadStatus[]).includes(status);
  const visible = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leads.filter(
      (lead) =>
        (!query ||
          [
            lead.full_name,
            lead.phone,
            lead.email,
            lead.service_summary,
            lead.notes,
          ]
            .join(" ")
            .toLowerCase()
            .includes(query)) &&
        (mode === "today" ||
          filter === "all" ||
          (filter === "active"
            ? isActive(lead.status)
            : lead.status === filter)),
    );
  }, [leads, search, filter, mode]);
  const stats = useMemo(
    () => ({
      open: leads.filter((lead) => isActive(lead.status)).length,
      due: leads.filter(
        (lead) =>
          !lead.follow_up_at ||
          new Date(lead.follow_up_at).getTime() <= referenceNow,
      ).length,
      value: leads
        .filter((lead) => isActive(lead.status))
        .reduce((sum, lead) => sum + Number(lead.potential_value || 0), 0),
    }),
    [leads, referenceNow],
  );
  const statusBreakdown = useMemo(
    () =>
      Object.entries(
        leads.reduce<Record<string, number>>((total, lead) => {
          const label = LEAD_STATUS_LABELS[lead.status];
          total[label] = (total[label] || 0) + 1;
          return total;
        }, {}),
      )
        .map(([label, value]) => ({ label, value }))
        .sort((a, b) => b.value - a.value),
    [leads],
  );
  const sourceBreakdown = useMemo(
    () =>
      Object.entries(
        leads.reduce<Record<string, number>>((total, lead) => {
          const label = lead.source || "Unknown";
          total[label] = (total[label] || 0) + 1;
          return total;
        }, {}),
      )
        .map(([label, value]) => ({ label, value }))
        .sort((a, b) => b.value - a.value),
    [leads],
  );
  const activity = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => {
        const date = new Date();
        date.setDate(date.getDate() - (13 - index));
        const key = date.toISOString().slice(0, 10);
        return {
          label: date.toLocaleDateString("en-IE", {
            month: "short",
            day: "numeric",
          }),
          value: leads.filter((lead) => lead.created_at.slice(0, 10) === key)
            .length,
        };
      }),
    [leads],
  );
  const converted = leads.filter((lead) => lead.status === "converted").length;
  const closed =
    converted + leads.filter((lead) => lead.status === "lost").length;
  const openNew = () => {
    setEditing(null);
    setShowForm(true);
  };
  const openEdit = async (lead: Lead) => {
    setError("");
    const response = await fetch(`/api/admin/leads/${lead.id}`);
    const result = await response.json();
    if (!response.ok) { setError(result.error || "Could not load lead"); return; }
    setEditing(result.lead);
    setShowForm(true);
  };
  async function update(lead: Lead, updates: Record<string, unknown>) {
    setError("");
    const response = await fetch(`/api/admin/leads/${lead.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error || "Could not update lead");
      return;
    }
    setLeads((current) =>
      current.map((item) => (item.id === lead.id ? result.lead : item)),
    );
  }
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f4f0] p-3 pb-[max(1rem,env(safe-area-inset-bottom))] text-black sm:p-6">
      <div className="mx-auto max-w-7xl space-y-5">
        <AdminNav />
        <CrmHero
          eyebrow={
            mode === "today" ? "Daily command centre" : "Spain operations pipeline"
          }
          title={mode === "today" ? "Today’s follow-ups" : "Lead pipeline"}
          description={
            mode === "today"
              ? "Everything that needs a reply, decision or follow-up today."
              : "Turn WhatsApp conversations and quote requests into scheduled Spain jobs."
          }
          action={
            <button
              onClick={openNew}
              className="flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3.5 font-black text-black shadow-lg"
            >
              <Plus className="h-5 w-5" />
              Add lead
            </button>
          }
        />
        {error ? (
          <p className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">
            {error}
          </p>
        ) : null}
        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <CrmMetric
            label="Open leads"
            value={stats.open}
            note="Active pipeline"
          />
          <CrmMetric
            label="Needs attention"
            value={stats.due}
            note="Due now or unscheduled"
            accent
          />
          <CrmMetric
            label="Potential EUR"
            value={money(stats.value)}
            note="Open opportunity value"
          />
          <CrmMetric
            label="Close rate"
            value={closed ? `${Math.round((converted / closed) * 100)}%` : "—"}
            note={`${converted} converted`}
          />
        </section>
        {mode === "leads" ? (
          <section className="grid gap-5 lg:grid-cols-3">
            <CrmPanel
              title="Lead activity"
              subtitle="New leads during the last 14 days"
            >
              <ActivityBars values={activity} />
            </CrmPanel>
            <CrmPanel
              title="Pipeline stages"
              subtitle="Current leads by status"
            >
              <MiniBars items={statusBreakdown} />
            </CrmPanel>
            <CrmPanel
              title="Lead sources"
              subtitle="Where conversations originate"
            >
              <MiniBars items={sourceBreakdown} />
            </CrmPanel>
          </section>
        ) : null}
        <section className="rounded-[1.75rem] border border-black/5 bg-white p-4 shadow-sm sm:rounded-[2rem] sm:p-5">
          <div className="flex flex-wrap gap-3">
            <label className="flex min-w-56 flex-1 items-center gap-2 rounded-2xl border border-black/10 bg-[#f7f7f4] px-4">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search customer, service…"
                className="w-full bg-transparent py-3 outline-none"
              />
            </label>
            {mode === "leads" ? (
              <select
                value={filter}
                onChange={(event) =>
                  setFilter(event.target.value as LeadStatus | "active" | "all")
                }
                className="w-full rounded-2xl border border-black/10 bg-[#f7f7f4] px-4 py-3 font-bold sm:w-auto"
              >
                <option value="active">Active leads</option>
                <option value="all">All leads</option>
                {LEAD_STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {LEAD_STATUS_LABELS[status]}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
          <div className="mt-4 grid gap-3">
            {loading ? (
              <p>Loading…</p>
            ) : visible.length ? (
              visible.map((lead) => (
                <article
                  key={lead.id}
                  className="rounded-3xl border border-black/8 bg-[#fafaf7] p-5 transition hover:border-yellow-400 hover:shadow-md"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-[10px] font-black uppercase text-yellow-800">
                          {LEAD_STATUS_LABELS[lead.status]}
                        </span>
                        <span className="text-xs font-bold text-gray-400">
                          {lead.source}
                        </span>
                      </div>
                      <p className="text-lg font-black">
                        {lead.full_name ||
                          lead.phone ||
                          lead.email ||
                          "Unnamed lead"}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {lead.service_summary ||
                          lead.category ||
                          "No service details"}
                      </p>
                      <p className="mt-3 flex items-center gap-1.5 text-xs font-bold text-gray-500">
                        <Clock3 className="h-3.5 w-3.5" />
                        {localDate(lead.follow_up_at)} ·{" "}
                        {money(Number(lead.potential_value))}
                      </p>
                    </div>
                    <div className="grid w-full grid-cols-3 gap-2 sm:flex sm:w-auto sm:flex-wrap">
                      <select
                        value={lead.status}
                        onChange={(event) =>
                          void update(lead, {
                            status: event.target.value,
                            last_contacted_at: new Date().toISOString(),
                          })
                        }
                        className="min-w-0 rounded-xl border px-2 py-2 text-xs sm:px-3 sm:text-sm"
                      >
                        {LEAD_STATUSES.filter(
                          (status) =>
                            status !== "converted" || lead.status === "converted",
                        ).map((status) => (
                          <option key={status} value={status}>
                            {LEAD_STATUS_LABELS[status]}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => openEdit(lead)}
                        className="rounded-xl border border-yellow-400 px-2 py-2 text-xs font-bold sm:px-3 sm:text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          void update(lead, {
                            follow_up_at: new Date(
                              Date.now() + 24 * 60 * 60 * 1000,
                            ).toISOString(),
                            next_action: "Follow up",
                          })
                        }
                        className="rounded-xl border px-2 py-2 text-xs font-bold sm:px-3 sm:text-sm"
                      >
                        Tomorrow
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <EmptyCrm
                title={
                  mode === "today"
                    ? "Nothing needs attention today"
                    : "No leads in this view"
                }
                text={
                  mode === "today"
                    ? "Your daily follow-up queue is clear."
                    : "New conversations will appear here as you add them."
                }
              />
            )}
          </div>
        </section>
        {showForm ? (
          <LeadWorkspace
            lead={editing}
            onClose={() => setShowForm(false)}
            onSaved={load}
          />
        ) : null}
      </div>
    </main>
  );
}
