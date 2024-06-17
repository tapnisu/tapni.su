import BasePageLayout from "@components/basePageLayout";
import Projects from "@components/projects";
import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout title={t.projectsTitle}>
      <Projects />
    </BasePageLayout>
  );
}
