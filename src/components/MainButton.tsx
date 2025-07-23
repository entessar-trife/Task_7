import React from "react";

interface MainButtonProps {
  onClick?: () => void;
  btnName: string;
  btnStyle: string;
  btnImg?: string;
  aos?: string;
}
const MainButton: React.FC<MainButtonProps> = ({
  btnName,
  btnStyle,
  onClick,
  btnImg,
  aos,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative text-base xl:text-xl font-semibold leading-[100%] cursor-pointer
         rounded-[50px] py-2.5 px-3 xl:px-6 
     ${btnStyle}`}
      data-aos={aos}
    >
      {btnImg && (
        <img
          src={btnImg}
          className="max-xl:w-5 absolute bottom-[7px]"
          alt="icon"
        />
      )}
      {btnName}
    </button>
  );
};

export default MainButton;
