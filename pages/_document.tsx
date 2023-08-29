import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta http-equiv="Content-Language" content="en" />

        <meta name="theme-color" content="#000000" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="og:image" content="https://tapnisu.ru/og.png" />

        <meta name="og:url" content="https://tapnisu.ru/" />

        <meta name="twitter:image" content="https://tapnisu.ru/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tapnisu" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
