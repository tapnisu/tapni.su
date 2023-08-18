import BasePageLayout from "@components/basePageLayout";
import Card from "@components/card";
import projects from "@data/projects.json";

export default function ProjectsPage() {
  return (
    <BasePageLayout title="Tapnisu - Projects" description="Projects I made">
      <h1>My projects</h1>

      {projects?.map(({ name, image, url, description, language }) => (
        <Card
          title={name}
          image={image}
          url={url}
          description={description}
          comments={`Written in ${language}`}
          key={name}
        />
      ))}
    </BasePageLayout>
  );
}
