import { TFunction } from "i18next";

interface FooterData {
  title: string;
  links: links[];
  flexDirection?: boolean;
}
interface links {
  href: string;
  icon?: string;
  linkName?: string;
}

export const getFooterData = (t: TFunction): FooterData[] => [
  {
    title: t("title_1"),
    links: [
      {
        href: "/",
        linkName: t("link_1")
      },
      {
        href: "/",
        linkName: t("link_2")
      },
      {
        href: "/",
        linkName: t("link_3")
      },
      {
        href: "/",
        linkName: t("link_4")
      },
      {
        href: "/",
        linkName: t("link_5")
      },
      {
        href: "/",
        linkName: t("link_6")
      },
    ],
  },

  {
    title: t("title_2"),
    links: [
      {
        href: "/",
        linkName: t("link_7")
      },
      {
        href: "/about",
        linkName: t("link_8")
      },
      {
        href: "/tour",
        linkName: t("link_9")
      },
    ],
  },

  {
    title: t("title_3"),
    links: [
      {
        href: "/",
        linkName: t("link_10")
      },
      {
        href: "/",
        linkName: t("link_11")
      },
    ],
  },

  {
    title: t("title_4"),
    links: [
      {
        icon: "/images/footer/location_icon.png",
        href: "/",
        linkName: t("link_12")
      },
      {
        icon: "/images/footer/phone_icon.png",
        href: "/",
        linkName: t("link_13")
      },
      {
        icon: "/images/footer/email_icon.png",
        href: "/",
        linkName: t("link_14")
      },
    ],
  },

  {
    title: t("title_5"),
    flexDirection: true,
    links: [
      {
        icon: "/images/footer/twitter_icon.png",
        href: "/",
      },
      {
        icon: "/images/footer/facebook_icon.png",
        href: "/",
      },
      {
        icon: "/images/footer/instagram_icon.png",
        href: "/",
      },
    ],
  },
];
