import { QueryParams } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";

type ContactFormPageProps = {
  params: QueryParams;
};

const ContactFormPage: React.FC<ContactFormPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <div className="contact-us-page-container">
      <h1 className="contact-us-page-title">Contact form page</h1>
    </div>
  );
};

export default ContactFormPage;
