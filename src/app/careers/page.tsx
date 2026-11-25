import { Suspense } from "react";
import type { Metadata } from "next";
import { CareersInteractiveSection } from "@/components/CareersInteractiveSection";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the future with Proton Solutions. Explore internship and career opportunities in AI/ML, Software Development, Research, Technical Writing, and Digital Marketing.",
};

interface CareersPageProps {
  searchParams: Promise<{ position?: string }>;
}

async function CareersContent({ searchParams }: CareersPageProps) {
  const params = await searchParams;
  return <CareersInteractiveSection initialPosition={params.position} />;
}

export default function CareersPage({ searchParams }: CareersPageProps) {
  return (
    <>
      <section className="bg-soft-blue/65 border-b border-powder/70 py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
              Careers &amp; Internships
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-navy">
              Build the Future with Us.
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-dark-text/85">
              We believe in empowering emerging talent, encouraging creativity,
              and building technologies that make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="rounded-2xl border border-powder bg-soft-blue/40 p-8 text-sm text-navy">
                Loading open opportunities...
              </div>
            }
          >
            <CareersContent searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
