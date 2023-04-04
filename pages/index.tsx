import BasePageLayout from "@components/BasePageLayout";
import Button from "@components/Button";
import Avatar from "@public/avatar.webp";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
	return (
		<BasePageLayout
			title="Tapnisu - Home"
			description="Website of 15 years old developer from Russia"
		>
			<div className="flex flex-col items-center justify-center min-h-[50vh]">
				<div className="flex flex-row flex-wrap justify-center items-center p-2">
					<Image
						src={Avatar}
						className="w-72 rounded-full m-2 border-main-300 dark:border-main-800"
						alt="Avatar"
						width={640}
						height={640}
						priority={true}
						placeholder="blur"
					/>

					<div className="flex flex-col flex-wrap items-center justify-center p-2 h-full">
						<h1 className="text-3xl font-bold">
							Oh, hi! I am{" "}
							<span className="text-accent-700 dark:text-accent-500 font-mono">
								Tapnisu
							</span>
							!
						</h1>

						<p>
							My name is{" "}
							<span className="text-accent-700 dark:text-accent-500 font-mono font-semibold">
								Alexiy Rybin
							</span>
							.
							<br />
							I am 15 years old developer from Russia.
							<br />
							Currently using Rust for my projects.
							<br />
							Still in school btw :D
						</p>

						<Link href="/projects">
							<Button>Checkout projects</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between items-center" id="projects">
				<div className="p-2">
					<h1 className="text-3xl font-bold p-2">My projects</h1>

					<div>
						{[
							{
								name: "tapciify",
								url: "https://github.com/tapnisu/tapciify",
								description:
									"CLI tool that can let you view images in terminal",
								language: "Rust"
							},
							{
								name: "tapris",
								url: "https://github.com/tapris-bot/tapris",
								description:
									"Tapris rewrite with Deno and @harmonyland/harmony",
								language: "TypeScript"
							},
							{
								name: "forwarding-discord-telegram",
								url: "https://github.com/tapnisu/forwarding-discord-telegram",
								description:
									"This bot can help you to read discord messages in telegram.",
								language: "JavaScript"
							},
							{
								name: "exhrtcc",
								url: "https://github.com/tapnisold/exhrtcc",
								description:
									"CLI tool that can let you to convert currencies without leaving your terminal",
								language: "Rust"
							},
							{
								name: "tapris-node",
								url: "https://github.com/tapris-bot/tapris-node",
								description:
									"Discord.js 14 bot made in TypeScript (currently tapris)",
								language: "TypeScript"
							}
						]?.map(
							(repo: {
								name: string;
								url: string;
								description: string;
								language: string;
							}) => (
								<div
									key={repo.name}
									className="bg-main-100 dark:bg-main-900 m-4 p-4 rounded-xl"
								>
									<Link
										href={repo.url}
										className="text-xl cursor-pointer text-main-900 dark:text-main-50 hover:text-accent-600 dark:hover:text-accent-500 transition-colors"
									>
										{repo.name}
									</Link>

									<p className="text-main-800 dark:text-main-400">
										{repo.description}
										<br />
										Written in {repo.language}
									</p>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</BasePageLayout>
	);
};

export default HomePage;
