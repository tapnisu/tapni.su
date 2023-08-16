import Card from "@/components/card";
import BasePageLayout from "@components/basePageLayout";
import setup from "@data/setup.json";

const SetupPage = () => {
  return (
    <BasePageLayout
      title="Tapnisu - Setup"
      description="My setup: workstation and tech stack"
    >
      <h1>My setup</h1>

      {setup.map(({ name, description }) => (
        <Card title={name} description={description} key={name} />
      ))}
    </BasePageLayout>
  );
};

export default SetupPage;
