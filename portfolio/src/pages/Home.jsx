import React from "react";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import TechMedQuiz from "../components/TechMedQuiz";
const Home = () => {
  return (
    <>
      <div className="min-h-screen items-centerfont-OpenSans flex flex-col items-center ">
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <TechMedQuiz />
      </div>
    </>
  );
};

export default Home;
