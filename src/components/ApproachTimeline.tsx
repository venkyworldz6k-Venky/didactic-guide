import { APPROACH_STEPS } from "@/data/catalog";
import { Reveal } from "./Reveal";

export function ApproachTimeline() {
  return (
    <div className="relative">
      {/* Desktop Horizontal Connecting Rail */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-powder"
      />

      {/* Mobile Vertical Connecting Rail */}
      <div
        aria-hidden="true"
        className="lg:hidden absolute top-8 bottom-8 left-7 w-0.5 bg-powder"
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
        {APPROACH_STEPS.map((item, idx) => (
          <Reveal key={item.step} delayMs={idx * 90}>
            <div className="group relative flex lg:flex-col items-start lg:items-center lg:text-center gap-5 lg:gap-4 pl-0">
              {/* Step Node */}
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border-2 border-powder shadow-xs transition-colors duration-300 group-hover:border-orange">
                <span className="font-mono text-base font-bold text-navy">
                  {item.step}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-orange ring-2 ring-white"
                />
              </div>

              {/* Card Body */}
              <div className="flex-1 rounded-2xl bg-white border border-powder/80 p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-orange/60 hover:shadow-md">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-1.5 text-sm font-medium text-orange">
                  {item.shortDescription}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-dark-text/80">
                  {item.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
