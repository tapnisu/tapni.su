import Link from "next/link";

interface GithubRepoProps {
	repo: {
		html_url: string;
		full_name: string;
		description: string;
		language: string;
		stargazers_count: string;
		forks: string;
		open_issues: string;
	};
}

const GithubRepo = ({ repo }: GithubRepoProps) => {
	return (
		<>
			<div className="bg-neutral-900 m-2 p-8 rounded-3xl min-w-fit">
				<Link href={repo.html_url}>
					<h2 className="text-xl cursor-pointer text-white">
						{repo.full_name}
					</h2>
				</Link>

				{repo.description}

				<div>
					{repo.language} {repo.stargazers_count}★ {repo.forks}⸙{" "}
					{repo.open_issues}⚠
				</div>
			</div>
		</>
	);
};

export default GithubRepo;
