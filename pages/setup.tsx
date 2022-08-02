import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Footer from "@components/Footer";
import Navbar from "@components/NavBar";

import VSCodePreview from "@public/vscode.png";

const Setup: NextPage = () => {
	return (
		<div className="bg-black text-white">
			<Head>
				<title>Setup - Alexiy Rybin</title>
				<meta name="description" content="My personal website!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen">
				<Navbar />

				<div className="w-full min-h-screen flex flex-column flex-wrap content-center justify-center items-center">
					<div className="mt-16 w-5/6">
						<h1 className="text-3xl">My setup:</h1>
						<h2 className="text-2xl">PC</h2>
						<ul className="list-disc">
							<li>CPU: Intel Core I5 9600K</li>
							<li>GPU: GTX 1660</li>
							<li>RAM: 16Gb (2x8gb)</li>
						</ul>

						<h2 className="text-2xl">Text editor:</h2>
						<ul className="list-disc">
							<li>
								<h3 className="text-xl">Visual Studio Code</h3>
								<div className="m-4">
									<Image
										alt="Visual Studio Code screenshot"
										src={VSCodePreview}
										layout="responsive"
										priority={true}
										placeholder="blur"
									/>
								</div>
							</li>
							<li>
								<h3 className="text-xl">Font: JetBrains Mono</h3>
							</li>
						</ul>

						<h2 className="text-2xl">Keyboard</h2>
						<h2 className="text-xl">Keychron K2</h2>
						<ul className="list-disc">
							<li>Swithces: Gateron Red</li>
						</ul>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Setup;
