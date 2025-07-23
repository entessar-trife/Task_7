"use client";
import React, { useEffect, useState } from "react";
import MainButton from "../MainButton";
import PopUpComponent from "../PopUpComponent";
import { getSignUpPopupData } from "@/data/SignUpPopupData";
import { getLogInPopupData } from "@/data/LogInPopupData";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

interface NavBtnsProps {
  direction?: "row" | "col";
  btnStyle?: string;
}

const NavBtns: React.FC<NavBtnsProps> = ({ direction, btnStyle }) => {
  const [activeBtn, setActiveBtn] = useState<string>("sign");
  const [scroll, setScroll] = useState<boolean>(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState<boolean>(false);
  const [showLogInPopup, setShowLogInPopup] = useState<boolean>(false);

  const { t: tNav } = useTranslation("navbar");
  const { t } = useTranslation("form");

  const signUpPopupData = getSignUpPopupData(t);
  const logInPopupData = getLogInPopupData(t);

  // const handleScroll = () => {
  //   if (window.scrollY > 50) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // };

  // useEffect(() => {
  //   document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scroll]);

  return (
    <div className={`flex gap-2.5 ${direction === "col" ? "flex-col" : ""}`}>
      <MainButton
        btnName={tNav("login")}
        btnStyle={`pt-2.5 pb-3.5 duration-500 hover:bg-primary ${
          activeBtn === "log" ? "bg-primary w-[110px] xl:w-[168px]" : ""
        } ${btnStyle}`}
        onClick={() => {
          setActiveBtn("log");
          setShowLogInPopup(true);
        }}
      />
      <MainButton
        btnName={tNav("signup")}
        btnStyle={`pt-2.5 pb-3.5 duration-500 hover:bg-primary ${
          activeBtn === "sign" ? "bg-primary w-[110px] xl:w-[168px]" : ""
        } ${btnStyle}`}
        onClick={() => {
          setActiveBtn("sign");
          setShowSignUpPopup(true);
        }}
      />

      {showSignUpPopup && (
        <PopUpComponent
          title={t("create_account")}
          inputs={signUpPopupData}
          btnName_1={t("sign_up")}
          btnName_2={t("signUp_google")}
          txt={t("have_account")}
          link={t("log_in")}
          logIn={true}
          onClick={() => setShowSignUpPopup(false)}
        />
      )}

      {showLogInPopup && (
        <PopUpComponent
          title={t("logIn")}
          inputs={logInPopupData}
          btnName_1={t("sign_in")}
          btnName_2={t("signIp_google")}
          txt={t("no_account")}
          link={t("create_account")}
          signUp={true}
          onClick={() => setShowLogInPopup(false)}
        />
      )}
    </div>
  );
};

export default NavBtns;
