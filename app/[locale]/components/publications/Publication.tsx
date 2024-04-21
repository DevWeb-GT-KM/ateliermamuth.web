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
          <div className="home-page-publication-item">
            <p
              key={index}
              className="home-page-publication-text"
            >{`${publication.mediaName}, ${publication.publicationDate}`}</p>
            <Link className="home-page-publication-link" href={"/"}>
              lien
            </Link>
          </div>
        );
      })}
    </div>
  );
};
