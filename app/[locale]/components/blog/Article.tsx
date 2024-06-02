import "./article.scss";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { Link } from "@/../navigation";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";
import { buildSeeMoreString } from "@/common/helpers/SeeMore";

type ArticleProps = {
  data: any[];
};

export const Article: React.FC<ArticleProps> = ({ data }) => {
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
              <p className="home-page-blog-article-description" dangerouslySetInnerHTML={{ __html: buildSeeMoreString(article.description, 130) }}>
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
      })}
    </>
  );
};
