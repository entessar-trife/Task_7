"use client";
import { getHeroTabsData, getTabs } from "@/data/HeroTabsData";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoSearch } from "react-icons/io5";

const HeroTabs = () => {
  const { t, i18n } = useTranslation("hero");
  const [activeBtn, setActiveBtn] = useState<string>("Public Tours");
  const tabs = getTabs(t);
  const HeroTabsData = getHeroTabsData(t);

  return (
    <div
      className="mt-8 md:mt-[60px] rounded-xl bg-[#FFFFFF33] p-5 w-full max-w-[1383px]"
      data-aos="zoom-in"
    >
      <div className="flex max-[450px]:flex-col w-full max-[450px]w-[355px] cursor-pointer">
        {tabs.map((e, index) => (
          <div
            key={index}
            className={`flex gap-2.5 p-4 ${
              activeBtn == e.filter
                ? "bg-white text-primary"
                : "bg-[#FFFFFF66] text-white"
            }
            ${
              index == 0
                ? i18n.language == "en"
                  ? "rounded-tl-xl  max-[450px]:rounded-tr-xl"
                  : "rounded-tr-xl max-[450px]:rounded-tl-xl"
                : ""
            }
            ${
              index == 1
                ? i18n.language == "en"
                  ? "min-[450px]:rounded-tr-xl"
                  : "min-[450px]:rounded-tl-xl"
                : ""
            }
            `}
            onClick={() => setActiveBtn(e.filter)}
          >
            <e.icon className="h-6 w-6" />
            <span className="text-lg font-semibold"> {e.txt} </span>
          </div>
        ))}
      </div>

      <div
        className={`flex justify-between items-center flex-wrap gap-3 p-3 bg-white rounded-b-xl
      ${
        i18n.language == "en"
          ? "min-[450px]:rounded-tr-xl"
          : "min-[450px]:rounded-l-xl"
      }`}
      >
        {HeroTabsData.map((e) => {
          if (activeBtn == e.filter) {
            return e.tabs.map((tab, index) => (
              <div
                key={index}
                className={`flex flex-col gap-1.5 w-[225px] pr-3 border-secondary/10
                  ${
                    i18n.language == "ar"
                      ? "min-[450px]:border-l"
                      : "min-[450px]:border-r"
                  }`}
              >
                <div className="flex gap-[7px]">
                  <img src={tab.src} className="h-6 w-6 text-secondary" />
                  <label
                    htmlFor={tab.htmlFor}
                    className="text-lg font-semibold text-secondary"
                  >
                    {tab.title}
                  </label>
                </div>

                <select
                  className="text-lg font-normal text-center w-[175px] text-secondary/70"
                  id={tab.id}
                >
                  <option value="" disabled selected hidden>
                    {tab.selectTitle}
                  </option>
                  {tab.options.map((i, index) => (
                    <option key={index} value={i.value}>
                      {i.option}
                    </option>
                  ))}
                </select>
              </div>
            ));
          }
        })}
        <div className="flex justify-center items-center w-20 h-20  bg-primary rounded-xl">
          <IoSearch className="w-8 h-8 text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default HeroTabs;
