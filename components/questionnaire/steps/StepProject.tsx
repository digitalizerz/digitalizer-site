import type { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import {
  budgetOptions,
  questionnaireLimits,
  timelineOptions,
} from "@/data/websiteQuestionnaire";
import { CardSelect } from "@/components/questionnaire/ChoiceGroup";
import {
  CharCount,
  FieldError,
  FieldLabel,
  inputClass,
} from "@/components/questionnaire/fields";
import { TurnstileWidget } from "@/components/questionnaire/TurnstileWidget";
import type { QuestionnaireFormValues } from "@/lib/questionnaire/schema";

export function StepProject({
  register,
  watch,
  setValue,
  errors,
  onTurnstile,
}: {
  register: UseFormRegister<QuestionnaireFormValues>;
  watch: UseFormWatch<QuestionnaireFormValues>;
  setValue: UseFormSetValue<QuestionnaireFormValues>;
  errors: Record<string, string>;
  onTurnstile: (token: string) => void;
}) {
  const timeline = watch("timeline");
  const notes = watch("projectNotes") ?? "";

  return (
    <div className="grid gap-8">
      <CardSelect
        legend="When would you like your website to launch?"
        required
        options={timelineOptions}
        value={timeline}
        onChange={(value) => setValue("timeline", value as QuestionnaireFormValues["timeline"], { shouldDirty: true })}
        error={errors.timeline}
      />

      {timeline === "specific-date" ? (
        <div>
          <FieldLabel htmlFor="specificDate" required>
            Specific launch date
          </FieldLabel>
          <input
            id="specificDate"
            type="date"
            className={inputClass(Boolean(errors.specificDate))}
            {...register("specificDate")}
          />
          <FieldError id="specificDate-error" message={errors.specificDate} />
        </div>
      ) : null}

      <CardSelect
        legend="What budget range are you considering?"
        required
        options={budgetOptions}
        value={watch("budget")}
        onChange={(value) => setValue("budget", value as QuestionnaireFormValues["budget"], { shouldDirty: true })}
        error={errors.budget}
      />

      <div>
        <FieldLabel htmlFor="projectNotes" optional>
          Anything else we should know about your project?
        </FieldLabel>
        <textarea
          id="projectNotes"
          rows={7}
          maxLength={questionnaireLimits.projectNotes}
          className={`${inputClass()} min-h-44 resize-y`}
          {...register("projectNotes")}
        />
        <CharCount value={notes} max={questionnaireLimits.projectNotes} />
      </div>

      <TurnstileWidget onToken={onTurnstile} />
    </div>
  );
}
