import "@styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
        </Head>

        <main className={`${inter.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    </>
);

export default App;
