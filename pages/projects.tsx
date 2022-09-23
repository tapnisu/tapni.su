import Footer from "@components/Footer";
import GhRepo from "@components/GhRepo";
import Nav from "@components/Nav";
import type { NextPage } from "next";
import Head from "next/head";

type Repo = {
	name: string;
	url: string;
	language: string;
	stars: number;
	forks: number;
};

const Projects: NextPage = ({ data }: any) => {
	return (
		<div className="bg-black text-white">
			<Head>
				<title>Projects - Alexiy Rybin</title>
				<meta name="description" content="My personal website!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen flex flex-col justify-between">
				<Nav />

				<div>
					<h1 className="text-3xl text-center">My projects</h1>
					<div className="grid p-4 grid-cols-1 md:grid-cols-2">
						{data.repos?.map((repo: any) => (
							<GhRepo repo={repo} key={repo.id} />
						))}
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
};

export async function getServerSideProps(context: any) {
	context.res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);

	const request = await fetch(`https://api.github.com/users/tapnisu/repos`);
	const repos = (await request.json()).filter((repo: Repo) =>
		[
			"tapris",
			"tapciify",
			"forwarding-discord-telegram",
			"tsukinose",
			"ytscc",
			"website"
		].includes(repo.name)
	);

	return { props: { data: { repos } } };
}

export default Projects;
