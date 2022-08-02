import Footer from "@components/Footer";
import Head from "next/head";
import Navbar from "@components/NavBar";
import type { NextPage } from "next";
import posts from "@json/blog.json";

const Blog: NextPage = ({ data }: any) => {
	return (
		<div className="bg-black text-white">
			<Head>
				<title>{data.post.title} - Blog - Alexiy Rybin</title>
				<meta name="description" content={data.post.content} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Navbar />

				<div className="w-full min-h-screen flex flex-column flex-wrap content-center justify-center items-center">
					<div className="w-fit p-8">
						<h1 className="text-3xl">{data.post.title}</h1>

						<div>{data.post.content}</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export async function getServerSideProps({ req, res }: any) {
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);

	const post = posts[req.url.split("/").pop()];

	return { props: { data: { post } } };
}

export default Blog;
