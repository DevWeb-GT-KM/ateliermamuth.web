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
            <h3 className="publication-text">{`${publication.mediaName}, ${publication.publicationDate}`}</h3>
            <Link
              className="publication-link"
              href={publication.link}
              target="_blank"
            >
              lien
            </Link>
          </div>
        );
      })}
    </div>
  );
};
