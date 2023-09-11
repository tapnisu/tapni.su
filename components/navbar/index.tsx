import MyThemeContext from "@components/MyThemeContextProvider";
import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  const themeCtx = useContext(MyThemeContext);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.title} ${styles.linksContainer}`}>
        <Link className={styles.link} href="/">
          {t.name}
        </Link>
      </div>

      <div className={styles.linksContainer}>
        <Link className={styles.link} href="/">
          {t.home}
        </Link>
        <Link className={styles.link} href="/projects">
          {t.projects}
        </Link>
      </div>

      <div className={styles.linksContainer}>
        <div className={styles.linksContainer}>
          <Link href="" locale="en" style={{ textDecoration: "none" }}>
            EN
          </Link>
          /
          <Link href="" locale="ru" style={{ textDecoration: "none" }}>
            RU
          </Link>
        </div>

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
