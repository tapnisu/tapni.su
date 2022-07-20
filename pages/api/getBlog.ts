import type { NextApiRequest, NextApiResponse } from "next";

import blog from "@json/blog.json";

type Blog = {
	title: string;
	content: string;
};

type Data = Blog[];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (!req.query.id) return res.status(200).json(blog);
	if (Number(req.query.id) > blog.length)
		return res.status(404).json([{ title: "404", content: "Not found!" }]);

	const data = blog[Number(req.query.id)];

	res.status(200).json([data]);
}
