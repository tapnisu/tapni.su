import Card from "@/components/Card";
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
						<Card
							title={info.name}
							description={info.description}
							key={info.name}
						/>
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
							name: "Visual Studio Code as an editor",
							description: "2 GiB memory usage"
						}
					].map((info) => (
						<Card
							title={info.name}
							description={info.description}
							key={info.name}
						/>
					))}
				</div>
			</div>
		</BasePageLayout>
	);
};

export default SetupPage;
