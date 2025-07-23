"use client";
import React from "react";
import HeroContent from "./HeroContent";
import HeroTabs from "./HeroTabs";
import { useTranslation } from "react-i18next";

const MainHero = () => {
  const { t } = useTranslation("hero");
  return (
    <div
      className="flex flex-col justify-center items-center
       px-5 md:px-[100px] [@media(min-width:1920px)]:px-[250px]
    min-h-svh bg-[url(/images/hero/hero_1.webp)] bg-no-repeat bg-cover
    bg-black/20 bg-blend-overlay"
    >
      <HeroContent
        heroContentStyle="gap-4"
        Heading="h1"
        mainTitle={t("enjoy")}
        desc={t("enjoy_desc")}
      />

      <HeroTabs />
    </div>
  );
};

export default MainHero;
