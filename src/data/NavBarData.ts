import { TFunction } from "i18next";

interface NavBarData {
  href: string;
  linkName: string;
}

export const getNavBarData = (t: TFunction): NavBarData[] => [
  {
    href: "/",
    linkName: t("home"),
  },
  {
    href: "/about",
    linkName: t("about"),
  },
  {
    href: "/tour",
    linkName: t("tour"),
  },
  {
    href: "/contact",
    linkName: t("contact"),
  },
];

interface NavLangs {
  value: string;
  text: string;
}

export const NavLangs: NavLangs[] = [
  {
    value: "en",
    text: "Eng",
  },
  {
    value: "ar",
    text: "Ar",
  },
];

