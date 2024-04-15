import Link from "next/link";

import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

import styles from "./introduction.module.css";
import { contacts } from "@lib/contact";

export default function Introduction(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <div {...props}>
      <div className={styles.title}>
        <h1>
          {t.index.iAm} <u>{t.name}</u> ({t.or} <u>{t.username}</u>)
        </h1>
      </div>

      <div className={styles.about}>
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutText}</p>
      </div>

      <div className={styles.socials}>
        {contacts.map((contact) => (
          <Link href={contact.url} key={contact.name} title={contact.name}>
            {contact.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
