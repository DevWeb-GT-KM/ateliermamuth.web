import { Metadata } from "next";
import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";

import { Carousel } from "./components/carousel/Carousel";
import { loadQuery } from "../../sanity/lib/store";
import { HOME_PAGE_QUERY_BY_LANG } from "../../sanity/lib/queries";
import { draftMode } from "next/headers";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Services } from "./components/services/Services";
import { Values } from "./components/values/Values";
import { Projects } from "./components/projects/Projects";
import { Blog } from "./components/blog/Blog";

export const metadata: Metadata = {
  title: "Atelier Mamuth",
  description:
    "Atelier Mamuth offers a planning service for your design, interior and exterior architecture projects.",
};

type HomePageProps = {
  params: QueryParams;
};

const HomePage: React.FC<HomePageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument[]>(
    HOME_PAGE_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <div>
      <Carousel data={initial.data} />
      <AboutUs data={initial.data} />
      <Services data={initial.data} />
      <Values data={initial.data} />
      <Projects data={initial.data} />
      <Blog data={initial.data} />
    </div>
  );
};

export default HomePage;
