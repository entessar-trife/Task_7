"use client";
import SubHero from "@/components/Hero/SubHero";
import React from "react";
import { useTranslation } from "react-i18next";

const TourPage = () => {
  const { t } = useTranslation("hero");
  return (
    <div>
      <SubHero Heading="h2" mainTitle={t("welcome")} desc={t("welcome_desc")} />
    </div>
  );
};

export default TourPage;
