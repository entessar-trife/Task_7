import i18n from "@/i18n";
import { CardComponentProps } from "@/type/CardComponent";
import React from "react";

const CardComponent: React.FC<CardComponentProps> = ({
  cardStyle,
  contentStyle,
  img,
  title,
  titleStyle,
  price,
  info,
  desc,
}) => {
  return (
    <div className={`${cardStyle}`} data-aos="fade-up">
      <div className="overflow-hidden">
        <img
          src={img}
          className="duration-300 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] hover:scale-105 cursor-pointer"
          alt="card image"
        />
      </div>
      <div className={`${contentStyle}`}>
        <h3
          className={
            titleStyle ?? "text-2xl font-bold leading-[100%] text-secondary"
          }
        >
          {title}
        </h3>
        {price && (
          <h4 className="text-lg font-semibold text-secondary/80">
            {i18n.language == "en" ? "from" : "من"}{" "}
            <span className="text-2xl font-extrabold leading-[100%] text-primary">
              {price}
            </span>
          </h4>
        )}
        <div className="flex justify-between">
          {info?.map((e, index) => (
            <span
              key={index}
              className="flex gap-1.5 text-base font-semibold uppercase text-primary/60"
            >
              <img src={e.icon} alt="" />
              {e.txt}
            </span>
          ))}
        </div>
        <p className="text-lg font-normal text-secondary leading-[26px]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
