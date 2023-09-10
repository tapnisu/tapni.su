import MyThemeContext from "@components/myThemeContextProvider";
import Link from "next/link";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./navbar.module.css";

const paths = [
  { name: "home", url: "/" },
  {
    name: "projects",
    url: "/projects",
  },
  { name: "setup", url: "/setup" },
];

export default function Navbar() {
  const { t } = useTranslation("navbar");

  const themeCtx = useContext(MyThemeContext);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.title} ${styles.linksContainer}`}>
        <Link className={styles.link} href="/">
          Aleksei Rybin
        </Link>
      </div>

      <div className={styles.linksContainer}>
        {paths?.map((info) => (
          <Link className={styles.link} href={info.url} key={info.name}>
            {t(info.name)}
          </Link>
        ))}
      </div>

      <div className={styles.linksContainer}>
        <div
          className={styles.modeSwitcher}
          onClick={themeCtx.toggleThemeHandler}
        >
          {themeCtx.isDarkTheme ? <FaMoon /> : <FaSun />}
        </div>
      </div>
    </nav>
  );
}
