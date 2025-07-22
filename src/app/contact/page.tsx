"use client";
import SubHero from "@/components/Hero/SubHero";
import React from "react";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation("hero");
  return (
    <div>
      <SubHero Heading="h2" mainTitle={t("contact")} desc={t("contact_desc")} />
    </div>
  );
};

export default ContactPage;
