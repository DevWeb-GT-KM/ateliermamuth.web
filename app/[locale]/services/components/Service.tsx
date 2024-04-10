import { SanityDocument } from "next-sanity";

type ServiceProps = {
  service: SanityDocument;
};

export const Service: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="service-single-container">
      <h1>Service: {service.name}</h1>
    </div>
  );
};
