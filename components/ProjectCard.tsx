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
	<>
		<Link href={url}>
			<h2 className="text-xl cursor-pointer text-black hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 transition-colors">
				{name}
			</h2>
		</Link>

		<p className="text-neutral-800 dark:text-neutral-400">
			{description}
			<br />
			Written in {language}
		</p>
	</>
);

export default ProjectCard;
