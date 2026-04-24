import { Link, type MetaFunction } from "react-router";
import { useTranslation } from "react-i18next";
import { Kohaku } from "~/components/kohaku";
import Projects from "~/components/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Tapnisu" },
    {
      name: "description",
      content: `I am a developer from Russia. I started my programming journey in 2018. My first programming language was C#. Nowadays I usually use Rust and Typescript. I'll be glad to work with you!`,
    },
  ];
};

export default function Index() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <Kohaku />
        <h1>{t("name")} (tapnisu)</h1>
        <p>{t("about")}</p>

        <h2>{t("contact")}</h2>
        <ul>
          <li>
            GitHub: <Link to="https://github.com/tapnisu">@tapnisu</Link>
          </li>
          <li>
            X: <Link to="https://x.com/tapnisu">@tapnisu</Link>
          </li>
          <li>
            Telegram: <Link to="https://t.me/tapnisu">@tapnisu</Link>
          </li>
          <li>
            Email: <Link to="mailto:aleksei@tapni.su">aleksei@tapni.su</Link>
          </li>
          <li>
            Discord: <code>tapnisu</code>
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
