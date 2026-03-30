"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase-browser";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabaseBrowser.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message || "Login failed");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 text-black">
      <div className="mx-auto max-w-md rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
          Admin access
        </p>

        <h1 className="mt-2 text-3xl font-extrabold">Admin login</h1>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Sign in to access THEVULGO admin panel.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-bold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-yellow-400"
              placeholder="pechatkin.work@gmail.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-yellow-400"
              placeholder="••••••••"
            />
          </div>

          {error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-yellow-400 px-6 py-4 text-sm font-extrabold text-black shadow-md transition hover:scale-[1.01] disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}