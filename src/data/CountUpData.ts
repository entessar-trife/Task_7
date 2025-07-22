"use client"
import { TFunction } from "i18next";

interface CountUpData {
  start: number;
  end: number;
  txt: string;
}

export const getCountUpData = (t: TFunction): CountUpData[] => [
  {
    start: Number(t("years_experience_start")),
    end: Number(t("years_experience_end")),
    txt: t("years_experience"),
  },
  {
    start: Number(t("happy_customer_start")),
    end: Number(t("happy_customer_end")),
    txt: t("happy_customer"),
  },
  {
    start: Number(t("services_start")),
    end: Number(t("services_end")),
    txt: t("services"),
  },
  {
    start: Number(t("guides_start")),
    end: Number(t("guides_end")),
    txt: t("guides"),
  },
];
