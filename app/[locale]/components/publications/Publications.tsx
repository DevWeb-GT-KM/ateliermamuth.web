import { Publication } from "./Publication";
import "./publications.scss";

type PublicationsProps = {
  data: any[];
};

export const Publications: React.FC<PublicationsProps> = ({ data }) => {
  return (
    <section className="home-page-publications-container">
      <div className="home-page-publications-header">
        <h2 className="home-page-publications-title">
          {data[0].aboutUs.publications.sectionTitle}
        </h2>
      </div>
      <div className="home-page-publications-body">
        <Publication data={data[0].aboutUs.publications.publications} />
      </div>
    </section>
  );
};
