import { Article } from "./Article";
import "./blogPageContainer.scss";
import { SanityDocument } from "next-sanity";
import Image from "next/image";

type BlogPageContainerProps = {
  data: SanityDocument;
};

const test = [{ title: "test", description: "fjldsfjdlskjfsdkl" }];

export const BlogPageContainer: React.FC<BlogPageContainerProps> = ({
  data,
}) => {
  return (
    <div className="blog-page-container">
      <div className="blog-page-header">
        <h1 className="blog-page-title">{data[0].pageTitle}</h1>
      </div>
      <div className="blog-page-content">
        {data[0].articles.map((article: any, index: number) => {
          return <Article key={index} article={article} />;
        })}
      </div>
    </div>
  );
};
