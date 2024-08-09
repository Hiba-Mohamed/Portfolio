import React from "react";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
const Home = () => {
  return (
    <>
      <div className="min-h-screen items-centerfont-OpenSans flex flex-col items-center max-w-xl sm:max-w-full">
        <Banner />
        <AboutMe />
        <Skills />
      </div>
    </>
  );
};

export default Home;
