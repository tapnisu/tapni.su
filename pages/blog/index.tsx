import BlogPost from "@components/BlogPost";
import Footer from "@components/Footer";
import Head from "next/head";
import Navbar from "@components/NavBar";
import type { NextPage } from "next";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Blog: NextPage = () => {
	const { data } = useSwr<any[]>("/api/getBlog", fetcher);

	let i = 0;

	return (
		<div className=" bg-black text-white">
			<Head>
				<title>Blog - Alexiy Rybin</title>
				<meta name="description" content="Blog for my personal website!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen">
				<Navbar />

				<h1 className="pt-16 text-3xl text-center">My blog</h1>

				<div className="flex flex-row flex-wrap m-4">
					{data
						?.map((post: any) => <BlogPost post={post} id={i} key={i++} />)
						.reverse()}
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Blog;
