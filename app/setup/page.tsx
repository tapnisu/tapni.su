import AccountCard from "@components/AccountCard";

export default async function HomePage() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
			<header>
				<title>Tapnisu - Contact</title>
			</header>

			<div>
				<h1 className="text-3xl text-center">Contact</h1>
				<div className="grid p-4 grid-cols-1 md:grid-cols-2">
					<AccountCard username="tapnisu" website="Github" url="https://github.com/tapnisu" />
					<AccountCard username="tapnisu#7384" website="Discord" url="https://discord.com/users/586128640136445964" />
					<AccountCard username="tapnisu" website="Twitter" url="https://twitter.com/tapnisu" />
					<AccountCard username="tapnisu" website="Telegram" url="https://t.me/tapnisu" />
				</div>
			</div>
		</div>
	);
}
