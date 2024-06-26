import "./articlePageContainer.scss";

import { SanityDocument } from "next-sanity";
import blockASchemaType from "@/../sanity/schemaTypes/blocks/blockA";
import blockBSchemaType from "@/../sanity/schemaTypes/blocks/blockB";
import blockCSchemaType from "@/../sanity/schemaTypes/blocks/blockC";
import blockDSchemaType from "@/../sanity/schemaTypes/blocks/blockD";
import { BlockA } from "@/common/components/blocks/BlockA";
import { BlockB } from "@/common/components/blocks/BlockB";
import { BlockC } from "@/common/components/blocks/BlockC";
import { BlockD } from "@/common/components/blocks/BlockD";
import { PageSelector } from "@/common/components/pageSelector/PageSelector";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";
import { FormattedDate } from "@/common/components/FormattedDate";

import { SocialMediaShareButton } from "@/common/components/SocialMediaShareButton";

type ArticlePageContainerProps = {
  article: SanityDocument;
};

export const ArticlePageContainer: React.FC<
  ArticlePageContainerProps
> = async ({ article }) => {
  return (
    <div className="article-page-container">
      <div className="article-page-header">
        <div className="article-page-header-text-container">
          <h1 className="article-page-title">{article.title}</h1>
          <p className="article-page-description">{article.description}</p>
          <div className="article-page-header-flex-row">
            <div className="article-page-author-publication-date-container">
              <p className="article-page-author">{article.author}</p>
              <FormattedDate
                className="article-page-publication-date"
                date={new Date(article.publicationDate)}
              />
            </div>
            <SocialMediaShareButton
              title={article.title}
              image={article.mainImage}
            />
          </div>
        </div>

        <div className="article-page-header-image-container">
          <SanityImageWrapper
            sanityImage={article.mainImage}
            imageBuilderConfig={{
              quality: 70,
              format: SANITY_IMAGE_FORMAT.Jpg,
              size: {
                width: 1920,
                height: 1080,
              },
            }}
          />
        </div>
      </div>

      {article.contentBlocks?.map((block: any) => {
        const key = block._key;

        switch (block._type) {
          case blockASchemaType.name:
            return <BlockA key={key} data={block} />;

          case blockBSchemaType.name:
            return <BlockB key={key} data={block} />;

          case blockCSchemaType.name:
            return <BlockC key={key} data={block} />;

          case blockDSchemaType.name:
            return <BlockD key={key} data={block} />;

          default:
            return <></>;
        }
      })}

      <PageSelector
        linkType="article"
        previous={{
          title: article.previousArticle.title,
          shortDescription: article.previousArticle.subtitle,
          image: article.previousArticle.mainImage,
          slug: article.previousArticle.slug.current,
        }}
        next={{
          title: article.nextArticle.title,
          shortDescription: article.nextArticle.subtitle,
          image: article.nextArticle.mainImage,
          slug: article.nextArticle.slug.current,
        }}
      />
    </div>
  );
};
