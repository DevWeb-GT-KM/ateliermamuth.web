import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { ContactFormContext } from "@/common/contexts/ContactFormContext";
import { StepWrapper } from "./StepWrapper";
import { FormTextareaInput } from "@/common/components/inputs/FormTextareaInput";

type DeadlineAvailabilityStepProps = {
  title: string;
  deadlineLabel: string;
  availabilityLabel: string;
};

export const DeadlineAvailabilityStep: React.FC<
  DeadlineAvailabilityStepProps
> = ({ title, deadlineLabel, availabilityLabel }) => {
  const contactFormContext = useContext(ContactFormContext);

  const useFormMethods = useForm<{
    deadline: string;
    availability: string;
  }>({
    defaultValues: {
      deadline: contactFormContext.state.deadline,
      availability: contactFormContext.state.availability,
    },
  });

  const onSubmit = (data: { deadline: string; availability: string }) => {
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
          <div className="contact-form-deadline-availability-inputs">
            <FormTextareaInput property="deadline" placeholder={deadlineLabel} />
            <FormTextareaInput
              property="availability"
              placeholder={availabilityLabel}
            />
          </div>
        </StepWrapper>
      </form>
    </FormProvider>
  );
};
