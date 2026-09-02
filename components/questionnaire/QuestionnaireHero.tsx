import { questionnairePage } from "@/data/websiteQuestionnaire";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { QuestionnaireVisual } from "@/components/questionnaire/QuestionnaireVisual";

export function QuestionnaireHero() {
  return (
    <section className="bg-soft-white text-ink">
      <div className="grid lg:min-h-[400px] lg:grid-cols-2">
        <div className="page-shell flex flex-col justify-center py-16 lg:max-w-none lg:pr-16">
          <SectionLabel tone="green" className="mb-6">
            {questionnairePage.eyebrow}
          </SectionLabel>
          <h1 className="max-w-xl font-sans text-[clamp(2.4rem,5.4vw,4.4rem)] font-medium leading-[0.92] tracking-[-0.04em]">
            <AnimatedText
              lines={[
                questionnairePage.headline[0],
                <span key="project" className="text-adapt">
                  {questionnairePage.headline[1]}
                </span>,
              ]}
            />
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/62">
            {questionnairePage.supporting}
          </p>
        </div>

        <div className="relative min-h-[240px] overflow-hidden bg-near-black lg:min-h-[400px]">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(0,112,183,0.22),transparent_46%),radial-gradient(ellipse_at_30%_80%,rgba(99,167,58,0.16),transparent_40%)]"
          />
          <QuestionnaireVisual />
        </div>
      </div>
    </section>
  );
}
