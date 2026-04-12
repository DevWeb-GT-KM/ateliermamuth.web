import "./projectPageContainer.scss";

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
import { IMAGE_DEFAULT_QUALITY, IMAGE_DEFAULT_FORMAT, IMAGE_SIZES } from "@/common/components/images/sanityImageBuilderConfig";
import { BottomToTopSlider } from "@/common/components/animations/BottomToTopSlider";
import { notFound } from "next/navigation";

type ProjectPageContainerProps = {
  project: SanityDocument;
};

export const ProjectPageContainer: React.FC<ProjectPageContainerProps> = ({
  project,
}) => {
  if (!project) {
    notFound();
  }

  return (
    <div className="project-page-container">
      <h1 className="project-page-title">{project.name}</h1>

      <div className="project-page-first-block-container">
        <BottomToTopSlider>
          <div className="project-page-first-block-row">
            <div className="project-page-first-block-row-first-item">
              <p className="project-page-first-block-description">
                {project.shortDescription}
              </p>

              <div className="project-page-first-block-project-types">
                {project.projectTypes?.map((projectType: string) => (
                  <div
                    className="project-page-first-block-project-type"
                    key={projectType}
                  >
                    {projectType}
                  </div>
                ))}
              </div>
            </div>

            <div className="project-page-first-block-credits">
              {project.credits?.map(
                (credit: { _key: string; label: string; value: string }) => (
                  <div
                    className="project-page-first-block-credit"
                    key={credit._key}
                  >
                    <span>{credit.label} : &nbsp;</span>
                    <span>{credit.value}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </BottomToTopSlider>
        <BottomToTopSlider>
          <SanityImageWrapper
            sanityImage={project.secondaryImage}
            imageBuilderConfig={{
              quality: IMAGE_DEFAULT_QUALITY,
              format: IMAGE_DEFAULT_FORMAT,
              size: IMAGE_SIZES.FULL_HD_LANDSCAPE,
            }}
          />
        </BottomToTopSlider>
      </div>
      {project.contentBlocks?.map((block: any) => {
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
        linkType="project"
        previous={{
          title: project.previousProject.name,
          shortDescription: project.previousProject.subtitle,
          image: project.previousProject.secondaryImage,
          slug: project.previousProject.slug.current,
        }}
        next={{
          title: project.nextProject.name,
          shortDescription: project.nextProject.subtitle,
          image: project.nextProject.secondaryImage,
          slug: project.nextProject.slug.current,
        }}
      />
    </div>
  );
};
