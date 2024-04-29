type BudgetStepProps = {
  title: string;
  updateCurrentStep: (increment: number) => void;
};

export const BudgetStep: React.FC<BudgetStepProps> = ({
  title,
  updateCurrentStep,
}) => {
  return (
    <div className="contact-form-budget-step-container">
      <div className="contact-form-step-content">
        <h1 className="contact-form-step-title">{title}</h1>
      </div>

      <div className="contact-form-btn-container">
        <button
          onClick={() => updateCurrentStep(1)}
          className="contact-form-navigation-btn"
        >
          Suivant
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
