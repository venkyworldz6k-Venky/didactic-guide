export interface SocialLink {
  platform: "LinkedIn" | "GitHub" | "X" | "YouTube" | "Website";
  label: string;
  url: string;
  enabled: boolean;
}

export interface SiteConfig {
  companyName: string;
  positioning: string;
  heroHeadline: string;
  footerTagline: string;
  officialEmail: string;
  careersEmail: string;
  headquartersLabel: string;
  responseSla: string;
  socialLinks: SocialLink[];
}

export type ProductCategory =
  | "AI-Powered Platforms"
  | "Intelligent Automation Tools"
  | "Enterprise Software Solutions"
  | "Research-Based Technology Products";

export type ProductStatus =
  | "In Development"
  | "R&D Phase"
  | "Architecture & Prototyping";

export type ProductPreviewType =
  | "platform"
  | "automation"
  | "enterprise"
  | "research";

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  shortDescription: string;
  overview: string;
  capabilities: string[];
  targetDomain: string;
  previewType: ProductPreviewType;
  featuredOnHome: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName:
    | "BrainCircuit"
    | "Network"
    | "Workflow"
    | "Globe"
    | "Smartphone"
    | "Code2"
    | "FlaskConical"
    | "Layers";
  capabilities: string[];
}

export interface ResearchArea {
  id: string;
  slug: string;
  title: string;
  categoryTag: string;
  summary: string;
  focusPoints: string[];
  graphicVariant: "agents" | "generative" | "automation" | "semiconductor" | "social" | "emerging";
}

export interface ApproachStep {
  step: string;
  title: string;
  shortDescription: string;
  detail: string;
}

export interface CareerRole {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  summary: string;
  focusAreas: string[];
}
