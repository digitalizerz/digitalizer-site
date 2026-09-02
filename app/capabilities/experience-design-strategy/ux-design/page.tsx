import type { Metadata } from "next";
import { UXCapabilities } from "@/components/ux-design/UXCapabilities";
import { UXCTA } from "@/components/ux-design/UXCTA";
import { UXHero } from "@/components/ux-design/UXHero";
import { UXPhilosophy } from "@/components/ux-design/UXPhilosophy";

export const metadata: Metadata = {
  title: "UX Design",
  description:
    "Digitalizer UX design: research, information architecture, interaction design, prototyping and usability testing — from human complexity to intuitive experiences.",
};

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
