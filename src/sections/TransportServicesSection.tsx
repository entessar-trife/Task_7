"use client";
import CardComponent from "@/components/CardComponent";
import { getTransportServicesData } from "@/data/TransportServicesData";
import React from "react";
import { useTranslation } from "react-i18next";

const TransportServicesSection = () => {
  const { t } = useTranslation("transport");
  const transportServices = getTransportServicesData(t);

  return (
    <section className="px-5 md:px-[100px] [@media(min-width:1920px)]:px-[250px] flex max-lg:flex-wrap justify-center min-[820px]:justify-between pt-14 md:pt-[120px] gap-[33px]">
      {transportServices.map((card, index) => (
        <CardComponent
          key={index}
          cardStyle="w-full min-[380px]:w-[293px] min-[900px]:w-[330px] "
          img={card.img}
          title={card.title}
          titleStyle="text-2xl font-bold leading-[32px]"
          desc={card.desc}
          contentStyle="flex flex-col gap-1.5 mt-5"
        />
      ))}
    </section>
  );
};

export default TransportServicesSection;
