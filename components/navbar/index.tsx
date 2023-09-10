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
      <div className={styles.title}>
        <div className={styles.linksContainer}>
          <div className={styles.link}>
            <Link className={styles.linkName} href="/">
              Aleksei Rybin
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.linksContainer}>
        {paths?.map((info) => (
          <div className={styles.link} key={info.name}>
            <Link className={styles.linkName} href={info.url}>
              {info.name}
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.linksContainer}>
        <FaMoon className={styles.modeSwitcher} onClick={toggleThemeHandler} />
      </div>
    </nav>
  );
}
