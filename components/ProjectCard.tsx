import Link from "next/link";

export interface ProjectCardProps {
	name: string;
	url: string;
	description: string;
	language: string;
}

const ProjectCard = ({
	name,
	url,
	description,
	language
}: ProjectCardProps) => (
	<div className="bg-neutral-100 dark:bg-neutral-900 m-2 p-8 rounded-3xl border-2 border-neutral-200 dark:border-neutral-800">
		<Link href={url}>
			<h2 className="text-xl cursor-pointer text-black hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 transition-colors">
				{name}
			</h2>
		</Link>

		<p>
			{description}
			<br />
			Written in {language}
		</p>
	</div>
);

export default ProjectCard;
