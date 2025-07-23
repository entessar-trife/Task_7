import React from "react";
import SliderBtns from "./SliderBtns";

interface TitleComponentProps {
  titleStyle?: string;
  subTitle?: string;
  mainTitle: string;
  mainTitleStyle?: string;
  isSlider?: boolean;
  desc?: string;
  aos?: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({
  titleStyle,
  subTitle,
  mainTitle,
  mainTitleStyle,
  isSlider,
  desc,
  aos,
}) => {
  return (
    <div className={`${titleStyle}`} data-aos={aos}>
      <h3 className="text-base font-semibold text-secondary/60">{subTitle}</h3>
      <div className="flex max-[892px]:flex-wrap gap-6 justify-between items-center">
        <h2
          className={`text-2xl md:text-[32px] font-extrabold text-secondary ${mainTitleStyle}`}
        >
          {" "}
          {mainTitle}{" "}
        </h2>
        {isSlider && <SliderBtns />}
      </div>
      <p className="text-lg font-normal leading-8 my-8 text-secondary">
        {" "}
        {desc}{" "}
      </p>
    </div>
  );
};

export default TitleComponent;
