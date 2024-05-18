"use client";

import { ContactFormProvider } from "@/common/contexts/ContactFormProvider";
import { ContactForm } from "./ContactForm";
import "./contactFormContainer.scss";

type ContactFormContainerProps = {
  data: any;
};

export const ContactFormContainer: React.FC<ContactFormContainerProps> = ({
  data,
}) => {
  return (
    <div className="contact-form-container">
      <ContactFormProvider>
        <ContactForm data={data} />
      </ContactFormProvider>
    </div>
  );
};
