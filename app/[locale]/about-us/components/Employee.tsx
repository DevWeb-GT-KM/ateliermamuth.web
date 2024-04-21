import "./employee.scss";

export type EmployeeProps = {
  data: any;
};

export const Employee: React.FC<EmployeeProps> = ({ data }) => {
  return (
    <div className="employee-container">
      <div className="employee-picture-container">
        <div className="employee-picture" />
      </div>
      <div className="employee-description-container"></div>
    </div>
  );
};
