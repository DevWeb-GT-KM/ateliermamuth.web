import { SanityDocument } from "next-sanity";

type ArticleProps = {
  article: SanityDocument;
};

export const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="article-single-container">
      <h1>Article: {article.title}</h1>
    </div>
  );
};
