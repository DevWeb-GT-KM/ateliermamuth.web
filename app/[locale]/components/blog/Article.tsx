import "./article.scss";

type ArticleProps = {
  data: any;
};

export const Article: React.FC<ArticleProps> = ({ data }) => {
  const MAX_CHARACTER_DISPLAYED = 100;
  const formatDescription = (description: string) => {
    if (description.length <= MAX_CHARACTER_DISPLAYED) {
      return description;
    } else {
      let subDescription = description.substring(0, MAX_CHARACTER_DISPLAYED);
      return subDescription + "... Voir plus";
    }
  };

  return (
    <div className="home-page-blog-article-container">
      <div className="home-page-blog-article-description">
        <h1 className="home-page-blog-title">{data.title}</h1>
        <p className="home-page-blog-article-description">
          {formatDescription(data.description)}
        </p>
      </div>
      <div className="home-page-blog-article-image"></div>
    </div>
  );
};
