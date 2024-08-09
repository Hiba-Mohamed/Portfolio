import React from "react";

const Banner = () => {
  return (
    <div className="relative min-h-screen w-full bg-center bg-no-repeat bg-cover bg-banner flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/100 to-gray-50/60 sm:to-gray-50/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-4">
        <div className="md:pb-24">
          <p className="text-5xl font-bold text-start px-8 md:text-7xl ">
            Welcome to Hiba’s Portfolio
          </p>
          <p className="text-3xl  pt-10 text-start px-8 md:text-5xl lg:text-center">
            Bridging Healthcare and Technology
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 md:gap-24 p-12 md:p-0">
          <span className="text-lg text-white font-bold border-white border-4 rounded-md w-60 py-0.5 hover:bg-white hover:text-gray-800 md:text-2xl md:w-72 md:py-2">
            Contact Me
          </span>
          <span className="text-lg text-navy font-bold border-navy border-4 rounded-md w-60 py-0.5 hover:bg-navy hover:text-white md:text-2xl md:w-72 md:py-2">
            Featured Projects
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
