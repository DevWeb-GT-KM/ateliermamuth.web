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
        <div key={`${service.name}-service`} className="services-listing-item">
          <div className="services-listing-item-info-container">
            <h2
              className="services-listing-item-title"
              style={{ color: "blue" }}
            >
              {service.name}
            </h2>
            <p className="services-listing-item-description">
              {service.description}
            </p>
            <Link
              className="services-listing-item-link"
              key={service._id}
              href={{
                pathname: "/services/[slug]",
                params: { slug: service.slug.current },
              }}
              style={{ color: "red" }}
            >
              en savoir plus
            </Link>
          </div>

          <div className="services-listing-item-image-container">
            <Image
              width={100}
              height={100}
              alt=""
              src={service.image.asset.url}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
