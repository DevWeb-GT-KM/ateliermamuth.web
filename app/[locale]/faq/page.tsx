import { Metadata } from "next";
import { QueryParams } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "FAQ | Atelier Mamuth",
  description: "FAQ description.",
};

type FaqPageProps = {
  params: QueryParams;
};

const FaqPage: React.FC<FaqPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <div className="faq-page-container">
      <h1 className="faq-page-title">FAQ page</h1>
    </div>
  );
};

export default FaqPage;
