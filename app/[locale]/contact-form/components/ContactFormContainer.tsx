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
      <ContactForm data={data} />
    </div>
  );
};
