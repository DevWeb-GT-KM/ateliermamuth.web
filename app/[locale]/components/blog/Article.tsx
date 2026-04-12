import "./article.scss";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { Link } from "@/../navigation";
import { IMAGE_DEFAULT_QUALITY, IMAGE_DEFAULT_FORMAT, IMAGE_SIZES } from "@/common/components/images/sanityImageBuilderConfig";
import { buildSeeMoreString } from "@/common/helpers/TextHelper";

type ArticleProps = {
  data: any;
};

export const Article: React.FC<ArticleProps> = ({ data }) => {
  return (
    <Link
      href={{
        pathname: "/blog/[slug]",
        params: { slug: data.slug.current },
      }}
      className="home-page-blog-article-container"
    >
      <div className="home-page-blog-article-description-container">
        <h3 className="home-page-blog-title">{data.title}</h3>
        <p
          className="home-page-blog-article-description"
          dangerouslySetInnerHTML={{
            __html: buildSeeMoreString(data.description, 130),
          }}
        ></p>
      </div>
      <SanityImageWrapper
        sanityImage={data.mainImage}
        imageBuilderConfig={{
          size: IMAGE_SIZES.SQUARE_THUMBNAIL,
          format: IMAGE_DEFAULT_FORMAT,
          quality: IMAGE_DEFAULT_QUALITY,
        }}
      />
    </Link>
  );
};
