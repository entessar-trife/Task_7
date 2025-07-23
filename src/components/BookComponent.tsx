"use client";
import React from "react";
import TitleComponent from "./TitleComponent";
import InputComponent from "./InputComponent";
import MainButton from "./MainButton";
import { getBookData } from "@/data/BookData";
import { useTranslation } from "react-i18next";

const BookComponent = () => {
  const { t, i18n } = useTranslation("form");
  const bookData = getBookData(t);

  return (
    <div className="flex flex-col items-center w-full xl:w-[51.726%]">
      <TitleComponent
        mainTitle={
          i18n.language == "en" ? "Book Now Bike" : "احجز الدراجة الآن"
        }
        aos={i18n.language == "en" ? "fade-right" : "fade-left"}
      />

      <div className="flex flex-col gap-[30px] bg-[#FFFFFF4D] py-[30px] px-[20px] md:px-[34px] rounded-3xl w-full">
        <div
          className="flex gap-[30px] max-md:flex-wrap justify-center"
          data-aos={i18n.language == "en" ? "fade-right" : "fade-left"}
        >
          <div className="flex flex-col gap-[30px] w-full">
            {bookData.slice(0, 3).map((e, index) => (
              <InputComponent
                key={index}
                inputStyle={e.inputStyle}
                label={e.label}
                labelColor="text-secondary"
                htmlFor={e.htmlFor}
                id={e.id}
                placeHolder={e.placeHolder}
                type={e.type}
                icon={e.icon}
              />
            ))}
          </div>
          <div className="flex flex-col gap-[30px] w-full">
            {bookData.slice(3, 6).map((e, index) => (
              <InputComponent
                key={index}
                inputStyle={e.inputStyle}
                label={e.label}
                labelColor="text-secondary"
                htmlFor={e.htmlFor}
                id={e.id}
                placeHolder={e.placeHolder}
                type={e.type}
                icon={e.icon}
              />
            ))}
          </div>
        </div>

        <MainButton
          btnStyle="text-white bg-primary w-[212px] mx-auto duration-300 hover:scale-105"
          btnName={i18n.language == "en" ? "Book Now" : "احجز الآن"}
          aos={i18n.language == "en" ? "fade-right" : "fade-left"}
        />
      </div>
    </div>
  );
};

export default BookComponent;
