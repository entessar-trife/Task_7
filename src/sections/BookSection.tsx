import BookComponent from "@/components/BookComponent";
import i18n from "@/i18n";
import React from "react";

const BookSection = () => {
  const isAr = i18n.language === "ar";

  return (
    <section className="relative px-5 md:px-[100px] [@media(min-width:1920px)]:px-[250px] py-[60px] mt-[63px] bg-[#fec391]">
      <BookComponent />
      <img
        src="/images/bike_picture.webp"
        className={`hidden xl:block max-[1655px]:w-[550px]
          absolute bottom-[-34px] ${
            isAr
              ? "left-[60px] [@media(min-width:1920px)]:left-[200px]"
              : "right-[60px] [@media(min-width:1920px)]:right-[200px]"
          }
        `}
        alt="bike image"
        data-aos={isAr ? "fade-right" : "fade-left"}
      />
    </section>
  );
};

export default BookSection;
