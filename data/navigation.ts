export const navigation = [
  { label: "Our Work", href: "/work" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "About Us", href: "/our-story" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const primaryCta = {
  label: "Start a Project",
  href: "/contact",
} as const;

export const footerNavigation = [
  ...navigation,
  { label: "Website Questionnaire", href: "/website-questionnaire" },
] as const;

export function isCurrentPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const capabilityNav = [
  {
    number: "01",
    label: "Experience Design + Strategy",
    href: "/capabilities/experience-design-strategy/ux-design",
  },
  {
    number: "02",
    label: "Technology + Engineering",
    href: "/capabilities/technology-engineering/software-development",
  },
  {
    number: "03",
    label: "Agile Project Management",
    href: "/capabilities/agile-project-management",
  },
  {
    number: "04",
    label: "Digital Marketing + Branding",
    href: "/capabilities/digital-marketing-branding",
  },
] as const;
