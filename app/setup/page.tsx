export default async function SetupPage() {
	return (
		<>
			<header>
				<title>Tapnisu - Setup</title>
				<meta
					name="description"
					content="My setup: workstation and tech stack"
				/>
			</header>

			<div className="flex flex-col justify-center items-center">
				<div className="px-2 pl-6">
					<h2 className="text-2xl p-2">Workstation</h2>
					<ul className="list-disc">
						{[
							{
								name: "PC",
								description:
									"My PC, standing on a chair with Intel Core i9 11900KF, 64GB RAM (16GB*4) and RTX 3080 12GB in it."
							},
							{
								name: "Keychron K2 V2",
								description:
									"Keyboard i type on. Gateron Red Switches and toilet paper modded."
							},
							{
								name: "Razer Viper V2 Pro",
								description: ""
							}
						].map((info) => (
							<li key={info.name}>
								<h1 className="text-xl">{info.name}</h1>
								<h2 className="text-neutral-800 dark:text-neutral-400">
									{info.description}
								</h2>
							</li>
						))}
					</ul>

					<h2 className="text-2xl p-2">Tech stack</h2>
					<ul className="list-disc">
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
							<li key={info.name}>
								<h1 className="text-xl">{info.name}</h1>
								<h2 className="text-neutral-800 dark:text-neutral-400">
									{info.description}
								</h2>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
