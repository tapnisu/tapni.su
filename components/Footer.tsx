import Link from "next/link";

const Footer = () => {
	return (
		<>
			<footer className="flex flex-row flex-wrap justify-between p-8">
				<span className="uppercase">
					<Link href="https://github.com/tapnisu">Github</Link>/
					<Link href="https://t.me/AlexiyRybin">Telegram</Link>/
					<Link href="https://twitter.com/tapnisu">Twitter</Link>
				</span>
				Copyright © 2022 Alexiy Rybin.
			</footer>
		</>
	);
};

export default Footer;
