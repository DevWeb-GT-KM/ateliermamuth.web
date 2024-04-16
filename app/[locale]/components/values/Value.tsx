import "./value.scss";

type ValueProps = {
  data: string;
};

export const Value: React.FC<ValueProps> = ({ data }) => {
  return (
    <div className="home-page-value-container">
      <h1 className="home-page-value-text">{data}</h1>
    </div>
  );
};
