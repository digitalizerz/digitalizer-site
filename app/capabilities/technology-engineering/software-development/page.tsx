import type { Metadata } from "next";
import { DevelopmentExpertise } from "@/components/software-development/DevelopmentExpertise";
import { DevelopmentProcess } from "@/components/software-development/DevelopmentProcess";
import { EngineeringImpact } from "@/components/software-development/EngineeringImpact";
import { SoftwareCTA } from "@/components/software-development/SoftwareCTA";
import { SoftwareHero } from "@/components/software-development/SoftwareHero";

export const metadata: Metadata = {
  title: "Software Development",
  description:
    "Digitalizer software development: custom applications, web, mobile, APIs and quality assurance — engineered as one connected system.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <main id="main" className="bg-soft-white text-ink">
      <SoftwareHero />
      <DevelopmentExpertise />
      <EngineeringImpact />
      <DevelopmentProcess />
      <SoftwareCTA />
    </main>
  );
}
