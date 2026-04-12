import "./pageSelector.scss";

import { Link } from "@/../navigation";
import { SanityImageWrapper } from "../images/SanityImageWrapper";
import {
  IMAGE_DEFAULT_QUALITY,
  IMAGE_DEFAULT_FORMAT,
  IMAGE_SIZES,
  SanityImageBuilderConfig,
} from "../images/sanityImageBuilderConfig";

type PageSelector = {
  title: string;
  shortDescription: string;
  image: any;
  slug: string;
};

type PageSelectorProps = {
  previous: PageSelector;
  next: PageSelector;
  linkType: "project" | "article";
};

export const PageSelector: React.FC<PageSelectorProps> = ({
  previous,
  next,
  linkType,
}) => {
  const linkPathName =
    linkType === "project" ? "/projects/[slug]" : "/blog/[slug]";

  const imgBuilderConfig: SanityImageBuilderConfig = {
    size: IMAGE_SIZES.SQUARE_THUMBNAIL,
    format: IMAGE_DEFAULT_FORMAT,
    quality: IMAGE_DEFAULT_QUALITY,
  };

  return (
    <div className="page-selector-container">
      <div className="page-selector-item">
        <Link
          href={{
            pathname: linkPathName,
            params: { slug: previous.slug },
          }}
          className="page-selector-action-title"
        >
          Précédent
        </Link>

        <div className="page-selector-content">
          <SanityImageWrapper
            sanityImage={previous.image}
            imageBuilderConfig={imgBuilderConfig}
          />

          <div className="page-selector-text-container">
            <p className="page-selector-title">{previous.title}</p>
            <p className="page-selector-description">
              {previous.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="page-selector-item">
        <Link
          href={{
            pathname: linkPathName,
            params: { slug: next.slug },
          }}
          className="page-selector-action-title"
        >
          Suivant
        </Link>
        <div className="page-selector-content">
          <SanityImageWrapper
            sanityImage={next.image}
            imageBuilderConfig={imgBuilderConfig}
          />

          <div className="page-selector-text-container">
            <p className="page-selector-title">{next.title}</p>
            <p className="page-selector-description">{next.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
