import { SanityDocument } from "next-sanity";

import { Link } from "@/../navigation";

type ArticleListingProps = {
  articles: SanityDocument[];
};

export const ArticleListing: React.FC<ArticleListingProps> = ({ articles }) => {
  return (
    <div>
      {articles.length > 0 ? (
        articles.map((article) => (
          <Link
            style={{ display: "block", margin: "20px" }}
            key={article._id}
            href={{
              pathname: "/blog/[slug]",
              params: { slug: article.slug.current },
            }}
          >
            {article.title}
          </Link>
        ))
      ) : (
        <p className="article-listing-none">No article found</p>
      )}
    </div>
  );
};
