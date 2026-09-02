import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CapabilitiesIntro() {
  return (
    <section className="bg-dark-surface pt-[clamp(7.5rem,14vw,10rem)] pb-20 md:pb-24">
      <div className="page-shell max-w-5xl">
        <SectionLabel tone="green">End-to-end capabilities</SectionLabel>
        <h2 className="mt-8 font-sans text-[clamp(2.2rem,4.6vw,4.15rem)] font-medium leading-[0.95] tracking-[-0.035em] text-white">
          <AnimatedText
            lines={[
              "We partner across every step",
              <>
                of your <span className="text-adapt">digital journey.</span>
              </>,
            ]}
          />
        </h2>
      </div>
    </section>
  );
}
