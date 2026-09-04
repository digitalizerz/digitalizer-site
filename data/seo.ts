import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://digitalizer.io";

export const seo = {
  name: "Digitalizer",
  legalName: "Digitalizer LLC",
  tagline: "Technology should adapt to people.",
  locale: "en_US",
  founded: "2017",
} as const;

export const coreKeywords = [
  "Digitalizer",
  "custom software development Houston",
  "AI website design",
  "AI website development",
  "enterprise UX design",
  "digital product design agency",
  "custom web application development",
  "digital transformation consulting",
  "Houston software development company",
  "Baltimore digital agency",
  "high-end website design",
  "product strategy and engineering",
];

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | Digitalizer`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...coreKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: seo.name,
      locale: seo.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const pages = {
  home: pageMetadata({
    absoluteTitle: true,
    title:
      "Digitalizer | AI Website Design, Custom Software & UX in Houston",
    description:
      "Houston and Baltimore digital product studio for high-stakes work: AI website design, custom software, UX, and digital transformation for ambitious teams nationwide.",
    path: "/",
    keywords: [
      "AI product design Houston",
      "enterprise software agency Texas",
      "custom digital platforms",
    ],
  }),
  work: pageMetadata({
    title: "Our Work — Healthcare, Energy & Enterprise Platforms",
    description:
      "Selected Digitalizer work across healthcare, energy, and enterprise technology — product strategy, UX, and custom engineering for complex organizations.",
    path: "/work",
    keywords: [
      "enterprise case studies",
      "healthcare digital product design",
      "energy software UX",
    ],
  }),
  capabilities: pageMetadata({
    title: "Capabilities — Design, Engineering, Agile & Growth",
    description:
      "End-to-end digital capabilities: experience design, custom software, agile delivery, and brand growth. Built for companies that need more than a template site.",
    path: "/capabilities",
    keywords: [
      "full-service digital product agency",
      "experience design and engineering",
    ],
  }),
  software: pageMetadata({
    title: "Custom Software & AI Web Development",
    description:
      "Custom applications, AI-assisted web platforms, APIs, and quality engineering from our Houston studio — built as one connected system for serious products.",
    path: "/capabilities/technology-engineering/software-development",
    keywords: [
      "custom software development",
      "AI web development",
      "enterprise application development Houston",
      "API and platform engineering",
    ],
  }),
  ux: pageMetadata({
    title: "UX Design & Product Strategy",
    description:
      "Research-led UX and product strategy for complex products — information architecture, interaction design, and usability that help demanding users move faster.",
    path: "/capabilities/experience-design-strategy/ux-design",
    keywords: [
      "enterprise UX design",
      "product strategy agency",
      "UX research Houston",
    ],
  }),
  agile: pageMetadata({
    title: "Agile Project Management for Digital Products",
    description:
      "Agile delivery that keeps design, engineering, and stakeholders aligned — backlog stewardship, sprint planning, and adaptive execution for high-value programs.",
    path: "/capabilities/agile-project-management",
    keywords: [
      "agile product delivery",
      "scrum project management agency",
    ],
  }),
  marketing: pageMetadata({
    title: "Digital Marketing, Branding & SEO",
    description:
      "Brand strategy, content, campaigns, and SEO that support premium digital products — identity and growth as one system, not disconnected tactics.",
    path: "/capabilities/digital-marketing-branding",
    keywords: [
      "B2B digital marketing agency",
      "brand strategy Houston",
      "SEO for custom websites",
    ],
  }),
  story: pageMetadata({
    title: "Our Story — Human-Centered Technology Since 2017",
    description:
      "Digitalizer was founded in 2017 to close the gap between technology and people. A Houston and Baltimore studio making software adapt to humanity.",
    path: "/our-story",
    keywords: ["Digitalizer story", "human-centered technology studio"],
  }),
  contact: pageMetadata({
    title: "Contact — Houston & Baltimore Offices",
    description:
      "Talk with Digitalizer about a custom website, AI product, or software platform. Call 1-832-225-2424 or reach our Houston and Baltimore teams.",
    path: "/contact",
    keywords: [
      "Houston digital agency contact",
      "Baltimore software studio",
    ],
  }),
  questionnaire: pageMetadata({
    title: "Start a Website Project",
    description:
      "Begin a Digitalizer website or digital product engagement. Share your goals, audience, and scope so we can recommend a clear next step.",
    path: "/website-questionnaire",
    keywords: [
      "custom website project intake",
      "hire AI website design agency",
    ],
  }),
} as const;

export const sitemapPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/work", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/capabilities", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/capabilities/experience-design-strategy/ux-design",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/capabilities/technology-engineering/software-development",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/capabilities/agile-project-management",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/capabilities/digital-marketing-branding",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  { path: "/our-story", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  {
    path: "/website-questionnaire",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
];
