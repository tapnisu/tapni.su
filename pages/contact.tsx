import BasePageLayout from "@components/BasePageLayout";
import Avatar from "@public/avatar.webp";
import Image from "next/image";
import Link from "next/link";
import {
	FaDiscord,
	FaGithub,
	FaMailBulk,
	FaTelegram,
	FaTwitter
} from "react-icons/fa";

const ContactPage = () => {
	return (
		<BasePageLayout
			title="Tapnisu - Contact"
			description="Website of 15 years old developer from Russia"
		>
			<div className="flex flex-col justify-center items-center">
				<Image
					src={Avatar}
					className="w-72 rounded-full m-2 border-main-300 dark:border-main-800"
					alt="Avatar"
					width={640}
					height={640}
					priority={true}
					placeholder="blur"
				/>

				<h1 className="text-3xl font-bold m-2">Contact tapnisu</h1>

				{[
					{
						name: "Github",
						url: "https://github.com/tapnisu",
						icon: <FaGithub />
					},
					{
						name: "Discord: tapnisu",
						url: "/discord",
						icon: <FaDiscord />
					},
					{
						name: "Twitter",
						url: "/twitter",
						icon: <FaTwitter />
					},
					{
						name: "Telegram",
						url: "/telegram",
						icon: <FaTelegram />
					},
					{
						name: "Email",
						url: "/email",
						icon: <FaMailBulk />
					}
				]?.map((info: { name: string; url: string; icon: React.ReactNode }) => (
					<Link href={info.url} key={info.name} className="m-2 w-full">
						<button
							className="text-main-50 font-semibold bg-accent-600 p-4 rounded-xl hover:bg-accent-700 transition-colors flex flex-row items-center w-full"
							type="button"
						>
							{info.icon} <pre> </pre> {info.name}
						</button>
					</Link>
				))}
			</div>
		</BasePageLayout>
	);
};

export default ContactPage;
