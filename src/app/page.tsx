import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Eye,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { NeuralHeroCanvas } from "@/components/NeuralHeroCanvas";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ProductPreview } from "@/components/ProductPreview";
import { ResearchGraphic } from "@/components/ResearchGraphic";
import { ApproachTimeline } from "@/components/ApproachTimeline";
import { ContactForm } from "@/components/ContactForm";
import {
  ABOUT_PILLARS,
  CAREER_ROLES,
  RESEARCH_AREAS,
  SERVICES,
} from "@/data/catalog";
import { getProducts, getSiteConfig } from "@/lib/content";

export default async function HomePage() {
  const [siteConfig, products] = await Promise.all([
    getSiteConfig(),
    getProducts(),
  ]);

  const featuredProducts = products.filter((p) => p.featuredOnHome);
  const enabledSocials = siteConfig.socialLinks.filter((s) => s.enabled);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-powder/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-tech-grid opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-powder/45 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-22 lg:py-26">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Hero Copy */}
            <div className="lg:col-span-6 space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-soft-blue border border-powder px-4 py-1.5 text-xs font-semibold text-navy">
                <span className="h-2 w-2 rounded-full bg-orange" aria-hidden="true" />
                {siteConfig.positioning}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-navy leading-[1.08]">
                Engineering Intelligence.{" "}
                <span className="relative inline-block text-navy">
                  Empowering Tomorrow.
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 h-1.5 w-28 rounded-full bg-orange"
                  />
                </span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-dark-text/85 max-w-xl">
                At Proton Solutions, we transform ambitious ideas into
                intelligent technologies. Through artificial intelligence,
                automation, and innovative software engineering, we build
                solutions that help businesses and people move forward.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-hover hover:-translate-y-0.5"
                >
                  Explore Our Solutions
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-powder bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-all duration-200 hover:bg-soft-blue hover:border-navy/30"
                >
                  Get in Touch
                </Link>
              </div>

              <div className="pt-4 border-t border-powder/60 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-dark-text/70">
                <span>AI &amp; Machine Learning</span>
                <span className="text-orange" aria-hidden="true">/</span>
                <span>Multi-Agent Systems</span>
                <span className="text-orange" aria-hidden="true">/</span>
                <span>Intelligent Automation</span>
              </div>
            </div>

            {/* Hero Interactive Neural Network Visual */}
            <div className="lg:col-span-6">
              <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] w-full rounded-3xl bg-soft-blue/70 border border-powder shadow-sm overflow-hidden">
                <NeuralHeroCanvas />
                <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/90 backdrop-blur-sm border border-powder/80 px-4 py-3 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-navy">
                    <Sparkles className="h-4 w-4 text-orange" aria-hidden="true" />
                    <span>Autonomous &amp; Connected Systems Architecture</span>
                  </div>
                  <span className="hidden sm:inline-block font-mono text-[11px] text-dark-text/65">
                    AI-First Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="bg-soft-blue/60 py-20 lg:py-24 border-b border-powder/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
                About Proton Solutions
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy">
                Technology with Purpose. Innovation without Limits.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-dark-text/85">
                Proton Solutions is an emerging technology company focused on
                building intelligent digital solutions through artificial
                intelligence, software engineering, and automation. Our mission
                is to make advanced technology more accessible, practical, and
                impactful.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ABOUT_PILLARS.map((pillar, idx) => {
              const Icon =
                idx === 0 ? Compass : idx === 1 ? Eye : ShieldCheck;
              return (
                <Reveal key={pillar.title} delayMs={idx * 90}>
                  <div className="group h-full rounded-2xl bg-white border border-powder/90 p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/60 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-blue border border-powder text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white group-hover:border-orange">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-xs font-mono uppercase tracking-wider text-dark-text/60">
                      {pillar.subtitle}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-dark-text/80">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-orange transition-colors"
            >
              Read more about our philosophy
              <ArrowRight className="h-4 w-4 text-orange" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section id="services" className="bg-white py-20 lg:py-24 border-b border-powder/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
                  Our Services
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy">
                  Intelligent Engineering Across Every Layer
                </h2>
                <p className="mt-3 text-base text-dark-text/80">
                  From foundational AI models and autonomous agent systems to
                  production web, mobile, and enterprise software.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 self-start rounded-xl border border-powder bg-soft-blue px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-powder/70"
              >
                View All Services
                <ArrowRight className="h-4 w-4 text-orange" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, idx) => (
              <Reveal key={service.id} delayMs={(idx % 4) * 70}>
                <div className="group flex h-full flex-col justify-between rounded-2xl bg-powder/35 border border-powder p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-orange/60 hover:shadow-md">
                  <div className="flex h-full flex-col justify-between rounded-[14px] bg-white p-6">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue border border-powder text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white group-hover:border-orange">
                        <ServiceIcon name={service.iconName} className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-navy leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-dark-text/80">
                        {service.shortDescription}
                      </p>
                    </div>

                    <Link
                      href={`/services#${service.slug}`}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:text-orange-hover transition-colors"
                    >
                      Learn More
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS & SOLUTIONS SECTION */}
      <section id="products" className="bg-light-grey py-20 lg:py-24 border-b border-powder/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
                  Products &amp; Solutions
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy">
                  Platforms &amp; Systems Under Active Engineering
                </h2>
                <p className="mt-3 text-base text-dark-text/80">
                  We build transparent, modular technology products across AI
                  platforms, intelligent automation, enterprise software, and
                  applied research—sharing honest development stages as we build.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 self-start rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy/90"
              >
                Explore Product Roadmap
                <ArrowRight className="h-4 w-4 text-orange" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2">
            {featuredProducts.map((product, idx) => (
              <Reveal key={product.id} delayMs={idx * 80}>
                <article className="group flex h-full flex-col justify-between rounded-2xl bg-white border border-powder/90 p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-orange/60 hover:shadow-md">
                  <div>
                    <ProductPreview type={product.previewType} />
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-dark-text/70">
                        {product.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-soft-blue border border-powder px-3 py-1 text-xs font-semibold text-navy">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
                        {product.status}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-navy group-hover:text-orange transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-dark-text/80">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-powder/40 flex items-center justify-between">
                    <span className="text-xs text-dark-text/65">
                      {product.targetDomain}
                    </span>
                    <Link
                      href={`/products#${product.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-orange hover:text-orange-hover"
                    >
                      View Architecture
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESEARCH & INNOVATION SECTION */}
      <section id="research" className="bg-white py-20 lg:py-24 border-b border-powder/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
                  Research &amp; Innovation
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy">
                  Exploring What&apos;s Next in Artificial Intelligence.
                </h2>
                <p className="mt-3 text-base text-dark-text/80">
                  Our R&amp;D initiatives investigate foundational breakthroughs in
                  multi-agent reasoning, research automation, hardware-aware AI,
                  and technology for social good.
                </p>
              </div>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 self-start rounded-xl border border-powder bg-soft-blue px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-powder/70"
              >
                Explore Research Focus
                <ArrowRight className="h-4 w-4 text-orange" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RESEARCH_AREAS.map((area, idx) => (
              <Reveal key={area.id} delayMs={(idx % 3) * 80}>
                <article className="group flex h-full flex-col justify-between rounded-2xl bg-white border border-powder/85 p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-orange/60 hover:shadow-md">
                  <div>
                    <ResearchGraphic variant={area.graphicVariant} />
                    <p className="mt-5 text-xs font-mono uppercase tracking-wider text-orange font-semibold">
                      {area.categoryTag}
                    </p>
                    <h3 className="mt-1.5 text-lg font-bold text-navy group-hover:text-orange transition-colors">
                      {area.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-dark-text/80">
                      {area.summary}
                    </p>
                  </div>

                  <Link
                    href={`/research#${area.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-orange transition-colors"
                  >
                    Read Research Brief
                    <ArrowRight className="h-4 w-4 text-orange" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR APPROACH SECTION */}
      <section id="approach" className="bg-soft-blue/70 py-20 lg:py-24 border-b border-powder/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl lg:mx-auto lg:text-center mb-14">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
                Our Approach
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy">
                A Disciplined Path from Idea to Intelligent System
              </h2>
              <p className="mt-3 text-base text-dark-text/80">
                Every engagement follows a structured four-stage engineering
                process designed for clarity, reliability, and continuous
                improvement.
              </p>
            </div>
          </Reveal>

          <ApproachTimeline />
        </div>
      </section>

      {/* 7. CAREERS SECTION */}
      <section id="careers" className="bg-white py-20 lg:py-24 border-b border-powder/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-powder/35 border border-powder p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5 space-y-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
                  Careers &amp; Internships
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy">
                  Build the Future with Us.
                </h2>
                <p className="text-base leading-relaxed text-dark-text/85">
                  We believe in empowering emerging talent, encouraging
                  creativity, and building technologies that make a difference.
                </p>
                <div className="pt-2">
                  <Link
                    href="/careers"
                    className="inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-orange-hover hover:-translate-y-0.5"
                  >
                    Explore Opportunities
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {CAREER_ROLES.map((role) => (
                  <Link
                    key={role.id}
                    href={`/careers?position=${encodeURIComponent(role.title)}#apply`}
                    className="group rounded-2xl bg-white border border-powder/90 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange/60 hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-orange font-semibold">
                        {role.department}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-dark-text/40 group-hover:text-orange transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-2 text-base font-bold text-navy group-hover:text-orange transition-colors">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-xs text-dark-text/70">{role.type}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="bg-soft-blue/50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange font-semibold">
                Contact Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy">
                Have an Idea? Let&apos;s Build It Together.
              </h2>
              <p className="text-base leading-relaxed text-dark-text/85">
                Whether you are exploring AI automation, custom software
                engineering, or applied research collaboration, our team is ready
                to discuss how we can help.
              </p>

              <div className="rounded-2xl bg-white border border-powder p-6 space-y-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-dark-text/60">
                    Official Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.officialEmail}`}
                    className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-navy hover:text-orange transition-colors break-all"
                  >
                    <Mail className="h-4 w-4 text-orange shrink-0" aria-hidden="true" />
                    {siteConfig.officialEmail}
                  </a>
                </div>

                {enabledSocials.length > 0 && (
                  <div className="pt-3 border-t border-powder/60">
                    <p className="text-xs font-mono uppercase tracking-wider text-dark-text/60 mb-2.5">
                      Social Channels
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {enabledSocials.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-soft-blue border border-powder px-3 py-1.5 text-xs font-semibold text-navy hover:border-orange hover:text-orange transition-colors"
                        >
                          {social.label}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-xs text-dark-text/65 pt-1">
                  {siteConfig.responseSla}
                </p>
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
