import Card from "@/components/Card";
import BasePageLayout from "@components/BasePageLayout";

const ProjectsPage = () => {
	return (
		<BasePageLayout title="Tapnisu - Projects" description="Projects I made">
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
					},
					{
						name: "website",
						url: "tapni.su",
						description: "My personal website",
						language: "Typescript"
					}
				]?.map((info) => (
					<Card
						title={info.name}
						url={info.url}
						description={info.description}
						comments={`Written in ${info.language}`}
						key={info.name}
					/>
				))}
			</div>
		</BasePageLayout>
	);
};

export default ProjectsPage;
