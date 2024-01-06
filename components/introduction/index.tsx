import Avatar from "@components/avatar";
import Link from "next/link";

import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

import styles from "./introduction.module.css";

export default function Introduction(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <div className={`${styles.introduction} ${props.className}`} {...props}>
      <Avatar />

      <div className="text-center">
        <h1>
          {t.index.iAm} <u>{t.name}</u>
        </h1>
        <h2>
          {t.index.alsoKnownAs} <u>{t.username}</u>
        </h2>
      </div>

      <Link href="/contact" className="gap-half">
        <button>{t.contactTitle}</button>
      </Link>
    </div>
  );
}
