import type { ProductPreviewType } from "@/types/content";

interface ProductPreviewProps {
  type: ProductPreviewType;
}

export function ProductPreview({ type }: ProductPreviewProps) {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl bg-soft-blue border border-powder/80 p-4 flex items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-tech-grid opacity-60"
      />
      {type === "platform" && (
        <svg
          viewBox="0 0 320 150"
          className="relative z-10 h-full w-full max-w-[290px]"
          fill="none"
          aria-hidden="true"
        >
          {/* Central Orchestration Hub */}
          <rect x="112" y="48" width="96" height="54" rx="10" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.6" />
          <circle cx="160" cy="75" r="10" fill="#B9DDF5" stroke="#102A43" strokeWidth="1.4" />
          <circle cx="160" cy="75" r="4" fill="#FF4D00" />
          {/* Left Input Nodes */}
          <rect x="14" y="24" width="60" height="26" rx="7" fill="#FFFFFF" stroke="#B9DDF5" strokeWidth="1.6" />
          <rect x="14" y="62" width="60" height="26" rx="7" fill="#FFFFFF" stroke="#B9DDF5" strokeWidth="1.6" />
          <rect x="14" y="100" width="60" height="26" rx="7" fill="#FFFFFF" stroke="#B9DDF5" strokeWidth="1.6" />
          {/* Right Output Nodes */}
          <rect x="246" y="34" width="60" height="32" rx="7" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.4" />
          <rect x="246" y="84" width="60" height="32" rx="7" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.4" />
          {/* Connectors */}
          <path d="M74 37 C94 37, 94 64, 112 64" stroke="#102A43" strokeWidth="1.3" strokeOpacity="0.45" />
          <path d="M74 75 L112 75" stroke="#FF4D00" strokeWidth="1.6" />
          <path d="M74 113 C94 113, 94 86, 112 86" stroke="#102A43" strokeWidth="1.3" strokeOpacity="0.45" />
          <path d="M208 66 C228 66, 228 50, 246 50" stroke="#FF4D00" strokeWidth="1.6" />
          <path d="M208 84 C228 84, 228 100, 246 100" stroke="#102A43" strokeWidth="1.3" strokeOpacity="0.45" />
          <circle cx="24" cy="37" r="3" fill="#102A43" />
          <circle cx="24" cy="75" r="3" fill="#FF4D00" />
          <circle cx="24" cy="113" r="3" fill="#102A43" />
          <rect x="33" y="34" width="30" height="5" rx="2.5" fill="#B9DDF5" />
          <rect x="33" y="72" width="30" height="5" rx="2.5" fill="#B9DDF5" />
          <rect x="33" y="110" width="30" height="5" rx="2.5" fill="#B9DDF5" />
        </svg>
      )}

      {type === "automation" && (
        <svg
          viewBox="0 0 320 150"
          className="relative z-10 h-full w-full max-w-[290px]"
          fill="none"
          aria-hidden="true"
        >
          {/* Pipeline Steps */}
          <rect x="16" y="54" width="66" height="42" rx="9" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
          <rect x="127" y="54" width="66" height="42" rx="9" fill="#FFFFFF" stroke="#FF4D00" strokeWidth="1.7" />
          <rect x="238" y="54" width="66" height="42" rx="9" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
          {/* Branching Verification Gate */}
          <rect x="127" y="14" width="66" height="24" rx="6" fill="#B9DDF5" stroke="#102A43" strokeWidth="1.2" />
          <path d="M82 75 L127 75" stroke="#102A43" strokeWidth="1.5" />
          <path d="M193 75 L238 75" stroke="#FF4D00" strokeWidth="1.7" />
          <path d="M160 54 L160 38" stroke="#102A43" strokeWidth="1.3" strokeDasharray="3 3" />
          <circle cx="104" cy="75" r="3.5" fill="#B9DDF5" stroke="#102A43" strokeWidth="1.2" />
          <circle cx="215" cy="75" r="3.5" fill="#FF4D00" />
          <rect x="28" y="68" width="42" height="5" rx="2.5" fill="#B9DDF5" />
          <rect x="28" y="79" width="28" height="4" rx="2" fill="#102A43" fillOpacity="0.25" />
          <rect x="139" y="68" width="42" height="5" rx="2.5" fill="#FF4D00" fillOpacity="0.8" />
          <rect x="139" y="79" width="32" height="4" rx="2" fill="#102A43" fillOpacity="0.25" />
          <rect x="250" y="68" width="42" height="5" rx="2.5" fill="#B9DDF5" />
          <rect x="250" y="79" width="26" height="4" rx="2" fill="#102A43" fillOpacity="0.25" />
        </svg>
      )}

      {type === "enterprise" && (
        <svg
          viewBox="0 0 320 150"
          className="relative z-10 h-full w-full max-w-[290px]"
          fill="none"
          aria-hidden="true"
        >
          {/* Modular Application Frame */}
          <rect x="24" y="16" width="272" height="118" rx="12" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
          <line x1="24" y1="40" x2="296" y2="40" stroke="#B9DDF5" strokeWidth="1.4" />
          <circle cx="40" cy="28" r="3" fill="#FF4D00" />
          <circle cx="51" cy="28" r="3" fill="#B9DDF5" />
          <circle cx="62" cy="28" r="3" fill="#102A43" fillOpacity="0.3" />
          {/* Sidebar & Modules */}
          <rect x="34" y="50" width="54" height="74" rx="7" fill="#EAF5FC" />
          <rect x="42" y="60" width="38" height="6" rx="3" fill="#102A43" fillOpacity="0.35" />
          <rect x="42" y="74" width="32" height="6" rx="3" fill="#FF4D00" fillOpacity="0.8" />
          <rect x="42" y="88" width="36" height="6" rx="3" fill="#102A43" fillOpacity="0.2" />
          <rect x="98" y="50" width="90" height="34" rx="7" fill="#F5F7FA" stroke="#B9DDF5" strokeWidth="1.2" />
          <rect x="196" y="50" width="90" height="34" rx="7" fill="#F5F7FA" stroke="#B9DDF5" strokeWidth="1.2" />
          <rect x="98" y="92" width="188" height="32" rx="7" fill="#EAF5FC" stroke="#B9DDF5" strokeWidth="1.2" />
          <rect x="108" y="104" width="110" height="7" rx="3.5" fill="#102A43" fillOpacity="0.4" />
          <rect x="240" y="102" width="36" height="11" rx="5.5" fill="#FF4D00" />
        </svg>
      )}

      {type === "research" && (
        <svg
          viewBox="0 0 320 150"
          className="relative z-10 h-full w-full max-w-[290px]"
          fill="none"
          aria-hidden="true"
        >
          {/* Research Graph Lattice */}
          <circle cx="160" cy="75" r="46" stroke="#B9DDF5" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="160" cy="75" r="26" stroke="#102A43" strokeWidth="1.4" strokeOpacity="0.35" />
          <line x1="76" y1="36" x2="160" y2="75" stroke="#102A43" strokeWidth="1.3" strokeOpacity="0.45" />
          <line x1="244" y1="36" x2="160" y2="75" stroke="#FF4D00" strokeWidth="1.5" />
          <line x1="84" y1="114" x2="160" y2="75" stroke="#102A43" strokeWidth="1.3" strokeOpacity="0.45" />
          <line x1="236" y1="114" x2="160" y2="75" stroke="#102A43" strokeWidth="1.3" strokeOpacity="0.45" />
          <circle cx="160" cy="75" r="9" fill="#FFFFFF" stroke="#FF4D00" strokeWidth="2.2" />
          <circle cx="160" cy="75" r="3.5" fill="#FF4D00" />
          <circle cx="76" cy="36" r="7" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
          <circle cx="244" cy="36" r="7" fill="#FFFFFF" stroke="#FF4D00" strokeWidth="1.5" />
          <circle cx="84" cy="114" r="7" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
          <circle cx="236" cy="114" r="7" fill="#FFFFFF" stroke="#102A43" strokeWidth="1.5" />
        </svg>
      )}
    </div>
  );
}
