import { InputComponentProps } from "@/type/InputComponent";
import React from "react";
import DatePicker from "react-datepicker";

const InputComponent: React.FC<InputComponentProps> = ({
  inputStyle,
  htmlFor,
  label,
  labelColor,
  id,
  type,
  placeHolder,
  border,
}) => {
  return (
    <div className={`flex flex-col ${inputStyle}`}>
      <label
        htmlFor={htmlFor}
        className={`text-lg font-semibold leading-[100%] ${labelColor}`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeHolder}
        className={`py-3.5 px-6 bg-white rounded-lg w-full 
         placeholder-secondary-50 text-base font-medium leading-[100%]
         ${border ? "border border-[#33333333]" : ""}`}
      />
      {/* <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy/MM/dd"
        placeholderText="اختر تاريخاً"
        className="border border-gray-300 rounded px-3 py-2 w-full"
      /> */}
    </div>
  );
};

export default InputComponent;
