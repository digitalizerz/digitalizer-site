"use client";

import { useEffect, useState } from "react";
import { storyChapters } from "@/data/story";
import { cn } from "@/lib/cn";

type ChapterId = (typeof storyChapters)[number]["id"];

export function StoryProgress() {
  const [active, setActive] = useState<ChapterId>(storyChapters[0].id);

  useEffect(() => {
    const nodes = storyChapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id as ChapterId);
        }
      },
      { threshold: [0.35, 0.55], rootMargin: "-15% 0px -25% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-hidden
      className={cn(
        "pointer-events-none fixed top-1/2 left-[var(--gutter)] z-30 hidden -translate-y-1/2 transition-colors duration-500 lg:block",
        storyChapters.find((chapter) => chapter.id === active)?.tone === "light"
          ? "text-ink"
          : "text-white",
      )}
    >
      <p className="mb-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-current/40 [writing-mode:vertical-rl] rotate-180">
        Story
      </p>
      <ol className="flex flex-col items-center gap-5">
        {storyChapters.map((chapter, index) => {
          const isActive = chapter.id === active;
          return (
            <li key={chapter.id} className="flex flex-col items-center gap-5">
              {index > 0 ? (
                <span className="h-8 w-px bg-current/15" />
              ) : null}
              <span
                className={cn(
                  "font-mono text-[0.68rem] tracking-[0.18em] transition-colors duration-500",
                  isActive ? "text-brand-green" : "text-current/30",
                )}
              >
                {chapter.number}
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
