import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export interface BaseLayoutProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
}

const BasePageLayout = ({
    title = "Tapnisu",
    description = "Oh, hi! I'm Alexiy Rybin, 15 years old, a developer from Russia, mainly using TypeScript and Rust.",
    children,
}: BaseLayoutProps) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>

        <main className="bg-main-50 text-main-900 dark:bg-main-950 dark:text-main-100 selection:bg-accent-600 selection:text-accent-100 min-h-screen flex flex-col justify-between">
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-[50vh] p-2">
                <div>{children}</div>
            </div>
            <Footer />
        </main>
    </>
);

export default BasePageLayout;
