import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions governing the use of the Proton Solutions website and services.",
};

export default async function TermsPage() {
  const siteConfig = await getSiteConfig();

  return (
    <section className="bg-white py-18 sm:py-22">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-powder pb-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
            Legal
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-navy">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-dark-text/65">
            Effective Date: November 2026 &middot; {siteConfig.companyName}
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-dark-text/85">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the {siteConfig.companyName} website, you agree
              to comply with these Terms &amp; Conditions and all applicable laws.
              If you do not agree with these terms, please discontinue use of the
              site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy">2. Intellectual Property</h2>
            <p>
              All trademarks, logos, visual designs, software code, and content
              published on this website belong to {siteConfig.companyName} or its
              licensors and may not be reproduced or redistributed without prior
              written permission.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy">3. Products &amp; Roadmap Information</h2>
            <p>
              Information regarding products, platforms, and research initiatives
              under development is provided for informational purposes only and
              may evolve as engineering progresses. Formal engagements and
              deliverables are governed by separate written agreements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy">4. Limitation of Liability</h2>
            <p>
              This website is provided on an &ldquo;as is&rdquo; basis.{" "}
              {siteConfig.companyName} is not liable for indirect or
              consequential damages arising from your use of or inability to
              access this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy">5. Contact</h2>
            <p>
              Questions regarding these Terms &amp; Conditions may be directed to{" "}
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
