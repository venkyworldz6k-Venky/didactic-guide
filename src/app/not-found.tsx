import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-tech-grid opacity-60"
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-soft-blue border border-powder px-4 py-1.5 text-xs font-mono font-semibold text-navy">
          <span className="h-2 w-2 rounded-full bg-orange" aria-hidden="true" />
          Error 404 &middot; Route Not Found
        </div>

        <div className="mt-8 rounded-3xl bg-soft-blue/50 border border-powder p-8 sm:p-12 shadow-xs">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-powder text-orange shadow-xs">
            <Compass className="h-7 w-7" aria-hidden="true" />
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-navy">
            Page Not Found
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-dark-text/80 max-w-xl mx-auto">
            The page you are looking for may have been moved, renamed, or is
            no longer available. Return to Proton Solutions or explore our core
            capabilities below.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-orange-hover"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-powder bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-soft-blue"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 text-orange" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-powder/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-navy">
            <Link href="/services" className="hover:text-orange transition-colors">
              Services
            </Link>
            <Link href="/products" className="hover:text-orange transition-colors">
              Products &amp; Solutions
            </Link>
            <Link href="/research" className="hover:text-orange transition-colors">
              Research &amp; Innovation
            </Link>
            <Link href="/careers" className="hover:text-orange transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
