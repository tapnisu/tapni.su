import { MyThemeContextProvider } from "@components/myThemeContextProvider";
import "@styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <MyThemeContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </MyThemeContextProvider>
  );
}

export default appWithTranslation(App);
