import { useTranslation } from "react-i18next";
import { Card } from "./card";

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
      name: "forwarding-discord-telegram",
      href: "https://github.com/tapnisu/forwarding-discord-telegram",
      description: t("projects.descriptions.forwardingDiscordTelegram"),
      madeWith: ["TypeScript"],
    },
    {
      name: "leshapomogi.ru",
      href: "https://leshapomogi.ru",
      image: "https://leshapomogi.ru/og.png",
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
    // {
    //   name: "tapni.su",
    //   href: "https://github.com/tapnisu/tapni.su",
    //   image: "https://tapni.su/og.png",
    //   description: t("projects.descriptions.website"),
    //   madeWith: ["TypeScript", "Remix", "React"],
    // },
    // {
    //   name: "Tapciify web",
    //   href: "https://tapciify.ru",
    //   description: t("projects.descriptions.tapciifyWeb"),
    //   madeWith: ["TypeScript", "Solid", "Vite", "Pico.css"],
    // },
  ].slice(0, props.amount);

  return (
    <div {...props}>
      {projects.map(({ name, image, href, description, madeWith }, index) => (
        <Card
          title={name}
          href={href}
          description={description}
          image={image}
          comments={madeWith.join(", ")}
          key={index}
        />
      ))}
    </div>
  );
}
