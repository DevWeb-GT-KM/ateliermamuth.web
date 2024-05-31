import "./article.scss";
import { SanityDocument } from "next-sanity";

import { Link } from "@/../navigation";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";

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
      <SanityImageWrapper
        sanityImage={article.mainImage}
        imageBuilderConfig={{
          size: {
            width: 500,
            height: 500,
          },
          format: SANITY_IMAGE_FORMAT.Jpg,
          quality: 85,
        }}
      />
    </Link>
  );
};
