const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 flex justify-center w-full">
        <div className="bg-gray-900 text-white rounded-full m-2 p-1">
          <ul>
            <li className="inline-block m-2 mx-4">
              <a href="/">Home</a>
            </li>
            <li className="inline-block m-2 mx-4">
              <a href="/projects">Projects</a>
            </li>
            <li className="inline-block m-2 mx-4">
              <a href="/setup">My tools</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
