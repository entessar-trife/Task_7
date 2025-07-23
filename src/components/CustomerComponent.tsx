import { CustomersData } from "@/data/CustomersData";
import React from "react";

const CustomerComponent: React.FC<CustomersData> = ({
  customerName,
  customerImage,
  customerOpinion,
}) => {
  return (
    <div
      className="flex flex-col items-center p-[30px] h-full bg-white border border-[#EFEFEF] rounded-3xl"
      data-aos="fade-up"
    >
      <img
        src={customerImage}
        className="h-20 w-20 rounded-full duration-300 hover:scale-110 cursor-pointer"
        alt="customer image"
      />
      <h3 className="text-lg font-normal leading-[100%] mt-[15px] text-myBlack">
        {customerName}
      </h3>
      <div>
        <img src="/images/customer_icon.png" alt="" />
        <p className="text-lg font-normal leading-[30px] px-5 py-2.5 text-myBlack">
          {customerOpinion}
        </p>
        <div className="flex justify-end">
          <img src="/images/customer_icon.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CustomerComponent;
