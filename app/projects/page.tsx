import GithubRepo from "@components/GithubRepo";

interface Repo {
	id: number;
	full_name: string;
	description: string;
	html_url: string;
	language: string;
	stargazers_count: number;
	forks: number;
	open_issues_count: number;
}

export default async function ProjectsPage() {
	const request = await fetch(`https://api.github.com/users/tapnisu/repos`);
	const repos: Repo[] = (await request.json()).filter((repo: Repo) =>
		[
			"tapnisu/tapciify",
			"tapnisu/website",
			"tapnisu/forwarding-discord-telegram",
			"tapnisu/ytscc",
			"tapnisu/shimarin",
			"tapnisu/tsukinose"
		].includes(repo.full_name)
	);

	return (
		<>
			<header>
				<title>Tapnisu - Projects</title>
				<meta name="description" content="Projects made by tapnisu (me)" />
			</header>

			<div className="flex flex-col justify-between items-center">
				<h1 className="text-3xl text-center">My projects</h1>
				<div className="grid p-4 grid-cols-1 md:grid-cols-2">
					{repos?.map((repo: Repo) => (
						<GithubRepo
							name={repo.full_name}
							url={repo.html_url}
							description={repo.description}
							language={repo.language}
							stars={repo.stargazers_count}
							forks={repo.forks}
							issues={repo.open_issues_count}
							key={repo.id}
						/>
					))}
				</div>
			</div>
		</>
	);
}
