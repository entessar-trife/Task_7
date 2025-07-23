"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { InputComponentProps } from "@/type/InputComponent";
import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";
import InputComponent from "./InputComponent";
import MainButton from "./MainButton";
import { useTranslation } from "react-i18next";

interface PopUpComponentProps {
  title: string;
  onClick: () => void;
  btnName_1: string;
  btnName_2: string;
  txt: string;
  link: string;
  inputs: InputComponentProps[];
  signUp?: boolean;
  logIn?: boolean;
}

const PopUpComponent: React.FC<PopUpComponentProps> = ({
  title,
  inputs,
  onClick,
  btnName_1,
  btnName_2,
  txt,
  link,
  signUp,
  logIn,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { t } = useTranslation("form");

  useEffect(() => {
    setMounted(true);

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!mounted) return null;

  const popUp = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/80 p-5">
      <div
        className="flex flex-col gap-6
      bg-white shadow-[0px_4px_20px_0px_#FFFFFF40] rounded-3xl
       py-10 px-6 md:px-[59px] w-[488px]"
        data-aos="fade-down"
      >
        <div className="flex items-center justify-between">
          <span className="text-[32px] font-bold leading-[100%] text-secondary">
            {title}
          </span>
          <IoMdClose
            className="w-5 h-5 text-secondary/60 cursor-pointer duration-300 hover:text-primary"
            onClick={onClick}
          />
        </div>
        <div className="flex flex-col gap-5">
          {inputs.map((input, index) => (
            <InputComponent
              key={index}
              inputStyle={input.inputStyle}
              type={input.type}
              label={input.label}
              placeHolder={input.placeHolder}
              htmlFor={input.htmlFor}
              id={input.id}
              border={input.border}
              labelColor="text-secondary/60"
            />
          ))}
          {logIn && (
            <div className="flex items-center gap-2.5">
              <input
                required
                type="checkbox"
                className="h-[18px] w-[18px] rounded-sm border border-secondary/20"
              />
              <span className="text-sm font-normal leading-[100%] text-secondary/60">
                {t("agree")}
                <Link href="/" className="text-primary">
                  {t("terms")}
                </Link>
                {t("and")}
                <Link href="/" className="text-primary">
                  {t("privacy")}
                </Link>
              </span>
            </div>
          )}
          {signUp && (
            <Link
              href="/"
              className="text-sm font-normal leading-[100%] text-end text-secondary/60 duration-300 hover:text-primary"
            >
              {t("forget_password")}
            </Link>
          )}
        </div>
        <div className="flex flex-col gap-1.5 items-center">
          <MainButton
            btnStyle="text-white bg-primary w-full"
            btnName={btnName_1}
          />
          <span className="text-base font-normal leading-[100%] text-secondary/40">
            {t("or")}
          </span>
          <MainButton
            btnImg="/images/icon_google.png"
            btnStyle="text-secondary/40 border border-secondary/40 w-full"
            btnName={btnName_2}
          />
        </div>
        <div className="text-base font-semibold leading-[100%] text-center">
          <span className="text-secondary">{txt}</span>
          <Link href="/" className="text-primary cursor-pointer">
            {link}
          </Link>
        </div>
      </div>
    </div>
  );
  return createPortal(popUp, document.body);
};

export default PopUpComponent;
