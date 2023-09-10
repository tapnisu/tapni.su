import MyThemeContext from "@components/MyThemeContextProvider";
import Link from "next/link";
import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import styles from "./navbar.module.css";

const paths = [
  { name: "Home", url: "/" },
  {
    name: "Projects",
    url: "/projects",
  },
  { name: "Setup", url: "/setup" },
];

export default function Navbar() {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

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
            {info.name}
          </Link>
        ))}
      </div>

      <div className={styles.linksContainer}>
        <FaMoon className={styles.modeSwitcher} onClick={toggleThemeHandler} />
      </div>
    </nav>
  );
}
