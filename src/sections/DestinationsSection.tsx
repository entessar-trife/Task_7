"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import CardComponent from "@/components/CardComponent";
import TitleComponent from "@/components/TitleComponent";
import { useTranslation } from "react-i18next";
import { getDestinationsData } from "@/data/DestinationsData";

export default function DestinationsSection() {
  const { t, i18n } = useTranslation("destinations");
  const destinationsData = getDestinationsData(t);
  const isAr = i18n.language === "ar";

  return (
    <section className="px-5 md:px-[100px] [@media(min-width:1920px)]:px-[250px] pt-24 md:pt-[123px]">
      <TitleComponent
        isSlider={true}
        mainTitle={t("section_title")}
        aos={isAr ? "fade-left" : "fade-right"}
      />
      <div className="flex justify-between gap-[33px] mt-[60px]">
        <Swiper
          dir={isAr ? "rtl" : "ltr"}
          modules={[Navigation]}
          loop
          spaceBetween={33}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1280: { slidesPerView: 4 },
          }}
        >
          {destinationsData.map((card, index) => (
            <SwiperSlide key={index} className="!w-[260px] md:!w-[330px]">
              <CardComponent
                img={card.img}
                title={card.title}
                price={card.price}
                info={card.info}
                desc={card.desc}
                contentStyle="flex flex-col gap-3 mt-4"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
