import React from "react";
import HeroContent from "./HeroContent";
import { HeroContentData } from "@/type/HeroContentData";

const SubHero: React.FC<HeroContentData> = ({
  Heading,
  mainTitle,
  desc,
  link,
}) => {
  return (
    <div className="flex justify-center items-center h-screen bg-[url(/images/hero/hero_2.webp)] bg-no-repeat bg-cover bg-black/20 bg-blend-overlay">
      <HeroContent
        heroContentStyle="gap-6"
        Heading={Heading}
        mainTitle={mainTitle}
        desc={desc}
        link={link}
      />
    </div>
  );
};

export default SubHero;
