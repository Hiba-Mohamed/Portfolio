import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

export function Heading() {
  return (
    <nav className="border-slate-50 bg-white font-OpenSans">
      <div className="max-w-2xl flex flex-wrap items-center justify-between mx-auto px-4 max-w-7xl">
        <div id="navbar-hamburger">
          <ul className="hidden text-sm md:flex flex gap-6 flex-row items-center font-medium rounded-lg md:pt-2 md:pb-2">


            <li>
              <a
                href="http://github.com/Hiba-Mohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-bold py-2 pl-3 pr-4 text-gray-900 rounded hover:text-gray-50 border border-violet-950 rounded-full hover:bg-violet-950 hover:text-gray-50"
              >
                {" "}
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div
          id="navbar-hamburger"
        >
          <ul className="md:hidden flex flex-col items-center font-medium my-4 rounded-lg">
          
            <li>
              <a
                href="http://github.com/Hiba-Mohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-bold py-2 pl-3 pr-4 text-gray-900 rounded hover:text-sky-600"
              >
                {" "}
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Heading;
