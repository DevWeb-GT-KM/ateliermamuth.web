type MoreDetailsStepProps = {
  title: string;
  updateCurrentStep: (increment: number) => void;
};

export const MoreDetailsStep: React.FC<MoreDetailsStepProps> = ({
  title,
  updateCurrentStep,
}) => {
  return (
    <div className="contact-form-more-details-step-container">
      <div className="contact-form-step-content">
        <h1 className="contact-form-step-title">{title}</h1>
      </div>

      <div className="contact-form-btn-container">
        <button
          onClick={() => updateCurrentStep(1)}
          className="contact-form-navigation-btn"
        >
          Soumettre
        </button>
        <button
          onClick={() => updateCurrentStep(-1)}
          className="contact-form-navigation-btn"
        >
          Précédent
        </button>
      </div>
    </div>
  );
};
