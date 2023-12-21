import avatar from "@public/avatar.webp";
import Image from "next/image";

import styles from "./avatar.module.css";

export default function Avatar() {
  return (
    <Image
      src={avatar}
      width={1024}
      height={1024}
      alt="My avatar"
      className={styles.avatar}
      priority
      placeholder="blur"
    />
  );
}
