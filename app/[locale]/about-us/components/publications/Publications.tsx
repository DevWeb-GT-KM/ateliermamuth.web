import "./publications.scss";
import { Publication } from "./Publication";

type PublicationsProps = {
  data: any;
};

export const Publications: React.FC<PublicationsProps> = ({ data }) => {
  return (
    <div className={`publications-container`}>
      <div className="publications-header">
        <h2 className="publications-title">{data.sectionTitle}</h2>
      </div>
      <div className="publications-body">
        <Publication data={data.publications} />
      </div>
    </div>
  );
};
