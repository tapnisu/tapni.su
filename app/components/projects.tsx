import { useTranslation } from "react-i18next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

interface ProjectsAttributes extends React.HTMLAttributes<HTMLDivElement> {
  amount?: number;
}

interface Project {
  name: string;
  href: string;
  image?: string;
  description: string;
  madeWith: string[];
}

export default function Projects(props: ProjectsAttributes) {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      name: "Tapciify web",
      href: "https://tapciify.ru",
      // image: "https://tapciify.ru/og.png",
      description: t("projects.descriptions.tapciifyWeb"),
      madeWith: ["TypeScript", "Solid", "Vite", "Pico.css"],
    },
    {
      name: "leshapomogi.ru",
      href: "https://leshapomogi.ru",
      // image: "https://leshapomogi.ru/og.png",
      description: t("projects.descriptions.leshapomogi"),
      madeWith: ["TypeScript", "Preact", "FreshJS", "TailwindCSS", "Deno"],
    },
    {
      name: "forwarding-discord-telegram",
      href: "https://github.com/tapnisu/forwarding-discord-telegram",
      description: t("projects.descriptions.forwardingDiscordTelegram"),
      madeWith: ["TypeScript"],
    },
    {
      name: "dsc-tg-forwarder",
      href: "https://github.com/tapnisu/dsc-tg-forwarder",
      description: t("projects.descriptions.forwardingDiscordTelegram"),
      madeWith: ["Rust"],
    },
    {
      name: "tapciify",
      href: "https://github.com/tapnisu/tapciify",
      description: t("projects.descriptions.tapciify"),
      madeWith: ["Rust"],
    },
    {
      name: "tapni.su",
      href: "https://github.com/tapnisu/tapni.su",
      // image: "/og.png",
      description: t("projects.descriptions.website"),
      madeWith: ["TypeScript", "Remix", "React"],
    },
  ].slice(0, props.amount);

  return (
    <div {...props}>
      <div>
        {projects.map(({ name, image, href, description, madeWith }, index) => (
          <Card key={index}>
            {image ? (
              <img src={image} alt={description} className="rounded-t-xl" />
            ) : null}
            <CardHeader>
              <CardTitle className="underline-offset-4 hover:underline">
                <a href={href}>{name}</a>
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter>
              <p>{`${t("projects.madeWith")} ${madeWith.join(", ")}`}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
