import "./page.scss";
import { Metadata } from "next";
import { QueryParams } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";

import { Link } from "@/../navigation";

export const metadata: Metadata = {
  title: "Atelier Mamuth",
  description:
    "Atelier Mamuth offers a planning service for your design, interior and exterior architecture projects.",
};

type HomePageProps = {
  params: QueryParams;
};

const HomePage: React.FC<HomePageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <div>
      <h1>Home page</h1>
      <Link href={"/projects"}>Go to projects</Link>
    </div>
  );
};

export default HomePage;
