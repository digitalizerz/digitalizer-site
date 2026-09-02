import type { BrandAccent } from "@/lib/accents";

export const agilePage = {
  href: "/capabilities/agile-project-management",
  breadcrumb: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Agile Project Management" },
  ],
  eyebrow: "Agile Project Management",
  supporting:
    "We bring structure to complexity—helping teams collaborate, adapt, and move meaningful work from idea to impact.",
  approach: {
    eyebrow: "Our approach",
    statement: ["Agility isn't a process.", "It's how teams move."],
    supporting:
      "We create delivery environments where teams stay aligned, respond to change, and continuously move valuable work forward.",
  },
  workflow: {
    eyebrow: "How we work",
    headline: ["One connected", "delivery system."],
    supporting:
      "From planning through reflection, every stage of delivery informs what comes next.",
  },
  cta: {
    headline: ["Let's move your", "next idea forward."],
    supporting:
      "Bring us the challenge. We'll help create the structure, momentum and collaboration to move it forward.",
  },
} as const;

export const agilePrinciples = [
  {
    id: "adapt",
    title: "Adapt",
    description: "Respond to change without losing direction.",
  },
  {
    id: "align",
    title: "Align",
    description: "Keep teams, priorities and outcomes connected.",
  },
  {
    id: "deliver",
    title: "Deliver",
    description: "Turn momentum into measurable progress.",
  },
] as const;

export type AgileStage = {
  id: string;
  number: string;
  short: string;
  title: string;
  description: string;
  accent: BrandAccent;
  icon: "scrum" | "kanban" | "backlog" | "sprint" | "retro";
};

export const agileStages: AgileStage[] = [
  {
    id: "scrum",
    number: "01",
    short: "Scrum",
    title: "Scrum Framework",
    description:
      "We implement Scrum, an iterative and incremental Agile methodology, to manage and forecast work on complex projects.",
    accent: "green",
    icon: "scrum",
  },
  {
    id: "kanban",
    number: "02",
    short: "Kanban",
    title: "Kanban Visualization",
    description:
      "We use Kanban boards to visualize work flow, identify bottlenecks and improve efficiency.",
    accent: "blue",
    icon: "kanban",
  },
  {
    id: "backlog",
    number: "03",
    short: "Backlog",
    title: "Product Backlog Management",
    description:
      "Our team creates, prioritizes and refines product backlogs to keep projects on track.",
    accent: "purple",
    icon: "backlog",
  },
  {
    id: "sprint",
    number: "04",
    short: "Sprint",
    title: "Sprint Planning + Review",
    description:
      "We conduct sprint planning and review sessions to establish objectives and assess completed work.",
    accent: "cyan",
    icon: "sprint",
  },
  {
    id: "retro",
    number: "05",
    short: "Reflect",
    title: "Retrospectives",
    description:
      "We hold retrospectives after each sprint to reflect on the work process and make improvements for future sprints.",
    accent: "orange",
    icon: "retro",
  },
];
