import Footer from "@components/Footer";
import Head from "next/head";
import Navbar from "@components/NavBar";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Blog: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data } = useSwr<any[]>(`/api/getBlog?id=${id}`, fetcher);

	return (
		<div className="bg-black text-white">
			<Head>
				<title>{data?.[0].title} - Blog - Alexiy Rybin</title>
				<meta name="description" content={data?.[0].content} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Navbar />

				<div className="w-full min-h-screen flex flex-column flex-wrap content-center justify-center items-center">
					<div className="w-fit p-8">
						<h1 className="text-3xl">{data?.[0].title}</h1>

						<div>{data?.[0].content}</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Blog;
