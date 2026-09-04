import { UXCapabilities } from "@/components/ux-design/UXCapabilities";
import { UXCTA } from "@/components/ux-design/UXCTA";
import { UXHero } from "@/components/ux-design/UXHero";
import { UXPhilosophy } from "@/components/ux-design/UXPhilosophy";
import { pages } from "@/data/seo";

export const metadata = pages.ux;

export default function UXDesignPage() {
  return (
    <main id="main" className="bg-near-black text-white">
      <UXHero />
      <UXPhilosophy />
      <UXCapabilities />
      <UXCTA />
    </main>
  );
}
