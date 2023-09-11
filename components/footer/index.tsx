import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./footer.module.css";

const paths = [
  { name: "Domains", url: "/domains" },
  { name: "Contact", url: "/contact" },
];

export default function Footer() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <footer className={styles.footer}>
      <div className={styles.toSides}>
        <div>
          <p>
            <b>{t.name}</b>
          </p>
          <div className={styles.links}>
            <Link href="/domains" className={styles.link}>
              {t.domains}
            </Link>
            <Link href="/contact" className={styles.link}>
              {t.contact}
            </Link>
          </div>
        </div>

        <div>
          <p>{t.footer.madeWith}</p>

          <p>
            {t.footer.sourceCodeOn}
            <Link href="https://github.com/tapnisu/website/">Github</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
