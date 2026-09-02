import type { Metadata } from "next";
import { CapabilitiesHero } from "@/components/capabilities/CapabilitiesHero";
import { CapabilitiesIntro } from "@/components/capabilities/CapabilitiesIntro";
import { CapabilityGrid } from "@/components/capabilities/CapabilityGrid";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Digitalizer capabilities: experience design, technology and engineering, agile project management, and digital marketing — an end-to-end digital system.",
};

export default function CapabilitiesPage() {
  return (
    <main id="main" className="bg-near-black text-white">
      <CapabilitiesHero />
      <CapabilitiesIntro />
      <section
        id="capability-system"
        className="bg-dark-surface pb-[clamp(6.5rem,12vw,9rem)]"
      >
        <div className="page-shell">
          <CapabilityGrid />
        </div>
      </section>
    </main>
  );
}
