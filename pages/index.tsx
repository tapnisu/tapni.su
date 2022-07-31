import type { NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import useSwr from "swr";

import Footer from "@components/Footer";
import GhRepo from "@components/GhRepo";
import Navbar from "@components/NavBar";

import AvatarPreview from "@public/avatar.png";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Index: NextPage = () => {
	const args = {
		user: "tapnisu",
		repos: [
			"tapris",
			"website",
			"ytscc",
			"forwarding-discord-telegram",
			"tsukinose",
			"mumei"
		]
	};

	const { data } = useSwr<any[]>(
		`/api/ghPinned?user=${args.user}&repos=${args.repos.join("&repos=")}`,
		fetcher
	);

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
					{data?.map((repo: any) => (
						<GhRepo repo={repo} key={repo.id} />
					))}
				</div>

				<div className="w-full h-screen flex flex-col flex-wrap content-center justify-center items-center">
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

export default Index;
