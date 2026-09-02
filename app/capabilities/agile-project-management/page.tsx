import type { Metadata } from "next";
import { AgileApproach } from "@/components/agile/AgileApproach";
import { AgileCTA } from "@/components/agile/AgileCTA";
import { AgileHero } from "@/components/agile/AgileHero";
import { DeliverySystem } from "@/components/agile/DeliverySystem";

export const metadata: Metadata = {
  title: "Agile Project Management",
  description:
    "Digitalizer Agile project management: Scrum, Kanban, backlog stewardship, sprint planning and retrospectives — adapt, align and deliver.",
};

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
