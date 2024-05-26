import { ContactFormContext } from "@/common/contexts/ContactFormContext";
import Link from "next/link";
import { useContext } from "react";

type ConfirmationStepProps = {
  confirmationMessage: string;
};

export const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  confirmationMessage,
}) => {
  const contactFormContext = useContext(ContactFormContext);
  return (
    <div className="contact-form-confirmation-step-container">
      <div className="contact-form-step-content">
        <h1 className="contact-form-step-title">{confirmationMessage}</h1>
      </div>

      <div className="contact-form-btn-container">
        <Link className="contact-form-back-home-link" href={"./"}>
          {contactFormContext.textButtons.backHome}
        </Link>
      </div>
    </div>
  );
};
