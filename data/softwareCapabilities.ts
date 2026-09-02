import type { BrandAccent } from "@/lib/accents";

export const softwarePage = {
  href: "/capabilities/technology-engineering/software-development",
  breadcrumb: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Technology + Engineering" },
  ],
  eyebrow: "Software Development",
  headline: ["We build software", "that adapts with you."],
  supporting:
    "From custom applications to connected digital ecosystems, we engineer scalable technology around real people, real workflows and real business needs.",
  expertiseIntro: {
    eyebrow: "Our development expertise",
    headline: ["End-to-end solutions.", "Built as one connected system."],
    supporting:
      "Every successful product is more than code. Our capabilities work together across the entire digital experience lifecycle.",
  },
  impact: {
    eyebrow: "Engineered for impact",
    headline: ["More than code.", "Real business impact."],
    supporting:
      "We combine engineering excellence with a deep understanding of your business to deliver software that drives measurable results.",
  },
  cta: {
    headline: ["Let's build something", "extraordinary together."],
    supporting:
      "Have a project in mind? Let's create software that drives your business forward and adapts for the future.",
  },
} as const;

export type SoftwareCapability = {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: BrandAccent;
  icon: "cube" | "globe" | "device" | "nodes" | "shield";
};

export const softwareCapabilities: SoftwareCapability[] = [
  {
    id: "custom-applications",
    number: "01",
    title: "Custom Application Development",
    description:
      "We develop tailor-made applications that cater to unique business needs and objectives.",
    accent: "green",
    icon: "cube",
  },
  {
    id: "web-development",
    number: "02",
    title: "Web Development",
    description:
      "We create scalable and responsive websites and web applications designed for optimal performance across devices.",
    accent: "blue",
    icon: "globe",
  },
  {
    id: "mobile-development",
    number: "03",
    title: "Mobile App Development",
    description:
      "We build user-friendly mobile applications that provide engaging experiences and real business value.",
    accent: "purple",
    icon: "device",
  },
  {
    id: "api-integration",
    number: "04",
    title: "API Development + Integration",
    description:
      "We create and integrate APIs to connect software systems, data and experiences for seamless operation.",
    accent: "cyan",
    icon: "nodes",
  },
  {
    id: "quality-assurance",
    number: "05",
    title: "Quality Assurance + Testing",
    description:
      "We conduct thorough testing to ensure software is reliable, secure and performs smoothly.",
    accent: "orange",
    icon: "shield",
  },
];

export const engineeringPrinciples = [
  {
    id: "business",
    title: "Business First",
    description:
      "Every build starts with the problem, the people, and the outcome the software has to serve.",
    icon: "target" as const,
  },
  {
    id: "secure",
    title: "Secure by Design",
    description:
      "Security and reliability are built into the architecture — not added after launch.",
    icon: "lock" as const,
  },
  {
    id: "agile",
    title: "Agile by Nature",
    description:
      "We plan, build and adjust in short cycles so the product can move with the business.",
    icon: "cycle" as const,
  },
  {
    id: "scale",
    title: "Built to Scale",
    description:
      "The system is designed to grow with demand, new channels and changing workflows.",
    icon: "expand" as const,
  },
];
