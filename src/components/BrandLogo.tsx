import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  href?: string;
}

export function BrandLogo({ variant = "light", href = "/" }: BrandLogoProps) {
  const titleColor = variant === "dark" ? "text-white" : "text-navy";
  const subColor = variant === "dark" ? "text-powder/80" : "text-dark-text/60";

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-lg py-1"
      aria-label="Proton Solutions Home"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-soft-blue border border-powder/80 shadow-xs transition-transform duration-300 group-hover:scale-105">
        <svg
          width="26"
          height="26"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer precision orbital rings */}
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="5.5"
            transform="rotate(-30 16 16)"
            stroke="#102A43"
            strokeWidth="1.6"
            strokeOpacity="0.85"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="5.5"
            transform="rotate(30 16 16)"
            stroke="#102A43"
            strokeWidth="1.6"
            strokeOpacity="0.45"
          />
          {/* Satellite intelligence nodes */}
          <circle cx="24.5" cy="11" r="2" fill="#B9DDF5" stroke="#102A43" strokeWidth="1.2" />
          <circle cx="7.5" cy="21" r="2" fill="#B9DDF5" stroke="#102A43" strokeWidth="1.2" />
          {/* Racing Orange Proton Nucleus */}
          <circle cx="16" cy="16" r="3.4" fill="#FF4D00" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-tight ${titleColor}`}
        >
          PROTON <span className="font-semibold">SOLUTIONS</span>
        </span>
        <span className={`text-[10px] font-mono uppercase tracking-[0.18em] mt-1 ${subColor}`}>
          AI &amp; Engineering
        </span>
      </span>
    </Link>
  );
}
