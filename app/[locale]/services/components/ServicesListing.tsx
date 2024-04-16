import "./ServicesListing.scss";

import Image from "next/image";

import { Link } from "@/../navigation";

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
              <Image
                className="services-listing-item-image"
                src={service?.image?.asset?.url}
                alt=""
                fill
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
