import Card from "@/components/Card";
import BasePageLayout from "@components/BasePageLayout";
import tapciifyImage from "@public/projects/tapciify.webp";
import websiteImage from "@public/projects/website.webp";

const ProjectsPage = () => {
	return (
		<BasePageLayout title="Tapnisu - Projects" description="Projects I made">
			<h1 className="text-3xl font-bold p-2">My projects</h1>

			<div>
				{[
					{
						name: "tapciify",
						image: tapciifyImage,
						url: "https://github.com/tapnisu/tapciify",
						description:
							"CLI tool that can let you view images/videos in terminal as ASCII",
						language: "Rust"
					},
					{
						name: "tapris",
						url: "https://github.com/tapris-bot/tapris",
						description:
							"Lightweight multi-language, multi-purpose bot for Discord made with Deno",
						language: "TypeScript"
					},
					{
						name: "forwarding-discord-telegram",
						url: "https://github.com/tapnisu/forwarding-discord-telegram",
						description:
							"Bot that can help you to read discord messages in telegram",
						language: "JavaScript"
					},
					{
						name: "exhrtcc",
						url: "https://github.com/tapnisold/exhrtcc",
						description:
							"A CLI tool that allows you to convert currencies without leaving the terminal",
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
						image: websiteImage,
						url: "https://github.com/tapnisu/website",
						description: "My personal website (you are here right now)",
						language: "Typescript"
					}
				]?.map((info) => (
					<Card
						title={info.name}
						image={info.image}
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
