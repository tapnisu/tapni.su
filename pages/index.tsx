import BasePageLayout from "@components/BasePageLayout";
import Button from "@components/Button";
import Avatar from "@public/avatar.webp";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
	return (
		<BasePageLayout
			title="Tapnisu - Home"
			description="Website of 15 years old developer from Russia"
		>
			<div className="flex flex-row flex-wrap justify-center items-center">
				<Image
					src={Avatar}
					className="w-72 rounded-full m-2 border-main-300 dark:border-main-800"
					alt="Avatar"
					width={640}
					height={640}
					priority={true}
					placeholder="blur"
				/>

				<div className="flex flex-col flex-wrap items-center justify-center p-2 h-full">
					<h1 className="text-3xl font-semibold">
						Oh, hi! I am <span className="text-accent-600">Tapnisu</span>!
					</h1>

					<p>
						My name is{" "}
						<span className="text-accent-600 font-semibold">Alexiy Rybin</span>
						.
						<br />
						I am 15 years old developer from Russia.
						<br />
						Currently using Rust for my projects.
						<br />
						Still in school btw :D
					</p>

					<div className="m-4">
						<Link href="/contact">
							<Button>Contact me</Button>
						</Link>
					</div>
				</div>
			</div>
		</BasePageLayout>
	);
};

export default HomePage;
