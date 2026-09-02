export const developmentProcessIntro = {
  eyebrow: "Our development process",
  headline: ["A proven process.", "Predictable outcomes."],
} as const;

export const developmentProcess = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description: "We understand your business, users and challenges.",
    accent: "green" as const,
    icon: "search" as const,
  },
  {
    id: "plan",
    number: "02",
    title: "Plan",
    description: "We define the right strategy, architecture and roadmap.",
    accent: "blue" as const,
    icon: "plan" as const,
  },
  {
    id: "develop",
    number: "03",
    title: "Develop",
    description: "We build, test and iterate with speed and precision.",
    accent: "purple" as const,
    icon: "code" as const,
  },
  {
    id: "deploy",
    number: "04",
    title: "Deploy",
    description: "We launch securely and ensure seamless adoption.",
    accent: "cyan" as const,
    icon: "launch" as const,
  },
  {
    id: "evolve",
    number: "05",
    title: "Evolve",
    description: "We monitor, optimize and scale as your needs grow.",
    accent: "orange" as const,
    icon: "grow" as const,
  },
];
