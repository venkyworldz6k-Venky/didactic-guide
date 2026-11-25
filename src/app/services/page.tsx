import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/data/catalog";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Proton Solutions' services across AI & Machine Learning, Agentic AI, AI-Powered Automation, Web & Mobile Development, Custom Software, R&D, and Digital Transformation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-soft-blue/65 border-b border-powder/70 py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
              Our Services
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-navy">
              AI-First Engineering &amp; Digital Solutions
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-dark-text/85">
              We combine applied artificial intelligence, autonomous agent
              architectures, and full-stack software engineering to help
              organizations build dependable, future-ready systems.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {SERVICES.map((service, idx) => (
            <Reveal key={service.id} delayMs={40}>
              <article
                id={service.slug}
                className="scroll-mt-24 rounded-3xl bg-powder/30 border border-powder p-2 transition-all duration-300 hover:border-orange/50"
              >
                <div className="rounded-[20px] bg-white p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-blue border border-powder text-orange">
                        <ServiceIcon name={service.iconName} className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-dark-text/55">
                        0{idx + 1} / Service Capability
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                      {service.title}
                    </h2>
                    <p className="text-base leading-relaxed text-dark-text/85">
                      {service.detailedDescription}
                    </p>
                  </div>

                  <div className="lg:col-span-5 rounded-2xl bg-soft-blue/60 border border-powder/80 p-6 space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-navy font-semibold">
                      Key Capabilities
                    </h3>
                    <ul className="space-y-2.5">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2.5 text-sm text-navy"
                        >
                          <Check
                            className="h-4 w-4 text-orange shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-orange hover:text-orange-hover transition-colors"
                      >
                        Discuss this capability
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
