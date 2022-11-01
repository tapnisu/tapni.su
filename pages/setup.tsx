import Footer from "@components/Footer";
import Nav from "@components/Nav";
import VSCodePreview from "@public/vscode.png";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";

const Setup: NextPage = () => {
	return (
		<div className="bg-black text-white">
			<Head>
				<title>Setup - Alexiy Rybin</title>
				<meta name="description" content="My personal website!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen flex flex-col justify-between">
				<Nav />

				<div className="w-full flex flex-column flex-wrap content-center justify-center items-center">
					<div className="w-5/6">
						<h1 className="text-3xl">My setup:</h1>
						<h2 className="text-2xl">PC</h2>
						<ul className="list-disc">
							<li>CPU: Intel Core I9 11900KF</li>
							<li>GPU: RTX 3080 12 GB</li>
							<li>RAM: 64 GB (4 x 16 GB)</li>
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

				<Footer />
			</main>
		</div>
	);
};

export default Setup;
