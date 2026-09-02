import { agilePage, agilePrinciples } from "@/data/agileCapabilities";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AgileApproach() {
  const { approach } = agilePage;

  return (
    <section className="border-t border-white/8 bg-near-black text-white">
      <div className="page-shell pt-[clamp(8.75rem,16vw,11.25rem)] pb-[clamp(8.75rem,16vw,11.25rem)]">
        <SectionLabel tone="green">{approach.eyebrow}</SectionLabel>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <h2 className="max-w-3xl font-sans text-[clamp(2.3rem,5.2vw,4.5rem)] font-medium leading-[0.94] tracking-[-0.035em]">
            <AnimatedText
              lines={[
                approach.statement[0],
                <>
                  It&apos;s how teams <span className="text-adapt">move.</span>
                </>,
              ]}
            />
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-white/62">
            {approach.supporting}
          </p>
        </div>

        <ul className="mt-20 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-3 md:gap-0">
          {agilePrinciples.map((item, index) => (
            <li
              key={item.id}
              className="md:border-l md:border-white/10 md:px-8 first:md:border-l-0 first:md:pl-0"
            >
              <p className="font-mono text-[0.68rem] tracking-[0.2em] text-white/35">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-sans text-[1.7rem] tracking-tight text-white md:text-[2rem]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-xs text-[0.98rem] leading-relaxed text-white/60">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
