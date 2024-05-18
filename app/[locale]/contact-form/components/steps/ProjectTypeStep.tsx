import { useContext } from "react";
import { StepWrapper } from "./StepWrapper";
import { useForm, FormProvider } from "react-hook-form";
import { ContactFormContext } from "@/common/contexts/ContactFormContext";
import { FormRadioInput } from "@/common/components/inputs/FormRadioInput";

type ProjectTypeStepProps = {
  title: string;
  projectTypeSubtitle: string;
  projectNatureSubtitle: string;
  projectTypeOptions: string[];
  projectNatureOptions: string[];
};

export const ProjectTypeStep: React.FC<ProjectTypeStepProps> = ({
  title,
  projectTypeSubtitle,
  projectNatureSubtitle,
  projectTypeOptions,
  projectNatureOptions,
}) => {
  const contactFormContext = useContext(ContactFormContext);

  const useFormMethods = useForm<{
    projectType: string;
    projectNature: string;
  }>({
    defaultValues: {
      projectType: contactFormContext.state.projectType,
      projectNature: contactFormContext.state.projectNature,
    },
    mode: "onChange",
  });

  const onSubmit = (data: { projectType: string }) => {
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
          <div className="contact-form-project-type-step-inputs">
            <FormRadioInput
              options={projectNatureOptions}
              property="projectNature"
              radioGroupTitle={projectNatureSubtitle}
              required
            />
            <FormRadioInput
              options={projectTypeOptions}
              property="projectType"
              radioGroupTitle={projectTypeSubtitle}
              required
            />
          </div>
        </StepWrapper>
      </form>
    </FormProvider>
  );
};
