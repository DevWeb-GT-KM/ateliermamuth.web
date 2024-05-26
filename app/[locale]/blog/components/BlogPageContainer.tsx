import { Article } from "./Article";
import "./blogPageContainer.scss";
import { SanityDocument } from "next-sanity";

type BlogPageContainerProps = {
  data: SanityDocument;
};

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
