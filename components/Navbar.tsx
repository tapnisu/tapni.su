const Navbar = () => {
  return (
    <>
      <nav className="fixed bg-black text-white w-full">
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
      </nav>
    </>
  );
};

export default Navbar;
