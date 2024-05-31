import "./contactPageContainer.scss";

import { PortableText } from "@portabletext/react";
import { ContactUs } from "./ContactUs";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";

type ContactPageContainerProps = {
  data: any;
};

export const ContactPageContainer: React.FC<ContactPageContainerProps> = ({
  data,
}) => {
  return (
    <>
      <div className="contact-page-container">
        <div className="contact-page-header">
          <h1 className="contact-page-title">{data.pageTitle}</h1>
        </div>
        <div className="contact-page-content">
          <div className="contact-page-information">
            <div className="contact-page-information-email">
              <h1 className="contact-page-email-label">{data.addressLabel}</h1>
              <a
                href={`mailto:${data.address}`}
                className="contact-page-email-value"
              >
                {data.address}
              </a>
            </div>
            <div className="contact-page-information-telephone">
              <h1 className="contact-page-telephone-label">
                {data.telephoneLabel}
              </h1>
              <h1 className="contact-page-telephone-value">{data.telephone}</h1>
            </div>
            <div className="contact-page-faq-rich-text">
              <PortableText value={data.faq} />
            </div>
          </div>
          <SanityImageWrapper
            sanityImage={data.img}
            imageBuilderConfig={{
              quality: 75,
              format: SANITY_IMAGE_FORMAT.Jpg,
              size: {
                width: 1080,
                height: 1920,
              },
            }}
          />
        </div>
      </div>
      <ContactUs />
    </>
  );
};
