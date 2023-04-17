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
			<div className="flex flex-col items-center justify-center min-h-[50vh]">
				<div className="flex flex-row flex-wrap justify-center items-center p-2">
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
						<h1 className="text-3xl font-bold">
							Oh, hi! I am{" "}
							<span className="text-accent-700 dark:text-accent-500 font-mono">
								Tapnisu
							</span>
							!
						</h1>

						<p>
							My name is{" "}
							<span className="text-accent-700 dark:text-accent-500 font-mono font-semibold">
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

						<div className="m-4">
							<Link href="#projects">
								<Button>Checkout projects</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between items-center" id="projects">
				<div className="p-2"></div>
			</div>
		</BasePageLayout>
	);
};

export default HomePage;
