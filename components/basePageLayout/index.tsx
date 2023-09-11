import { en, ru } from "@locales/index";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../footer";
import Navbar from "../navbar";
import styles from "./basePageLayout.module.css";

export interface BaseLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function BasePageLayout({
  title,
  description,
  children,
}: BaseLayoutProps) {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  const titleFull = title ? `${title} / ${t.name}` : t.name;
  const descriptionFull = description ?? t.description;

  return (
    <>
      <Head>
        <title>{titleFull}</title>
        <meta name="title" content={titleFull} />
        <meta name="og:title" content={titleFull} />
        <meta name="apple-mobile-web-app-title" content={titleFull} />

        <meta name="description" content={descriptionFull} />
        <meta name="og:description" content={descriptionFull} />
      </Head>

      <div className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.width}>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
