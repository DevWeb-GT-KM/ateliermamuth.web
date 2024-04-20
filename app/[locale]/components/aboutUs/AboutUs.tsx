import "./aboutUs.scss";

type AboutUsProps = {
  data: any[];
};

export const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  return (
    <div className="home-page-about-us-container">
      <div className="home-page-about-us-header">
        {/* TODO voir quoi faire pour le titre  */}
        <h1 className="about-us-title">à propos</h1>
      </div>
      <div className="home-page-about-us-body">
        <p className="home-page-about-us-description">
          {data[0].aboutUs.shortDescription}
        </p>
      </div>
    </div>
  );
};
