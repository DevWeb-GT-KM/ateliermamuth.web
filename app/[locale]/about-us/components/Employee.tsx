import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import "./employee.scss";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";

export type EmployeeProps = {
  data: any;
};

export const Employee: React.FC<EmployeeProps> = ({ data }) => {
  return (
    <div className="employee-container">
      <div className="employee-picture-container">
        <SanityImageWrapper
          sanityImage={data?.img}
          imageBuilderConfig={{
            size: {
              width: 840,
              height: 1020,
            },
            format: SANITY_IMAGE_FORMAT.Jpg,
            quality: 85,
          }} />
      </div>
      <div className="employee-description-container">
        <div className="employee-description-header">
          <div className="employee-description-header-left">
            <h1 className="employee-name">{data.name}</h1>
            <h1 className="employee-role">{data.role}</h1>
          </div>
          <div className="employee-description-header-right">
            <a href={`mailto:${data.email}`} className="employee-email">
              {data.email}
            </a>
          </div>
        </div>
        <div className="employee-description-body">
          <h1 className="employee-description">{data.description}</h1>
        </div>
      </div>
    </div>
  );
};
