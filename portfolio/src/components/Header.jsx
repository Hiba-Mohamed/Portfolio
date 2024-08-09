export function Heading() {
  return (
    <nav className="bg-navy font-OpenSans">
      <div className="max-w-2xl flex flex-wrap items-center justify-between mx-auto px-4 max-w-7xl">
          <ul className="text-xs pt-2 md:flex flex gap-6 flex-row items-center font-medium rounded-lg md:pt-2 md:pb-2">
            <li>
              <a
                href="http://github.com/Hiba-Mohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-bold py-1 px-4 text-white rounded hover:text-gray-50 border border-white rounded-md hover:bg-gray-950 hover:text-gray-50"
              >
                {" "}
                GitHub
              </a>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Heading;
