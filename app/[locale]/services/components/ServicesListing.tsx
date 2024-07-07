"use client";
import "./ServicesListing.scss";

import Image from "next/image";

import { Link } from "@/../navigation";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";
import { motion } from "framer-motion";

export type ServicesListingProps = {
  services?: any[];
};

export const ServicesListing: React.FC<ServicesListingProps> = ({
  services,
}) => {
  return (
    <div className="services-listing-container">
      {services?.map((service) => (
        <div key={`${service?.name}-service`} className="services-listing-item">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="services-listing-item-title"
          >
            {service?.name}
          </motion.h2>
          <div className="services-listing-item-info-container">
            <motion.div
              initial={{ opacity: 0, paddingTop: 40 }}
              whileInView={{ paddingTop: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              className="services-listing-item-description-container"
            >
              <div>
                <p className="services-listing-item-description">
                  {service?.description}
                </p>
                <Link
                  className="services-listing-item-link"
                  key={service?._id}
                  href={{
                    pathname: "/services/[slug]",
                    params: { slug: service?.slug?.current },
                  }}
                >
                  en savoir plus
                </Link>
              </div>

              <div>
                {service?.projectTypes?.map((type: string, index: number) => (
                  <p
                    key={`project-type-${index}`}
                    className="services-listing-item-project-type"
                  >
                    {type}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, marginRight: "-1vw" }}
              whileInView={{ opacity: 1, marginRight: "0vw" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="services-listing-item-image-container"
            >
              <SanityImageWrapper
                sanityImage={service?.img}
                imageBuilderConfig={{
                  size: {
                    width: 1920,
                    height: 1080,
                  },
                  format: SANITY_IMAGE_FORMAT.Jpg,
                  quality: 85,
                }}
              />
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};
