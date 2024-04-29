import Link from "next/link";

type ConfirmationStepProps = {
  confirmationMessage: string;
};

export const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  confirmationMessage,
}) => {
  return (
    <div className="contact-confirmation-step-container">
      <div className="contact-form-step-content">
        <h1 className="contact-form-step-title">{confirmationMessage}</h1>
      </div>

      <div className="contact-form-btn-container">
        <Link className="contact-form-back-home-link" href={"./"}>
          Retourner a l'accueil
        </Link>
      </div>
    </div>
  );
};
