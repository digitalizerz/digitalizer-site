import type { Metadata } from "next";
import { MarketingApproach } from "@/components/marketing-branding/MarketingApproach";
import { MarketingCTA } from "@/components/marketing-branding/MarketingCTA";
import { MarketingCapabilities } from "@/components/marketing-branding/MarketingCapabilities";
import { MarketingHero } from "@/components/marketing-branding/MarketingHero";

export const metadata: Metadata = {
  title: "Digital Marketing + Branding",
  description:
    "Digitalizer marketing and branding: brand strategy, content, campaigns, SEO and optimization — identity, connection and growth as one system.",
};

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
