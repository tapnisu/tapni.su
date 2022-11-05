import GithubRepo from "@components/GithubRepo";

type Repo = {
	name: string;
	url: string;
	language: string;
	stars: number;
	forks: number;
};

export default async function HomePage() {
	const request = await fetch(`https://api.github.com/users/tapnisu/repos`);
	const repos = (await request.json()).filter((repo: Repo) =>
		[
			"tapris",
			"tapciify",
			"forwarding-discord-telegram",
			"tsukinose",
			"ytscc",
			"website"
		].includes(repo.name)
	);

	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
			<header>
				<title>Tapnisu - Projects</title>
			</header>

			<div>
				<h1 className="text-3xl text-center">My projects</h1>
				<div className="grid p-4 grid-cols-1 md:grid-cols-2">
					{repos?.map((repo: any) => (
						<GithubRepo repo={repo} key={repo.id} />
					))}
				</div>
			</div>
		</div>
	);
}
