import GithubRepo from "@components/GithubRepo";

type Repo = {
	id: number;
	full_name: string;
	description: string;
	html_url: string;
	language: string;
	stargazers_count: number;
	forks: number;
	open_issues_count: number;
};

export default async function HomePage() {
	const request = await fetch(`https://api.github.com/users/tapnisu/repos`);
	const repos = (await request.json()).filter((repo: Repo) =>
		[
			"tapnisu/tapris",
			"tapnisu/tapciify",
			"tapnisu/rshima",
			"tapnisu/forwarding-discord-telegram",
			"tapnisu/tsukinose",
			"tapnisu/ytscc"
		].includes(repo.full_name)
	);

	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
			<header>
				<title>Tapnisu - Projects</title>
			</header>

			<div>
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
		</div>
	);
}
