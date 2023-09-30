import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#688ce2" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="og:image" content="https://tapni.su/og.png" />
        <meta name="og:url" content="https://tapni.su/" />
        <meta name="twitter:image" content="https://tapni.su/og.png" />
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
