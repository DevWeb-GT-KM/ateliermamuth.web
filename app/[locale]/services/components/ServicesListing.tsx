import { SanityDocument } from "next-sanity";

import { Link } from "@/../navigation";

type ServiceListingProps = {
  services: SanityDocument[];
};

export const ServicesListing: React.FC<ServiceListingProps> = ({
  services,
}) => {
  return (
    <div>
      {services.length > 0 ? (
        services.map((service) => (
          <Link
            style={{ display: "block", margin: "20px" }}
            key={service._id}
            href={{
              pathname: "/services/[slug]",
              params: { slug: service.slug.current },
            }}
          >
            {service.name}
          </Link>
        ))
      ) : (
        <p className="service-listing-none">No service found</p>
      )}
    </div>
  );
};
