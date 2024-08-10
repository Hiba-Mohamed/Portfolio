import React from "react";

const Projects = () => {
  return (
    <div
      className="bg-gray-800 flex flex-col w-full text-gray-50 sm:py-24"
      id="projects"
    >
      <h2 className="text-3xl px-10 sm:text-4xl lg:text-5xl font-bold">
        Featured Projects
      </h2>
      <h3 className="px-10 pt-5">Click on the project for live pages</h3>
      <div className="flex flex-col lg:flex-row lg:justify-center items-center py-12">
        {" "}
        <a
          href="https://hiba-mohamed.github.io/Collab-NAS-Project/"
          target="blank"
        >
          <div className="text-center flex flex-row lg:flex-col items-center gap-8 m-4 shadow-gray-900 shadow-lg-custom rounded-md px-6 py-4 ">
            <img src="/NAS-logo-icon.png" className="w-20" alt="" />
            <p>
              Nurses Assignment Sheet (NAS)
              <br /> UI/UX collaboration
            </p>
          </div>
        </a>
        <a
          href="https://hiba-mohamed.github.io/Reactjs-Nurses-Assignment-Sheet/"
          target="blank"
        >
          <div className="text-center flex flex-row lg:flex-col items-center gap-8 m-4 shadow-gray-900 shadow-lg-custom rounded-md px-6 py-4">
            <img src="/NAS-logo.png" className="w-20" alt="" />
            <p>
              Nurses Assignment Sheet (NAS)
              <br /> ReactJS
            </p>
          </div>
        </a>{" "}
        <a
          href="https://hiba-mohamed.github.io/Nurses-Assignment-Sheet/"
          target="blank"
        >
          <div className="text-center flex flex-row lg:flex-col items-center gap-8 m-4 shadow-gray-900 shadow-lg-custom rounded-md px-6 py-4">
            <img src="/logo.png" className="w-20" alt="" />
            <p>
              Nurses Assignment Sheet (NAS)
              <br /> Vanilla JS
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
