import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

type FormRadioInputProps = {
  property: string;
  options: string[];
  required?: boolean;
  radioGroupTitle?: string;
};

export const FormRadioInput: React.FC<FormRadioInputProps> = ({
  property,
  options,
  required,
  radioGroupTitle,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-radio-input-container">
      {radioGroupTitle && (
        <h1 className="form-radio-input-group-title">{radioGroupTitle}</h1>
      )}
      {options.map((option, index: number) => {
        return (
          <div key={index} className="form-radio-input-option">
            <input
              type="radio"
              value={option}
              {...register(property, {
                required: required ? "Ce champ est obligatoire" : false,
                validate: (value) =>
                  options.some((option: any) => option.name === value) || true,
              })}
            />
            <label className="form-radio-input-label">{option}</label>
          </div>
        );
      })}
      <ErrorMessage
        errors={errors}
        name={property}
        render={({ message }) => (
          <p className="form-radio-input-error-message">{message}</p>
        )}
      />
    </div>
  );
};
