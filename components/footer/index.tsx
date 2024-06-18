import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./footer.module.css";
import LocaleSwitch from "@components/LocaleSwitch";
import ThemeSwitch from "@components/ThemeSwitch";

export default function Footer(props: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <footer {...props}>
      <div className={styles.footer}>
        <div className={styles.inner}>
          <b className={styles.name}>
            {t.name}{" "}
            <Link href="/cookie" className={styles.cookie}>
              🍪
            </Link>
          </b>

          <ul className={styles.links}>
            <li>
              <Link href="https://github.com/tapnisu/tapni.su/">
                {t.footer.sourceCodeOn}
              </Link>
            </li>
          </ul>

          <div className={styles.buttonsContainer}>
            <LocaleSwitch />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
