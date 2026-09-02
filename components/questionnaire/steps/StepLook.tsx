import { Plus } from "lucide-react";
import type { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import {
  questionnaireCopy,
  questionnaireLimits,
  styleOptions,
} from "@/data/websiteQuestionnaire";
import { ChipSelect } from "@/components/questionnaire/ChoiceGroup";
import { FieldHint, FieldLabel, inputClass } from "@/components/questionnaire/fields";
import type { QuestionnaireFormValues } from "@/lib/questionnaire/schema";

export function StepLook({
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
  const styles = watch("styles") ?? [];
  const inspiration = watch("inspiration") ?? [{ url: "", likes: "" }];
  const showOther = styles.includes("other");

  const addInspiration = () => {
    if (inspiration.length >= questionnaireLimits.inspirationMax) return;
    setValue("inspiration", [...inspiration, { url: "", likes: "" }]);
  };

  return (
    <div className="grid gap-8">
      <div>
        <FieldLabel htmlFor="colors">
          Are there any colors you’d specifically like us to use?
        </FieldLabel>
        <FieldHint>{questionnaireCopy.colorsHint}</FieldHint>
        <input
          id="colors"
          placeholder="e.g. forest green, warm cream, deep navy"
          className={inputClass()}
          {...register("colors")}
        />
      </div>

      <ChipSelect
        legend="Which words best describe the look and feel you’re after?"
        options={styleOptions}
        value={styles}
        onChange={(next) => setValue("styles", next)}
        error={errors.styles}
      />

      {showOther ? (
        <div>
          <FieldLabel htmlFor="otherStyle" required>
            Describe the style you’re looking for.
          </FieldLabel>
          <input
            id="otherStyle"
            className={inputClass(Boolean(errors.otherStyle))}
            {...register("otherStyle")}
          />
          {errors.otherStyle ? (
            <p className="mt-2 text-sm text-ink/60">{errors.otherStyle}</p>
          ) : null}
        </div>
      ) : null}

      <div>
        <FieldLabel htmlFor="visualNotes" optional>
          Anything else you’d like us to know about the visual direction?
        </FieldLabel>
        <textarea
          id="visualNotes"
          rows={5}
          maxLength={questionnaireLimits.visualNotes}
          className={`${inputClass()} min-h-32 resize-y`}
          {...register("visualNotes")}
        />
      </div>

      <div>
        <FieldLabel>Are there websites you like?</FieldLabel>
        <FieldHint>{questionnaireCopy.inspirationHint}</FieldHint>
        <div className="mt-4 grid gap-6">
          {inspiration.map((_, index) => (
            <div key={index} className="grid gap-4 rounded-lg border border-ink/10 p-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FieldLabel htmlFor={`inspiration-${index}-url`}>Website URL</FieldLabel>
                <input
                  id={`inspiration-${index}-url`}
                  inputMode="url"
                  placeholder="e.g. example.com"
                  className={inputClass(Boolean(errors[`inspiration.${index}.url`]))}
                  {...register(`inspiration.${index}.url`)}
                />
                {errors[`inspiration.${index}.url`] ? (
                  <p className="mt-2 text-sm text-ink/60">
                    {errors[`inspiration.${index}.url`]}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <FieldLabel htmlFor={`inspiration-${index}-likes`}>
                  What do you like about it?
                </FieldLabel>
                <textarea
                  id={`inspiration-${index}-likes`}
                  rows={3}
                  className={`${inputClass()} min-h-24 resize-y`}
                  {...register(`inspiration.${index}.likes`)}
                />
              </div>
            </div>
          ))}
        </div>
        {inspiration.length < questionnaireLimits.inspirationMax ? (
          <button
            type="button"
            onClick={addInspiration}
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
          >
            <Plus className="size-4" aria-hidden />
            Add another website
          </button>
        ) : null}
      </div>
    </div>
  );
}
