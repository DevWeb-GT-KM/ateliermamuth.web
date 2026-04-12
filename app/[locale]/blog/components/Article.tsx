"use client";
import "./article.scss";
import { SanityDocument } from "next-sanity";

import { Link } from "@/../navigation";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { IMAGE_DEFAULT_QUALITY, IMAGE_DEFAULT_FORMAT, IMAGE_SIZES } from "@/common/components/images/sanityImageBuilderConfig";
import { motion } from "framer-motion";
import { buildSeeMoreString } from "@/common/helpers/TextHelper";

type ArticleProps = {
  article: SanityDocument;
};

export const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, marginTop: 50 }}
      whileInView={{ opacity: 1, marginTop: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      className="blog-page-article-container"
    >
      <Link
        className="blog-page-article-link"
        href={{
          pathname: "/blog/[slug]",
          params: { slug: article.slug.current },
        }}
      >
        <div className="blog-page-article-description-container">
          <h2 className="blog-page-article-title">{article.title}</h2>
          <p
            className="blog-page-article-description"
            dangerouslySetInnerHTML={{
              __html: buildSeeMoreString(article.description, 230),
            }}
          ></p>
        </div>
        <SanityImageWrapper
          sanityImage={article.mainImage}
          imageBuilderConfig={{
            size: IMAGE_SIZES.SQUARE_THUMBNAIL,
            format: IMAGE_DEFAULT_FORMAT,
            quality: IMAGE_DEFAULT_QUALITY,
          }}
        />
      </Link>
    </motion.div>
  );
};
