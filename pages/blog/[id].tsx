import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import posts from "@exports/posts";
import type { NextPage } from "next";
import Head from "next/head";

const Blog: NextPage = ({ data }: any) => {
	return (
		<div className="bg-black text-white">
			<Head>
				<title>{`${data.post.title} - Blog - Alexiy Rybin`}</title>
				<meta name="description" content={data.post.content} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen flex flex-col justify-between">
				<Navbar />

				<div className="w-full flex flex-column flex-wrap content-center justify-center items-center">
					<div className="w-fit p-8">
						<h1 className="text-3xl">{data.post.title}</h1>

						<div>{data.post.content}</div>
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
};

export async function getServerSideProps(context: any) {
	context.res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);

	const id = context.params.id;

	if (isNaN(id) || id < 0 || id >= posts.length)
		return {
			props: { data: { post: { title: "404", content: "Not found!" } } }
		};

	return { props: { data: { post: posts[id] } } };
}

export default Blog;
