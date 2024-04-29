"use client";
import "./contactFormContainer.scss";

import { useMemo, useState } from "react";
import { ContactInformationStep } from "./steps/ContactInformationStep";
import { PersonalInformationStep } from "./steps/PersonalInformationStep";
import { ProjectTypeStep } from "./steps/ProjectTypeStep";
import { BudgetStep } from "./steps/BudgetStep";
import { MoreDetailsStep } from "./steps/MoreDetailsStep";
import { ConfirmationStep } from "./steps/ConfirmationStep";
import { ContactFormProvider } from "@/common/contexts/ContactFormProvider";

type ContactFormProps = {
  data: any;
};

export const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const updateCurrentStep = (increment: number) =>
    setCurrentStep((prev) => prev + increment);

  const steps = useMemo(
    () => [
      <PersonalInformationStep
        updateCurrentStep={updateCurrentStep}
        title={data.nameLabel}
        pronounLabel={data.pronoun}
        nameLabel={data.name}
        nextButton={data.nextButton}
      />,
      <ContactInformationStep
        updateCurrentStep={updateCurrentStep}
        title={data.contactLabel}
      />,
      <ProjectTypeStep
        updateCurrentStep={updateCurrentStep}
        title={data.projectTypeLabel}
      />,
      <BudgetStep
        updateCurrentStep={updateCurrentStep}
        title={data.budgetRangeLabel}
      />,
      <MoreDetailsStep
        updateCurrentStep={updateCurrentStep}
        title={data.moreDetailsLabel}
      />,
      <ConfirmationStep confirmationMessage={data.confirmationMessage} />,
    ],
    [
      PersonalInformationStep,
      ContactInformationStep,
      ProjectTypeStep,
      BudgetStep,
      MoreDetailsStep,
      ConfirmationStep,
    ]
  );
  return (
    <ContactFormProvider>
      <div className="contact-form-steps-container">{steps[currentStep]}</div>
    </ContactFormProvider>
  );
};
