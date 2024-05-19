import { useContext } from "react";

import { useForm, FormProvider } from "react-hook-form";
import { ContactFormContext } from "@/common/contexts/ContactFormContext";
import { StepWrapper } from "./StepWrapper";
import { FormRadioInput } from "@/common/components/inputs/FormRadioInput";

type BudgetStepProps = {
  title: string;
  budgetOptions: string[];
};

export const BudgetStep: React.FC<BudgetStepProps> = ({
  title,
  budgetOptions,
}) => {
  const contactFormContext = useContext(ContactFormContext);

  const useFormMethods = useForm<{ budget: string }>({
    defaultValues: {
      budget: contactFormContext.state.budget,
    },
    mode: "onChange",
  });

  const onSubmit = (data: { budget: string }) => {
    contactFormContext.updateState(data);
    contactFormContext.updateCurrentStep(1);
  };

  const onPreviousStep = () => {
    contactFormContext.updateState(useFormMethods.getValues());
    contactFormContext.updateCurrentStep(-1);
  };
  return (
    <FormProvider {...useFormMethods}>
      <form onSubmit={useFormMethods.handleSubmit(onSubmit)}>
        <StepWrapper title={title} previousStep={onPreviousStep}>
          <div className="contact-form-budget-step-inputs">
            <FormRadioInput
              options={budgetOptions}
              property="budget"
              required
            />
          </div>
        </StepWrapper>
      </form>
    </FormProvider>
  );
};
