import "./faqPageContainer.scss";
import { Question } from "./question";

type FaqPageContainerProps = {
  data: any;
};

export const FaqPageContainer: React.FC<FaqPageContainerProps> = ({ data }) => {
  return (
    <div className="faq-page-container">
      <div className="faq-page-header">
        <h1 className="faq-page-title">{data.pageTitle}</h1>
      </div>
      <div className="faq-page-content">
        {data.questions.map((question: any, index: number) => {
          {
            return <Question key={index} data={question} />;
          }
        })}
      </div>
    </div>
  );
};
