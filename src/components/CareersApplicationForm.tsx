"use client";

import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, FileUp, Send } from "lucide-react";
import { CAREER_ROLES } from "@/data/catalog";

interface CareersApplicationFormProps {
  selectedPosition?: string;
  onPositionChange?: (position: string) => void;
}

export function CareersApplicationForm({
  selectedPosition,
  onPositionChange,
}: CareersApplicationFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [internalPosition, setInternalPosition] = useState(
    selectedPosition || CAREER_ROLES[0].title
  );
  const position = selectedPosition ?? internalPosition;
  const setPosition = onPositionChange ?? setInternalPosition;
  const [linkedin, setLinkedin] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = "Please enter your full name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!position.trim()) {
      nextErrors.position = "Please select a position.";
    }
    if (!resume) {
      nextErrors.resume = "Please upload your resume (PDF, DOC, or DOCX, max 5MB).";
    } else {
      const validExt = /\.(pdf|doc|docx)$/i.test(resume.name);
      if (!validExt) {
        nextErrors.resume = "Accepted formats: PDF, DOC, or DOCX.";
      } else if (resume.size > 5 * 1024 * 1024) {
        nextErrors.resume = "Resume file must be 5MB or smaller.";
      }
    }
    if (linkedin.trim()) {
      try {
        const url = new URL(linkedin.trim());
        if (!["http:", "https:"].includes(url.protocol)) {
          nextErrors.linkedin = "Please enter a valid http(s) LinkedIn URL.";
        }
      } catch {
        nextErrors.linkedin = "Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/...).";
      }
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = "Please include a brief note (at least 10 characters) about your interest.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate() || !resume) return;

    setStatus("submitting");
    setServerMessage("");

    try {
      const formData = new FormData();
      formData.append("fullName", fullName.trim());
      formData.append("email", email.trim());
      formData.append("position", position);
      formData.append("linkedin", linkedin.trim());
      formData.append("message", message.trim());
      formData.append("resume", resume);

      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setServerMessage(data.error || "Unable to submit your application.");
        return;
      }

      setStatus("success");
      setServerMessage(
        data.message || "Application submitted successfully. Thank you for applying to Proton Solutions."
      );
      setFullName("");
      setEmail("");
      setLinkedin("");
      setMessage("");
      setResume(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setErrors({});
    } catch {
      setStatus("error");
      setServerMessage("Network error while submitting application. Please try again.");
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
          <label htmlFor="career-name" className="block text-sm font-semibold text-navy mb-1.5">
            Full Name <span className="text-orange">*</span>
          </label>
          <input
            id="career-name"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-xl border border-powder bg-light-grey/50 px-4 py-3 text-sm text-navy placeholder:text-dark-text/45 focus:border-orange focus:bg-white focus:outline-none transition-colors"
          />
          {errors.fullName && <p className="mt-1.5 text-xs text-orange">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="career-email" className="block text-sm font-semibold text-navy mb-1.5">
            Email Address <span className="text-orange">*</span>
          </label>
          <input
            id="career-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-powder bg-light-grey/50 px-4 py-3 text-sm text-navy placeholder:text-dark-text/45 focus:border-orange focus:bg-white focus:outline-none transition-colors"
          />
          {errors.email && <p className="mt-1.5 text-xs text-orange">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="career-position" className="block text-sm font-semibold text-navy mb-1.5">
            Position <span className="text-orange">*</span>
          </label>
          <select
            id="career-position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full rounded-xl border border-powder bg-light-grey/50 px-4 py-3 text-sm text-navy focus:border-orange focus:bg-white focus:outline-none transition-colors"
          >
            {CAREER_ROLES.map((role) => (
              <option key={role.id} value={role.title}>
                {role.title}
              </option>
            ))}
          </select>
          {errors.position && <p className="mt-1.5 text-xs text-orange">{errors.position}</p>}
        </div>

        <div>
          <label htmlFor="career-linkedin" className="block text-sm font-semibold text-navy mb-1.5">
            LinkedIn Profile
          </label>
          <input
            id="career-linkedin"
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/in/your-profile"
            className="w-full rounded-xl border border-powder bg-light-grey/50 px-4 py-3 text-sm text-navy placeholder:text-dark-text/45 focus:border-orange focus:bg-white focus:outline-none transition-colors"
          />
          {errors.linkedin && <p className="mt-1.5 text-xs text-orange">{errors.linkedin}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="career-resume" className="block text-sm font-semibold text-navy mb-1.5">
          Resume Upload <span className="text-orange">*</span>
        </label>
        <label
          htmlFor="career-resume"
          className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-dashed border-powder bg-soft-blue/40 px-4 py-4 cursor-pointer hover:border-orange transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-powder text-orange">
              <FileUp className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="text-sm">
              <p className="font-medium text-navy">
                {resume ? resume.name : "Choose a resume file (PDF, DOC, DOCX)"}
              </p>
              <p className="text-xs text-dark-text/60">
                {resume
                  ? `${(resume.size / 1024).toFixed(0)} KB selected`
                  : "Maximum file size: 5MB"}
              </p>
            </div>
          </div>
          <span className="rounded-lg bg-white border border-powder px-3 py-1.5 text-xs font-semibold text-navy">
            Browse File
          </span>
          <input
            ref={fileInputRef}
            id="career-resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            onChange={(e) => setResume(e.target.files?.[0] || null)}
          />
        </label>
        {errors.resume && <p className="mt-1.5 text-xs text-orange">{errors.resume}</p>}
      </div>

      <div>
        <label htmlFor="career-message" className="block text-sm font-semibold text-navy mb-1.5">
          Message <span className="text-orange">*</span>
        </label>
        <textarea
          id="career-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your background, projects, or what excites you about Proton Solutions..."
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
        {status === "submitting" ? "Submitting Application..." : "Submit Application"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
