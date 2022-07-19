// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Repo = {
	name: string;
	url: string;
	language: string;
	stars: number;
	forks: number;
};

type Data = Repo[];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (!req.query.user) return res.status(404).json([]);

	const request = await fetch(
		`https://api.github.com/users/${req.query.user}/repos`
	);

	if (request.status != 200) return res.status(404).json([]);

	const repos: Data = await request.json();

	res
		.status(200)
		.json(repos.filter((repo) => req.query.repos?.includes(repo.name)));
}
