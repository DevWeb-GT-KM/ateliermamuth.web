import "./blog.scss";

import { Link } from "@/../navigation";
import { Article } from "./Article";

type BlogProps = {
  data: any[];
};

export const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <section className="home-page-blog-container">
      <div className="home-page-blog-header">
        <h2 className="home-page-blog-title">{data[0].blog.pageTitle}</h2>
      </div>
      <div className="home-page-blog-body">
        {data[0].blog.articles.map((article: any, index: number) => {
          return <Article key={index} data={article} />;
        })}
        <Link className="home-page-blog-link" href={"/blog"}>
          Tous les articles
        </Link>
        <span className="home-page-blog-link-plus">+</span>
      </div>
    </section>
  );
};
