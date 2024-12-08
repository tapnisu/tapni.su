import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { CodeSnippetCopy } from "~/components/codeSnippetCopy";
import { Nijika } from "~/components/nijika";
import Projects from "~/components/projects";
import { getAge } from "~/lib/utils";

const age = getAge();

export const meta: MetaFunction = () => {
  return [
    { title: "Tapnisu" },
    {
      name: "description",
      content: `I am a ${age}-years-old developer from Russia. I started my programming journey in 2018. My first programming language was C#. Nowadays I usually use Rust and Typescript. I'll be glad to work with you!`,
    },
  ];
};

export default function Index() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <Nijika />
        <h1>{t("name")} (tapnisu)</h1>
        <p>{t("about").replace("{age}", age)}</p>

        <h2>{t("contact")}</h2>
        <ul>
          <li>
            GitHub: <a href="https://github.com/tapnisu">@tapnisu</a>
          </li>
          <li>
            X: <a href="https://x.com/tapnisu">@tapnisu</a>
          </li>
          <li>
            Telegram: <a href="https://t.me/tapnisu">@tapnisu</a>
          </li>
          <li>
            Discord:{" "}
            <CodeSnippetCopy text-to-copy="tapnisu">tapnisu</CodeSnippetCopy>
          </li>
          <li>
            Email:{" "}
            <CodeSnippetCopy text-to-copy="aleksei@tapni.su">
              aleksei@tapni.su
            </CodeSnippetCopy>
          </li>
        </ul>
      </div>
      <div>
        <h2>{t("projects.title")}</h2>
        <Projects amount={2} />
      </div>
    </>
  );
}
