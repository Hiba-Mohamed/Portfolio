import React from "react";
import ContactInfo from "../components/ContactInfo";
import { FaRegEnvelope } from "react-icons/fa6";

const contactPage = () => {
  return (
    <div className="min-h-screen bg-gray-800 px-2 py-8 sm:py-16 ">
      <div className="flex flex-row items-center gap-10">
        <h1 className="text-gray-50 text-3xl sm:text-5xl py-8 px-2 font-bold">
          {" "}
          Contact Info
        </h1>
        <FaRegEnvelope className="text-5xl sm:text-7xl text-gray-700" />
      </div>
      <ContactInfo />
    </div>
  );
};

export default contactPage;
