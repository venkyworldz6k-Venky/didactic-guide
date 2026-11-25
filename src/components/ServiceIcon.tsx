import {
  BrainCircuit,
  Code2,
  FlaskConical,
  Globe,
  Layers,
  Network,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { ServiceItem } from "@/types/content";

interface ServiceIconProps {
  name: ServiceItem["iconName"];
  className?: string;
}

export function ServiceIcon({ name, className = "h-6 w-6" }: ServiceIconProps) {
  switch (name) {
    case "BrainCircuit":
      return <BrainCircuit className={className} aria-hidden="true" />;
    case "Network":
      return <Network className={className} aria-hidden="true" />;
    case "Workflow":
      return <Workflow className={className} aria-hidden="true" />;
    case "Globe":
      return <Globe className={className} aria-hidden="true" />;
    case "Smartphone":
      return <Smartphone className={className} aria-hidden="true" />;
    case "Code2":
      return <Code2 className={className} aria-hidden="true" />;
    case "FlaskConical":
      return <FlaskConical className={className} aria-hidden="true" />;
    case "Layers":
      return <Layers className={className} aria-hidden="true" />;
  }
}
