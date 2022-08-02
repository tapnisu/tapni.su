import BlogPost from "@components/BlogPost";
import Footer from "@components/Footer";
import Head from "next/head";
import Navbar from "@components/NavBar";
import type { NextPage } from "next";
import posts from "@json/blog.json";

const Blog: NextPage = ({ data }: any) => {
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

				<div className="grid p-4 grid-cols-1 md:grid-cols-2">
					{data.posts
						.map((post: any) => <BlogPost post={post} id={i} key={i++} />)
						.reverse()}
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

	return { props: { data: { posts } } };
}

export default Blog;
