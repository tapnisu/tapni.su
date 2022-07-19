const GhRepo = ({ repo }: any) => {
	return (
		<>
			<div className="bg-neutral-900 m-2 p-8 rounded-3xl min-w-fit">
				<a href={repo.html_url}>
					<h1>{repo.full_name}</h1>
				</a>

				{repo.description}

				<div>
					{repo.language} {repo.stargazers_count}⭐ {repo.forks}🌿{" "}
					{repo.open_issues}🤔
				</div>
			</div>
		</>
	);
};

export default GhRepo;
