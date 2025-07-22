import React from "react";

const LoaderComponent = () => {
  return (
    <div className="bg-[#838080] h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-8 border-t-primary border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoaderComponent;
