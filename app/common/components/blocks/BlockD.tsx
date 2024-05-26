import "./blockD.scss";
import React from "react";
import { PortableText } from "@portabletext/react";

type BlockDProps = {
  data: any;
};

export const BlockD: React.FC<BlockDProps> = ({ data }) => {
  return (
    <div className="block-d-container">
      <div className="block-d-portable-text-container">
        <PortableText value={data.text} />
      </div>
    </div>
  );
};
