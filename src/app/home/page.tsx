"use client";
import MainHero from "@/components/Hero/MainHero";
import BookSection from "@/sections/BookSection";
import CustomersSection from "@/sections/CustomersSection";
import DestinationsSection from "@/sections/DestinationsSection";
import OffersSection from "@/sections/OffersSection";
import OurSiteSection from "@/sections/OurSiteSection";
import PackagesSection from "@/sections/PackagesSection";
import TransportServicesSection from "@/sections/TransportServicesSection";
import React from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation("ourSite");
  return (
    <div>
      <MainHero />
      <DestinationsSection />
      <OurSiteSection
        sectionStyle="gap-28 min-[1410px]:gap-[215px]"
        img="/images/our_site_1.webp"
        imgStyle="w-[350px] h-[500px] xl:w-auto xl:h-auto"
        subTitle={t("sub_title")}
        mainTitle={t("home_main_title")}
        desc={t("home_desc")}
      />
      <OffersSection />
      <TransportServicesSection />
      <BookSection />
      <PackagesSection />
      <CustomersSection />
    </div>
  );
};

export default HomePage;
