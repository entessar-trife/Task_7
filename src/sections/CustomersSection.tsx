"use client";
import CustomerComponent from "@/components/CustomerComponent";
import TitleComponent from "@/components/TitleComponent";
import { getCustomersData } from "@/data/CustomersData";
import React from "react";
import { useTranslation } from "react-i18next";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomersSection = () => {
  const { t, i18n } = useTranslation("customers");
  const customersData = getCustomersData(t);

  return (
    <section className="pt-24 md:pt-[123px] px-5 md:px-[100px] [@media(min-width:1920px)]:px-[250px]">
      <TitleComponent
        mainTitle={t("section_title")}
        isSlider={true}
        aos={i18n.language == "en" ? "fade-right" : "fade-left"}
      />
      <div className="flex justify-between gap-5 mt-[60px]">
        <Swiper
          dir={i18n.language == "ar" ? "rtl" : "ltr"}
          modules={[Navigation, Autoplay]}
          loop
          spaceBetween={20}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            1280: { slidesPerView: 2 },
          }}
        >
          {customersData.map((card, index) => (
            <SwiperSlide
              key={index}
              className="!w-[260px] md:!w-[400px] xl:!w-[700px]"
            >
              <CustomerComponent
                key={index}
                customerImage={card.customerImage}
                customerName={card.customerName}
                customerOpinion={card.customerOpinion}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomersSection;
