import BasePageLayout from "@components/basePageLayout";
import { useEffect, useState } from "react";
import styles from "./cookie.module.css";

export default function CookiePage() {
  const [cookies, setCookies] = useState(0);

  function AddCookie() {
    const newCookies = cookies + 1;

    setCookies(newCookies);
    localStorage.setItem("cookieCount", newCookies.toString());
  }

  useEffect(() => {
    setCookies(Number(localStorage.getItem("cookieCount")) || 0);
  }, []);

  return (
    <BasePageLayout title="Cookie">
      <div className="text-center">
        <b>{cookies}</b>
        <div className={styles.cookie} onClick={AddCookie}>
          🍪
        </div>
      </div>
    </BasePageLayout>
  );
}
