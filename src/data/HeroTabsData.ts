import { TFunction } from "i18next";
import { BsPeopleFill } from "react-icons/bs";
import { FaEarthAmericas } from "react-icons/fa6";

export interface HeroTabsData {
    filter: string;
    tabs: Tab[];
}

interface Tab {
    title: string;
    htmlFor: string;
    id: string;
    src: string;
    options: Options[];
    selectTitle?: string;
}

interface Options {
    option: string
    value: string;
}

export const getTabs = (t: TFunction) => [
    {
        icon: FaEarthAmericas,
        filter: "Public Tours",
        txt: t("public_tours"),
    },
    {
        icon: BsPeopleFill,
        filter: "Private Tours",
        txt: t("private_tours")
    },
]

export const getHeroTabsData = (t: TFunction): HeroTabsData[] => [
    {
        filter: "Public Tours",
        tabs: [
            {
                title: t("number_of_people"),
                src: "/images/hero/hero_icons/people_icon.svg",
                htmlFor: "people",
                id: "people",
                selectTitle: t("choose_number"),
                options: [
                    {
                        value: "1",
                        option: t("10"),
                    },
                    {
                        value: "2",
                        option: t("35"),
                    },
                    {
                        value: "3",
                        option: t("40"),
                    },
                ]
            },
            {
                title: t("date"),
                src: "/images/hero/hero_icons/date_icon.svg",
                htmlFor: "date",
                id: "date",
                selectTitle: t("choose_date"),
                options: [
                    {
                        value: "1",
                        option: t("date_1"),
                    },
                    {
                        value: "2",
                        option: t("date_2"),
                    },
                    {
                        value: "3",
                        option: t("date_3"),
                    },
                    {
                        value: "4",
                        option: t("date_4"),
                    },
                ]
            },
            {
                title: t("tour"),
                src: "/images/hero/hero_icons/tour_icon.svg",
                htmlFor: "tour",
                id: "tour",
                selectTitle: t("select_tour"),
                options: [
                    {
                        value: "1",
                        option: t("tour_1")
                    },
                    {
                        value: "2",
                        option: t("tour_2")
                    },
                    {
                        value: "3",
                        option: t("tour_3")
                    },
                    {
                        value: "4",
                        option: t("tour_4")
                    },
                    {
                        value: "5",
                        option: t("tour_5")
                    },
                ]
            },
            {
                title: t("time"),
                htmlFor: "time",
                src: "/images/hero/hero_icons/time_icon.svg",
                id: "time",
                selectTitle: t("choose_time"),
                options: [
                    {
                        value: "1",
                        option: t("time_1")
                    },
                    {
                        value: "2",
                        option: t("time_2")
                    },
                    {
                        value: "3",
                        option: t("time_3")
                    },
                    {
                        value: "4",
                        option: t("time_4")
                    },
                ]
            },
            {
                title: t("transportation"),
                src: "/images/hero/hero_icons/car_icon.svg",
                htmlFor: "trans",
                id: "trans",
                selectTitle: t("select_transportation"),
                options: [
                    {
                        value: "1",
                        option: t("bus")
                    },
                    {
                        value: "2",
                        option: t("bike")
                    },
                    {
                        value: "3",
                        option: t("car")
                    },
                    {
                        value: "4",
                        option: t("train")
                    },
                    {
                        value: "5",
                        option: t("boat")
                    },
                ]
            },
        ]

    },

    {
        filter: "Private Tours",
        tabs: [


            {
                title: t("date"),
                src: "/images/hero/hero_icons/date_icon.svg",
                htmlFor: "date",
                id: "date",
                selectTitle: t("choose_date"),
                options: [
                    {
                        value: "1",
                        option: t("date_1"),
                    },
                    {
                        value: "2",
                        option: t("date_2"),
                    },
                    {
                        value: "3",
                        option: t("date_3"),
                    },
                    {
                        value: "4",
                        option: t("date_4"),
                    },
                ]
            },

            {
                title: t("number_of_people"),
                src: "/images/hero/hero_icons/people_icon.svg",
                htmlFor: "people",
                id: "people",
                selectTitle: t("choose_number"),
                options: [
                    {
                        value: "1",
                        option: t("10"),
                    },
                    {
                        value: "2",
                        option: t("35"),
                    },
                    {
                        value: "3",
                        option: t("40"),
                    },
                ]
            },

            {
                title: t("transportation"),
                src: "/images/hero/hero_icons/car_icon.svg",
                htmlFor: "trans",
                id: "trans",
                selectTitle: t("select_transportation"),
                options: [
                    {
                        value: "1",
                        option: t("bus")
                    },
                    {
                        value: "2",
                        option: t("bike")
                    },
                    {
                        value: "3",
                        option: t("car")
                    },
                    {
                        value: "4",
                        option: t("train")
                    },
                    {
                        value: "5",
                        option: t("boat")
                    },
                ]
            },

            {
                title: t("tour"),
                src: "/images/hero/hero_icons/tour_icon.svg",
                htmlFor: "tour",
                id: "tour",
                selectTitle: t("select_tour"),
                options: [
                    {
                        value: "1",
                        option: t("tour_1")
                    },
                    {
                        value: "2",
                        option: t("tour_2")
                    },
                    {
                        value: "3",
                        option: t("tour_3")
                    },
                    {
                        value: "4",
                        option: t("tour_4")
                    },
                    {
                        value: "5",
                        option: t("tour_5")
                    },
                ]
            },

            {
                title: t("time"),
                htmlFor: "time",
                src: "/images/hero/hero_icons/time_icon.svg",
                id: "time",
                selectTitle: t("choose_time"),
                options: [
                    {
                        value: "1",
                        option: t("time_1")
                    },
                    {
                        value: "2",
                        option: t("time_2")
                    },
                    {
                        value: "3",
                        option: t("time_3")
                    },
                    {
                        value: "4",
                        option: t("time_4")
                    },
                ]
            },

        ]

    },


]