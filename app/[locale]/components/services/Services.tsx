import "./services.scss";
import { Service } from "./Service";

type ServicesProps = {
  data: any[];
};

export const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <section className="home-page-services-container">
      <div className="home-page-services-header">
        <h2 className="home-page-services-title">
          {data[0].services.pageTitle}
        </h2>
      </div>
      {data[0].services.services.map((service: any, index: number) => {
        {
          return <Service key={index} data={service} />;
        }
      })}
    </section>
  );
};
