import Avatar from "@public/avatar.png";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
			<header>
				<title>Tapnisu - Home</title>
			</header>

			<div>
				<div className="flex flex-col items-center p-2">
					<Image
						alt="Avatar"
						src={Avatar}
						className="rounded-full w-72"
						priority={true}
						placeholder="blur"
					/>
				</div>

				<h1 className="text-2xl p-2">
					Oh, hi! I am <u>Tapnisu</u>!
				</h1>

				<p className="p-2">
					My name is <u>Alexiy Rybin</u>.
					<br />
					I am 15 y.o. a developer based in Russia.
					<br />
					Currently using rust for my projects.
					<br />
					Still in school :D.
				</p>
			</div>

			<Link href="/projects">
				<button
					className="bg-white text-black m-4 p-4 rounded-full hover:bg-stone-300 transition-colors"
					type="button"
				>
					Checkout projects
				</button>
			</Link>
		</div>
	);
}
