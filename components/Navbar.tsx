const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 flex justify-center w-full">
        <div className="bg-gray-900 text-white rounded-full m-2 p-1">
          <ul>
            {[
              { name: "Home", url: "/" },
              {
                name: "Projects",
                url: "/projects",
              },
              { name: "Setup", url: "/setup" },
            ]?.map((info: { name: string; url: string }) => (
              <li className="inline-block m-2 mx-4">
                <a
                  href={info.url}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {info.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
