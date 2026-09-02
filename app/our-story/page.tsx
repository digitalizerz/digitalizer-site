import type { Metadata } from "next";
import { HumanTechGap } from "@/components/story/HumanTechGap";
import { OriginStory } from "@/components/story/OriginStory";
import { PhilosophySystem } from "@/components/story/PhilosophySystem";
import { StoryClosing } from "@/components/story/StoryClosing";
import { StoryIntro } from "@/components/story/StoryIntro";
import { StoryLenses } from "@/components/story/StoryLenses";
import { StoryProgress } from "@/components/story/StoryProgress";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Digitalizer exists to close the gap between technology and people. Founded in 2017 to make technology adapt to humanity — not the other way around.",
};

export default function OurStoryPage() {
  return (
    <main id="main" className="bg-soft-white text-ink">
      <StoryProgress />
      <StoryIntro />
      <HumanTechGap />
      <OriginStory />
      <StoryLenses />
      <PhilosophySystem />
      <StoryClosing />
    </main>
  );
}
