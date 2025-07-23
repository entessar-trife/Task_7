"use client";
import PackagesComponent from "@/components/PackagesComponent";
import TitleComponent from "@/components/TitleComponent";
import { getPackagesData } from "@/data/PackagesData";
import React from "react";
import { useTranslation } from "react-i18next";

const PackagesSection = () => {
  const { t, i18n } = useTranslation("packages");
  const packagesData = getPackagesData(t);

  return (
    <section className="pt-24 md:pt-[120px] px-5 md:px-[100px] [@media(min-width:1920px)]:px-[250px]">
      <TitleComponent
        mainTitle={t("section_title")}
        aos={i18n.language == "en" ? "fade-right" : "fade-left"}
      />
      <div className="flex max-lg:flex-wrap justify-center min-[820px]:justify-between gap-5 mt-[60px]">
        {packagesData.map((card, index) => (
          <PackagesComponent
            key={index}
            mainImage={card.mainImage}
            title={card.title}
            days={card.days}
            advantages={card.advantages}
          />
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;
