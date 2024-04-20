import { Publication } from "./Publication";
import "./Publications.scss";

type PublicationsProps = {
  data: any[];
};

export const Publications: React.FC<PublicationsProps> = ({ data }) => {
  return (
    <div className="home-page-publications-container">
      <div className="home-page-publications-header">
        <h1 className="home-page-publications-title">
          {data[0].aboutUs.publications.sectionTitle}
        </h1>
      </div>
      <div className="home-page-publications-body">
        <Publication data={data[0].aboutUs.publications.publications} />
      </div>
    </div>
  );
};
