import BasePageLayout from "@components/BasePageLayout";
import Link from "next/link";

const ProjectsPage = () => {
	return (
		<BasePageLayout
			title="Tapnisu - Projects"
			description="Projects made by tapnisu (me)"
		>
			<div className="flex flex-col justify-between items-center">
				<div className="p-2">
					<h1 className="text-3xl font-bold p-2">My projects</h1>

					<ul className="list-inside">
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
								<>
									<li key={repo.name} className="list-disc">
										<Link
											href={repo.url}
											className="text-xl cursor-pointer text-black hover:text-main-600 dark:text-main-100 dark:hover:text-main-400 transition-colors"
										>
											{repo.name}
										</Link>
									</li>
									<p className="text-main-800 dark:text-main-400">
										{repo.description}
										<br />
										Written in {repo.language}
									</p>
								</>
							)
						)}
					</ul>
				</div>
			</div>
		</BasePageLayout>
	);
};

export default ProjectsPage;
