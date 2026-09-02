import type { BrandAccent } from "@/lib/accents";

export const storyChapters = [
  { id: "intro", number: "01", label: "Why", tone: "light" },
  { id: "gap", number: "02", label: "The Gap", tone: "dark" },
  { id: "origin", number: "03", label: "Beginning", tone: "dark" },
  { id: "beliefs", number: "04", label: "Believe", tone: "dark" },
  { id: "closing", number: "05", label: "Next", tone: "light" },
] as const;

export const originFragments = [
  {
    lead: "2017",
    text: "Digitalizer LLC was born from a shared vision: a world where technology complements the human experience, rather than complicating it.",
  },
  {
    lead: "The founders",
    text: "They came from software development and design — and noticed a widening gap between what technology could do and how it actually felt to use.",
  },
  {
    lead: "The craft",
    text: "Some see digital transformation as a technical endeavor. We treat it as a creative one: turning dated workflows into agile processes that save time, money, and friction.",
  },
  {
    lead: "The team",
    text: "Engineers, UX designers, and digital strategists. Diverse perspectives. One commitment: users at the core of every solution.",
  },
  {
    lead: "The pillars",
    text: "Empathy. Innovation. Excellence. Software that is technically strong, instinctively usable, and emotionally resonant.",
  },
] as const;

export const storyLenses = [
  {
    id: "question",
    title: "Question",
    line: "Assume less. Understand more.",
    image: "/images/story/lens-question.jpg",
    alt: "Hands writing and mapping a problem on paper.",
  },
  {
    id: "create",
    title: "Create",
    line: "Design with intent.",
    image: "/images/story/lens-create.jpg",
    alt: "Close crop of design tools and sketched interface work.",
  },
  {
    id: "build",
    title: "Build",
    line: "Engineer with excellence.",
    image: "/images/story/lens-build.jpg",
    alt: "A screen of code in a dark workspace.",
  },
  {
    id: "impact",
    title: "Impact",
    line: "Deliver value that matters.",
    image: "/images/story/lens-impact.jpg",
    alt: "Hands holding a phone, using a digital product.",
  },
] as const;

export const storyBeliefs: {
  title: string;
  text: string;
  accent: BrandAccent;
}[] = [
  {
    title: "Human-Centered",
    text: "People first, always. Technology must be human-centered at all times.",
    accent: "green",
  },
  {
    title: "Lives Enhanced",
    text: "It must enhance the lives of its users — instinctive, useful, and worth returning to.",
    accent: "blue",
  },
  {
    title: "Positive Impact",
    text: "It must make a positive benefit to society, not just a more efficient process.",
    accent: "green",
  },
  {
    title: "Human Rights",
    text: "It must respect and enhance human rights in what we design and what we ship.",
    accent: "purple",
  },
  {
    title: "Opportunity",
    text: "It must create opportunities for all — growth, access, and a fairer way forward.",
    accent: "orange",
  },
];
