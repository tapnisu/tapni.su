import BasePageLayout from "@components/basePageLayout";
import Introduction from "@components/introduction";
import Projects from "@components/projects";

import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout>
      <Introduction />
      <Projects />
    </BasePageLayout>
  );
}
