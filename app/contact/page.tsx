import { ContactHero } from "@/components/contact/ContactHero";
import { ContactLocations } from "@/components/contact/ContactLocations";
import { pages } from "@/data/seo";

export const metadata = pages.contact;

export default function ContactPage() {
  return (
    <main id="main" className="bg-soft-white text-ink">
      <ContactHero />
      <ContactLocations />
    </main>
  );
}
