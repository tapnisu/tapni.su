const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-gray-900 flex flex-row flex-wrap items-center justify-around p-8 w-full">
      <div>
        <h2 className="text-xl">Social media</h2>
        <ul className="p-4 list-circle">
          <li>
            <a
              href="https://github.com/tapnisu"
              className="hover:text-indigo-400 transition-colors"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/users/586128640136445964"
              className="hover:text-indigo-400 transition-colors"
            >
              Discord: (tapnisu#7384)
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/tapnisu"
              className="hover:text-indigo-400 transition-colors"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://t.me/tapnisu"
              className="hover:text-indigo-400 transition-colors"
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>

      <h3 className="p-4 text-gray-400">
        © 2023 Alexiy Rybin. All rights reserved.<br />
        <a
          href="https://github.com/tapnisu/website"
          className="font-mono italic hover:text-indigo-400 transition-colors"
        >
          Check website's source code {"<-"}
        </a>
      </h3>
    </footer>
  );
};

export default Footer;
