"use client";
import { getFooterData } from "@/data/FooterData";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");
  const footerData = getFooterData(t);
  return (
    <footer className="bg-secondary px-5 md:px-[100px] [@media(min-width:1920px)]:px-[250px] py-10 mt-[160px]">
      <img src="/images/logo.webp" alt="logo image" data-aos="fade-up" />
      <div
        className="flex flex-wrap justify-between gap-[90px] border-y border-white my-[33px] py-[33px]"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {footerData.map((e, index) => (
          <div key={index} className="text-white">
            <h5 className="text-xl font-extrabold leading-[30px] mb-5">
              {e.title}
            </h5>
            <ul
              className={`flex gap-2.5
              ${e.flexDirection ? "flex-row" : "flex-col"}`}
            >
              {e.links.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2.5 text-lg font-semibold leading-[30px] duration-300 hover:text-primary"
                >
                  {link.icon && link.social ? (
                    <div className="flex items-center justify-center bg-primary text-secondary h-[50px] w-[50px] rounded-full duration-300 hover:scale-125 cursor-pointer">
                      <link.icon className="h-[30px] w-[30px] " />
                    </div>
                  ) : link.icon ? (
                    <link.icon className="h-6 w-6 text-primary" />
                  ) : null}
                  <Link href={link.href}>{link.linkName}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="text-base font-normal leading-[26px] text-white text-center"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        Copyright © 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
