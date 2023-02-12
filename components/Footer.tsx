const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-gray-900 flex flex-row flex-wrap items-center justify-around p-8 w-full">
      <div>
        <h2 className="text-xl">Social media</h2>
        <ul className="p-4 list-circle">
          {[
            { title: "Github: tapnisu", url: "https://github.com/tapnisu" },
            {
              title: "Discord: (tapnisu#7384)",
              url: "https://discord.com/users/586128640136445964",
            },
            { title: "Twitter: @tapnisu", url: "https://twitter.com/tapnisu" },
            { title: "Telegram: @tapnisu", url: "https://t.me/tapnisu" },
          ]?.map((info: { title: string; url: string }) => (
            <li>
              <a
                href={info.url}
                className="hover:text-indigo-400 transition-colors"
              >
                {info.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="p-4 text-gray-400">
        © 2023 Alexiy Rybin. All rights reserved.
        <br />
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
