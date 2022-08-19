import Link from "next/link";

const BlogPost = ({ post, id }: any) => {
	return (
		<>
			<div className="bg-neutral-900 m-2 p-8 rounded-3xl">
				<Link href={`/blog/${id}`}>
					<h2 className="text-xl">{post.title}</h2>
				</Link>

				{post.content}
			</div>
		</>
	);
};

export default BlogPost;