import type {
  ApproachStep,
  CareerRole,
  ResearchArea,
  ServiceItem,
} from "@/types/content";

export const ABOUT_PILLARS = [
  {
    title: "Our Mission",
    subtitle: "Practical Intelligence",
    description:
      "To make advanced artificial intelligence, automation, and software engineering accessible, reliable, and genuinely impactful for modern organizations and communities.",
  },
  {
    title: "Our Vision",
    subtitle: "Smarter Digital Futures",
    description:
      "To become a trusted international technology partner recognized for engineering-first rigor, responsible AI research, and human-centered digital systems.",
  },
  {
    title: "Our Values",
    subtitle: "Integrity & Precision",
    description:
      "We prioritize technical honesty, architectural clarity, continuous curiosity, and ethical responsibility in every system we design and deliver.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "srv-ai-ml",
    slug: "artificial-intelligence-machine-learning",
    title: "Artificial Intelligence & Machine Learning",
    shortDescription:
      "Custom predictive models, natural language systems, and domain-adapted intelligence engineered for measurable operational value.",
    detailedDescription:
      "We design and train applied AI and machine learning systems tailored to real-world data constraints. From retrieval-augmented generation (RAG) and semantic search to classification and forecasting pipelines, our focus is reliability, evaluation rigor, and clean integration.",
    iconName: "BrainCircuit",
    capabilities: [
      "LLM integration & retrieval-augmented architectures",
      "Predictive modeling & structured data pipelines",
      "Model evaluation, guardrails & observability",
    ],
  },
  {
    id: "srv-agentic-ai",
    slug: "agentic-ai-multi-agent-systems",
    title: "Agentic AI & Multi-Agent Systems",
    shortDescription:
      "Coordinated autonomous agents capable of planning, tool execution, verification, and structured collaboration.",
    detailedDescription:
      "We architect multi-agent workflows where specialized AI agents decompose complex tasks, invoke external APIs safely, verify intermediate outputs, and escalate to human reviewers when confidence thresholds require oversight.",
    iconName: "Network",
    capabilities: [
      "Task decomposition & agent orchestration",
      "Deterministic tool-calling & permission boundaries",
      "Human-in-the-loop verification workflows",
    ],
  },
  {
    id: "srv-automation",
    slug: "ai-powered-automation",
    title: "AI-Powered Automation",
    shortDescription:
      "End-to-end intelligent process automation that reduces manual overhead and accelerates cross-system operations.",
    detailedDescription:
      "By combining event-driven software pipelines with AI reasoning, we automate document processing, internal triage, data synchronization, and operational reporting with full auditability.",
    iconName: "Workflow",
    capabilities: [
      "Document & unstructured data extraction",
      "Automated routing, triage & QA pipelines",
      "API & webhook orchestration across tools",
    ],
  },
  {
    id: "srv-web",
    slug: "web-application-development",
    title: "Web Application Development",
    shortDescription:
      "Fast, accessible, and scalable web platforms built with modern TypeScript, React, and Next.js architectures.",
    detailedDescription:
      "We build responsive, SEO-ready web applications and interactive dashboards with clean component systems, strong type safety, and performance-focused engineering.",
    iconName: "Globe",
    capabilities: [
      "Full-stack Next.js & TypeScript applications",
      "Accessible design systems & responsive UI",
      "High-performance APIs & cloud deployment",
    ],
  },
  {
    id: "srv-mobile",
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    shortDescription:
      "Intuitive, responsive mobile experiences engineered for reliability across iOS and Android ecosystems.",
    detailedDescription:
      "From concept to release-ready architecture, we craft mobile applications with clean state management, offline resilience, and seamless integration with cloud and AI backends.",
    iconName: "Smartphone",
    capabilities: [
      "Cross-platform & native-ready mobile UI",
      "Secure authentication & real-time sync",
      "AI-assisted mobile workflows & notifications",
    ],
  },
  {
    id: "srv-custom",
    slug: "custom-software-solutions",
    title: "Custom Software Solutions",
    shortDescription:
      "Bespoke backend platforms, internal tools, and API ecosystems engineered around your exact operational logic.",
    detailedDescription:
      "Off-the-shelf software rarely fits specialized workflows. We engineer maintainable, well-documented custom software systems designed to scale cleanly alongside your organization.",
    iconName: "Code2",
    capabilities: [
      "Domain-driven backend & API engineering",
      "Legacy system modernization & data migration",
      "Automated testing & CI/CD reliability",
    ],
  },
  {
    id: "srv-rnd",
    slug: "research-and-development",
    title: "Research & Development",
    shortDescription:
      "Exploratory prototyping, technical feasibility studies, and applied R&D for emerging AI and software challenges.",
    detailedDescription:
      "We partner with forward-looking teams to validate ambitious technical hypotheses through structured prototypes, architectural benchmarks, and clear feasibility roadmaps.",
    iconName: "FlaskConical",
    capabilities: [
      "Rapid proof-of-concept & prototype engineering",
      "Algorithmic & architectural feasibility analysis",
      "Applied R&D documentation & transfer",
    ],
  },
  {
    id: "srv-digital-transformation",
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortDescription:
      "Strategic modernization of workflows, cloud infrastructure, and data foundations for an AI-ready organization.",
    detailedDescription:
      "We help organizations transition from fragmented manual processes to cohesive, data-driven digital ecosystems with clear governance, security, and measurable operational clarity.",
    iconName: "Layers",
    capabilities: [
      "Technology architecture & readiness assessments",
      "Cloud-native workflow & data consolidation",
      "AI adoption roadmaps & team enablement",
    ],
  },
];

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: "res-multi-agent",
    slug: "autonomous-multi-agent-ai-systems",
    title: "Autonomous Multi-Agent AI Systems",
    categoryTag: "Core Systems R&D",
    summary:
      "Investigating reliable coordination protocols, shared memory architectures, and verifiable handoffs between specialized autonomous agents.",
    focusPoints: [
      "Deterministic guardrails for multi-step agent planning",
      "Failure recovery and consensus verification across agents",
      "Traceable audit logs for autonomous tool execution",
    ],
    graphicVariant: "agents",
  },
  {
    id: "res-generative-ai",
    slug: "generative-artificial-intelligence",
    title: "Generative Artificial Intelligence",
    categoryTag: "Applied Intelligence",
    summary:
      "Exploring structured generation, grounded reasoning, and domain-specific adaptation to make generative models accurate and dependable.",
    focusPoints: [
      "Hallucination reduction via grounded retrieval",
      "Structured schema generation for enterprise workflows",
      "Efficient context management and evaluation suites",
    ],
    graphicVariant: "generative",
  },
  {
    id: "res-research-automation",
    slug: "intelligent-research-automation",
    title: "Intelligent Research Automation",
    categoryTag: "Knowledge Systems",
    summary:
      "Building software workflows that accelerate literature review, technical synthesis, and reproducible experiment tracking.",
    focusPoints: [
      "Automated technical document parsing & synthesis",
      "Citation-preserving knowledge graphs",
      "Hypothesis structuring and benchmark automation",
    ],
    graphicVariant: "automation",
  },
  {
    id: "res-semiconductor",
    slug: "semiconductor-intelligence",
    title: "Semiconductor Intelligence",
    categoryTag: "Hardware-Aware AI",
    summary:
      "Studying AI-assisted workflows for silicon design verification, hardware-aware model optimization, and compute efficiency.",
    focusPoints: [
      "Hardware-aware inference efficiency & quantization",
      "AI-assisted verification and log analysis concepts",
      "Edge and accelerator-conscious software design",
    ],
    graphicVariant: "semiconductor",
  },
  {
    id: "res-social-good",
    slug: "ai-for-social-good",
    title: "AI for Social Good",
    categoryTag: "Ethical Impact",
    summary:
      "Applying accessible intelligence and automation to education, public-interest knowledge access, and sustainable digital infrastructure.",
    focusPoints: [
      "Low-barrier educational and accessibility tools",
      "Transparent, privacy-respecting AI system design",
      "Resource-efficient computing for broader reach",
    ],
    graphicVariant: "social",
  },
  {
    id: "res-emerging",
    slug: "emerging-technologies",
    title: "Emerging Technologies",
    categoryTag: "Horizon Exploration",
    summary:
      "Monitoring and prototyping next-generation computing paradigms, human-computer interfaces, and resilient distributed systems.",
    focusPoints: [
      "Next-generation human-AI collaborative interfaces",
      "Edge-cloud hybrid intelligence architectures",
      "Interoperable open standards for AI tooling",
    ],
    graphicVariant: "emerging",
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Discover",
    shortDescription: "Understand challenges and identify opportunities.",
    detail:
      "We begin by mapping operational bottlenecks, technical constraints, and high-leverage opportunities where AI and software engineering create real impact.",
  },
  {
    step: "02",
    title: "Design",
    shortDescription: "Develop intelligent strategies and solutions.",
    detail:
      "Our architects design clean system boundaries, data flows, model strategies, and intuitive interfaces prioritized for security and clarity.",
  },
  {
    step: "03",
    title: "Develop",
    shortDescription: "Build scalable and reliable technologies.",
    detail:
      "We engineer production-grade software and AI pipelines with modular code, rigorous testing, and transparent evaluation benchmarks.",
  },
  {
    step: "04",
    title: "Deliver",
    shortDescription: "Deploy, improve, and continuously innovate.",
    detail:
      "We ship smoothly, monitor real-world performance, and iterate continuously so your technology evolves with your goals.",
  },
];

export const CAREER_ROLES: CareerRole[] = [
  {
    id: "role-ai-ml",
    title: "AI/ML Intern",
    department: "Artificial Intelligence",
    type: "Internship · Remote / Hybrid",
    location: "Global",
    summary:
      "Work alongside engineers on applied machine learning, LLM evaluation, retrieval pipelines, and agentic workflow experiments.",
    focusAreas: [
      "Python, PyTorch or modern ML/LLM tooling",
      "Prompt engineering, RAG & evaluation workflows",
      "Structured experimentation & documentation",
    ],
  },
  {
    id: "role-tech-writing",
    title: "Technical Writing Intern",
    department: "Documentation & Knowledge",
    type: "Internship · Remote",
    location: "Global",
    summary:
      "Translate complex AI architectures, APIs, and research concepts into clear documentation, guides, and technical briefs.",
    focusAreas: [
      "Clear technical communication & Markdown fluency",
      "API documentation & architectural explainers",
      "Collaborating with engineering & research teams",
    ],
  },
  {
    id: "role-digital-marketing",
    title: "Digital Marketing Intern",
    department: "Brand & Growth",
    type: "Internship · Remote",
    location: "Global",
    summary:
      "Shape how Proton Solutions communicates innovation across digital channels, technical storytelling, and brand campaigns.",
    focusAreas: [
      "B2B technology positioning & content strategy",
      "LinkedIn, social & campaign analytics",
      "Coordinating product & research launches",
    ],
  },
  {
    id: "role-software-dev",
    title: "Software Development Intern",
    department: "Platform Engineering",
    type: "Internship · Remote / Hybrid",
    location: "Global",
    summary:
      "Contribute to modern TypeScript, Next.js, and backend API systems powering our web platforms and automation tools.",
    focusAreas: [
      "TypeScript, React / Next.js & Tailwind CSS",
      "REST APIs, databases & clean Git workflows",
      "Component testing & UI craftsmanship",
    ],
  },
  {
    id: "role-research",
    title: "Research Intern",
    department: "Proton Research Lab",
    type: "Internship · Remote",
    location: "Global",
    summary:
      "Explore emerging frontiers in multi-agent systems, research automation, semiconductor intelligence, and responsible AI.",
    focusAreas: [
      "Literature synthesis & experimental prototyping",
      "Reproducible benchmarking & technical reporting",
      "Cross-disciplinary AI exploration",
    ],
  },
];
