"use client";

import "./contactPageContainer.scss";

import { PortableText } from "@portabletext/react";
import { ContactUs } from "./ContactUs";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { IMAGE_DEFAULT_QUALITY, IMAGE_DEFAULT_FORMAT, IMAGE_SIZES } from "@/common/components/images/sanityImageBuilderConfig";
import { BottomToTopSlider } from "@/common/components/animations/BottomToTopSlider";
import { motion } from "framer-motion";

type ContactPageContainerProps = {
  data: any;
};

export const ContactPageContainer: React.FC<ContactPageContainerProps> = ({
  data,
}) => {
  return (
    <>
      <section className="contact-page-container">
        <div className="contact-page-header">
          <h1 className="contact-page-title">{data.pageTitle}</h1>
        </div>
        <div className="contact-page-content">
          <BottomToTopSlider trigger={"some"}>
            <div className="contact-page-information">
              <div className="contact-page-information-email">
                <p className="contact-page-email-label">{data.addressLabel}</p>
                <a
                  href={`mailto:${data.address}`}
                  className="contact-page-email-value"
                >
                  {data.address}
                </a>
              </div>
              <div className="contact-page-information-telephone">
                <p className="contact-page-telephone-label">
                  {data.telephoneLabel}
                </p>
                <p className="contact-page-telephone-value">{data.telephone}</p>
              </div>
              <div className="contact-page-faq-rich-text">
                <PortableText value={data.faq} />
              </div>
            </div>
          </BottomToTopSlider>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.5,
            }}
            className="image"
          >
            <SanityImageWrapper
              sanityImage={data.img}
              imageBuilderConfig={{
                quality: IMAGE_DEFAULT_QUALITY,
                format: IMAGE_DEFAULT_FORMAT,
                size: { width: 1400, height: 1800 },
              }}
            />
          </motion.div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};
