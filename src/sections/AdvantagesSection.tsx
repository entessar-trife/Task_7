"use client";
import CardComponent from "@/components/CardComponent";
import { getAdvantagesData } from "@/data/AdvantagesData";
import React from "react";
import { useTranslation } from "react-i18next";

const AdvantagesSection = () => {
  const { t } = useTranslation("advantages");
  const advantagesData = getAdvantagesData(t);

  return (
    <section
      className="flex max-lg:flex-wrap justify-center min-[813px]:justify-between gap-[30px] xl:gap-[83px] bg-[#fec391] 
    px-5 md:px-[100px] [@media(min-width:1920px)]:px-[250px]
    py-10 md:py-[60px] mt-14 md:mt-[120px]"
    >
      {advantagesData.map((card, index) => (
        <CardComponent
          key={index}
          contentStyle="mt-[15px]"
          cardStyle="w-full min-[380px]:w-[292px] flex flex-col items-center text-center bg-[#FFFFFF4D] rounded-3xl p-[30px]"
          img={card.img}
          title={card.title}
          titleStyle="text-xl font-semibold leading-[100%]"
        />
      ))}
    </section>
  );
};

export default AdvantagesSection;
