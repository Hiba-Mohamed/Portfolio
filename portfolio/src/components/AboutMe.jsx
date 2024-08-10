import React from "react";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-800 text-white">
      <div className="absolute inset-0 bg-cover bg-center bg-gray-800"></div>

      <div className="absolute inset-0 flex flex-col sm:flex-row gap-56 sm:gap-72 sm:pr-20 sm:pb-96 lg:gap-152 lg:pb-56 items-end sm:items-start justify-center sm:justify-end space-x-4">
        <div className="flex flex-col gap-32 sm:gap-96  pt-12 md:pt-0 ">
          <div className="flex flex-row justify-end sm:flex-col">
            {" "}
            <img className="w-20 h-20 lg:w-32 lg:h-32 opacity-15" src="/cloudIcon.png" alt="" />
          </div>
          <div>
            {" "}
            <img
              className="w-20 h-20 lg:w-32 lg:h-32 opacity-15"
              src="/computerIcon.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-32 sm:gap-96  ">
          <div className="flex flex-row justify-end ">
            {" "}
            <img
              className="w-20 h-20 lg:w-32 lg:h-32 opacity-15 "
              src="/pillcIcon.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <img className="w-20 h-20 lg:w-32 lg:h-32 opacity-15" src="/dnaIcon.png" alt="" />
          </div>
        </div>
      </div>

      <div className="relative sm:z-0 z-10 p-8 md:p-16 gap-24 py-16 flex flex-col space-y-6 sm:space-y-0 sm:flex-row  sm:justify-center">
        <div className="sm:flex-1">
          <p className="text-3xl font-semibold lg:text-4xl lg:py-12">
            Aspiring Software Developer
          </p>
          <p className="mt-2 text-lg lg:text-2xl">
            Enthusiastic and motivated aspiring software developer with a
            passion for creating innovative and efficient solutions. My journey
            into the world of software development began with a curiosity for
            technology and a desire to understand how things work behind the
            scenes. This curiosity quickly turned into a full-blown passion,
            leading me to immerse myself in learning various programming
            languages, development frameworks, and best practices.
          </p>
        </div>
        <div className="sm:flex-1">
          <p className="text-3xl font-semibold lg:text-4xl lg:py-12">
            Healthcare Professional
          </p>
          <p className="mt-2 text-lg lg:text-2xl">
            My journey into healthcare began with a profound desire to make a
            difference in people's lives. This passion inspired me to pursue a
            rigorous education to fulfill my aspiration of providing exceptional
            care. Over the years, I have continually advanced my knowledge and
            skills through ongoing education and hands-on experience in diverse
            healthcare settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
