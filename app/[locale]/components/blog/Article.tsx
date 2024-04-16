import "./article.scss";

type ArticleProps = {
  data: any;
};

export const Article: React.FC<ArticleProps> = ({ data }) => {
  return (
    <div className="home-page-blog-article-container">
      <div className="home-page-blog-article-description">
        <h1 className="home-page-blog-title">{data.title}</h1>
        <p className="home-page-blog-article-description">{data.description}</p>
      </div>
      <div className="home-page-blog-article-image"></div>
    </div>
  );
};
