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

		<main className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col justify-between">
			<Navbar />
			{children}
			<Footer />
		</main>
	</>
);

export default BasePageLayout;
