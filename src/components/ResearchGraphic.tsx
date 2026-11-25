import type { ResearchArea } from "@/types/content";

interface ResearchGraphicProps {
  variant: ResearchArea["graphicVariant"];
}

export function ResearchGraphic({ variant }: ResearchGraphicProps) {
  return (
    <div className="h-24 w-full rounded-xl bg-soft-blue/90 border border-powder/70 flex items-center justify-center px-4 overflow-hidden">
      <svg
        viewBox="0 0 220 72"
        className="h-full w-full max-w-[200px]"
        fill="none"
        aria-hidden="true"
      >
        {variant === "agents" && (
          <>
            <circle cx="44" cy="36" r="10" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
            <circle cx="110" cy="20" r="10" fill="#FFFFFF" stroke="#FF4D00" strokeWidth="1.6" />
            <circle cx="110" cy="52" r="10" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
            <circle cx="176" cy="36" r="10" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
            <path d="M54 33 L100 22 M54 39 L100 50 M120 22 L166 33 M120 50 L166 39" stroke="#102A43" strokeWidth="1.3" strokeOpacity="0.45" />
            <circle cx="110" cy="20" r="3.5" fill="#FF4D00" />
          </>
        )}
        {variant === "generative" && (
          <>
            <rect x="26" y="18" width="44" height="36" rx="7" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
            <path d="M78 36 L108 36" stroke="#FF4D00" strokeWidth="1.8" />
            <polygon points="108,32 116,36 108,40" fill="#FF4D00" />
            <rect x="124" y="14" width="70" height="44" rx="8" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
            <rect x="134" y="24" width="46" height="5" rx="2.5" fill="#B9DDF5" />
            <rect x="134" y="34" width="36" height="5" rx="2.5" fill="#FF4D00" fillOpacity="0.75" />
            <rect x="134" y="44" width="42" height="5" rx="2.5" fill="#102A43" fillOpacity="0.2" />
          </>
        )}
        {variant === "automation" && (
          <>
            <rect x="22" y="22" width="34" height="28" rx="6" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
            <rect x="93" y="22" width="34" height="28" rx="6" fill="#FFFFFF" stroke="#FF4D00" strokeWidth="1.6" />
            <rect x="164" y="22" width="34" height="28" rx="6" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
            <path d="M56 36 L93 36 M127 36 L164 36" stroke="#102A43" strokeWidth="1.4" />
            <circle cx="110" cy="36" r="5" fill="#FF4D00" />
          </>
        )}
        {variant === "semiconductor" && (
          <>
            <rect x="76" y="14" width="68" height="44" rx="6" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.6" />
            <rect x="90" y="24" width="40" height="24" rx="4" fill="#EAF5FC" stroke="#FF4D00" strokeWidth="1.4" />
            <path d="M52 24 H76 M52 36 H76 M52 48 H76 M144 24 H168 M144 36 H168 M144 48 H168" stroke="#102A43" strokeWidth="1.5" strokeOpacity="0.6" />
            <circle cx="110" cy="36" r="4" fill="#FF4D00" />
          </>
        )}
        {variant === "social" && (
          <>
            <circle cx="110" cy="36" r="22" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
            <ellipse cx="110" cy="36" rx="10" ry="22" stroke="#B9DDF5" strokeWidth="1.5" />
            <line x1="88" y1="36" x2="132" y2="36" stroke="#B9DDF5" strokeWidth="1.5" />
            <circle cx="110" cy="36" r="4.5" fill="#FF4D00" />
          </>
        )}
        {variant === "emerging" && (
          <>
            <polygon points="110,10 136,24 136,48 110,62 84,48 84,24" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
            <polygon points="110,21 124,29 124,43 110,51 96,43 96,29" fill="#EAF5FC" stroke="#FF4D00" strokeWidth="1.4" />
            <circle cx="110" cy="36" r="3.5" fill="#FF4D00" />
          </>
        )}
      </svg>
    </div>
  );
}
