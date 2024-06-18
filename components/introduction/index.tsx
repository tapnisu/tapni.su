import Link from "next/link";

import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

import styles from "./introduction.module.css";
import { contacts } from "@lib/contact";
import Avatar from "@components/avatar";

export default function Introduction(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <div {...props}>
      <div className={styles.introduction}>
        <Avatar />

        <div className={styles.title}>
          <h1>
            <u>{t.name}</u> (tapnisu)
          </h1>
        </div>

        <div className={styles.socials}>
          {contacts.map((contact) => (
            <Link href={contact.url} key={contact.name} title={contact.name}>
              {contact.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
