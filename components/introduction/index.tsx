import Avatar from "@components/avatar";
import Link from "next/link";

import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

import styles from "./introduction.module.css";

export default function Introduction() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <div className={styles.introduction}>
      <Avatar />

      <h1 className="text-center">
        {t.index.ohHiIam} <u>{t.name}</u> aka <u>{t.username}</u>
      </h1>

      <p>
        {" "}
        {t.index.about} Rust {t.index.and} Typescript
      </p>

      <Link href="/contact" className="gap-half">
        <button>{t.contact}</button>
      </Link>
    </div>
  );
}
