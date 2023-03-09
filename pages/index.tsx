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
			<div className="flex flex-col items-center">
				<div className="flex flex-col justify-center items-center">
					<Image
						src={Avatar}
						className="w-72 rounded-full m-2 border-2 border-neutral-300 dark:border-neutral-800"
						alt="Avatar"
						width={1024}
						height={1024}
						priority={true}
						placeholder="blur"
					/>

					<div className="flex flex-col flex-wrap items-center justify-center p-2 h-full">
						<h1 className="text-3xl">
							Oh, hi! I am{" "}
							<span className="text-indigo-600 dark:text-indigo-400 font-mono">
								Tapnisu
							</span>
							!
						</h1>

						<p>
							My name is{" "}
							<span className="text-indigo-600 dark:text-indigo-400 font-mono">
								Alexiy Rybin
							</span>
							.
							<br />
							I am 15 years old developer from Russia.
							<br />
							Currently using Rust for my projects.
							<br />
							Still in school btw :D
						</p>

						<Link href="/projects">
							<Button>Checkout projects</Button>
						</Link>
					</div>
				</div>
			</div>
		</BasePageLayout>
	);
};

export default HomePage;
