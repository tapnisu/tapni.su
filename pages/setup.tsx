import BasePageLayout from "@components/basePageLayout";
import Card from "@components/card";
import setup from "@data/setup.json";

export default function SetupPage() {
  return (
    <BasePageLayout
      title="Setup / Aleksei Rybin"
      description="My setup: workstation and tech stack"
    >
      <h1>My setup</h1>
      <div>
        {setup.map(({ name, description }) => (
          <Card title={name} description={description} key={name} />
        ))}
      </div>
    </BasePageLayout>
  );
}
