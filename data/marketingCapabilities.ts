import type { BrandAccent } from "@/lib/accents";

export const marketingPage = {
  href: "/capabilities/digital-marketing-branding",
  breadcrumb: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Digital Marketing + Branding" },
  ],
  eyebrow: "Digital Marketing + Branding",
  supporting:
    "We combine brand strategy, creative storytelling and performance marketing to help you stand out, connect with the right audience, and grow sustainable results.",
  approach: {
    eyebrow: "Our approach",
    supporting:
      "We go beyond tactics to build brands people remember and campaigns that drive real impact. Every decision is rooted in strategy, creativity and measurable results.",
  },
  whatWeDo: {
    eyebrow: "What we do",
    headline: ["From brand to results.", "Everything connected."],
    supporting:
      "Our integrated marketing and branding capabilities help you build awareness, drive engagement and grow your business.",
  },
  cta: {
    headline: [
      "Let's grow your brand",
      "and move your business",
      "forward—together.",
    ],
    supporting:
      "Great brands are built with strategy, creativity and consistency. Let's build yours.",
  },
} as const;

export const marketingPrinciples = [
  {
    id: "understand",
    title: "Understand",
    description:
      "We dive into your business, audience, market and goals to uncover what matters.",
    accent: "green" as const,
    icon: "heart" as const,
  },
  {
    id: "create",
    title: "Create",
    description:
      "We craft brand identities and content that capture attention and communicate your value.",
    accent: "blue" as const,
    icon: "idea" as const,
  },
  {
    id: "amplify",
    title: "Amplify",
    description:
      "We activate through the right channels, using data and creativity to reach and engage your audience.",
    accent: "purple" as const,
    icon: "signal" as const,
  },
  {
    id: "optimize",
    title: "Optimize",
    description:
      "We analyze, learn and continuously refine performance to improve outcomes.",
    accent: "orange" as const,
    icon: "trend" as const,
  },
];

export type MarketingCapability = {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: BrandAccent;
  icon: "brand" | "content" | "campaign" | "growth" | "analytics";
};

export const marketingCapabilities: MarketingCapability[] = [
  {
    id: "brand-strategy",
    number: "01",
    title: "Brand Strategy + Identity",
    description:
      "We define your brand purpose, positioning and visual identity so you stand out and stay consistent.",
    accent: "green",
    icon: "brand",
  },
  {
    id: "content-creative",
    number: "02",
    title: "Content + Creative",
    description:
      "We create compelling content and creative assets that connect, inspire and convert.",
    accent: "blue",
    icon: "content",
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    description:
      "We run data-driven campaigns across digital channels to build awareness, engagement and measurable growth.",
    accent: "purple",
    icon: "campaign",
  },
  {
    id: "seo-growth",
    number: "04",
    title: "SEO + Growth",
    description:
      "We optimize your digital presence to improve visibility, attract the right audience and strengthen organic performance.",
    accent: "cyan",
    icon: "growth",
  },
  {
    id: "analytics",
    number: "05",
    title: "Analytics + Optimization",
    description:
      "We track performance, uncover insights and continuously refine campaigns to improve outcomes.",
    accent: "orange",
    icon: "analytics",
  },
];
