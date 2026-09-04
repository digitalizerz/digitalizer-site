import { workProjects } from "@/data/projects";
import { pages } from "@/data/seo";
import { WorkHero } from "@/components/work/WorkHero";
import { WorkProject } from "@/components/work/WorkProject";

export const metadata = pages.work;

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
