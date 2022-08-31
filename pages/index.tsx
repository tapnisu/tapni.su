import Footer from "@components/Footer";
import Nav from "@components/Nav";
import AvatarPreview from "@public/avatar.png";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Index: NextPage = () => {
	return (
		<div className="bg-black text-white">
			<Head>
				<title>Alexiy Rybin</title>
				<meta name="description" content="My personal website!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen flex flex-col justify-between">
				<Nav />

				<div className="w-full flex flex-row flex-wrap content-center justify-center items-center">
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
							Hello!
							<br />I am <span className="text-yellow-100">Alexiy Rybin!</span>
						</h1>
						<p className="text-xl text-blue-300">(tapnisu)</p>
					</span>
				</div>

				<Footer />
			</main>
		</div>
	);
};

export default Index;
