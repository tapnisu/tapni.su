import BasePageLayout from "@components/basePageLayout";
import Card from "@components/card";
import projects from "@data/projects.json";

export default function ProjectsPage() {
  return (
    <BasePageLayout
      title="Projects / Aleksei Rybin"
      description="Projects I made"
    >
      <h1>My projects</h1>
      <div>
        {projects?.map(({ name, image, url, description, buildUsing }) => (
          <Card
            title={name}
            image={image}
            url={url}
            description={description}
            comments={`Built using ${buildUsing.join(", ")}`}
            key={name}
          />
        ))}
      </div>
    </BasePageLayout>
  );
}
