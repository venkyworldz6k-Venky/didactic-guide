import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Proton Solutions explaining how we collect, use, and protect personal and inquiry data.",
};

export default async function PrivacyPolicyPage() {
  const siteConfig = await getSiteConfig();

  return (
    <section className="bg-white py-18 sm:py-22">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-powder pb-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
            Legal
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-navy">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-dark-text/65">
            Effective Date: November 2026 &middot; {siteConfig.companyName}
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-dark-text/85">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy">1. Information We Collect</h2>
            <p>
              When you interact with {siteConfig.companyName} through our website,
              we collect only the information you voluntarily provide—such as your
              name, email address, organization, inquiry subject, message, or
              career application details (including your resume and LinkedIn
              profile URL).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy">2. How We Use Information</h2>
            <p>
              We use submitted information strictly to respond to business
              inquiries, evaluate internship or career applications, improve our
              services, and maintain site security. We do not sell or rent your
              personal information to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy">3. Data Security &amp; Retention</h2>
            <p>
              We implement reasonable administrative and technical safeguards to
              protect submitted data against unauthorized access or disclosure.
              Inquiry and application records are retained only as long as
              necessary for communication or recruitment evaluation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy">4. Your Rights &amp; Contact</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us at{" "}
              <a
                href={`mailto:${siteConfig.officialEmail}`}
                className="font-semibold text-orange hover:underline"
              >
                {siteConfig.officialEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
