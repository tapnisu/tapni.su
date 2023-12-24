import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./footer.module.css";

export default function Footer(props: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <footer
      className={`${styles.footerContainer} ${props.className}`}
      {...props}
    >
      <div className={styles.footer}>
        <div className={styles.toSides}>
          <div className={styles.links}>
            <b className={styles.name}>
              {t.name}{" "}
              <Link href="/cookie" className={styles.cookie}>
                🍪
              </Link>
            </b>
            <Link href="/domains" className={styles.link}>
              {t.domainsTitle}
            </Link>
            <Link href="/contact" className={styles.link}>
              {t.contactTitle}
            </Link>
          </div>

          <div>
            <p>{t.footer.madeWith}</p>

            <p>
              {t.footer.sourceCodeOn}
              <Link href="https://github.com/tapnisu/website/">Github</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
