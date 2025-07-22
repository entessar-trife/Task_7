"use client"
import { TFunction } from "i18next";

export interface PackagesData {
    mainImage: string;
    title: string;
    days: string;
    advantages: advantages[];
}

interface advantages {
    img: string;
    txt: string;
}

export const getPackagesData = (t: TFunction): PackagesData[] => [
    {
        mainImage: "/images/packages/image_1.webp",
        title: t("rickshaw_title"),
        days: t("rickshaw_days"),
        advantages: [
            {
                img: "/images/packages/icons/icon_one_day.png",
                txt: t("rickshaw_advantage_1")
            },
            {
                img: "/images/packages/icons/icon_map.png",
                txt: t("rickshaw_advantage_2")
            },
            {
                img: "/images/packages/icons/icon_city_map.png",
                txt: t("rickshaw_advantage_3")
            },
            {
                img: "/images/packages/icons/icon_support.png",
                txt: t("rickshaw_advantage_4")
            },
        ]
    },
    {
        mainImage: "/images/packages/image_2.webp",
        title: t("bike_title"),
        days: t("bike_days"),
        advantages: [
            {
                img: "/images/packages/icons/icon_mountain_bike.png",
                txt: t("bike_advantage_1")
            },
            {
                img: "/images/packages/icons/icon_guide.png",
                txt: t("bike_advantage_2")
            },
            {
                img: "/images/packages/icons//icon_water.png",
                txt: t("bike_advantage_3")
            },
            {
                img: "/images/packages/icons/icon_support.png",
                txt: t("bike_advantage_4")
            },
        ]
    },
    {
        mainImage: "/images/packages/image_3.webp",
        title: t("bus_title"),
        days: t("bus_days"),
        advantages: [
            {
                img: "/images/packages/icons/icon_ticket.png",
                txt: t("bus_advantage_1")
            },
            {
                img: "/images/packages/icons/icon_bus.png",
                txt: t("bus_advantage_2")
            },
            {
                img: "/images/packages/icons/icon_companion.png",
                txt: t("bus_advantage_3")
            },
            {
                img: "/images/packages/icons/icon_support.png",
                txt: t("bus_advantage_4")
            },
        ]
    },
    {
        mainImage: "/images/packages/image_4.webp",
        title: t("transfer_title"),
        days: t("transfer_days"),
        advantages: [
            {
                img: "/images/packages/icons/icon_driver.png",
                txt: t("transfer_advantage_1")
            },
            {
                img: "/images/packages/icons/icon_location.png",
                txt: t("transfer_advantage_2")
            },
            {
                img: "/images/packages/icons/icon_best_price.png",
                txt: t("transfer_advantage_3")
            },
            {
                img: "/images/packages/icons/icon_support.png",
                txt: t("transfer_advantage_4")
            },
        ]
    },
]