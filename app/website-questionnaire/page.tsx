import { QuestionnaireForm } from "@/components/questionnaire/QuestionnaireForm";
import { QuestionnaireHero } from "@/components/questionnaire/QuestionnaireHero";
import { pages } from "@/data/seo";

export const metadata = pages.questionnaire;

export default function WebsiteQuestionnairePage() {
  return (
    <main id="main" className="bg-soft-white text-ink">
      <QuestionnaireHero />
      <QuestionnaireForm />
    </main>
  );
}
