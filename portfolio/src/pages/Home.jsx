import React from "react";

// import ProjectCard from "../components/ProjectCard";
const Home = () => {
  return (
    <>
      <div className="bg-pattern min-h-screen items-centerfont-OpenSans flex flex-col items-center max-w-xl sm:max-w-full px-2">
        <div className="min-h-screen items-center bg-violet-50 font-OpenSans flex flex-col max-w-xs md:max-w-xl  lg:max-w-6xl shadow-2xl px-2">
          <h1 className="p-6 font-bold text-2xl md:p-12 md:text-5xl ">
            Welcome to Hiba's Portfolio
          </h1>
          <h2 className="p-4 font-bold text-xl md:p-8 md:text-4xl text-center ">
            Bridging Healthcare and Technology
          </h2>{" "}
          <div>
            <h3 className="text-lg font-bold md:text-3xl">About Me</h3>
            <p>
              Hello! I'm Hiba, a dedicated healthcare professional with over 3
              years of experience in healthcare clinical practice. Recently, I
              have transitioned into the exciting world of software development,
              bringing with me a passion for improving healthcare through
              innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
