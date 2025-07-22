import { CardComponentProps } from "@/type/CardComponent";
import { TFunction } from "i18next";

export const getAdvantagesData = (t: TFunction): CardComponentProps[] => [
    {
        img: "/images/advantages/icon_1.webp",
        title: t("txt_1")
    },
    {
        img: "/images/advantages/icon_2.webp",
        title: t("txt_2")
    },
    {
        img: "/images/advantages/icon_3.webp",
        title: t("txt_3")
    },
    {
        img: "/images/advantages/icon_4.webp",
        title: t("txt_4")
    },
]