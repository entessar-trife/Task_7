"use client";
import React from "react";
import MainButton from "./MainButton";
import { PackagesData } from "@/data/PackagesData";
import { useTranslation } from "react-i18next";

const PackagesComponent: React.FC<PackagesData> = ({
  mainImage,
  title,
  days,
  advantages,
}) => {
  const { t, i18n } = useTranslation("packages");

  return (
    <div
      className="w-full min-[380px]:w-[300px] min-[900px]:w-[340px] rounded-3xl duration-300 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] hover:scale-105 cursor-pointer"
      data-aos="fade-up"
    >
      <img src={mainImage} alt="card image" />
      <div
        className="p-[15px] md:p-[25px] bg-white border border-[#EFEFEF] rounded-b-3xl"
        data-aos="fade-up"
      >
        <h5 className="text-xl font-extrabold text-secondary uppercase">
          {title}
        </h5>
        <div className="pt-4">
          <sup className="text-xl font-normal leading-[100%] text-secondary/50 opacity-50">
            {" "}
            €{" "}
          </sup>
          <span className="text-[32px] md:text-[48px] font-bold leading-[100%] text-primary">
            {" "}
            {days}
          </span>
          <sub className="text-sm md:text-lg font-normal text-secondary/60 opacity-50">
            {i18n.language == "en" ? " / day" : "/ يوم"}
          </sub>
        </div>
        <div className="flex flex-col gap-4 my-4">
          {advantages.map((e, index) => (
            <div className="flex gap-4" key={index}>
              <img src={e.img} alt="icon" />
              <span className="text-sm md:text-lg font-normal leading-[100%] text-secondary">
                {e.txt}
              </span>
            </div>
          ))}
        </div>
        <MainButton
          btnStyle="text-primary border border-primary py-3 px-6 w-full duration-300 cursor-pointer hover:text-white hover:bg-primary"
          btnName={t("package_btn")}
        />
      </div>
    </div>
  );
};

export default PackagesComponent;
