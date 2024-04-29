import { StepWrapper } from "./StepWrapper";

type ContactInformationStepProps = {
  title: string;
  updateCurrentStep: (increment: number) => void;
  nextButton: string;
  previousButton: string;
};

export const ContactInformationStep: React.FC<ContactInformationStepProps> = ({
  title,
  updateCurrentStep,
  nextButton,
  previousButton,
}) => {
  return (
    <StepWrapper
      title={title}
      updateCurrentStep={updateCurrentStep}
      nextButton={nextButton}
      previousButton={previousButton}
    >
      <h1>test</h1>
    </StepWrapper>
  );
};
