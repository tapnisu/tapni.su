import Link from "next/link";
import { FaCodeBranch, FaExclamationTriangle, FaStar } from "react-icons/fa";
export interface GithubRepoProps {
	name: string;
	url: string;
	description: string;
	language: string;
	stars: number;
	forks: number;
	issues: number;
}

const GithubRepo = ({
	name,
	url,
	description,
	language,
	stars,
	forks,
	issues
}: GithubRepoProps) => (
	<div className="bg-neutral-100 dark:bg-neutral-900 m-2 p-8 rounded-3xl border-2 border-neutral-200 dark:border-neutral-800">
		<Link href={url}>
			<h2 className="text-xl cursor-pointer text-black hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 transition-colors">
				{name}
			</h2>
		</Link>

		{description}

		<div className="flex flex-row items-center">
			{language} {stars} <FaStar /> <pre> </pre> {forks} <FaCodeBranch />{" "}
			<pre> </pre> {issues} <FaExclamationTriangle />
		</div>
	</div>
);

export default GithubRepo;
