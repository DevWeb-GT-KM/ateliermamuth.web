import { createContext } from "react";

export type ContactForm = {
  pronoun: string;
  name: string;
  email: string;
  phoneNumber: string;
  projectType: string;
  budget: string;
  moreDetails: string;
};

export interface IContactFormContext {
  updateState: (data: any) => void;
  state: ContactForm;
}

const initialContextValue = {
  state: {} as any,
  updateState: () => {},
};

export const ContactFormContext =
  createContext<IContactFormContext>(initialContextValue);
