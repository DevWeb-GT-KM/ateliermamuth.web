import "./plusMinusToggle.scss";

type PlusMinusToggleProps = {
  isOpen: boolean;
  className?: string;
};

export const PlusMinusToggle: React.FC<PlusMinusToggleProps> = ({ isOpen, className }) => {
  return (
    <div className={`plus-minus-toggle ${isOpen ? "is-open" : ""} ${className ?? ""}`}>
      <span className="plus-minus-toggle-horizontal" />
      <span className="plus-minus-toggle-vertical" />
    </div>
  );
};
