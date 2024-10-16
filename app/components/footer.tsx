import clsx from "clsx";

import "./footer.css";

export interface Link {
  title: string;
  href: string;
}

export function Footer(props: React.HTMLAttributes<HTMLDivElement>) {
  const links: Link[] = [
    { title: "X", href: "/x" },
    { title: "Telegram", href: "/telegram" },
    { title: "Discord", href: "/discord" },
    { title: "GitHub", href: "/github" },
    { title: "Email", href: "/email" },
  ];

  return (
    <footer className={clsx("footer", props.className)} {...props}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
