"use client";

import { useState, type FormEvent } from "react";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { site } from "@/lib/site";

/**
 * Newsletter signup. Stores emails in the `newsletter_subscribers` table;
 * falls back to a pre-filled email link while Supabase is unconfigured.
 */
export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const client = getSupabase();
    if (!client) {
      // No database yet — open the visitor's mail client so the signup
      // always has a working path.
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Newsletter signup",
      )}&body=${encodeURIComponent(`Please add me to the newsletter: ${email}`)}`;
      return;
    }
    setState("loading");
    const { error } = await client
      .from("newsletter_subscribers")
      .insert({ email: email.trim().toLowerCase() });
    setState(error ? "error" : "done");
  }

  if (state === "done") {
    return (
      <p
        role="status"
        className={`font-medium text-volt-400 ${compact ? "text-sm" : "text-base"}`}
      >
        You&apos;re on the list. See you in your inbox. ✓
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={compact ? "newsletter-email-footer" : "newsletter-email"} className="sr-only">
          Email address
        </label>
        <input
          id={compact ? "newsletter-email-footer" : "newsletter-email"}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-brand-400 focus:border-volt-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="rounded-lg bg-volt-500 px-5 py-2.5 text-sm font-bold text-brand-950 transition-colors hover:bg-volt-400 disabled:opacity-60"
        >
          {state === "loading" ? "Signing up…" : "Subscribe"}
        </button>
      </div>
      {state === "error" ? (
        <p className="mt-2 text-xs text-flame-500">
          Something went wrong. Email us at {site.email} and we&apos;ll add you
          manually.
        </p>
      ) : null}
    </form>
  );
}

export { isSupabaseConfigured };
