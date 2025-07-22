"use client";
import i18n from "@/i18n";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SliderBtns = () => {
  const [isActive, setIsActive] = useState<string>("right");

  return (
    <div className="flex gap-2.5 lg:gap-5">
      {i18n.language == "en" ? (
        <>
          <button
            onClick={() => setIsActive("left")}
            className={`prev-btn flex justify-center items-center
       h-[50px] w-[50px]
      bg-[#EFEFEF] rounded-full
      duration-300 hover:scale-105 cursor-pointer
      ${
        isActive == "left"
          ? "bg-primary text-white"
          : "bg-[#EFEFEF] text-secondary/60"
      }`}
          >
            <IoIosArrowBack className="text-2xl" />
          </button>
          <button
            onClick={() => setIsActive("right")}
            className={`next-btn flex justify-center items-center h-[50px] w-[50px] rounded-full duration-300 hover:scale-105 cursor-pointer
        ${
          isActive == "right"
            ? "bg-primary text-white"
            : "bg-[#EFEFEF] text-secondary/60"
        }`}
          >
            <IoIosArrowForward className=" text-2xl" />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsActive("right")}
            className={`next-btn flex justify-center items-center h-[50px] w-[50px] rounded-full duration-300 hover:scale-105 cursor-pointer
        ${
          isActive == "right"
            ? "bg-primary text-white"
            : "bg-[#EFEFEF] text-secondary/60"
        }`}
          >
            <IoIosArrowForward className=" text-2xl" />
          </button>
          <button
            onClick={() => setIsActive("left")}
            className={`prev-btn flex justify-center items-center
       h-[50px] w-[50px]
      bg-[#EFEFEF] rounded-full
      duration-300 hover:scale-105 cursor-pointer
      ${
        isActive == "left"
          ? "bg-primary text-white"
          : "bg-[#EFEFEF] text-secondary/60"
      }`}
          >
            <IoIosArrowBack className="text-2xl" />
          </button>
        </>
      )}
    </div>
  );
};

export default SliderBtns;
