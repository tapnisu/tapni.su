import BasePageLayout from "@components/basePageLayout";
import Introduction from "@components/introduction";
import Projects from "@components/projects";
import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout>
      <Introduction />
      <div>
        <h2>
          <Link href="/projects">{t.projectsTitle}</Link>
        </h2>
        <Projects amount={2} />
      </div>
      <div>
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutText}</p>
      </div>
    </BasePageLayout>
  );
}
