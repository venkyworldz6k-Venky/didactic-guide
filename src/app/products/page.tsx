import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { getProducts } from "@/lib/content";
import { ProductsShowcase } from "@/components/ProductsShowcase";

export const metadata: Metadata = {
  title: "Products & Solutions",
  description:
    "Discover Proton Solutions' AI-powered platforms, intelligent automation tools, enterprise software solutions, and research-based technology products currently in development.",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <section className="bg-soft-blue/65 border-b border-powder/70 py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
              Products &amp; Solutions
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-navy">
              Intelligent Platforms &amp; Emerging Solutions
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-dark-text/85">
              Our product roadmap spans AI-powered platforms, intelligent
              automation tools, enterprise software foundations, and
              research-based technology products. Every system listed below
              reflects its current engineering stage transparently.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex items-start gap-3 rounded-2xl bg-soft-blue/70 border border-powder p-4 sm:p-5 text-sm text-navy">
            <Info className="h-5 w-5 text-orange shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong>Development Transparency:</strong> Proton Solutions does
              not present prototypes or active R&amp;D systems as launched
              commercial products. Each entry below displays its current
              development status and can be updated directly by administrators.
            </p>
          </div>

          <ProductsShowcase products={products} />

          <div className="rounded-3xl bg-navy text-white p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl font-bold text-white">
                Interested in Early Collaboration or Custom Architecture?
              </h2>
              <p className="text-sm sm:text-base text-powder/85">
                Connect with our engineering team to discuss pilot architectures,
                tailored automation, or research partnerships.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-hover transition-colors shrink-0"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
