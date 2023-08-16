import Link from "next/link";
import styles from "./footer.module.css";

const paths = [
  { name: "Home", url: "/" },
  {
    name: "Projects",
    url: "/projects",
  },
  { name: "Setup", url: "/setup" },
  { name: "Contact", url: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.toSides}>
        <div className={styles.links}>
          {paths?.map((info: { name: string; url: string }) => (
            <Link href={info.url} className={styles.link} key={info.name}>
              {info.name}
            </Link>
          ))}
        </div>

        <p>Made by Alexiy Rybin</p>
      </div>
    </footer>
  );
}
