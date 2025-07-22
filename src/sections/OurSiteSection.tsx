"use client";
import TitleComponent from "@/components/TitleComponent";
import { getCountUpData } from "@/data/CountUpData";
import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

interface OurSiteSectionProps {
  sectionStyle: string;
  img: string;
  imgStyle?: string;
  desc: string;
  subTitle: string;
  mainTitle: string;
}

const OurSiteSection: React.FC<OurSiteSectionProps> = ({
  sectionStyle,
  img,
  imgStyle,
  desc,
  subTitle,
  mainTitle,
}) => {
  const { t, i18n } = useTranslation("ourSite");
  const countUpData = getCountUpData(t);
  const isAr = i18n.language === "ar";

  return (
    <section
      className={`flex justify-center min-[1920px]:justify-between items-center 
        px-5 md:px-[100px] [@media(min-width:1920px)]:px-[250px]
        pt-24 md:pt-[120px]
        ${sectionStyle}
    `}
    >
      <img
        src={img}
        className={`hidden lg:block ${imgStyle}`}
        alt="img"
        data-aos={isAr ? "fade-left" : "fade-right"}
      />
      <div
        className="w-full lg:w-[49.3305%]"
        data-aos={isAr ? "fade-right" : "fade-left"}
      >
        <TitleComponent subTitle={subTitle} mainTitle={mainTitle} desc={desc} />

        <div className="flex max-[500px]:gap-[50px] max-[500px]:flex-wrap justify-between items-start w-[250px] min-[500px]:w-[400px] xl:w-[480px]">
          {countUpData.map((e, index) => (
            <div key={index} className="flex flex-col w-[83px]">
              <CountUp
                start={e.start}
                end={e.end}
                duration={3}
                className="text-primary text-[32px] font-bold leading-8"
                suffix=" +"
              />
              <span className="font-normal text-base leading-[26px] mt-1.5 text-secondary/60">
                {" "}
                {e.txt}{" "}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSiteSection;
