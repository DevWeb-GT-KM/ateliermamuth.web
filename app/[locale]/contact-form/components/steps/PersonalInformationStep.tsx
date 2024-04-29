import { StepWrapper } from "./StepWrapper";

type PersonalInformationStepProps = {
  title: string;
  pronounLabel: string;
  nameLabel: string;
  updateCurrentStep: (increment: number) => void;
  nextButton: string;
};

export const PersonalInformationStep: React.FC<
  PersonalInformationStepProps
> = ({ updateCurrentStep, pronounLabel, nameLabel, title, nextButton }) => {
  return (
    <StepWrapper
      title={title}
      updateCurrentStep={updateCurrentStep}
      nextButton={nextButton}
    >
      <h1>{pronounLabel}</h1>
      <h1>{nameLabel}</h1>
    </StepWrapper>
  );
};
