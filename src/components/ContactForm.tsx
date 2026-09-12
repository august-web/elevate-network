"use client";

import { useState, type FormEvent } from "react";
import { getSupabase } from "@/lib/supabase";
import { site } from "@/lib/site";

/**
 * Contact form. Stores messages in the `contact_messages` table; falls back
 * to a pre-filled email link while Supabase is unconfigured.
 */
export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const client = getSupabase();
    if (!client) {
      // No database yet — open the visitor's mail client with the message
      // pre-filled so the form always has a working path.
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`,
      );
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        form.subject || "Website contact form",
      )}&body=${body}`;
      return;
    }
    setState("loading");
    const { error } = await client.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      subject: form.subject.trim() || null,
      message: form.message.trim(),
    });
    setState(error ? "error" : "done");
  }

  const inputClasses =
    "w-full rounded-lg border border-brand-200 bg-white px-4 py-2.5 text-sm text-brand-950 placeholder:text-brand-400 focus:border-brand-500 focus:outline-none";

  if (state === "done") {
    return (
      <div className="rounded-xl border border-volt-500/40 bg-volt-500/10 p-8 text-center">
        <p className="font-display text-lg font-bold text-brand-950">
          Message sent. ✓
        </p>
        <p className="mt-2 text-sm text-brand-700">
          Thanks, {form.name.split(" ")[0] || "friend"} — we&apos;ll get back
          to you within 48 hours. Usually faster.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-brand-200 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-brand-950"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium text-brand-950"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>
      <div className="mt-4">
        <label
          htmlFor="contact-subject"
          className="mb-1.5 block text-sm font-medium text-brand-950"
        >
          Subject <span className="text-brand-400">(optional)</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          value={form.subject}
          onChange={update("subject")}
          placeholder="Workshop, partnership, question…"
          className={inputClasses}
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-brand-950"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us what's on your mind."
          className={inputClasses}
        />
      </div>
      {state === "error" ? (
        <p className="mt-3 text-sm text-flame-500" role="alert">
          Something went wrong sending your message. Please email us directly
          at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}
      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-6 w-full rounded-lg bg-brand-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-900 disabled:opacity-60 sm:w-auto"
      >
        {state === "loading" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
