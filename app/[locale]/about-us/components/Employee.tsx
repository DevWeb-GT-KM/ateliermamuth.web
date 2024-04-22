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
      <div className="employee-description-container">
        <div className="employee-description-header">
          <div className="employee-description-header-left">
            <h1 className="employee-name">{data.name}</h1>
            <h1 className="employee-role">{data.role}</h1>
          </div>
          <div className="employee-description-header-right">
            <h1 className="employee-email">{data.email}</h1>
          </div>
        </div>
        <div className="employee-description-body">
          <h1 className="employee-description">{data.description}</h1>
        </div>
      </div>
    </div>
  );
};
