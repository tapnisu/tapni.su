import Link from "next/link";

const GhRepo = ({ repo }: any) => {
	return (
		<>
			<div className="bg-neutral-900 m-2 p-8 rounded-3xl min-w-fit">
				<Link href={repo.html_url}>
					<h2 className="text-xl cursor-pointer text-blue-300">
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

export default GhRepo;
