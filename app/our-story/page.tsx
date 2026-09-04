import { HumanTechGap } from "@/components/story/HumanTechGap";
import { OriginStory } from "@/components/story/OriginStory";
import { PhilosophySystem } from "@/components/story/PhilosophySystem";
import { StoryClosing } from "@/components/story/StoryClosing";
import { StoryIntro } from "@/components/story/StoryIntro";
import { StoryLenses } from "@/components/story/StoryLenses";
import { StoryProgress } from "@/components/story/StoryProgress";
import { pages } from "@/data/seo";

export const metadata = pages.story;

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
