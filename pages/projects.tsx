import BasePageLayout from "@components/basePageLayout";
import Card from "@components/card";
import projects from "@data/projects.json";
import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

export default function ProjectsPage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout title={t.projects}>
      <h1>{t.projects}</h1>
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
