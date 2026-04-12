import { useContext, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, FormProvider } from "react-hook-form";

import { ContactFormContext } from "@/common/contexts/ContactFormContext";
import { StepWrapper } from "./StepWrapper";
import { FormRadioInput } from "@/common/components/inputs/FormRadioInput";
import { FormTextInput } from "@/common/components/inputs/FormTextInput";

type ReferralStepProps = {
  title: string;
  referralOptions: string[];
  referralOtherLabel: string;
};

export const ReferralStep: React.FC<ReferralStepProps> = ({
  title,
  referralOptions,
  referralOtherLabel,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [showRequiredError, setShowRequiredError] = useState<boolean>(false);
  const contactFormContext = useContext(ContactFormContext);

  useEffect(() => emailjs.init("Hmrqb9fckWMuBYR18"), []);

  const useFormMethods = useForm<{
    referralSource: string;
    referralOther: string;
  }>({
    defaultValues: {
      referralSource: contactFormContext.state.referralSource,
      referralOther: contactFormContext.state.referralOther,
    },
    mode: "onChange",
  });

  // Clear required error as soon as the user interacts
  // Clear text input when a radio is selected
  useEffect(() => {
    const subscription = useFormMethods.watch((values, { name }) => {
      setShowRequiredError(false);
      if (name === "referralSource" && values.referralSource) {
        useFormMethods.setValue("referralOther", "");
      }
    });
    return () => subscription.unsubscribe();
  }, [useFormMethods]);

  const onSubmit = async (data: {
    referralSource: string;
    referralOther: string;
  }) => {
    if (!data.referralSource && !data.referralOther?.trim()) {
      setShowRequiredError(true);
      return;
    }

    setIsLoading(true);
    const referralSource = data.referralOther?.trim() || data.referralSource;
    contactFormContext.updateState({ referralSource });

    emailjs
      .send("service_9txqq6n", "template_7hdok1m", {
        pronoun: contactFormContext.state.pronoun,
        name: contactFormContext.state.name,
        email: contactFormContext.state.email,
        projectAddress: contactFormContext.state.projectAddress,
        phoneNumber: contactFormContext.state.phoneNumber,
        projectType: contactFormContext.state.projectType,
        projectNature: contactFormContext.state.projectNature,
        budget: contactFormContext.state.budget,
        deadline: contactFormContext.state.deadline,
        availability: contactFormContext.state.availability,
        moreDetails: contactFormContext.state.moreDetails,
        referralSource,
      })
      .then(() => {
        setIsLoading(false);
        setIsEmailError(false);
        contactFormContext.updateCurrentStep(1);
      })
      .catch(() => {
        setIsLoading(false);
        setIsEmailError(true);
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
          <div className="contact-form-budget-step-inputs">
            <FormRadioInput
              options={referralOptions}
              property="referralSource"
            />
          </div>
          <div
            className="contact-form-referral-other-input"
            onFocus={() => useFormMethods.setValue("referralSource", "")}
          >
            <FormTextInput
              property="referralOther"
              placeholder={referralOtherLabel}
            />
          </div>
          {showRequiredError && (
            <p className="contact-form-referral-required-error">
              {contactFormContext.textErrors.required}
            </p>
          )}
          {isEmailError && (
            <p className="contact-form-sending-email-error">
              {contactFormContext.textErrors.submitFormError}
            </p>
          )}
        </StepWrapper>
      </form>
    </FormProvider>
  );
};
