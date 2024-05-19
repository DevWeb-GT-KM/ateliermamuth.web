// import "../../scss/formTextInput.scss";

import React from "react";
import { FieldValues, Validate, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type FormTextInputProps = {
  placeholder?: string;
  property: string;
  required?: boolean;
  validations?:
    | Validate<any, FieldValues>
    | Record<string, Validate<any, FieldValues>>;
  requiredMessage?: string;
  errorMessage?: string;
};

export const FormTextInput: React.FC<FormTextInputProps> = ({
  placeholder,
  property,
  required,
  requiredMessage,
  validations,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-text-input-container">
      <div className="form-text-input-box">
        <input
          className={`form-text-input ${
            (errors[`${property}`] && " form-text-input-error") ?? ""
          }`}
          type={"text"}
          {...register(property, {
            required: required ? requiredMessage : false,
            validate: validations,
            setValueAs: (value: string) => value.trim(),
          })}
          placeholder={placeholder}
        />
      </div>

      <ErrorMessage
        errors={errors}
        name={property}
        render={({ message }) => (
          <p className="form-text-input-error-message">{message}</p>
        )}
      />
    </div>
  );
};
