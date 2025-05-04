import { ContactFormContext } from "@/common/contexts/ContactFormContext";
import { useContext, useEffect, useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";

type StepWrapperProps = {
  title: string;
  previousStep?: () => void;
  children: React.ReactNode;
  isLoading?: boolean;
};

export const StepWrapper: React.FC<StepWrapperProps> = ({
  title,
  previousStep,
  children,
  isLoading,
}) => {
  const contactFormContext = useContext(ContactFormContext);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      if (event.key === "Enter" && target.tagName !== "TEXTAREA") {
        event.preventDefault(); // Prevent default form submission
        if (nextButtonRef.current) {
          nextButtonRef.current.click(); // Trigger the next button click
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="contact-form-step-container">
        <p className="contact-form-step-title">{title}</p>
        {children}
      </div>
      <div className="contact-form-btn-container">
        {contactFormContext.currentStep != 0 && (
          <button
            onClick={() => previousStep && previousStep()}
            className="contact-form-navigation-btn"
          >
            {contactFormContext.textButtons.previous}
          </button>
        )}
        <button
          ref={nextButtonRef}
          type="submit"
          className="contact-form-navigation-btn"
          disabled={isLoading}
        >
          {isLoading ? (
            <ClipLoader
              loading={isLoading}
              color={"#f4f3f0"}
              size={12}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : contactFormContext.currentStep == 4 ? (
            contactFormContext.textButtons.submit
          ) : (
            contactFormContext.textButtons.next
          )}
        </button>
      </div>
    </div>
  );
};
