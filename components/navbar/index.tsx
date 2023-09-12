import ThemeSwitch from "@components/themeSwitch";
import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbar}>
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
          <div className={styles.languageSwitcher}>
            <Link href="" locale="en">
              EN
            </Link>
            /
            <Link href="" locale="ru">
              RU
            </Link>
          </div>

          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
