import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { RESEARCH_AREAS } from "@/data/catalog";
import { ResearchGraphic } from "@/components/ResearchGraphic";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Research & Innovation",
  description:
    "Exploring what's next in artificial intelligence: autonomous multi-agent systems, generative AI, intelligent research automation, semiconductor intelligence, and AI for social good.",
};

export default function ResearchPage() {
  return (
    <>
      <section className="bg-soft-blue/65 border-b border-powder/70 py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
              Research &amp; Innovation
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-navy">
              Exploring What&apos;s Next in Artificial Intelligence.
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-dark-text/85">
              Proton Solutions invests in applied research across autonomous
              multi-agent orchestration, generative intelligence, research
              automation, semiconductor-aware AI, and socially responsible
              technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {RESEARCH_AREAS.map((area, idx) => (
              <Reveal key={area.id} delayMs={(idx % 2) * 80}>
                <article
                  id={area.slug}
                  className="scroll-mt-24 flex h-full flex-col justify-between rounded-2xl bg-white border border-powder/90 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-orange/60 hover:shadow-md"
                >
                  <div>
                    <ResearchGraphic variant={area.graphicVariant} />
                    <p className="mt-6 text-xs font-mono uppercase tracking-wider text-orange font-semibold">
                      {area.categoryTag}
                    </p>
                    <h2 className="mt-1.5 text-2xl font-bold text-navy">
                      {area.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-dark-text/80">
                      {area.summary}
                    </p>

                    <div className="mt-6 pt-5 border-t border-powder/60">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-dark-text/65 mb-3">
                        Active Research Directions
                      </h3>
                      <ul className="space-y-2">
                        {area.focusPoints.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-sm text-navy"
                          >
                            <Check
                              className="h-4 w-4 text-orange shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-soft-blue border border-powder p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-navy">
                Collaborate with Proton Research
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-dark-text/80">
                Interested in joint R&amp;D or joining as a Research Intern?
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/careers?position=Research%20Intern#apply"
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-powder px-5 py-3 text-sm font-semibold text-navy hover:border-orange transition-colors"
              >
                Research Internships
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-hover transition-colors"
              >
                Contact Research Team
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
