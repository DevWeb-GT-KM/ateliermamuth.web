import { ContactUs } from "./ContactUs";
import "./contactPageContainer.scss";

type ContactPageContainerProps = {
  data: any;
};

export const ContactPageContainer: React.FC<ContactPageContainerProps> = ({
  data,
}) => {
  return (
    <>
      <div className="contact-page-container">
        <h1 className="contact-page-title">{data.pageTitle}</h1>
        <div className="contact-page-content">
          <div className="contact-page-information">
            <div className="contact-page-information-email">
              <h1 className="contact-page-email-label">{data.addressLabel}</h1>
              <h1 className="contact-page-email-value">{data.address}</h1>
            </div>
            <div className="contact-page-information-telephone">
              <h1 className="contact-page-telephone-label">
                {data.telephoneLabel}
              </h1>
              <h1 className="contact-page-telephone-value">{data.telephone}</h1>
            </div>
            <h1 className="contact-page-faq">{data.faq}</h1>
          </div>
          <div className="contact-page-image">
            <div className="image-test"></div>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};
