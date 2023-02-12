const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 flex justify-center w-full">
        <div className="bg-gray-900 text-white rounded-full m-2 p-1">
          <ul>
            <li className="inline-block m-2 mx-4">
              <a href="/" className="hover:text-indigo-400 transition-colors">
                Home
              </a>
            </li>
            <li className="inline-block m-2 mx-4">
              <a
                href="/projects"
                className="hover:text-indigo-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li className="inline-block m-2 mx-4">
              <a
                href="/setup"
                className="hover:text-indigo-400 transition-colors"
              >
                My tools
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
