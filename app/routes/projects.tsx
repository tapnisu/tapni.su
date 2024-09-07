import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import Projects from "~/components/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects / Tapnisu" },
    {
      name: "description",
      content:
        "I am a 16-years-old developer from Russia. I started my programming journey in 2018. My first programming language was C#. Nowadays I usually use Rust and Typescript. I'll be glad to work with you!",
    },
  ];
};

export default function Index() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">{t("projects.title")}</h1>
      <Projects />
    </>
  );
}
