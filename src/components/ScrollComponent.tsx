"use client";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ScrollComponent = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const [showBottomBtn, setShowBottomBtn] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollBottom = scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    setShowTopBtn(scrollY > 500);

    setShowBottomBtn(scrollBottom + 100 < pageHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed right-5 bottom-5 z-50
        bg-primary
          w-10 h-10 flex items-center justify-center
        rounded-full cursor-pointer 
        duration-300 hover:-translate-y-0.5 ${
          showTopBtn ? "opacity-100" : "opacity-0"
        }`}
      >
        <IoIosArrowUp className="text-white text-xl" />
      </button>

      <button
        onClick={scrollToBottom}
        className={`fixed bottom-5 z-50
        bg-primary
          w-10 h-10 flex items-center justify-center
        rounded-full cursor-pointer 
        duration-300 hover:-translate-y-0.5 
        ${showTopBtn ? "right-17" : "right-5"}
        ${showBottomBtn ? "opacity-100" : "opacity-0"}`}
      >
        <IoIosArrowDown className="text-white text-xl" />
      </button>
    </div>
  );
};

export default ScrollComponent;
