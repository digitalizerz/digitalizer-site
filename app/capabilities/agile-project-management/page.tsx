import { AgileApproach } from "@/components/agile/AgileApproach";
import { AgileCTA } from "@/components/agile/AgileCTA";
import { AgileHero } from "@/components/agile/AgileHero";
import { DeliverySystem } from "@/components/agile/DeliverySystem";
import { pages } from "@/data/seo";

export const metadata = pages.agile;

export default function AgileProjectManagementPage() {
  return (
    <main id="main" className="bg-soft-white text-ink">
      <AgileHero />
      <AgileApproach />
      <DeliverySystem />
      <AgileCTA />
    </main>
  );
}
