import { useTranslation } from "react-i18next";
import { ModeToggle } from "./mode-toggle";
import clsx from "clsx";

import "./navbar.css";

export interface Link {
  title: string;
  href: string;
}

export function Navbar(props: React.HTMLAttributes<HTMLDivElement>) {
  const { t } = useTranslation();

  const links: Link[] = [
    { title: "Tapnisu", href: "/" },
    { title: t("projects.title"), href: "/projects" },
  ];

  return (
    <nav className={clsx("nav", props.className)} {...props}>
      <div>
        {links.map((link, index) => (
          <a href={link.href} className="nav__link" key={index}>
            {link.title}
          </a>
        ))}
      </div>

      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
