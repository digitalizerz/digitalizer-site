import { softwareCapabilities, softwarePage } from "@/data/softwareCapabilities";
import { accentHex } from "@/lib/accents";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ExpertiseNode } from "@/components/software-development/ExpertiseNode";

export function DevelopmentExpertise() {
  const { expertiseIntro } = softwarePage;

  return (
    <section className="border-t border-white/8 bg-near-black text-white">
      <div className="page-shell pt-[clamp(8.75rem,16vw,11.25rem)] pb-[clamp(8.75rem,16vw,11.25rem)]">
        <SectionLabel tone="green">{expertiseIntro.eyebrow}</SectionLabel>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <h2 className="max-w-3xl font-sans text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.035em]">
            <AnimatedText
              lines={[
                expertiseIntro.headline[0],
                <>
                  Built as one{" "}
                  <span className="text-adapt">connected system.</span>
                </>,
              ]}
            />
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-white/62">
            {expertiseIntro.supporting}
          </p>
        </div>

        <div className="relative mt-20 lg:mt-24">
          <div className="mb-8 hidden lg:grid lg:grid-cols-5 lg:gap-x-6 xl:gap-x-8" aria-hidden>
            {softwareCapabilities.map((item, index) => (
              <div key={item.id} className="relative flex items-center">
                {index < softwareCapabilities.length - 1 ? (
                  <span className="absolute left-2 right-[-100%] top-1/2 border-t border-dashed border-white/20" />
                ) : null}
                <span
                  className="relative z-10 size-2 rounded-full"
                  style={{ background: accentHex[item.accent] }}
                />
              </div>
            ))}
          </div>

          <div className="relative lg:grid lg:grid-cols-5 lg:gap-x-6 xl:gap-x-8">
            <div
              aria-hidden
              className="absolute top-3 bottom-6 left-[0.3rem] w-px bg-white/15 lg:hidden"
            />
            {softwareCapabilities.map((item) => (
              <div key={item.id} className="relative py-8 first:pt-0 last:pb-0 lg:py-0">
                <span
                  aria-hidden
                  className="absolute top-8 left-0 size-2 -translate-x-[3px] rounded-full lg:hidden"
                  style={{ background: accentHex[item.accent] }}
                />
                <div className="pl-7 lg:pl-0">
                  <ExpertiseNode item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
