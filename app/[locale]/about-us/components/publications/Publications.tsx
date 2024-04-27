import "./publications.scss";
import { Publication } from "./Publication";

type PublicationsProps = {
  data: any;
};

export const Publications: React.FC<PublicationsProps> = ({ data }) => {
  return (
    <div className={`publications-container`}>
      <div className="publications-header">
        <h1 className="publications-title">{data.sectionTitle}</h1>
      </div>
      <div className="publications-body">
        <Publication data={data.publications} />
      </div>
    </div>
  );
};
