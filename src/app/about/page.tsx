import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Eye, ShieldCheck } from "lucide-react";
import { ABOUT_PILLARS } from "@/data/catalog";
import { ApproachTimeline } from "@/components/ApproachTimeline";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Proton Solutions—our mission, vision, values, and engineering approach to artificial intelligence, software engineering, and automation.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-soft-blue/65 border-b border-powder/70 py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
              About Us
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-navy">
              Technology with Purpose. Innovation without Limits.
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-dark-text/85">
              Proton Solutions is an emerging technology company focused on
              building intelligent digital solutions through artificial
              intelligence, software engineering, and automation. Our mission is
              to make advanced technology more accessible, practical, and
              impactful.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-22 border-b border-powder/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {ABOUT_PILLARS.map((pillar, idx) => {
              const Icon = idx === 0 ? Compass : idx === 1 ? Eye : ShieldCheck;
              return (
                <Reveal key={pillar.title} delayMs={idx * 90}>
                  <div className="h-full rounded-2xl bg-soft-blue/40 border border-powder p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange/60 hover:bg-white hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-powder text-orange">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-xs font-mono uppercase tracking-wider text-dark-text/60">
                      {pillar.subtitle}
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-navy">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-dark-text/80">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 rounded-3xl bg-navy text-white p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-powder">
                Engineering Philosophy
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Built on Clarity, Reliability, and Responsible AI
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-powder/85">
                We believe AI is most valuable when paired with disciplined
                software architecture. Rather than chasing hype, we focus on
                maintainable systems, transparent evaluation, and real-world
                usability.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-hover transition-colors"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft-blue/50 py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy">
              Our Four-Step Delivery Approach
            </h2>
          </div>
          <ApproachTimeline />
        </div>
      </section>
    </>
  );
}
