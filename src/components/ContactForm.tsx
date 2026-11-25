"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim() || form.subject.trim().length < 3) {
      nextErrors.subject = "Please enter a brief subject.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = "Please share at least 10 characters about your project or inquiry.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setServerMessage(data.error || "Unable to send your message. Please try again.");
        return;
      }

      setStatus("success");
      setServerMessage(
        data.message || "Thank you for reaching out. Our team will respond shortly."
      );
      setForm(INITIAL_STATE);
      setErrors({});
    } catch {
      setStatus("error");
      setServerMessage("Network error while sending your message. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-white border border-powder/80 p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-navy mb-1.5">
            Name <span className="text-orange">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className="w-full rounded-xl border border-powder bg-light-grey/50 px-4 py-3 text-sm text-navy placeholder:text-dark-text/45 focus:border-orange focus:bg-white focus:outline-none transition-colors"
          />
          {errors.name && <p className="mt-1.5 text-xs text-orange">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-navy mb-1.5">
            Email <span className="text-orange">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-powder bg-light-grey/50 px-4 py-3 text-sm text-navy placeholder:text-dark-text/45 focus:border-orange focus:bg-white focus:outline-none transition-colors"
          />
          {errors.email && <p className="mt-1.5 text-xs text-orange">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-company" className="block text-sm font-semibold text-navy mb-1.5">
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Organization name (optional)"
            className="w-full rounded-xl border border-powder bg-light-grey/50 px-4 py-3 text-sm text-navy placeholder:text-dark-text/45 focus:border-orange focus:bg-white focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-semibold text-navy mb-1.5">
            Subject <span className="text-orange">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder="AI integration, custom software, R&D..."
            className="w-full rounded-xl border border-powder bg-light-grey/50 px-4 py-3 text-sm text-navy placeholder:text-dark-text/45 focus:border-orange focus:bg-white focus:outline-none transition-colors"
          />
          {errors.subject && <p className="mt-1.5 text-xs text-orange">{errors.subject}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-navy mb-1.5">
          Message <span className="text-orange">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your challenge, timeline, or idea..."
          className="w-full rounded-xl border border-powder bg-light-grey/50 px-4 py-3 text-sm text-navy placeholder:text-dark-text/45 focus:border-orange focus:bg-white focus:outline-none transition-colors resize-y"
        />
        {errors.message && <p className="mt-1.5 text-xs text-orange">{errors.message}</p>}
      </div>

      {status === "success" && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl bg-soft-blue border border-powder p-4 text-sm text-navy"
        >
          <CheckCircle2 className="h-5 w-5 text-orange shrink-0 mt-0.5" aria-hidden="true" />
          <p>{serverMessage}</p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl bg-orange/10 border border-orange/30 p-4 text-sm text-navy"
        >
          <AlertCircle className="h-5 w-5 text-orange shrink-0 mt-0.5" aria-hidden="true" />
          <p>{serverMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-orange px-7 py-3.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-orange-hover disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
