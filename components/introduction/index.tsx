import Avatar from "@components/avatar";
import Link from "next/link";

import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

import {
  FaDiscord,
  FaGithub,
  FaMailBulk,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import styles from "./introduction.module.css";

export default function Introduction() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <div className={styles.introduction}>
      <Avatar />

      <div className="text-center">
        <h1>
          {t.index.iAm} <u>{t.name}</u>
        </h1>
        <h2>
          {t.index.alsoKnownAs} <u>{t.username}</u>
        </h2>
      </div>

      <div className={styles.contact}>
        {[
          {
            name: "Github",
            url: "https://github.com/tapnisu",
            icon: <FaGithub size={32} />,
          },
          {
            name: "Discord",
            url: "/discord",
            icon: <FaDiscord size={32} />,
          },
          {
            name: "Twitter",
            url: "/twitter",
            icon: <FaTwitter size={32} />,
          },
          {
            name: "Telegram",
            url: "/telegram",
            icon: <FaTelegram size={32} />,
          },
          {
            name: "Email",
            url: "/email",
            icon: <FaMailBulk size={32} />,
          },
        ]?.map((info) => (
          <Link href={info.url} key={info.url} className={styles.socialIcon}>
            {info.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
