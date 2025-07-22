"use client";
import { getNavBarData } from "@/data/NavBarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";

interface style {
  menuStyle: string;
  linkStyle: string;
  onClick?: () => void;
}

const NavBarLinks: React.FC<style> = ({ menuStyle, onClick, linkStyle }) => {
  const pathname = usePathname();
  const { t } = useTranslation("navbar");
  const navBarData = getNavBarData(t);

  return (
    <ul
      className={`flex items-center justify-between gap-7 xl:gap-10 
      ${menuStyle}`}
    >
      {navBarData.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            onClick={onClick}
            className={`font-open-sans font-semibold leading-[100%] 
              duration-300 hover:border-b-4 border-primary
              ${linkStyle}
              ${pathname == link.href ? "border-b-4 border-primary" : ""}`}
          >
            {link.linkName}
          </Link>{" "}
        </li>
      ))}
    </ul>
  );
};

export default NavBarLinks;
