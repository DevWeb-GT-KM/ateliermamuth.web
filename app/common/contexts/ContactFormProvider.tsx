import React, { FunctionComponent, useState } from "react";
import { ContactForm, ContactFormContext } from "./ContactFormContext";

type ContactFormProviderProps = {
  children: React.ReactNode;
};

export const ContactFormProvider: FunctionComponent<
  ContactFormProviderProps
> = ({ children }) => {
  const initialValue = {
    pronoun: "",
    name: "",
    email: "",
    phoneNumber: "",
    projectType: "",
    budget: "",
    moreDetails: "",
  };

  const [state, setState] = useState<ContactForm>(initialValue);

  const updateState = (data: any) => {
    setState((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const providedContext = {
    state: state,
    updateState: updateState,
  };

  return (
    <ContactFormContext.Provider value={providedContext}>
      {children}
    </ContactFormContext.Provider>
  );
};
