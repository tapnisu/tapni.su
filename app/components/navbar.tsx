import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Link } from "react-router";

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
          <Link to={link.href} className="nav__link" key={index}>
            {link.title}
          </Link>
        ))}
      </div>

      <div>{/*<ModeToggle />*/}</div>
    </nav>
  );
}
