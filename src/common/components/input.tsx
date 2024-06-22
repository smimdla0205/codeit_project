import React from "react";
import {useFormContext, RegisterOptions, FieldError} from "react-hook-form";

interface InputProps {
  id: string;
  name: string;
  label: string;
  type: string;
  validation: RegisterOptions;
}

function Input({id, name, label, type = "text", validation}: InputProps) {
  const {
    register,
    formState: {errors},
  } = useFormContext();
  const error = errors[name] as FieldError | undefined;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...register(name, validation)} />
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default Input;
