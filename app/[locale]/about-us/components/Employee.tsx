import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import "./employee.scss";
import { IMAGE_DEFAULT_QUALITY, IMAGE_DEFAULT_FORMAT, IMAGE_SIZES } from "@/common/components/images/sanityImageBuilderConfig";

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
            size: { width: 1120, height: 1360 },
            format: IMAGE_DEFAULT_FORMAT,
            quality: IMAGE_DEFAULT_QUALITY,
          }}
        />
      </div>
      <div className="employee-description-container">
        <div className="employee-description-header">
          <div className="employee-description-header-left">
            <p className="employee-name">{data.name}</p>
            <p className="employee-role">{data.role}</p>
          </div>
          <div className="employee-description-header-right">
            <a href={`mailto:${data.email}`} className="employee-email">
              {data.email}
            </a>
          </div>
        </div>
        <div className="employee-description-body">
          <p className="employee-description">{data.description}</p>
        </div>
      </div>
    </div>
  );
};
