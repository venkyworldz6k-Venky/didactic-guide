"use client";

import { useState } from "react";
import { ArrowDownRight, Check } from "lucide-react";
import { CAREER_ROLES } from "@/data/catalog";
import { CareersApplicationForm } from "./CareersApplicationForm";

interface CareersInteractiveSectionProps {
  initialPosition?: string;
}

export function CareersInteractiveSection({
  initialPosition,
}: CareersInteractiveSectionProps) {
  const validInitial = CAREER_ROLES.some((r) => r.title === initialPosition)
    ? initialPosition
    : CAREER_ROLES[0].title;

  const [selectedPosition, setSelectedPosition] = useState<string>(
    validInitial || CAREER_ROLES[0].title
  );

  const handleSelectRole = (roleTitle: string) => {
    setSelectedPosition(roleTitle);
    const el = document.getElementById("apply");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-16">
      {/* Open Internship & Career Tracks */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CAREER_ROLES.map((role) => {
          const isSelected = selectedPosition === role.title;
          return (
            <article
              key={role.id}
              className={`flex flex-col justify-between rounded-2xl border p-6 transition-all duration-200 ${
                isSelected
                  ? "bg-soft-blue/70 border-orange shadow-sm"
                  : "bg-white border-powder/90 hover:border-orange/60 hover:shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange font-semibold">
                    {role.department}
                  </span>
                  <span className="rounded-full bg-soft-blue border border-powder px-2.5 py-0.5 text-[11px] font-medium text-navy">
                    {role.location}
                  </span>
                </div>

                <h2 className="mt-3 text-xl font-bold text-navy">{role.title}</h2>
                <p className="mt-1 text-xs font-medium text-dark-text/65">
                  {role.type}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-dark-text/80">
                  {role.summary}
                </p>

                <ul className="mt-4 space-y-2 border-t border-powder/60 pt-4">
                  {role.focusAreas.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-navy"
                    >
                      <Check
                        className="h-4 w-4 text-orange shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleSelectRole(role.title)}
                className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange cursor-pointer"
              >
                Apply for {role.title}
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </article>
          );
        })}
      </div>

      {/* Application Form */}
      <div id="apply" className="scroll-mt-24 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-4 space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
            Application Form
          </p>
          <h2 className="text-3xl font-bold text-navy">
            Apply to Proton Solutions
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-dark-text/80">
            Select a role, attach your resume (PDF, DOC, or DOCX), and tell us
            what excites you about building intelligent technologies.
          </p>
          <div className="rounded-2xl bg-soft-blue border border-powder p-5 text-xs sm:text-sm text-navy space-y-1.5">
            <p className="font-semibold">Selected Track:</p>
            <p className="text-orange font-mono font-semibold">{selectedPosition}</p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <CareersApplicationForm
            selectedPosition={selectedPosition}
            onPositionChange={setSelectedPosition}
          />
        </div>
      </div>
    </div>
  );
}
