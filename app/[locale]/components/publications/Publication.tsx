import "./Publication.scss";

import { Link } from "@/../navigation";

type PublicationProps = {
  data: any;
};

export const Publication: React.FC<PublicationProps> = ({ data }) => {
  return (
    <div className="home-page-publication-container">
      {data.map((publication: any, index: number) => {
        return (
          <div key={index} className="home-page-publication-item">
            <h3 className="home-page-publication-text">{`${publication.mediaName}, ${publication.publicationDate}`}</h3>
            <Link
              target="_blank"
              className="home-page-publication-link"
              href={publication.link}
            >
              lien
            </Link>
          </div>
        );
      })}
    </div>
  );
};
