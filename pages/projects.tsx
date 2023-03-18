import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import BasePageLayout from "@components/BasePageLayout";

const ProjectsPage = () => {
	return (
		<BasePageLayout
			title="Tapnisu - Projects"
			description="Projects made by tapnisu (me)"
		>
			<div className="flex flex-col justify-between items-center">
				<h1 className="text-3xl text-center p-2">My projects</h1>

				<ul>
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
					]?.map((repo: ProjectCardProps) => (
						<li key={repo.name} className="list-disc">
							<ProjectCard
								name={repo.name}
								url={repo.url}
								description={repo.description}
								language={repo.language}
							/>
						</li>
					))}
				</ul>
			</div>
		</BasePageLayout>
	);
};

export default ProjectsPage;
