"use client";
import React, { useEffect, useState } from "react";
import NavBarLinks from "./NavBarLinks";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import LangSwitcher from "./LangSwitcher";
import i18n from "@/i18n";
import NavBtns from "./NavBtns";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <>
      <nav
        className={`fixed z-50 w-full flex justify-between items-center px-5 md:px-[100px] [@media(min-width:1920px)]:px-[250px] py-5
        ${
          scroll
            ? "bg-[#ffffffdd] backdrop-blur-md border-b border-gray-200 shadow-lg"
            : "bg-[#FFFFFF33]"
        }`}
      >
        <img
          src="/images/logo.webp"
          className="w-[110px] h-[100px] xl:w-auto xl:h-auto"
          alt="hero image"
        />

        <NavBarLinks
          linkStyle={`text-base xl:text-xl ${
            scroll ? "text-secondary" : "text-white"
          }`}
          menuStyle="hidden lg:flex"
        />

        <div className="hidden lg:flex justify-between items-center xl:gap-2.5">
          <LangSwitcher color={scroll ? "text-secondary" : "text-white"} />
          <NavBtns />
        </div>

        <FaBars
          className={`block lg:hidden h-8 w-8 cursor-pointer duration-300 hover:text-primary ${
            scroll ? "text-primary" : "text-white"
          }`}
          onClick={() => setShowMenu(true)}
        />
      </nav>

      <div
        className={`fixed top-0 ${
          i18n.language == "en"
            ? "right-0 border-l rounded-tl-[70px] rounded-bl-[70px]"
            : "left-0 border-r rounded-tr-[70px] rounded-br-[70px]"
        } z-50
          flex flex-col justify-center items-center gap-20
        w-[300px] h-screen border-gray-200 shadow-lg
         bg-[#ffffffdd] backdrop-blur-md 
        transition-all duration-700 ease-in-out transform 
       ${
         showMenu
           ? "translate-x-0 opacity-100"
           : `${
               i18n.language === "ar" ? "-translate-x-full" : "translate-x-full"
             } opacity-0`
       }`}
      >
        <NavBarLinks
          menuStyle="flex-col"
          linkStyle="text-secondary text-lg"
          onClick={() => setShowMenu(false)}
        />

        <div className="flex flex-col justify-between items-center gap-5">
          <LangSwitcher color="text-secondary" />

          <NavBtns direction="col" btnStyle="text-secondary" />
        </div>

        <FaXmark
          className="h-8 w-8 text-secondary duration-300 hover:text-primary cursor-pointer"
          onClick={() => setShowMenu(false)}
        />
      </div>
    </>
  );
};

export default NavBar;
