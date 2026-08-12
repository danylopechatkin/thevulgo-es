"use client";
import { getSupabaseBrowser } from "@/lib/supabase-browser";
import { useState } from "react";
export default function WorkerLoginPage() {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [error, setError] = useState(""),
    [loading, setLoading] = useState(false);
  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await getSupabaseBrowser().auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) setError("Email or password is incorrect.");
    else {
      const requested = new URLSearchParams(window.location.search).get("next");
      const destination =
        requested?.startsWith("/worker/") && !requested.startsWith("//")
          ? requested
          : "/worker";
      window.location.assign(destination);
    }
  }
  return (
    <main className="min-h-screen bg-[#fffdf7] p-5">
      <form
        onSubmit={submit}
        className="mx-auto mt-24 max-w-md rounded-3xl border border-yellow-400 bg-white p-7 shadow-xl"
      >
        <p className="text-sm font-black uppercase tracking-[.14em] text-yellow-700">
          THEVULGO contractor portal
        </p>
        <h1 className="mt-3 text-3xl font-black">Worker login</h1>
        <p className="mt-2 text-sm text-gray-600">
          Use the password you created from your invitation email.
        </p>
        <label className="mt-6 block font-bold">
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </label>
        <label className="mt-4 block font-bold">
          Password
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </label>
        {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}
        <button
          disabled={loading}
          className="mt-6 w-full rounded-2xl bg-yellow-400 py-3.5 font-black"
        >
          {loading ? "Signing in…" : "Open my jobs"}
        </button>
      </form>
    </main>
  );
}
