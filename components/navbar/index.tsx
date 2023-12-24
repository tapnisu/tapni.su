import ThemeSwitch from "@components/themeSwitch";
import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";

export default function Navbar(props: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <nav className={`${styles.navbarContainer} ${props.className}`} {...props}>
      <div className={styles.navbar}>
        <div className={`${styles.title} ${styles.linksContainer}`}>
          <Link className={styles.link} href="/">
            {t.name}
          </Link>
        </div>

        <div className={styles.linksContainer}>
          <Link className={styles.link} href="/">
            {t.homeTitle}
          </Link>
          <Link className={styles.link} href="/projects">
            {t.projectsTitle}
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
