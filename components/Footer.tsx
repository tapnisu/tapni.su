import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-gradient-to-b from-transparent to-neutral-900 flex flex-col items-center p-8">
			<div className="mx-auto w-24 h-1 my-12 bg-white rounded-full"></div>
			<h2 className="text-xl">Social media</h2>
			<ul className="list-disc p-4">
				<li>
					<Link href="https://github.com/tapnisu">Github</Link>
				</li>
				<li>
					<Link href="https://discord.com/users/586128640136445964">
						Discord (tapnisu#7384)
					</Link>
				</li>
				<li>
					<Link href="https://twitter.com/tapnisu">Twitter</Link>
				</li>
				<li>
					<Link href="https://t.me/tapnisu">Telegram</Link>
				</li>
			</ul>
			<h3 className="p-4">Copyright © 2022 Alexiy Rybin</h3>
		</footer>
	);
};

export default Footer;
