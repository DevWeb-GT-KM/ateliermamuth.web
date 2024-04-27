import "./article.scss";
import { SanityDocument } from "next-sanity";

import { Link } from "@/../navigation";

type ArticleProps = {
  article: SanityDocument;
};

export const Article: React.FC<ArticleProps> = ({ article }) => {
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
    <Link
      className="blog-page-article-container"
      href={{
        pathname: "/blog/[slug]",
        params: { slug: article.slug.current },
      }}
    >
      <div className="blog-page-article-description-container">
        <h1 className="blog-page-article-title">{article.title}</h1>
        <p className="blog-page-article-description">
          {formatDescription(article.description)}
        </p>
      </div>
      <div className="blog-page-article-image"></div>
    </Link>
  );
};
