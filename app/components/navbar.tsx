import { useTranslation } from "react-i18next";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

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
    <nav className="w-full flex flex-row justify-between items-center p-4">
      <div>
        {links.map((link, index) => (
          <a
            className={buttonVariants({ variant: "link" })}
            href={link.href}
            key={index}
          >
            {link.title}
          </a>
        ))}
      </div>

      <ModeToggle />
    </nav>
  );
}
