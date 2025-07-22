"use client";
import SubHero from "@/components/Hero/SubHero";
import AdvantagesSection from "@/sections/AdvantagesSection";
import CustomersSection from "@/sections/CustomersSection";
import OurSiteSection from "@/sections/OurSiteSection";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t: tHero } = useTranslation("hero");
  const { t } = useTranslation("ourSite");

  return (
    <div>
      <SubHero
        Heading="h2"
        mainTitle={tHero("about")}
        desc={tHero("about_desc")}
        link={tHero("link")}
      />
      <OurSiteSection
        sectionStyle="gap-[70px]"
        img="/images/our_site_2.webp"
        imgStyle="py-[21px] px-[25px] w-[500px] h-[400px] xl:w-auto xl:h-auto border border-[#EFEFEF] rounded-3xl"
        subTitle={t("sub_title")}
        mainTitle={t("about_main_title")}
        desc={t("about_desc")}
      />
      <AdvantagesSection />
      <CustomersSection />
    </div>
  );
};

export default AboutPage;
