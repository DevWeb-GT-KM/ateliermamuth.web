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
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";

type ProjectPageContainerProps = {
  project: SanityDocument;
};

export const ProjectPageContainer: React.FC<
  ProjectPageContainerProps
> = async ({ project }) => {
  return (
    <div className="project-page-container">
      <h1 className="project-page-title">{project.name}</h1>

      <div className="project-page-first-block-container">
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

        <SanityImageWrapper
          sanityImage={project.secondaryImage}
          imageBuilderConfig={{
            quality: 75,
            format: SANITY_IMAGE_FORMAT.Jpg,
            size: {
              width: 2560,
              height: 1440,
            },
          }}
        />
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
          image: project.previousProject.mainImage,
          slug: project.previousProject.slug.current,
        }}
        next={{
          title: project.nextProject.name,
          shortDescription: project.nextProject.subtitle,
          image: project.nextProject.mainImage,
          slug: project.nextProject.slug.current,
        }}
      />
    </div>
  );
};
