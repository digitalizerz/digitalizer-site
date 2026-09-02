import type { BrandAccent } from "@/lib/accents";

export type CapabilityVisual = "terrain" | "grid" | "mesh" | "wave";

export type Capability = {
  id: string;
  number: string;
  title: string;
  titleLines: [string, string];
  description: string;
  pageDescription: string;
  expertise: string[];
  pageExpertise: string[];
  accent: BrandAccent;
  href: string;
  visual: CapabilityVisual;
};

export const capabilities: Capability[] = [
  {
    id: "experience",
    number: "01",
    title: "Experience Design + Strategy",
    titleLines: ["Experience Design", "+ Strategy"],
    description:
      "We build services and products that transform your brand in the eyes, mind, and fingers of your customer.",
    pageDescription:
      "We uncover human insight and translate it into meaningful experiences that strengthen brands and drive engagement.",
    expertise: [
      "User Research",
      "Information Architecture",
      "Interaction Design",
      "Prototyping",
    ],
    pageExpertise: [
      "Research + Discovery",
      "Experience Strategy",
      "UI / UX Design",
      "Brand Experience",
    ],
    accent: "green",
    href: "/capabilities/experience-design-strategy/ux-design",
    visual: "terrain",
  },
  {
    id: "technology",
    number: "02",
    title: "Technology + Engineering",
    titleLines: ["Technology", "+ Engineering"],
    description:
      "We solve problems that connect people and businesses to value — custom software that ultimately improves lives.",
    pageDescription:
      "We build scalable, secure and intelligent solutions using the right tools and modern engineering practices.",
    expertise: [
      "Custom Applications",
      "Web + Mobile",
      "API Integration",
      "Quality Assurance",
    ],
    pageExpertise: [
      "Custom Software Development",
      "Web Development",
      "Mobile App Development",
      "API Development + Integration",
      "Quality Assurance + Testing",
    ],
    accent: "blue",
    href: "/capabilities/technology-engineering/software-development",
    visual: "grid",
  },
  {
    id: "agile",
    number: "03",
    title: "Agile Project Management",
    titleLines: ["Agile Project", "Management"],
    description:
      "Products need constant feedback. We plan, pivot, and respond so teams can move with the market — not behind it.",
    pageDescription:
      "We keep teams aligned, adaptable and transparent — delivering value through collaboration and continuous iteration.",
    expertise: [
      "Sprint Planning",
      "Backlog Stewardship",
      "Stakeholder Cadence",
      "Continuous Improvement",
    ],
    pageExpertise: [
      "Agile Delivery",
      "Scrum",
      "Kanban",
      "Product Backlog Management",
      "Sprint Planning + Review",
      "Retrospectives",
    ],
    accent: "purple",
    href: "/capabilities/agile-project-management",
    visual: "mesh",
  },
  {
    id: "marketing",
    number: "04",
    title: "Digital Marketing + Branding",
    titleLines: ["Digital Marketing", "+ Branding"],
    description:
      "Great content is not a luxury. We shape culture, tell stories, and build the assets a brand needs for its next chapter.",
    pageDescription:
      "We help organizations tell their story, reach the right audience and build brands that stand out in a digital world.",
    expertise: [
      "Brand Systems",
      "Content Strategy",
      "Campaign Design",
      "Digital Presence",
    ],
    pageExpertise: [
      "Digital Strategy",
      "Content + Storytelling",
      "Campaigns + Growth",
      "Brand Development",
    ],
    accent: "orange",
    href: "/capabilities/digital-marketing-branding",
    visual: "wave",
  },
];
