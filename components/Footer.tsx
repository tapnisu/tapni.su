const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-gray-900 flex flex-col items-center p-8 w-full">
      <h2 className="text-xl">Social media</h2>
      <ul className="p-4">
        <li>
          <a href="https://github.com/tapnisu">Github</a>
        </li>
        <li>
          <a href="https://discord.com/users/586128640136445964">
            Discord: (tapnisu#7384)
          </a>
        </li>
        <li>
          <a href="https://twitter.com/tapnisu">Twitter</a>
        </li>
        <li>
          <a href="https://t.me/tapnisu">Telegram</a>
        </li>
      </ul>
      <h3 className="p-4">Copyright © 2023 Alexiy Rybin</h3>
    </footer>
  );
};

export default Footer;
