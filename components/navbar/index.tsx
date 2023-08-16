import Link from "next/link";
import styles from "./navbar.module.css";

const paths = [
  { name: "About", url: "/about" },
  {
    name: "Projects",
    url: "/projects",
  },
  { name: "Setup", url: "/setup" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <div className={styles.linksContainer}>
          <div className={styles.link}>
            <Link className={styles.linkName} href="/">
              Alexiy Rybin
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.linksContainer}>
        {paths?.map((info: { name: string; url: string }) => (
          <div className={styles.link} key={info.name}>
            <Link className={styles.linkName} href={info.url}>
              {info.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
