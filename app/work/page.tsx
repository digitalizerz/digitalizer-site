import type { Metadata } from "next";
import { workProjects } from "@/data/projects";
import { WorkHero } from "@/components/work/WorkHero";
import { WorkProject } from "@/components/work/WorkProject";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore selected Digitalizer work across healthcare, enterprise technology, product strategy, UX and software engineering.",
};

export default function WorkPage() {
  return (
    <main id="main" className="bg-soft-white text-ink">
      <WorkHero />
      {workProjects.map((project, index) => (
        <WorkProject key={project.slug} project={project} first={index === 0} />
      ))}
    </main>
  );
}
