import { TFunction } from "i18next";
import { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface FooterData {
  title: string;
  links: links[];
  flexDirection?: boolean;
}
interface links {
  href: string;
  icon?: IconType;
  linkName?: string;
  social?: boolean;
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
        icon: FaLocationDot,
        href: "/",
        linkName: t("link_12"),
      },
      {
        icon: FaPhone,
        href: "/",
        linkName: t("link_13")
      },
      {
        icon: MdEmail,
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
        social: true,
        icon: FaTwitter,
        href: "/",
      },
      {
        social: true,
        icon: FaFacebookF,
        href: "/",
      },
      {
        social: true,
        icon: FaInstagram,
        href: "/",
      },
    ],
  },
];
