import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { ContactFormContext } from "@/common/contexts/ContactFormContext";
import { StepWrapper } from "./StepWrapper";
import { FormTextareaInput } from "@/common/components/inputs/FormTextareaInput";

type MoreDetailsStepProps = {
  title: string;
  moreDetailsLabel: string;
};

export const MoreDetailsStep: React.FC<MoreDetailsStepProps> = ({
  title,
  moreDetailsLabel,
}) => {
  const contactFormContext = useContext(ContactFormContext);

  const useFormMethods = useForm<{ moreDetails: string }>({
    defaultValues: {
      moreDetails: contactFormContext.state.moreDetails,
    },
  });

  const onSubmit = (data: { moreDetails: string }) => {
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
          <div className="contact-form-more-details-input">
            <FormTextareaInput
              property="moreDetails"
              placeholder={moreDetailsLabel}
              required
              requiredMessage={contactFormContext.textErrors.required}
            />
          </div>
        </StepWrapper>
      </form>
    </FormProvider>
  );
};
