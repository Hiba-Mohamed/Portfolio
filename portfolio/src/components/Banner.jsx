import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative min-h-screen w-full bg-center bg-no-repeat bg-cover bg-banner flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/100 to-gray-50/60 sm:to-gray-50/60"></div>
      <div className="relative z-10 flex flex-col justify-center  h-full text-center text-white space-y-4">
        <div className="md:pb-24 sm:w-152">
          <h1 className="text-3xl font-bold text-start px-8 md:text-5xl ">
            Welcome to Hiba’s Portfolio
          </h1>
          <h2 className="text-2xl  pt-10 text-start px-8 md:text-4xl">
            Bridging Healthcare and Technology
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 sm:w-152 md:gap-12 p-12 sm:py-0 md:pb-32 sm:px-8">
          <Link
            to="/contact"
            className="text-lg text-white font-bold border-white border-4 rounded-md w-60 py-0.5 hover:bg-white hover:text-gray-800 md:text-xl md:w-56 md:py-2"
          >
            Contact Me
          </Link>
          <a
            href="#projects"
            className="text-lg text-navy font-bold border-navy border-4 rounded-md w-60 py-0.5 hover:bg-navy hover:text-white md:text-xl md:w-56 md:py-2"
          >
            Featured Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
