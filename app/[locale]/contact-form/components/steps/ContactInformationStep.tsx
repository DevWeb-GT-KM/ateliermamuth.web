import { useContext } from "react";
import { StepWrapper } from "./StepWrapper";
import { useForm, FormProvider } from "react-hook-form";
import { ContactFormContext } from "@/common/contexts/ContactFormContext";
import { FormTextInput } from "@/common/components/inputs/FormTextInput";
import {
  newEmailValidation,
  newPhoneNumberValidation,
} from "@/common/helpers/FormInputValidationHelper";

type ContactInformationStepProps = {
  title: string;
  emailLabel: string;
  phoneNumberLabel: string;
};

export const ContactInformationStep: React.FC<ContactInformationStepProps> = ({
  title,
  emailLabel,
  phoneNumberLabel,
}) => {
  const contactFormContext = useContext(ContactFormContext);

  const useFormMethods = useForm<{ email: string; phoneNumber: string }>({
    defaultValues: {
      email: contactFormContext.state.email,
      phoneNumber: contactFormContext.state.phoneNumber,
    },
  });

  const onSubmit = (data: { email: string; phoneNumber: string }) => {
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
          <div className="contact-form-contact-information-step-inputs">
            <FormTextInput
              property="email"
              placeholder={emailLabel}
              validations={newEmailValidation(
                contactFormContext.textErrors.emailInvalid
              )}
              required
              requiredMessage={contactFormContext.textErrors.required}
            />
            <FormTextInput
              property="phoneNumber"
              placeholder={phoneNumberLabel}
              validations={newPhoneNumberValidation(
                contactFormContext.textErrors.phoneNumberInvalid
              )}
              required
              requiredMessage={contactFormContext.textErrors.required}
            />
          </div>
        </StepWrapper>
      </form>
    </FormProvider>
  );
};
