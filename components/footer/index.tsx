import Link from "next/link";
import styles from "./footer.module.css";

const paths = [
  { name: "Domains", url: "/domains" },
  { name: "Contact", url: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.toSides}>
        <div>
          <p>
            <b> Aleksei Rybin</b>
          </p>
          <div className={styles.links}>
            {paths?.map((info) => (
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
