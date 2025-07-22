import { TFunction } from "i18next";

export interface CustomersData {
    customerName: string;
    customerImage: string;
    customerOpinion: string;
}

export const getCustomersData = (t: TFunction): CustomersData[] => [
    {
        customerName: t("layod"),
        customerImage: "/images/customers/customer_1.webp",
        customerOpinion: t("layod_opinion")
    },
    {
        customerName: t("nora"),
        customerImage: "/images/customers/customer_3.webp",
        customerOpinion: t("nora_opinion")
    },
    {
        customerName: t("khaled"),
        customerImage: "/images/customers/customer_4.webp",
        customerOpinion: t("khaled_opinion")
    },
    {
        customerName: t("masa"),
        customerImage: "/images/customers/customer_6.webp",
        customerOpinion: t("masa_opinion")
    },
    {
        customerName: t("layod"),
        customerImage: "/images/customers/customer_1.webp",
        customerOpinion: t("layod_opinion")
    },
    {
        customerName: t("masa"),
        customerImage: "/images/customers/customer_6.webp",
        customerOpinion: t("masa_opinion")
    },
    {
        customerName: t("rayan"),
        customerImage: "/images/customers/customer_5.webp",
        customerOpinion: t("rayan_opinion")
    },
    {
        customerName: t("lana"),
        customerImage: "/images/customers/customer_2.webp",
        customerOpinion: t("lana_opinion")
    },
    {
        customerName: t("rayan"),
        customerImage: "/images/customers/customer_5.webp",
        customerOpinion: t("rayan_opinion")
    },
]