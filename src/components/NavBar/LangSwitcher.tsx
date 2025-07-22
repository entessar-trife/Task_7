"use client";
import { NavLangs } from "@/data/NavBarData";
import React from "react";
import { useTranslation } from "react-i18next";

const LangSwitcher = ({ color }: { color: string }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    document.documentElement.dir = selectedLang === "ar" ? "rtl" : "ltr";
  };
  return (
    <select
      className={`text-base xl:text-xl font-semibold leading-[100%] cursor-pointer
                  duration-500 hover:text-primary outline-0
                  ${color}`}
      value={i18n.language}
      onChange={handleLanguageChange}
    >
      {NavLangs.map((lang, index) => (
        <option key={index} value={lang.value}>
          {lang.text}
        </option>
      ))}
    </select>
  );
};

export default LangSwitcher;
