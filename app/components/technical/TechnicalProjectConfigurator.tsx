"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Minus, Plus } from "lucide-react";
import {
  TECHNICAL_CONFIGURATOR_STEPS,
  formatTechnicalProjectSummary,
  isTechnicalStepComplete,
  technicalProjectRequiresReview,
  visibleQuestions,
  type DeepTechnicalCategory,
  type TechnicalProjectDetails,
  type TechnicalQuestion,
} from "@/lib/technicalConfigurator";

type Props = {
  category: DeepTechnicalCategory;
  locale: string;
  value: TechnicalProjectDetails;
  onChange: (value: TechnicalProjectDetails) => void;
  onComplete: (value: TechnicalProjectDetails) => void;
};

export default function TechnicalProjectConfigurator({ category, locale, value, onChange, onComplete }: Props) {
  const isEs = locale === "es";
  const steps = TECHNICAL_CONFIGURATOR_STEPS[category];
  const [stepIndex, setStepIndex] = useState(0);
  const [showError, setShowError] = useState(false);
  const step = steps[stepIndex];
  const questions = visibleQuestions(step, value);
  const complete = isTechnicalStepComplete(step, value);

  const update = (key: string, next: string | number | boolean | string[]) => {
    setShowError(false);
    const updated = {
      ...value,
      [key]: next,
      ...(category === "alarms" && key === "monitoringChoice" ? { requestedMonitoring: next === "yes" } : {}),
      ...(category === "commercial" && key === "systems" ? { multiSystem: Array.isArray(next) && next.length > 1 } : {}),
    };
    onChange({ ...updated, requiresReview: technicalProjectRequiresReview(updated) });
  };

  const next = () => {
    if (!complete) {
      setShowError(true);
      return;
    }
    if (stepIndex < steps.length - 1) {
      setStepIndex((current) => current + 1);
      setShowError(false);
      return;
    }
    const finalized = { ...value, requiresReview: technicalProjectRequiresReview(value) };
    onChange(finalized);
    onComplete(finalized);
  };

  return (
    <section className="rounded-3xl border border-yellow-400 bg-white p-5 shadow-xl sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[.15em] text-yellow-700">
            {isEs ? "Detalles del proyecto" : "Project details"}
          </p>
          <h2 className="mt-2 text-2xl font-black text-black sm:text-3xl">
            {isEs ? step.es : step.en}
          </h2>
        </div>
        <span className="rounded-full bg-neutral-950 px-4 py-2 text-xs font-black text-white">
          {stepIndex + 1} / {steps.length}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-2" aria-label={isEs ? "Progreso" : "Progress"}>
        {steps.map((item, index) => (
          <div key={item.id} className="min-w-0">
            <div className={`h-1.5 rounded-full ${index <= stepIndex ? "bg-yellow-400" : "bg-neutral-200"}`} />
            <p className={`mt-2 truncate text-[11px] font-bold ${index === stepIndex ? "text-black" : "text-neutral-400"}`}>
              {isEs ? item.es : item.en}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7 space-y-7">
        {questions.map((question) => (
          <Question key={question.key} question={question} value={value} locale={locale} update={update} />
        ))}
      </div>

      {category === "cctv" && stepIndex === steps.length - 1 ? (
        <p className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-600">
          {isEs
            ? "La ubicación final de las cámaras debe respetar la privacidad y las zonas que legalmente puedan grabarse."
            : "Final camera positions must respect privacy and the areas that may lawfully be recorded."}
        </p>
      ) : null}

      {category === "alarms" && value.monitoringChoice === "yes" && stepIndex === steps.length - 1 ? (
        <p className="mt-6 rounded-2xl border border-yellow-300 bg-yellow-50 p-4 text-sm leading-6 text-neutral-700">
          {isEs
            ? "Revisaremos qué parte de la instalación podemos realizar y qué servicios deben contratarse con un proveedor autorizado. THEVULGO no presta monitorización CRA ni respuesta policial."
            : "We will review which installation work we can carry out and which services require an authorised provider. THEVULGO does not provide alarm receiving centre monitoring or police response."}
        </p>
      ) : null}

      {showError ? (
        <p className="mt-5 text-sm font-bold text-red-600">
          {isEs ? "Completa las opciones de este paso." : "Complete the options in this step."}
        </p>
      ) : null}

      <div className="mt-7 flex gap-3">
        {stepIndex > 0 ? (
          <button type="button" onClick={() => setStepIndex((current) => current - 1)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-neutral-300 px-5 font-black text-black">
            <ArrowLeft className="h-4 w-4" />{isEs ? "Volver" : "Back"}
          </button>
        ) : null}
        <button type="button" onClick={next} className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 font-black text-black shadow-md transition hover:bg-yellow-300">
          {stepIndex === steps.length - 1 ? (isEs ? "Guardar detalles" : "Save project details") : (isEs ? "Continuar" : "Continue")}
          {stepIndex === steps.length - 1 ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
        </button>
      </div>

      {stepIndex === steps.length - 1 ? (
        <div className="mt-6 rounded-2xl bg-neutral-950 p-5 text-white">
          <p className="text-xs font-black uppercase tracking-[.14em] text-yellow-400">{isEs ? "Resumen" : "Summary"}</p>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            {formatTechnicalProjectSummary(value, locale).map((line, index) => <li key={`${line}-${index}`} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />{line}</li>)}
          </ul>
          <p className="mt-4 text-xs text-neutral-400">{isEs ? "Equipamiento y materiales se presupuestan por separado." : "Equipment and materials are quoted separately."}</p>
        </div>
      ) : null}
    </section>
  );
}
function Question({ question, value, locale, update }: { question: TechnicalQuestion; value: TechnicalProjectDetails; locale: string; update: (key: string, value: string | number | boolean | string[]) => void }) {
  const isEs = locale === "es";
  const current = value[question.key];
  return (
    <fieldset>
      <legend className="text-base font-black text-black">{isEs ? question.es : question.en}</legend>
      {question.type === "quantity" ? (
        <div className="mt-3 inline-flex items-center gap-3 rounded-2xl border border-neutral-300 bg-neutral-50 p-2">
          <button type="button" aria-label={isEs ? "Reducir" : "Decrease"} onClick={() => update(question.key, Math.max(question.min || 0, Number(current || question.min || 0) - 1))} className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm"><Minus className="h-5 w-5" /></button>
          <span className="min-w-12 text-center text-xl font-black">{Number(current ?? question.min ?? 0)}</span>
          <button type="button" aria-label={isEs ? "Aumentar" : "Increase"} onClick={() => update(question.key, Number(current ?? question.min ?? 0) + 1)} className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 shadow-sm"><Plus className="h-5 w-5" /></button>
        </div>
      ) : question.type === "text" ? (
        <input value={typeof current === "string" ? current : ""} onChange={(event) => update(question.key, event.target.value)} className="mt-3 min-h-12 w-full rounded-xl border border-neutral-300 px-4 outline-none focus:border-yellow-400" />
      ) : question.type === "textarea" ? (
        <textarea value={typeof current === "string" ? current : ""} onChange={(event) => update(question.key, event.target.value)} rows={4} className="mt-3 w-full resize-y rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-yellow-400" />
      ) : (
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {question.options?.map((option) => {
            const selected = question.type === "multi" ? Array.isArray(current) && current.includes(option.value) : current === option.value;
            return <button key={option.value} type="button" aria-pressed={selected} onClick={() => {
              if (question.type === "multi") {
                const values = Array.isArray(current) ? current : [];
                update(question.key, selected ? values.filter((item) => item !== option.value) : [...values, option.value]);
              } else update(question.key, option.value);
            }} className={`min-h-14 rounded-2xl border p-3 text-left text-sm font-bold transition ${selected ? "border-black bg-yellow-400 text-black shadow-md" : "border-neutral-200 bg-white text-neutral-700 hover:border-yellow-400"}`}>
              <span className="flex items-center justify-between gap-2">{isEs ? option.es : option.en}{selected ? <Check className="h-4 w-4 shrink-0" /> : null}</span>
            </button>;
          })}
        </div>
      )}
    </fieldset>
  );
}
