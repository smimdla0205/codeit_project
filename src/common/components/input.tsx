import React from "react";
import {useFormContext, RegisterOptions, FieldError} from "react-hook-form";
import styles from "./input.module.scss";

interface InputProps {
  id: string;
  name: string;
  type: string;
  validation: RegisterOptions;
  label?: string;
  placeholder?: string;
}

function Input({id, name, type = "text", validation, label, placeholder}: InputProps) {
  const {
    register,
    formState: {errors},
  } = useFormContext();
  const error = errors[name] as FieldError | undefined;

  return (
    <div className={styles.inputFrame}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input id={id} type={type} placeholder={placeholder} className={styles.input} {...register(name, validation)} />
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
}

export default Input;
