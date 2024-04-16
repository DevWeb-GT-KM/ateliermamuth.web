import { QueryParams } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";

type ContactPageProps = {
  params: QueryParams;
};

const ContactPage: React.FC<ContactPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <div className="contact-us-page-container">
      <h1 className="contact-us-page-title">Contact page</h1>
    </div>
  );
};

export default ContactPage;
