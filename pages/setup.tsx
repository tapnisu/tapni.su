import BasePageLayout from "@components/BasePageLayout";

const SetupPage = () => {
	return (
		<BasePageLayout
			title="Tapnisu - Setup"
			description="My setup: workstation and tech stack"
		>
			<div>
				<h2 className="text-2xl font-bold text-center">Workstation</h2>

				<div>
					{[
						{
							name: "PC",
							description:
								"My PC, standing on a chair with Intel Core i9 11900KF, 64GB RAM (16GB*4) and RTX 3080 12GB in it"
						},
						{
							name: "Keychron K2 V2",
							description:
								"Keyboard I use for coding. Gateron Red Switches and toilet paper modded"
						},
						{
							name: "Razer Viper V2 Pro",
							description: "Mouse"
						}
					].map((info) => (
						<div
							key={info.name}
							className="bg-main-100 dark:bg-main-900 m-4 p-4 rounded-xl"
						>
							<h2 className="text-xl text-main-900 dark:text-main-100">
								{info.name}
							</h2>

							<p className="text-main-800 dark:text-main-400">
								{info.description}
							</p>
						</div>
					))}
				</div>

				<h2 className="text-2xl font-bold text-center">Tech stack</h2>
				<div>
					{[
						{
							name: "Scripting",
							description: "TypeScript & Deno"
						},
						{
							name: "Main programming language",
							description: "Rust"
						},
						{
							name: "Visual Studio Code as a test editor",
							description: "2 GiB memory usage"
						}
					].map((info) => (
						<div
							key={info.name}
							className="bg-main-100 dark:bg-main-900 m-4 p-4 rounded-xl"
						>
							<h2 className="text-xl text-main-900 dark:text-main-100">
								{info.name}
							</h2>

							<p className="text-main-800 dark:text-main-400">
								{info.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</BasePageLayout>
	);
};

export default SetupPage;
