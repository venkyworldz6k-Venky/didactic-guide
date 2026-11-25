import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import type { SiteConfig } from "@/types/content";
import { SERVICES } from "@/data/catalog";

interface FooterProps {
  siteConfig: SiteConfig;
}

export function Footer({ siteConfig }: FooterProps) {
  const enabledSocials = siteConfig.socialLinks.filter((s) => s.enabled);

  return (
    <footer className="bg-navy text-white border-t border-powder/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo variant="dark" />
            <p className="text-sm leading-relaxed text-powder/80 max-w-sm">
              Proton Solutions builds intelligent software systems, applied AI,
              and modern automation platforms designed to help organizations
              operate smarter and move forward with confidence.
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3.5 py-2 text-xs font-medium text-powder">
              <span className="h-2 w-2 rounded-full bg-orange" aria-hidden="true" />
              {siteConfig.footerTagline}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-powder/70 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Research & Innovation", href: "/research" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-powder/70 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-white/80 hover:text-orange transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-powder hover:text-orange font-medium transition-colors"
                >
                  All Services
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-powder/70 mb-4">
                Connect
              </h3>
              <a
                href={`mailto:${siteConfig.officialEmail}`}
                className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-orange transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-orange shrink-0" aria-hidden="true" />
                {siteConfig.officialEmail}
              </a>

              {enabledSocials.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {enabledSocials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 transition-colors hover:border-orange hover:text-orange"
                    >
                      {social.label}
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-powder/70 mb-3">
                Careers &amp; Legal
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/careers"
                    className="text-white/80 hover:text-orange transition-colors"
                  >
                    Internship Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-white/80 hover:text-orange transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-white/80 hover:text-orange transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-powder/70">
          <p>
            &copy; 2026 {siteConfig.companyName}. All rights reserved.
          </p>
          <p className="font-medium text-white/80">
            {siteConfig.positioning}
          </p>
        </div>
      </div>
    </footer>
  );
}
