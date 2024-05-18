import { useContext, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const contactFormContext = useContext(ContactFormContext);
  useEffect(() => emailjs.init("Hmrqb9fckWMuBYR18"), []);

  const useFormMethods = useForm<{ moreDetails: string }>({
    defaultValues: {
      moreDetails: contactFormContext.state.moreDetails,
    },
  });

  const onSubmit = async (data: { moreDetails: string }) => {
    setIsLoading(true);
    contactFormContext.updateState(data);

    emailjs
      .send("service_9txqq6n", "template_7hdok1m", {
        pronoun: contactFormContext.state.pronoun,
        name: contactFormContext.state.name,
        email: contactFormContext.state.email,
        phoneNumber: contactFormContext.state.phoneNumber,
        projectType: contactFormContext.state.projectType,
        projectNature: contactFormContext.state.projectNature,
        budget: contactFormContext.state.budget,
        moreDetails: data.moreDetails,
      })
      .then(() => {
        setIsLoading(false);
        setIsError(false);
        contactFormContext.updateCurrentStep(1);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  const onPreviousStep = () => {
    contactFormContext.updateState(useFormMethods.getValues());
    contactFormContext.updateCurrentStep(-1);
  };

  return (
    <FormProvider {...useFormMethods}>
      <form onSubmit={useFormMethods.handleSubmit(onSubmit)}>
        <StepWrapper
          title={title}
          previousStep={onPreviousStep}
          isLoading={isLoading}
        >
          <FormTextareaInput
            property="moreDetails"
            placeholder={moreDetailsLabel}
          />
          {isError && (
            <p className="contact-form-sending-email-error">
              {contactFormContext.textErrors.submitFormError}
            </p>
          )}
        </StepWrapper>
      </form>
    </FormProvider>
  );
};
