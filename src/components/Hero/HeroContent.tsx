import { HeroContentData } from "@/type/HeroContentData";
import Link from "next/link";
import React from "react";

const HeroContent: React.FC<HeroContentData> = ({
  heroContentStyle,
  Heading,
  mainTitle,
  desc,
  link,
}) => {
  return (
    <div
      className={`flex flex-col items-center text-white max-lg:pt-48 max-lg:px-5  
    ${heroContentStyle}`}
      data-aos="zoom-in"
    >
      <Heading className="text-[40px] md:text-6xl xl:text-7xl font-normal leading-[100%] text-center podcast-font">
        {mainTitle}
      </Heading>
      <p className="w-full md:w-[650px] xl:w-[847px] text-lg md:text-[20px] xl:text-2xl font-bold text-center">
        {desc}
      </p>
      {link && (
        <Link
          href="/tour"
          className="py-[14px] px-6 text-base xl:text-xl font-semibold leading-[100%] cursor-pointer
           border-[1.5px] border-white rounded-[50px] duration-500 hover:bg-white hover:text-primary"
        >
          {link}
        </Link>
      )}
    </div>
  );
};

export default HeroContent;
