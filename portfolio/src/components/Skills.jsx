import React from "react";

const Skills = () => {
  return (
    <div className=" flex flex-col relative w-full bg-gray-800 text-slate-50 gap-10 pb-40 sm:pb-56">
      <div className="flex flex-row gap-20  sm:gap-64 px-10 sm:px-20 pt-24 sm:pt-0">
        <h2 className="text-3xl font-bold sm:text-5xl">My Skills</h2>
        <p className="text-3xl font-bold text-gray-700 sm:text-5xl  ">
          &lt;/&gt;
        </p>
      </div>
      <div>
        <ul className="flex flex-col px-10 sm:px-20 text-lg gap-5 sm:text-2xl sm:gap-10">
          <li>
            <strong>Languages: <br/></strong> JavaScript, TypeScript, ejs, Python, Java
          </li>
          <li>
            <strong>Web Development:<br/> </strong> HTML, CSS, React, Node.js
          </li>
          <li>
            <strong>Database Management:<br/></strong> MongoDB, SQL
          </li>
          <li>
            <strong>Tools: </strong><br/>Git, Figma, Canva, GitHub, AI 
          </li>
          <li>
            <strong>Cloud Computing: <br/> </strong>AWS Cloud Practitioner Course, AWS Cloud Development course
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
