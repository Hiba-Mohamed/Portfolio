import React from 'react'

const Projects = () => {
  return (
    <div className="bg-gray-800">
      <h2>Featured Projects</h2>
      <h3>Click on the project for live pages</h3>
      <a href="https://hiba-mohamed.github.io/Collab-NAS-Project/">
        <div>
          <img src="/NAS-logo-icon.png" alt="" />
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
  );
}

export default Projects