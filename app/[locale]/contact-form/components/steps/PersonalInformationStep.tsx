import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { StepWrapper } from "./StepWrapper";
import { ContactFormContext } from "@/common/contexts/ContactFormContext";
import { FormTextInput } from "@/common/components/inputs/FormTextInput";

type PersonalInformationStepProps = {
  title: string;
  pronounLabel: string;
  nameLabel: string;
};

export const PersonalInformationStep: React.FC<
  PersonalInformationStepProps
> = ({ pronounLabel, nameLabel, title }) => {
  const contactFormContext = useContext(ContactFormContext);

  const useFormMethods = useForm<{ pronoun: string; name: string }>({
    defaultValues: {
      pronoun: contactFormContext.state.pronoun,
      name: contactFormContext.state.name,
    },
  });

  const onSubmit = (data: { pronoun: string; name: string }) => {
    contactFormContext.updateState(data);
    contactFormContext.updateCurrentStep(1);
  };

  return (
    <FormProvider {...useFormMethods}>
      <form onSubmit={useFormMethods.handleSubmit(onSubmit)}>
        <StepWrapper title={title}>
          <div className="contact-form-personal-information-step-inputs">
            <FormTextInput property="pronoun" placeholder={pronounLabel} />
            <FormTextInput
              property="name"
              placeholder={nameLabel}
              required
              requiredMessage={contactFormContext.textErrors.required}
            />
          </div>
        </StepWrapper>
      </form>
    </FormProvider>
  );
};
