import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { getSiteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have an idea? Let's build it together. Contact Proton Solutions for artificial intelligence, automation, and software engineering inquiries.",
};

export default async function ContactPage() {
  const siteConfig = await getSiteConfig();
  const enabledSocials = siteConfig.socialLinks.filter((s) => s.enabled);

  return (
    <>
      <section className="bg-soft-blue/65 border-b border-powder/70 py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
              Contact Us
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-navy">
              Have an Idea? Let&apos;s Build It Together.
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-dark-text/85">
              Tell us about your goals, technical challenges, or research
              interests. Our engineering and strategy team will follow up
              directly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-soft-blue/70 border border-powder p-7 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-navy">
                    Official Channels
                  </h2>
                  <p className="mt-1.5 text-sm text-dark-text/75">
                    Reach Proton Solutions directly via our official email or
                    connected channels.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-orange shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-navy">General Inquiries</p>
                      <a
                        href={`mailto:${siteConfig.officialEmail}`}
                        className="text-dark-text/85 hover:text-orange transition-colors break-all"
                      >
                        {siteConfig.officialEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-orange shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-navy">Operations</p>
                      <p className="text-dark-text/80">{siteConfig.headquartersLabel}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-orange shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-navy">Response Time</p>
                      <p className="text-dark-text/80">{siteConfig.responseSla}</p>
                    </div>
                  </div>
                </div>

                {enabledSocials.length > 0 && (
                  <div className="pt-5 border-t border-powder">
                    <p className="text-xs font-mono uppercase tracking-wider text-dark-text/60 mb-3">
                      Social Media
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {enabledSocials.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-xl bg-white border border-powder px-3.5 py-2 text-xs font-semibold text-navy hover:border-orange hover:text-orange transition-colors"
                        >
                          {social.label}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
