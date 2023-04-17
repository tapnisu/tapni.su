import BasePageLayout from "@components/BasePageLayout";
import Link from "next/link";

const ProjectsPage = () => {
	return (
		<BasePageLayout
			title="Tapnisu - Projects"
			description="Website of 15 years old developer from Russia"
		>
			<h1 className="text-3xl font-bold p-2">My projects</h1>

			<div>
				{[
					{
						name: "tapciify",
						url: "https://github.com/tapnisu/tapciify",
						description: "CLI tool that can let you view images in terminal",
						language: "Rust"
					},
					{
						name: "tapris",
						url: "https://github.com/tapris-bot/tapris",
						description: "Tapris rewrite with Deno and @harmonyland/harmony",
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
								className="text-xl cursor-pointer text-main-900 dark:text-main-100 hover:text-accent-600 dark:hover:text-accent-500 transition-colors"
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
		</BasePageLayout>
	);
};

export default ProjectsPage;
