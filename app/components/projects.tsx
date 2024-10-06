import { useTranslation } from "react-i18next";
import { Card } from "./card";
import clsx from "clsx";

import "./projects.css";

interface ProjectsAttributes extends React.HTMLAttributes<HTMLDivElement> {
  amount?: number;
}

interface Project {
  name: string;
  href: string;
  image?: string;
  imageColor?: string;
  description: string;
  madeWith: string[];
}

export default function Projects(props: ProjectsAttributes) {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      name: "forwarding-discord-telegram",
      href: "https://github.com/tapnisu/forwarding-discord-telegram",
      image:
        "https://opengraph.githubassets.com/9a206ef0cf666e24f5618d6c1a23001fb904cfbdcc3dbb399898752235ff7a55/tapnisu/forwarding-discord-telegram",
      imageColor: "#ffffff",
      description: t("projects.descriptions.forwardingDiscordTelegram"),
      madeWith: ["TypeScript"],
    },
    {
      name: "leshapomogi.ru",
      href: "https://leshapomogi.ru",
      image: "https://leshapomogi.ru/og.png",
      imageColor: "#11191f",
      description: t("projects.descriptions.leshapomogi"),
      madeWith: ["TypeScript", "Preact", "FreshJS", "TailwindCSS", "Deno"],
    },
    {
      name: "tapciify",
      href: "https://github.com/tapnisu/tapciify",
      description: t("projects.descriptions.tapciify"),
      madeWith: ["Rust"],
    },
    {
      name: "dsc-tg-forwarder",
      href: "https://github.com/tapnisu/dsc-tg-forwarder",
      description: t("projects.descriptions.forwardingDiscordTelegram"),
      madeWith: ["Rust"],
    },
    {
      name: "tapni.su",
      href: "https://github.com/tapnisu/tapni.su",
      image: "https://tapni.su/og.png",
      imageColor: "#e2d07b",
      description: t("projects.descriptions.website"),
      madeWith: ["TypeScript", "Remix", "React"],
    },
    {
      name: "Tapciify web",
      href: "https://tapciify.ru",
      image: "https://tapciify.ru/og.png",
      imageColor: "#18232c",
      description: t("projects.descriptions.tapciifyWeb"),
      madeWith: ["TypeScript", "Solid", "Vite", "Pico.css"],
    },
  ].slice(0, props.amount);

  return (
    <div className={clsx("projects", props.className)} {...props}>
      {projects.map(
        ({ name, image, href, description, imageColor, madeWith }, index) => (
          <Card
            title={name}
            href={href}
            description={description}
            image={image}
            image-width={1200}
            image-height={600}
            image-color={imageColor}
            comments={madeWith.join(", ")}
            key={index}
          />
        )
      )}
    </div>
  );
}
