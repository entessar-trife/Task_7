import TitleComponent from "@/components/TitleComponent";
import i18n from "@/i18n";
import Link from "next/link";
import React from "react";

const OffersSection = () => {
  const isAr = i18n.language === "ar";
  return (
    <section className="relative px-5 md:px-[100px] [@media(min-width:1920px)]:px-[250px] py-[60px] mt-24 md:mt-[217px] bg-[#fec391]">
      <img
        src="/images/offers_picture.webp"
        className={`absolute bottom-0 hidden lg:block 
    ${
      i18n.language === "ar"
        ? "left-[100px] [@media(min-width:1920px)]:left-[250px]"
        : "right-[100px] [@media(min-width:1920px)]:right-[250px]"
    }`}
        alt="offers picture"
        data-aos={isAr ? "fade-right" : "fade-left"}
      />
      <div
        className="flex flex-col justify-center items-center bg-[#FFFFFF4D] rounded-3xl w-full lg:w-[400px] xl:w-[570px] p-[30px]"
        data-aos={isAr ? "fade-left" : "fade-right"}
      >
        <TitleComponent
          titleStyle="text-center"
          mainTitle={
            isAr
              ? "احصل على عروض خاصة للمؤسسات"
              : "Get Special Offers for Organizations"
          }
          mainTitleStyle="mx-auto"
          desc={
            isAr
              ? "احصل على عروض خاصة للمؤسسات , احصل على عروض خاصة للمؤسسات, احصل على عروض خاصة للمؤسسات , احصل على عروض خاصة للمؤسسات"
              : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }
        />
        <Link
          href="/contact"
          className="text-base xl:text-xl font-semibold leading-[100%] text-center cursor-pointer 
         rounded-[50px] py-2.5 px-4 xl:px-6  text-white bg-primary w-[212px] duration-300 hover:scale-105"
        >
          {isAr ? "اتصل بنا" : "Contact Us"}
        </Link>
      </div>
    </section>
  );
};

export default OffersSection;
