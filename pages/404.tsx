import BasePageLayout from "@components/basePageLayout";
import Link from "next/link";
import styles from "./index.module.css";

export default function NotFoundPage() {
  return (
    <BasePageLayout>
      <div className="container-center">
        <h1>404 Not found :C</h1>

        <Link href="/" className={styles.buttonLink}>
          <button>Home</button>
        </Link>
      </div>
    </BasePageLayout>
  );
}
