import "./blog.scss";

import { Link } from "@/../navigation";
import { Article } from "./Article";

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
        <Article data={data[0].blog.articles} />
        <Link className="home-page-blog-link" href={"/blog"}>
          Tous les articles
        </Link>
        <span className="home-page-blog-link-plus">+</span>
      </div>
    </div>
  );
};
