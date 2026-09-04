import { DevelopmentExpertise } from "@/components/software-development/DevelopmentExpertise";
import { DevelopmentProcess } from "@/components/software-development/DevelopmentProcess";
import { EngineeringImpact } from "@/components/software-development/EngineeringImpact";
import { SoftwareCTA } from "@/components/software-development/SoftwareCTA";
import { SoftwareHero } from "@/components/software-development/SoftwareHero";
import { pages } from "@/data/seo";

export const metadata = pages.software;

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
