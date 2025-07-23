import i18n from "@/i18n";
import { InputComponentProps } from "@/type/InputComponent";
import React from "react";

const InputComponent: React.FC<InputComponentProps> = ({
  inputStyle,
  htmlFor,
  label,
  labelColor,
  id,
  type,
  placeHolder,
  border,
  icon: Icon,
}) => {
  return (
    <div className={`flex flex-col ${inputStyle}`}>
      <label
        htmlFor={htmlFor}
        className={`text-lg font-semibold leading-[100%] ${labelColor}`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeHolder}
          className={`py-3.5 px-6 bg-white rounded-lg w-full 
          placeholder-secondary-50 text-base font-medium leading-[100%]
          ${border ? "border border-[#33333333]" : ""}`}
        />
        {Icon && (
          <Icon className={`absolute top-3.5 h-6 w-6 text-secondary/50
            ${i18n.language=="ar" ? "left-3.5 ":"right-3.5 "}`} />
        )}
      </div>
    </div>
  );
};

export default InputComponent;
