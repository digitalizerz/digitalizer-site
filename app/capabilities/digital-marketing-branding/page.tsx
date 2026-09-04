import { MarketingApproach } from "@/components/marketing-branding/MarketingApproach";
import { MarketingCTA } from "@/components/marketing-branding/MarketingCTA";
import { MarketingCapabilities } from "@/components/marketing-branding/MarketingCapabilities";
import { MarketingHero } from "@/components/marketing-branding/MarketingHero";
import { pages } from "@/data/seo";

export const metadata = pages.marketing;

export default function DigitalMarketingBrandingPage() {
  return (
    <main id="main" className="bg-soft-white text-ink">
      <MarketingHero />
      <MarketingApproach />
      <MarketingCapabilities />
      <MarketingCTA />
    </main>
  );
}
