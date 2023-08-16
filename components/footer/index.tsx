import Link from "next/link";
import styles from "./footer.module.css";

const paths = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
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
        <div>
          <h4>Alexiy Rybin</h4>
          <div className={styles.links}>
            {paths?.map((info: { name: string; url: string }) => (
              <Link href={info.url} className={styles.link} key={info.name}>
                {info.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p>Built using NextJS</p>

          <p>
            Source code on{" "}
            <Link href="https://github.com/tapnisu/website/">Github</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
