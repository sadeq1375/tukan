"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder?: string;
}
const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  register,
  required,
  errors,
  disabled,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeholder}
          {...register(id, { required })}
          className={clsx(
            `form-input block w-full rounded-[3px] border-b-green-300 border-t-0 border-l-0 border-r-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm focus:ring-0 focus:border-b-green-300 sm:leading-6`,
            errors[id] && `focus:border-b-rose-500`,
            disabled && `opacity-50 cursor-default`
          )}
        />
      </div>
    </div>
  );
};

export default Input;
