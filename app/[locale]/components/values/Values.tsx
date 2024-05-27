import "./values.scss";

import { Link } from "@/../navigation";
import { Value } from "./Value";

type ValuesProps = {
  data: any[];
};

export const Values: React.FC<ValuesProps> = ({ data }) => {
  return (
    <div className="home-page-values-container">
      <div className="home-page-values-header">
        <h1 className="home-page-values-title">
          {data[0].values.sectionTitle}
        </h1>
      </div>
      <div className="home-page-values-body">
        {data[0].values.valuesWords.map((value: any, index: number) => {
          return <Value key={index} data={value} />;
        })}
      </div>
      <Link className="home-page-values-link" href={"/about-us"}>
        en savoir plus
      </Link>
    </div>
  );
};
