import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import { questionnaireCopy, questionnaireLimits } from "@/data/websiteQuestionnaire";
import { FieldError, FieldHint, FieldLabel, inputClass } from "@/components/questionnaire/fields";
import type { QuestionnaireFormValues } from "@/lib/questionnaire/schema";

const areas = [
  {
    id: "organizationAbout",
    label: "Tell us about your organization.",
    rows: 6,
  },
  {
    id: "productsServices",
    label: "What products or services do you offer?",
    rows: 6,
  },
  {
    id: "websitePurpose",
    label: "What is the primary purpose of your website?",
    rows: 6,
  },
  {
    id: "audience",
    label: "Who is your target audience?",
    rows: 6,
    hint: questionnaireCopy.audienceHint,
  },
] as const;

export function StepBusiness({
  register,
  errors,
}: {
  register: UseFormRegister<QuestionnaireFormValues>;
  watch: UseFormWatch<QuestionnaireFormValues>;
  errors: Record<string, string>;
}) {
  return (
    <div className="grid gap-8">
      {areas.map((area) => (
        <div key={area.id}>
          <FieldLabel htmlFor={area.id} required>
            {area.label}
          </FieldLabel>
          {"hint" in area ? <FieldHint>{area.hint}</FieldHint> : null}
          <textarea
            id={area.id}
            rows={area.rows}
            maxLength={questionnaireLimits.longText}
            className={`${inputClass(Boolean(errors[area.id]))} min-h-40 resize-y`}
            {...register(area.id)}
          />
          <FieldError id={`${area.id}-error`} message={errors[area.id]} />
        </div>
      ))}
    </div>
  );
}
