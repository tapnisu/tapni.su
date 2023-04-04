import BasePageLayout from "@components/BasePageLayout";

const SetupPage = () => {
	return (
		<BasePageLayout
			title="Tapnisu - Setup"
			description="My setup: workstation and tech stack"
		>
			<div className="flex flex-col justify-center items-center">
				<div className="p-2">
					<h2 className="text-2xl font-semibold p-2">Workstation</h2>
					<ul className="list-disc list-inside">
						{[
							{
								name: "PC",
								description:
									"My PC, standing on a chair with Intel Core i9 11900KF, 64GB RAM (16GB*4) and RTX 3080 12GB in it."
							},
							{
								name: "Keychron K2 V2",
								description:
									"Keyboard I use for coding. Gateron Red Switches and toilet paper modded."
							},
							{
								name: "Razer Viper V2 Pro",
								description: "Mouse"
							}
						].map((info) => (
							<>
								<li key={info.name} className="text-xl">
									{info.name}
								</li>
								<p className="text-main-800 dark:text-main-400">
									{info.description}
								</p>
							</>
						))}
					</ul>

					<h2 className="text-2xl font-semibold p-2">Tech stack</h2>
					<ul className="list-disc list-inside">
						{[
							{
								name: "Dynamically typed (for discord, telegram bots and websites)",
								description: "TypeScript & Deno"
							},
							{
								name: "Main programming language",
								description: "Rust"
							},
							{
								name: "Visual Studio Code as a test editor",
								description: "Had 167 extensions for some reason"
							}
						].map((info) => (
							<>
								<li key={info.name} className="text-xl">
									{info.name}
								</li>
								<p className="text-main-800 dark:text-main-400">
									{info.description}
								</p>
							</>
						))}
					</ul>
				</div>
			</div>
		</BasePageLayout>
	);
};

export default SetupPage;
