import { Article } from "./Article";
import "./blog.scss";

type BlogProps = {
  data: any[];
};

export const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <div className="home-page-blog-container">
      <div className="home-page-blog-header">
        <h1 className="home-page-blog-title">{data[0].blog.pageTitle}</h1>
      </div>
      <div className="home-page-blog-body">
        {data[0].blog.articles.map((article: any, index: number) => {
          return <Article key={index} data={article} />;
        })}
      </div>
    </div>
  );
};
