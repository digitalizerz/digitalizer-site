import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactLocations } from "@/components/contact/ContactLocations";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Digitalizer. Call 1-832-225-2424 or send a note from Baltimore headquarters or the Houston office.",
};

export default function ContactPage() {
  return (
    <main id="main" className="bg-soft-white text-ink">
      <ContactHero />
      <ContactLocations />
    </main>
  );
}
