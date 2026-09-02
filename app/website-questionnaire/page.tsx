import type { Metadata } from "next";
import { QuestionnaireForm } from "@/components/questionnaire/QuestionnaireForm";
import { QuestionnaireHero } from "@/components/questionnaire/QuestionnaireHero";

export const metadata: Metadata = {
  title: "Website Questionnaire",
  description:
    "Tell Digitalizer about your website project — who you are, what you need, and how we can help bring it to life.",
};

export default function WebsiteQuestionnairePage() {
  return (
    <main id="main" className="bg-soft-white text-ink">
      <QuestionnaireHero />
      <QuestionnaireForm />
    </main>
  );
}
