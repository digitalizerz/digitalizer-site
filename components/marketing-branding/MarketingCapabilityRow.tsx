import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import type { MarketingCapability } from "@/data/marketingCapabilities";
import { accentHex } from "@/lib/accents";
import {
  IconAnalytics,
  IconBrand,
  IconCampaign,
  IconContent,
  IconGrowth,
} from "@/components/marketing-branding/MarketingMarks";

const icons = {
  brand: IconBrand,
  content: IconContent,
  campaign: IconCampaign,
  growth: IconGrowth,
  analytics: IconAnalytics,
} as const;

export function MarketingCapabilityRow({ item }: { item: MarketingCapability }) {
  const Icon = icons[item.icon];

  return (
    <article
      className="group grid items-start gap-5 border-t border-ink/10 py-9 transition-colors duration-500 last:border-b hover:border-ink/20 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:gap-8 md:py-11"
      style={{ "--accent": accentHex[item.accent] } as CSSProperties}
    >
      <Icon className="size-9 text-[var(--accent)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="font-mono text-[clamp(1.8rem,3vw,2.6rem)] leading-none tracking-tight text-ink/18 transition-colors duration-500 group-hover:text-ink/32">
        {item.number}
      </p>
      <div className="max-w-2xl">
        <h3 className="font-sans text-xl tracking-tight text-ink md:text-[1.55rem]">
          {item.title}
        </h3>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/60">
          {item.description}
        </p>
      </div>
      <ArrowUpRight
        aria-hidden
        className="mt-1 size-4 text-ink/30 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)] md:justify-self-end"
        strokeWidth={1.6}
      />
    </article>
  );
}
