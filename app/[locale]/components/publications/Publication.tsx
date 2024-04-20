import "./Publication.scss";

type PublicationProps = {
  data: any;
};

export const Publication: React.FC<PublicationProps> = ({ data }) => {
  return (
    <div className="home-page-publication-container">
      {data.map((publication: any, index: number) => {
        return (
          <p
            key={index}
            className="home-page-publication-item"
          >{`${publication.mediaName}, ${publication.publicationDate}`}</p>
        );
      })}
    </div>
  );
};
