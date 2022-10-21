import Footer from "@components/Footer";
import Nav from "@components/Nav";
import AvatarPreview from "@public/avatar.png";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"

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

				<div className="w-full flex flex-col flex-wrap content-center justify-center items-center">
					<div className="w-72 m-4">
						<Link href="/avatar">
							<Image
								alt="Alexiy Rybin avatar"
								src={AvatarPreview}
								layout="responsive"
								className="rounded-full cursor-pointer"
								priority={true}
								placeholder="blur"
							/>
						</Link>
					</div>

					<span className="m-4">
						<h1 className="text-3xl text-blue-300">Alexiy Rybin</h1>
						<p className="text-xl">
							Programmer that makes lots of ascii arts :D
						</p>
					</span>
				</div>

				<Footer />
			</main>
		</div>
	);
};

export default Index;
