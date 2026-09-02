import type { WorkProject } from "@/data/projects";
import { accentHex } from "@/lib/accents";
import { cn } from "@/lib/cn";

export function WorkProjectMeta({ project }: { project: WorkProject }) {
  const dark = project.theme === "dark";

  return (
    <div className="max-w-md">
      <p
        className="flex items-center gap-4 font-mono text-[clamp(1.6rem,3vw,2.3rem)] leading-none tracking-tight"
        style={{ color: accentHex[project.accent] }}
      >
        <span>{project.number}</span>
        <span
          aria-hidden
          className="h-px w-16"
          style={{ background: accentHex[project.accent] }}
        />
      </p>
      <h2
        className={cn(
          "mt-7 font-sans text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[0.96] tracking-[-0.035em]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {project.name}
      </h2>
      <p
        className={cn(
          "mt-5 font-mono text-[0.68rem] uppercase tracking-[0.18em]",
          dark ? "text-white/40" : "text-ink/40",
        )}
      >
        {project.capabilities.join("  •  ")}
      </p>
      <p
        className={cn(
          "mt-8 text-lg leading-relaxed",
          dark ? "text-white/62" : "text-ink/62",
        )}
      >
        {project.description}
      </p>
      {project.caseStudyAvailable ? null : (
        <p
          className={cn(
            "mt-10 font-mono text-[0.68rem] uppercase tracking-[0.18em]",
            dark ? "text-white/32" : "text-ink/32",
          )}
        >
          Case Study Coming Soon
        </p>
      )}
    </div>
  );
}
