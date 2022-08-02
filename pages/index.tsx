import AvatarPreview from "@public/avatar.png";
import Footer from "@components/Footer";
import GhRepo from "@components/GhRepo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@components/NavBar";
import type { NextPage } from "next";

type Repo = {
	name: string;
	url: string;
	language: string;
	stars: number;
	forks: number;
};

const Index: NextPage = ({ data }: any) => {
	return (
		<div className="bg-black text-white">
			<Head>
				<title>Alexiy Rybin</title>
				<meta name="description" content="My personal website!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen">
				<Navbar />

				<a id="home"></a>
				<div className="w-full h-screen flex flex-row flex-wrap content-center justify-center items-center">
					<div className="w-72 m-4">
						<Image
							alt="Alexiy Rybin avatar"
							src={AvatarPreview}
							layout="responsive"
							className="rounded-full"
							priority={true}
							placeholder="blur"
						/>
					</div>

					<span className="m-4">
						<h1 className="text-3xl">
							Hello! I am <span className="text-yellow-100">Alexiy Rybin!</span>
						</h1>
						<p className="text-xl text-cyan-200">(tapnisu)</p>
					</span>
				</div>

				<a id="projects"></a>
				<h1 className="text-3xl text-center">My projects</h1>
				<div className="grid p-4 grid-cols-1 md:grid-cols-2">
					{data.repos?.map((repo: any) => (
						<GhRepo repo={repo} key={repo.id} />
					))}
				</div>

				<div className="w-full h-fit p-10 flex flex-col flex-wrap content-center justify-center items-center">
					<h1 className="text-3xl">Check out my blog!</h1>
					<Link href="/blog">
						<button className="bg-neutral-900 p-4 m-4 rounded-3xl">
							Let&#39;s go
						</button>
					</Link>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export async function getServerSideProps({ req, res }: any) {
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);

	const request = await fetch(`https://api.github.com/users/tapnisu/repos`);
	const repos = (await request.json()).filter((repo: Repo) =>
		[
			"tapris",
			"website",
			"ytscc",
			"forwarding-discord-telegram",
			"tsukinose",
			"mumei"
		].includes(repo.name)
	);

	return { props: { data: { repos } } };
}

export default Index;
