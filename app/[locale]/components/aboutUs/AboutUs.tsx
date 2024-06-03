import "./aboutUs.scss";

import { Link } from "@/../navigation";

type AboutUsProps = {
  data: any[];
};

export const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  return (
    <div className="home-page-about-us-container">
      <div className="home-page-about-us-header">
        {/* TODO voir quoi faire pour le titre  */}
        <h2 className="about-us-title">À propos</h2>
      </div>
      <div className="home-page-about-us-body">
        <p className="home-page-about-us-description">
          {data[0].aboutUs.shortDescription}
        </p>
        <Link className="home-page-about-us-link" href={"/about-us"}>
          en savoir plus
        </Link>
      </div>
    </div>
  );
};
