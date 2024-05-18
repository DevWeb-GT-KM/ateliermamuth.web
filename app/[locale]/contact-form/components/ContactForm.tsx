import "./contactFormContainer.scss";

import { useContext, useEffect, useMemo, useState } from "react";
import { ContactInformationStep } from "./steps/ContactInformationStep";
import { PersonalInformationStep } from "./steps/PersonalInformationStep";
import { ProjectTypeStep } from "./steps/ProjectTypeStep";
import { BudgetStep } from "./steps/BudgetStep";
import { MoreDetailsStep } from "./steps/MoreDetailsStep";
import { ConfirmationStep } from "./steps/ConfirmationStep";
import { ContactFormContext } from "@/common/contexts/ContactFormContext";

type ContactFormProps = {
  data: any;
};

export const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
  const contactFormContext = useContext(ContactFormContext);

  useEffect(() => {
    contactFormContext.updateTextButtons({
      previous: data.previousButton,
      next: data.nextButton,
      submit: data.submitButton,
      backHome: data.backHomeButton,
    });

    contactFormContext.updateTextErrors({
      emailInvalid: data.errorEmail,
      phoneNumberInvalid: data.errorPhoneNumber,
      submitFormError: data.errorSubmitForm,
      required: data.errorRequired,
    });
  }, []);

  const steps = useMemo(
    () => [
      <PersonalInformationStep
        title={data.personalInformationTitle}
        pronounLabel={data.pronounLabel}
        nameLabel={data.nameLabel}
      />,
      <ContactInformationStep
        title={data.contactInformationTitle}
        emailLabel={data.emailLabel}
        phoneNumberLabel={data.phoneNumberLabel}
      />,
      <ProjectTypeStep
        title={data.projectTypeTitle}
        projectNatureSubtitle={data.projectNatureSubtitle}
        projectNatureOptions={data.projectNatures}
        projectTypeSubtitle={data.projectTypeSubtitle}
        projectTypeOptions={data.projectTypes}
      />,
      <BudgetStep title={data.budgetTitle} budgetOptions={data.budgetRanges} />,
      <MoreDetailsStep
        moreDetailsLabel={data.moreDetailsLabel}
        title={data.moreDetailsTitle}
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
    <div className="contact-form-steps-container">
      {steps[contactFormContext.currentStep]}
    </div>
  );
};
