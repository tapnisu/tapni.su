import Link from "next/link";
import { FaDiscord, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => (
	<footer className="text-main-800 dark:text-main-400 bg-gradient-to-b from-transparent to-main-200 dark:to-main-800 p-8">
		<div className="mx-auto w-24 h-1 my-12 bg-main-800 dark:bg-main-400 rounded-full"></div>

		<div className="flex flex-row flex-wrap items-center justify-around">
			<div>
				<h2 className="text-xl">Social media</h2>
				<ul className="p-4 list-disc">
					{[
						{
							name: "Github: tapnisu",
							url: "https://github.com/tapnisu",
							icon: <FaGithub />
						},
						{
							name: "Discord: (tapnisu#7384)",
							url: "https://discord.com/users/586128640136445964",
							icon: <FaDiscord />
						},
						{
							name: "Twitter: @tapnisu",
							url: "https://twitter.com/tapnisu",
							icon: <FaTwitter />
						},
						{
							name: "Telegram: @tapnisu",
							url: "https://t.me/tapnisu",
							icon: <FaTelegram />
						}
					]?.map(
						(info: { name: string; url: string; icon: React.ReactNode }) => (
							<li key={info.name}>
								<Link
									href={info.url}
									className="hover:text-main-500 hover:dark:text-main-300 transition-colors flex flex-row items-center"
								>
									{info.icon} <pre> </pre> {info.name}
								</Link>
							</li>
						)
					)}
				</ul>
			</div>

			<h3 className="p-4">
				© 2023 Alexiy Rybin. All rights reserved.
				<br />
				<Link
					href="https://github.com/tapnisu/website"
					className="font-mono italic hover:text-main-500 hover:dark:text-main-300 transition-colors"
				>
					Check website{"'"}s source code {"<-"}
				</Link>
			</h3>
		</div>
	</footer>
);

export default Footer;
