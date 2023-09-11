import BasePageLayout from "@components/basePageLayout";
import Card from "@components/card";
import setup from "@data/setup.json";
import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

export default function SetupPage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout title={t.setup}>
      <h1>{t.setup}</h1>
      <div>
        {setup.map(({ name, description }) => (
          <Card title={name} description={description} key={name} />
        ))}
      </div>
    </BasePageLayout>
  );
}
