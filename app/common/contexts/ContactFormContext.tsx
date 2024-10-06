import { createContext } from "react";

export type ContactForm = {
  pronoun: string;
  name: string;
  email: string;
  projectAddress: string;
  phoneNumber: string;
  projectType: string;
  projectNature: string;
  budget: string;
  moreDetails: string;
};

export type TextButtons = {
  previous: string;
  next: string;
  submit: string;
  backHome: string;
};

export type TextErrors = {
  emailInvalid: string;
  phoneNumberInvalid: string;
  submitFormError: string;
  required: string;
};

export interface IContactFormContext {
  currentStep: number;
  updateCurrentStep: (increment: number) => void;
  updateState: (data: any) => void;
  updateTextErrors: (data: TextErrors) => void;
  updateTextButtons: (data: TextButtons) => void;
  state: ContactForm;
  textButtons: TextButtons;
  textErrors: TextErrors;
}

const initialContextValue = {
  state: {} as ContactForm,
  currentStep: 0,
  updateCurrentStep: () => {},
  updateState: () => {},
  updateTextErrors: () => {},
  updateTextButtons: () => {},
  textButtons: {} as TextButtons,
  textErrors: {} as TextErrors,
};

export const ContactFormContext =
  createContext<IContactFormContext>(initialContextValue);
