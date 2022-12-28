import Link from "next/link";

interface AccountCardProps {
	website: string;
	username: string;
	url: string;
}

const GithubRepo = ({ username, url, website }: AccountCardProps) => {
	return (
		<>
			<div className="cursor-pointer bg-neutral-900 hover:bg-neutral-800 transition-colors m-2 p-8 rounded-3xl min-w-fit">
				<Link href={url}>
					<h2 className="text-xl cursor-pointer text-white">{website}: {username}</h2>
				</Link>
			</div>
		</>
	);
};

export default GithubRepo;
