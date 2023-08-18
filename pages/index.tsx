import BasePageLayout from "@components/basePageLayout";
import Link from "next/link";
import styles from "./index.module.css";

interface buttonLink {
  value: string;
  href: string;
}

const buttonLinks: buttonLink[] = [{ value: "Contact", href: "/contact" }];

export default function HomePage() {
  return (
    <BasePageLayout>
      <div className="container-center">
        <h1>
          Oh, hi! I am <span className="color-accent">tapnisu</span>!
        </h1>

        <span>
          {buttonLinks.map((buttonLink) => (
            <Link
              href={buttonLink.href}
              key={buttonLink.value}
              className={styles.buttonLink}
            >
              <button>{buttonLink.value}</button>
            </Link>
          ))}
        </span>
      </div>
    </BasePageLayout>
  );
}
