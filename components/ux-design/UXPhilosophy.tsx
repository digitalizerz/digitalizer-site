import { uxPage } from "@/data/uxCapabilities";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function UXPhilosophy() {
  const { philosophy } = uxPage;

  return (
    <section className="bg-near-black text-white">
      <div className="page-shell grid gap-14 pt-8 pb-[clamp(8.75rem,16vw,11.25rem)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end lg:gap-24">
        <div>
          <SectionLabel tone="green">{philosophy.eyebrow}</SectionLabel>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/62">
            {philosophy.copy}
          </p>
        </div>
        <h2 className="max-w-3xl font-sans text-[clamp(2.4rem,5.6vw,4.8rem)] font-medium leading-[0.94] tracking-[-0.035em]">
          <AnimatedText
            lines={[
              philosophy.statement[0],
              <>
                Design with <span className="text-adapt">purpose.</span>
              </>,
            ]}
          />
        </h2>
      </div>
    </section>
  );
}
