import Card from "@/components/Card";
import BasePageLayout from "@components/BasePageLayout";

const SetupPage = () => {
	return (
		<BasePageLayout
			title="Tapnisu - Setup"
			description="My setup: workstation and tech stack"
		>
			<h1 className="text-3xl font-bold">My setup</h1>

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
			].map(({ name, description }) => (
				<Card title={name} description={description} key={name} />
			))}
		</BasePageLayout>
	);
};

export default SetupPage;
