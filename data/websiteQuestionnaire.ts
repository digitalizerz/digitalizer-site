export const questionnairePage = {
  href: "/website-questionnaire",
  eyebrow: "Website Questionnaire",
  headline: ["Tell us about your", "project."],
  supporting:
    "The more we understand your goals, the better we can help bring your vision to life.",
  help: {
    label: "Need help?",
  },
  security:
    "Your information is secure and will never be shared.",
  turnstileNote: "Protected by Cloudflare Turnstile.",
  success: {
    eyebrow: "Questionnaire received",
    title: "Thank you. We’ll review this carefully.",
    body: "We’ve received your website questionnaire. Someone from Digitalizer will follow up with a clear next step.",
  },
} as const;

export const questionnaireSteps = [
  {
    id: 1,
    number: "01",
    title: "About You",
    summary: "Contact information",
    intro: "Let’s start with a few details about you and your organization.",
  },
  {
    id: 2,
    number: "02",
    title: "Your Business",
    summary: "Tell us about your organization",
    intro: "Help us understand what you do and who you serve.",
  },
  {
    id: 3,
    number: "03",
    title: "Look & Feel",
    summary: "Visual style and inspiration",
    intro: "Let’s understand the visual direction you’re drawn to.",
  },
  {
    id: 4,
    number: "04",
    title: "Your Website",
    summary: "Features and functionality",
    intro: "What should your website help people do?",
  },
  {
    id: 5,
    number: "05",
    title: "Project Details",
    summary: "Timeline, budget and other details",
    intro: "A few final details to help us understand the scope.",
  },
] as const;

export const contactMethods = [
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone" },
  { id: "either", label: "Either" },
] as const;

export const styleOptions = [
  { id: "artistic", label: "Artistic" },
  { id: "bold", label: "Bold" },
  { id: "clean", label: "Clean" },
  { id: "colorful", label: "Colorful" },
  { id: "corporate", label: "Corporate" },
  { id: "creative", label: "Creative" },
  { id: "dark", label: "Dark" },
  { id: "elegant", label: "Elegant" },
  { id: "friendly", label: "Friendly" },
  { id: "fun", label: "Fun" },
  { id: "futuristic", label: "Futuristic" },
  { id: "geometric", label: "Geometric" },
  { id: "minimal", label: "Minimal" },
  { id: "modern", label: "Modern" },
  { id: "professional", label: "Professional" },
  { id: "retro", label: "Retro" },
  { id: "simple", label: "Simple" },
  { id: "sleek", label: "Sleek" },
  { id: "soft", label: "Soft" },
  { id: "sophisticated", label: "Sophisticated" },
  { id: "trendy", label: "Trendy" },
  { id: "upscale", label: "Upscale" },
  { id: "urban", label: "Urban" },
  { id: "vintage", label: "Vintage" },
  { id: "warm", label: "Warm" },
  { id: "other", label: "Other" },
] as const;

export const featureOptions = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "team", label: "Team / Bios" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
  { id: "portfolio", label: "Portfolio / Our Work" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "video", label: "Video" },
  { id: "animations", label: "Animations" },
  { id: "gallery", label: "Image Gallery" },
  { id: "blog", label: "Blog" },
  { id: "community", label: "Community / Forum" },
  { id: "store", label: "Online Store" },
  { id: "events", label: "Events" },
  { id: "other", label: "Other" },
] as const;

export const logoOptions = [
  { id: "have-logo", label: "Yes — we’ll provide it" },
  { id: "refresh-logo", label: "Yes — but we’d like it refreshed" },
  { id: "create-logo", label: "No — we’d like Digitalizer to create one" },
  { id: "not-sure", label: "Not sure yet" },
] as const;

export const timelineOptions = [
  { id: "asap", label: "As soon as possible" },
  { id: "1-2-months", label: "Within 1–2 months" },
  { id: "3-4-months", label: "Within 3–4 months" },
  { id: "5-6-months", label: "Within 5–6 months" },
  { id: "6-plus-months", label: "6+ months" },
  { id: "specific-date", label: "I have a specific date" },
  { id: "not-sure", label: "Not sure yet" },
] as const;

export const budgetOptions = [
  { id: "under-5k", label: "Under $5,000" },
  { id: "5k-10k", label: "$5,000 – $10,000" },
  { id: "10k-25k", label: "$10,000 – $25,000" },
  { id: "25k-50k", label: "$25,000 – $50,000" },
  { id: "50k-plus", label: "$50,000+" },
  { id: "not-sure", label: "Not sure yet" },
] as const;

export const questionnaireCopy = {
  audienceHint:
    "Consider things like age, location, industry, role, interests, customer type, or other characteristics that matter to your business.",
  inspirationHint:
    "They can be competitors or completely unrelated. Tell us what you like about them.",
  functionalityHint:
    "For example: booking, payments, member accounts, dashboards, integrations, directories, search, or something unique to your business.",
  colorsHint: "You can list several, separated by commas.",
} as const;

export const questionnaireLimits = {
  name: 120,
  organization: 160,
  email: 254,
  phone: 40,
  location: 160,
  aboutNotes: 500,
  longText: 2000,
  colors: 200,
  otherStyle: 300,
  visualNotes: 1000,
  inspirationUrl: 300,
  inspirationLikes: 500,
  inspirationMax: 5,
  projectNotes: 2000,
} as const;

type IdOf<T extends readonly { id: string }[]> = T[number]["id"];

export type ContactMethodId = IdOf<typeof contactMethods>;
export type StyleId = IdOf<typeof styleOptions>;
export type FeatureId = IdOf<typeof featureOptions>;
export type LogoId = IdOf<typeof logoOptions>;
export type TimelineId = IdOf<typeof timelineOptions>;
export type BudgetId = IdOf<typeof budgetOptions>;

export function optionLabel<T extends readonly { id: string; label: string }[]>(
  options: T,
  id: string,
) {
  return options.find((option) => option.id === id)?.label ?? id;
}
