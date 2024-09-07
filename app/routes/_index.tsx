import type { MetaFunction } from "@remix-run/node";
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
    <>
      <h1 className="mb-4 text-3xl font-bold">{t("name")} (tapnisu)</h1>
      <p className="mb-4">{t("about")}</p>
    </>
  );
}
