import "./serviceStep.scss";

type ServiceStepProps = {
  data: any;
};

export const ServiceStep: React.FC<ServiceStepProps> = ({ data }) => {
  return (
    <>
      {data.map((step: any, index: number) => {
        return (
          <div key={index} className="service-page-step-container">
            <div className="service-page-step-header">
              <h2 className="service-page-step-index">{step.index}</h2>
            </div>
            <div className="service-page-step-body">
              <h2 className="service-page-step-name">{step.name}</h2>
              <p className="service-page-step-description">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
