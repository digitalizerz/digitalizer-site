import type { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import {
  featureOptions,
  logoOptions,
  questionnaireCopy,
  questionnaireLimits,
} from "@/data/websiteQuestionnaire";
import { CardSelect, ChipSelect } from "@/components/questionnaire/ChoiceGroup";
import { FieldHint, FieldLabel, inputClass } from "@/components/questionnaire/fields";
import type { QuestionnaireFormValues } from "@/lib/questionnaire/schema";

export function StepWebsite({
  register,
  watch,
  setValue,
  errors,
}: {
  register: UseFormRegister<QuestionnaireFormValues>;
  watch: UseFormWatch<QuestionnaireFormValues>;
  setValue: UseFormSetValue<QuestionnaireFormValues>;
  errors: Record<string, string>;
}) {
  return (
    <div className="grid gap-8">
      <ChipSelect
        legend="What features would you like to include?"
        options={featureOptions}
        value={watch("features") ?? []}
        onChange={(next) => setValue("features", next)}
        error={errors.features}
      />

      <div>
        <FieldLabel htmlFor="otherFunctionality" optional>
          Is there any other functionality you’d like to include?
        </FieldLabel>
        <FieldHint>{questionnaireCopy.functionalityHint}</FieldHint>
        <textarea
          id="otherFunctionality"
          rows={6}
          maxLength={questionnaireLimits.longText}
          className={`${inputClass()} min-h-40 resize-y`}
          {...register("otherFunctionality")}
        />
      </div>

      <CardSelect
        legend="Do you already have a logo?"
        required
        options={logoOptions}
        value={watch("logo")}
        onChange={(value) => setValue("logo", value as QuestionnaireFormValues["logo"], { shouldDirty: true })}
        error={errors.logo}
      />
    </div>
  );
}
