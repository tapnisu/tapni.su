import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export interface BaseLayoutProps {
	title: string;
	description: string;
	children: React.ReactNode;
}

const BasePageLayout = ({ title, description, children }: BaseLayoutProps) => (
	<>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
		</Head>

		<main className="bg-main-50 text-main-900 dark:bg-main-900 dark:text-main-50 min-h-screen flex flex-col justify-between">
			<Navbar />
			{children}
			<Footer />
		</main>
	</>
);

export default BasePageLayout;
