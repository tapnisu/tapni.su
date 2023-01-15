const Navbar = () => {
  return (
    <>
      <nav className="fixed flex justify-center w-full">
        <div className="bg-gray-900 text-white rounded-full m-4">
          <ul>
            <li className="inline-block m-4">
              <a href="/" className="m-4">
                Home
              </a>
            </li>
            <li className="inline-block m-4">
              <a href="/projects" className="m-4">
                Projects
              </a>
            </li>
            <li className="inline-block m-4">
              <a href="/contact" className="m-4">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
