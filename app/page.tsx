import Avatar from "@public/avatar.png";
import Image from "next/image";

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
			<div>
				<div className="flex flex-col items-center p-4">
					<Image src={Avatar} alt="Avatar" className="rounded-full w-72" />
				</div>

				<h1 className="text-2xl">Oh, hi! I am Alexiy Rybin!</h1>

				<p>
					I am 15 y.o. a developer based in Russia.
					<br />
					Currently using rust for my projects.
					<br />
					Still in school :D.
				</p>
			</div>
		</div>
	);
}
