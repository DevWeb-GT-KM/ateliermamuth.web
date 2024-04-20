import { Metadata } from "next";
import { QueryParams } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "About us | Atelier Mamuth",
  description: "About us description.",
};

type AboutUsPageProps = {
  params: QueryParams;
};

const AboutUsPage: React.FC<AboutUsPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <div className="about-us-page-container">
      <h1 className="about-us-page-title">About us page</h1>
    </div>
  );
};

export default AboutUsPage;
