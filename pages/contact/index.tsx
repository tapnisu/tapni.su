import Avatar from "@components/avatar";
import BasePageLayout from "@components/basePageLayout";
import Container from "@components/container";
import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./contact.module.css";
import { contacts } from "@lib/contact";

export default function ContactPage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout title={t.contactTitle}>
      <Container>
        <div className={styles.contactContainer}>
          <Avatar />

          <h1>{t.name}</h1>

          <div>
            {contacts?.map(
              (info: { name: string; url: string; icon: React.ReactNode }) => (
                <Link
                  href={info.url}
                  key={info.name}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textDecoration: "none",
                  }}
                  className={styles.icon}
                >
                  {info.icon} <pre> </pre> {info.name}
                </Link>
              )
            )}
          </div>
        </div>
      </Container>
    </BasePageLayout>
  );
}
