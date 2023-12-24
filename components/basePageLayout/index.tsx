import { en, ru } from "@locales/index";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../footer";
import Navbar from "../navbar";
import styles from "./basePageLayout.module.css";

export interface BaseLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function BasePageLayout(props: BaseLayoutProps) {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  const titleFull = props.title ? `${props.title} / ${t.name}` : t.name;
  const descriptionFull = props.description ?? t.aboutText;

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

      <div className={`${styles.main} ${props.className}`} {...props}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.width}>{props.children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
