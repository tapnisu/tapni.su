import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./basePageLayout.module.css";

export interface BaseLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function BasePageLayout({
  title = "Tapnisu",
  description = "Oh, hi! I'm Alexiy Rybin, 15 years old, a developer from Russia, mainly using TypeScript and Rust.",
  children,
}: BaseLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-2">
          <div>{children}</div>
        </div>
        <Footer />
      </main>
    </>
  );
}
