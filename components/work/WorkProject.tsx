import type { WorkProject as WorkProjectData } from "@/data/projects";
import { cn } from "@/lib/cn";
import { WorkProjectMeta } from "@/components/work/WorkProjectMeta";
import { WorkProjectVisual } from "@/components/work/WorkProjectVisual";

export function WorkProject({
  project,
  first = false,
}: {
  project: WorkProjectData;
  first?: boolean;
}) {
  const dark = project.theme === "dark";
  const imageLeft = project.imagePosition === "left";

  return (
    <article
      className={cn(
        "overflow-hidden",
        dark ? "bg-near-black text-white" : "bg-soft-white text-ink",
        first && "border-t border-ink/8",
      )}
    >
      <div
        className={cn(
          "page-shell grid gap-12 pt-[clamp(8.75rem,16vw,11.25rem)] pb-[clamp(8.75rem,16vw,11.25rem)] lg:gap-16",
          "lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]",
          project.visualAlign === "end" ? "lg:items-end" : "lg:items-center",
        )}
      >
        <div className={cn(imageLeft && "lg:order-2")}>
          <WorkProjectMeta project={project} />
        </div>
        <WorkProjectVisual project={project} />
      </div>
    </article>
  );
}
