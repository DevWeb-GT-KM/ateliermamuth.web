import "./ServicesListing.scss";

import Image from "next/image";

import { Link } from "@/../navigation";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";

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
          <h2 className="services-listing-item-title">{service?.name}</h2>
          <div className="services-listing-item-info-container">
            <div className="services-listing-item-description-container">
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
            </div>

            <div className="services-listing-item-image-container">
              {/* <Image
                className="services-listing-item-image"
                src={service?.image?.asset?.url}
                alt=""
                fill
              /> */}
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
