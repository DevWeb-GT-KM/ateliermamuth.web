import { AboutUs } from "./aboutUs/AboutUs";
import { Blog } from "./blog/Blog";
import { HomePageCarousel } from "./carousel/HomePageCarousel";
import { Projects } from "./projects/Projects";
import { Publications } from "./publications/Publications";
import { Reviews } from "./reviews/Reviews";
import { Services } from "./services/Services";
import { Values } from "./values/Values";

export type HomePageContainerProps = {
  data: any;
};

export const HomePageContainer: React.FC<HomePageContainerProps> = ({ data }) => {
  return (
    <div className="home-page-container">
      <HomePageCarousel data={data} />
      <AboutUs data={data} />
      <Services data={data} />
      <Values data={data} />
      <Projects data={data} />
      <Blog data={data} />
      <Publications data={data} />
      <Reviews />
    </div>
  );
};
