import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { useTranslation } from "react-i18next";

export const meta: MetaFunction = () => {
  return [
    { title: "Tapnisu" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("name")}</h1>
      <Button>hi</Button>
    </div>
  );
}
