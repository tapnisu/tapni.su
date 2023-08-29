import Head from "next/head";
import Footer from "../footer";
import Navbar from "../navbar";
import styles from "./basePageLayout.module.css";

export interface BaseLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function BasePageLayout({
  title = "Aleksei Rybin",
  description = "Oh, hi! I'm Aleksei Rybin, 15 years old, a developer from Russia, mainly using TypeScript and Rust.",
  children,
}: BaseLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="og:title" content={title} />
        <meta name="apple-mobile-web-app-title" content={title} />

        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <div>{children}</div>
        </div>
        <Footer />
      </main>
    </>
  );
}
