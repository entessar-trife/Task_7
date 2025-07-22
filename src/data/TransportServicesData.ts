import { CardComponentProps } from "@/type/CardComponent";
import { t, TFunction } from "i18next";

export const getTransportServicesData = (t: TFunction): CardComponentProps[] => [
  {
    img: "/images/services/image_1.webp",
    title: t("bike_title"),
    desc: t("bike_desc"),
  },
  {
    img: "/images/services/image_2.webp",
    title: t("guided_title"),
    desc: t("guided_desc")
  },
  {
    img: "/images/services/image_3.webp",
    title: t("taxi_title"),
    desc: t("taxi_desc"),
  },
  {
    img: "/images/services/image_4.webp",
    title: t("bus_title"),
    desc: t("bus_desc"),
  },
];
