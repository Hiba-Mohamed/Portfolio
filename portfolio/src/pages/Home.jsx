import React from "react";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <>
      <div className="min-h-screen items-centerfont-OpenSans flex flex-col items-center max-w-xl sm:max-w-full">
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </>
  );
};

export default Home;
