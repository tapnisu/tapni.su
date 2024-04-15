import BasePageLayout from "@components/basePageLayout";
import Introduction from "@components/introduction";
import Projects from "@components/projects";

export default function HomePage() {
  return (
    <BasePageLayout>
      <Introduction />
      <Projects />
    </BasePageLayout>
  );
}
