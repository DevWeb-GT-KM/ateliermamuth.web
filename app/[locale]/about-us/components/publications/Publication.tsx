import "./publication.scss";

import { Link } from "@/../navigation";

type PublicationProps = {
  data: any;
};

export const Publication: React.FC<PublicationProps> = ({ data }) => {
  return (
    <div className="publication-container">
      {data.map((publication: any, index: number) => {
        return (
          <div key={index} className="publication-item">
            <p className="publication-text">{`${publication.mediaName}, ${publication.publicationDate}`}</p>
            <Link className="publication-link" href={publication.link}>
              lien
            </Link>
          </div>
        );
      })}
    </div>
  );
};
