type StepWrapperProps = {
  title: string;
  updateCurrentStep: (increment: number) => void;
  children: React.ReactNode;
  previousButton?: string;
  nextButton?: string;
  submitButton?: string;
  backHomeButton?: string;
};

export const StepWrapper: React.FC<StepWrapperProps> = ({
  title,
  updateCurrentStep,
  children,
  previousButton,
  nextButton,
  submitButton,
  backHomeButton,
}) => {
  return (
    <div>
      <div className="contact-form-step-content">
        <h1 className="contact-form-step-title">{title}</h1>
        {children}
      </div>

      <div className="contact-form-btn-container">
        {previousButton && (
          <button
            onClick={() => updateCurrentStep(1)}
            className="contact-form-navigation-btn"
          >
            {previousButton}
          </button>
        )}
        {(nextButton || submitButton) && (
          <button
            onClick={() => updateCurrentStep(-1)}
            className="contact-form-navigation-btn"
          >
            {nextButton ?? submitButton}
          </button>
        )}
        {backHomeButton && (
          <button
            onClick={() => updateCurrentStep(-1)}
            className="contact-form-navigation-btn"
          >
            {backHomeButton}
          </button>
        )}
      </div>
    </div>
  );
};
