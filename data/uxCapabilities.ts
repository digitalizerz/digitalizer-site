import type { BrandAccent } from "@/lib/accents";

export const uxPage = {
  href: "/capabilities/experience-design-strategy/ux-design",
  breadcrumb: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Experience Design + Strategy", href: "/capabilities" },
    { label: "UX Design" },
  ],
  eyebrow: "UX Design",
  supporting:
    "We design meaningful digital experiences that connect people, solve real problems, and drive lasting impact for your business.",
  philosophy: {
    eyebrow: "Our philosophy",
    copy: "We root our design process deeply in empathy and innovation, creating user journeys that are intuitive, engaging and aligned with real human needs.",
    statement: ["Understand people.", "Design with purpose."],
  },
  whatWeDo: {
    eyebrow: "What we do",
    headline: ["Thoughtful processes.", "Better experiences."],
    supporting:
      "Our UX design capabilities help us create digital products that people love to use.",
  },
  cta: {
    headline: [
      "Let's design experiences",
      "that move your business",
      "forward—together.",
    ],
    supporting:
      "Great experiences don't happen by accident. Let's create something meaningful.",
  },
} as const;

export type UXCapability = {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: BrandAccent;
  icon: "research" | "architecture" | "interaction" | "prototype" | "testing";
};

export const uxCapabilities: UXCapability[] = [
  {
    id: "user-research",
    number: "01",
    title: "User Research",
    description:
      "Through interviews, surveys and observation, we understand user needs and expectations, informing our design decisions.",
    accent: "green",
    icon: "research",
  },
  {
    id: "information-architecture",
    number: "02",
    title: "Information Architecture",
    description:
      "We plan and structure digital products for intuitive navigation and ease of use.",
    accent: "blue",
    icon: "architecture",
  },
  {
    id: "interaction-design",
    number: "03",
    title: "Interaction Design",
    description:
      "We create thoughtful interactions between users and products, providing a smooth user journey.",
    accent: "purple",
    icon: "interaction",
  },
  {
    id: "wireframing",
    number: "04",
    title: "Wireframing + Prototyping",
    description:
      "We design low- and high-fidelity representations of the product, iterating through feedback to improve usability.",
    accent: "orange",
    icon: "prototype",
  },
  {
    id: "usability-testing",
    number: "05",
    title: "Usability Testing",
    description:
      "We conduct testing to understand how users interact with the product and identify opportunities for improvement.",
    accent: "cyan",
    icon: "testing",
  },
];
