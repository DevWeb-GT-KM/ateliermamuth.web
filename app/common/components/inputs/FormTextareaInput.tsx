import React from "react";
import { FieldValues, Validate, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type FormTextareaInputProps = {
  placeholder?: string;
  property: string;
  required?: boolean;
  requiredMessage?: string;
  validations?:
    | Validate<any, FieldValues>
    | Record<string, Validate<any, FieldValues>>;
};

export const FormTextareaInput: React.FC<FormTextareaInputProps> = ({
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
    <div className="contact-form-textarea-input-container">
      <div className="contact-form-textarea-input-box">
        <textarea
          className={`contact-form-textarea-input${
            (errors[`${property}`] && " contact-form-textarea-input-error") ??
            ""
          }`}
          {...register(property, {
            required: required ? (requiredMessage ?? "Ce champs est requis") : false,
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
          <p className="contact-form-textarea-input-error-message">{message}</p>
        )}
      />
    </div>
  );
};
