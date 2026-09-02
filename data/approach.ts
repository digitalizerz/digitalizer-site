import type { BrandAccent } from "@/lib/accents";

export type ApproachStage = {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: BrandAccent;
};

export const approachStages: ApproachStage[] = [
  {
    id: "understand",
    number: "01",
    title: "Understand",
    description:
      "We begin with people — their context, constraints, and the real problem beneath the brief.",
    accent: "green",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    description:
      "We shape journeys that feel instinctive, then prototype until the experience earns trust.",
    accent: "blue",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "We engineer what we design: robust systems, honest interfaces, and software ready to evolve.",
    accent: "purple",
  },
  {
    id: "adapt",
    number: "04",
    title: "Adapt",
    description:
      "Launch is not the end. We stay close, learn, and keep the product in harmony with its users.",
    accent: "orange",
  },
];
