import "./article.scss";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { Link } from "@/../navigation";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";

type ArticleProps = {
  data: any[];
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
    <>
      {data.map((article: any, index: number) => {
        return (
          <Link
            href={{
              pathname: "/blog/[slug]",
              params: { slug: article.slug.current },
            }}
            key={index}
            className="home-page-blog-article-container"
          >
            <div className="home-page-blog-article-description-container">
              <h1 className="home-page-blog-title">{article.title}</h1>
              <p className="home-page-blog-article-description">
                {formatDescription(article.description)}
              </p>
            </div>
            <div className="home-page-blog-article-image"></div>
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
      })}
    </>
  );
};
