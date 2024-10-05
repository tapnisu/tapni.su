import { useTranslation } from "react-i18next";
import { ModeToggle } from "./mode-toggle";

export interface Link {
  title: string;
  href: string;
}

export function Navbar() {
  const { t } = useTranslation();

  const links: Link[] = [
    { title: "Tapnisu", href: "/" },
    { title: t("projects.title"), href: "/projects" },
  ];

  return (
    <nav>
      <div>
        {links.map((link, index) => (
          <a href={link.href} key={index}>
            {link.title}
          </a>
        ))}
      </div>

      <ModeToggle />
    </nav>
  );
}
