import React, { FunctionComponent, useState } from "react";
import {
  ContactForm,
  ContactFormContext,
  TextButtons,
  TextErrors,
} from "./ContactFormContext";

type ContactFormContextProviderProps = {
  children: React.ReactNode;
};

export const ContactFormContextProvider: FunctionComponent<
  ContactFormContextProviderProps
> = ({ children }) => {
  const initialStateValues = {
    pronoun: "",
    name: "",
    email: "",
    projectAddress: "",
    phoneNumber: "",
    projectType: "",
    projectNature: "",
    budget: "",
    deadline: "",
    availability: "",
    moreDetails: "",
    referralSource: "",
  };

  const initialTextButtonsValues = {
    previous: "",
    next: "",
    submit: "",
    backHome: "",
  };

  const initialTextErrorsValues = {
    emailInvalid: "",
    phoneNumberInvalid: "",
    submitFormError: "",
    required: "",
  };

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [state, setState] = useState<ContactForm>(initialStateValues);
  const [textButtons, setTextButtons] = useState<TextButtons>(
    initialTextButtonsValues
  );
  const [textErrors, setTextErrors] = useState<TextErrors>(
    initialTextErrorsValues
  );

  const updateCurrentStep = (increment: number) =>
    setCurrentStep((prev) => prev + increment);

  const updateState = (data: any) => {
    setState((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const updateTextButtons = (data: TextButtons) => {
    setTextButtons((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const updateTextErrors = (data: TextErrors) => {
    setTextErrors((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const providedContext = {
    currentStep: currentStep,
    state: state,
    textErrors: textErrors,
    textButtons: textButtons,
    updateCurrentStep: updateCurrentStep,
    updateState: updateState,
    updateTextErrors: updateTextErrors,
    updateTextButtons: updateTextButtons,
  };

  return (
    <ContactFormContext.Provider value={providedContext}>
      {children}
    </ContactFormContext.Provider>
  );
};
