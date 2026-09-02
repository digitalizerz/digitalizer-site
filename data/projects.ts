import type { BrandAccent } from "@/lib/accents";

export type WorkProject = {
  slug: string;
  number: string;
  name: string;
  industry: string;
  capabilities: string[];
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  theme: "light" | "dark";
  accent: BrandAccent;
  imagePosition: "left" | "right";
  visualAlign: "center" | "end";
  caseStudyAvailable: boolean;
};

export const workPage = {
  href: "/work",
  eyebrow: "Some of our work",
  supporting:
    "From healthcare platforms to enterprise technology, we design and build digital experiences that make complex things easier to use.",
} as const;

export const workProjects: WorkProject[] = [
  {
    slug: "lovejoy-health",
    number: "01",
    name: "LoveJoy Health",
    industry: "Healthcare",
    capabilities: ["Healthcare", "Product Strategy", "UX", "Engineering"],
    description:
      "Building a connected behavioral health experience around the people receiving and delivering care.",
    image: "/images/work/lovejoy-health.png",
    imageWidth: 1024,
    imageHeight: 576,
    alt: "LoveJoy Health digital platform shown across web and mobile interfaces.",
    theme: "light",
    accent: "green",
    imagePosition: "right",
    visualAlign: "center",
    caseStudyAvailable: false,
  },
  {
    slug: "inovcares",
    number: "02",
    name: "InovCares",
    industry: "Healthcare",
    capabilities: ["Healthcare", "Digital Experience"],
    description:
      "Digital product and experience work supporting a modern healthcare platform and its patient experience.",
    image: "/images/work/inovcares.png",
    imageWidth: 1024,
    imageHeight: 682,
    alt: "InovCares healthcare digital experience shown on laptop and mobile interfaces.",
    theme: "dark",
    accent: "blue",
    imagePosition: "left",
    visualAlign: "center",
    caseStudyAvailable: false,
  },
  {
    slug: "nov",
    number: "03",
    name: "NOV",
    industry: "Energy",
    capabilities: ["Energy", "Enterprise Technology"],
    description:
      "Enterprise digital experience work supporting complex tools, workflows, and users in the energy industry.",
    image: "/images/work/nov.png",
    imageWidth: 1024,
    imageHeight: 682,
    alt: "Enterprise energy technology interface shown across desktop and mobile devices.",
    theme: "light",
    accent: "green",
    imagePosition: "right",
    visualAlign: "end",
    caseStudyAvailable: false,
  },
];
