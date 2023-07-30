import Card from "@components/Card";
import BasePageLayout from "@components/BasePageLayout";
import setup from "@data/setup.json";

const SetupPage = () => {
    return (
        <BasePageLayout
            title="Tapnisu - Setup"
            description="My setup: workstation and tech stack"
        >
            <h1 className="p-2 text-3xl font-bold">My setup</h1>

            {setup.map(({ name, description }) => (
                <Card title={name} description={description} key={name} />
            ))}
        </BasePageLayout>
    );
};

export default SetupPage;
