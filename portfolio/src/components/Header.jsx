import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

export function Heading() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="border-slate-50 bg-white font-OpenSans">
      <div className="max-w-2xl flex flex-wrap items-center justify-between mx-auto px-4 max-w-7xl">
        <div id="navbar-hamburger">
          <ul className="hidden text-sm md:flex flex gap-6 flex-row items-center font-medium rounded-lg">
            <li>
              <Link
                to="/"
                className="block font-bold text-gray-900 hover:text-sky-700 py-4 hover:pb-3 px-4 hover:bg-sky-100  hover: hover:border-b-4 hover:border-sky-600"
                onClick={() => setOpen(!open)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="block font-bold text-gray-900 hover:text-sky-700 py-4 hover:pb-3 px-4 hover:bg-sky-100  hover: hover:border-b-4 hover:border-sky-600"
                onClick={() => setOpen(!open)}
              >
                Projects
              </Link>
            </li>

            <li>
              <a
                href="http://github.com/Hiba-Mohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-bold py-2 pl-3 pr-4 text-gray-900 rounded hover:text-sky-600"
                onClick={() => setOpen(!open)}
              >
                {" "}
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center gap-4 hidden md:flex"></div>
        <button
          onClick={() => setOpen(!open)}
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
        >
          {open ? <TfiClose /> : <RxHamburgerMenu />}
        </button>
        <div
          className={`${open ? "block" : "hidden"} w-full`}
          id="navbar-hamburger"
        >
          <ul className="md:hidden flex flex-col items-center font-medium my-4 rounded-lg">
            <li>
              <Link
                to="/"
                className="block font-bold py-2 pl-3 pr-4 text-gray-900 rounded hover:text-sky-600"
                aria-current="page"
                onClick={() => setOpen(!open)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block font-bold py-2 pl-3 pr-4 text-gray-900 rounded hover:text-sky-600"
                onClick={() => setOpen(!open)}
              >
                Projects
              </Link>
            </li>

            <li>
              <a
                href="http://github.com/Hiba-Mohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-bold py-2 pl-3 pr-4 text-gray-900 rounded hover:text-sky-600"
                onClick={() => setOpen(!open)}
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
