import React from "react";

const Projects = () => {
  return (
    <div className="bg-gray-800 flex flex-col w-full text-gray-50">
      <h2 className="text-3xl px-10  font-bold">Featured Projects</h2>
      <h3 className="px-10 pt-5">
        Click on the project for live pages
      </h3>
      <div className="flex flex-col items-center">
        {" "}
        <a href="https://hiba-mohamed.github.io/Collab-NAS-Project/">
          <div className="text-center">
            <img src="/NAS-logo-icon.png" className="w-20" alt="" />
            <p>
              Nurses Assignment Sheet (NAS)
              <br /> UI/UX collaboration
            </p>
          </div>
        </a>
        <a href="https://hiba-mohamed.github.io/Reactjs-Nurses-Assignment-Sheet/">
          <div>
            <img src="/NAS-logo.png" alt="" />
          </div>
        </a>{" "}
        <a href="https://hiba-mohamed.github.io/Nurses-Assignment-Sheet/">
          <div>
            <img src="/logo.png" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
