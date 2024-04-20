import "./values.scss";
import Image from "next/image";
import shapeA from "../../../common/assets/images/homePage/values/shapeA.svg";
import shapeB from "../../../common/assets/images/homePage/values/shapeB.svg";
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
    </div>
  );
};
