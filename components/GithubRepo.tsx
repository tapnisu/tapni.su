import Link from "next/link";

interface GithubRepoProps {
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
}: GithubRepoProps) => {
	return (
		<>
			<div className="bg-neutral-900 hover:bg-neutral-800 transition-colors m-2 p-8 rounded-3xl min-w-fit">
				<Link href={url}>
					<h2 className="text-xl cursor-pointer text-white">{name}</h2>
				</Link>

				{description}

				<div>
					{language} {stars}★ {forks}⸙ {issues}⚠
				</div>
			</div>
		</>
	);
};

export default GithubRepo;
