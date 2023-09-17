import BasePageLayout from "@components/basePageLayout";
import { useState } from "react";
import styles from "./cookie.module.css";

export default function CookiePage() {
  const [cookies, setCookies] = useState(0);

  return (
    <BasePageLayout title="Cookie">
      <div className="text-center">
        <b>{cookies}</b>
        <div className={styles.cookie} onClick={() => setCookies(cookies + 1)}>
          🍪
        </div>
      </div>
    </BasePageLayout>
  );
}
