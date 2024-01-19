import Card from "@components/card";

import websiteImage from "@public/og.png";
import leshapomogiImage from "@public/projects/leshapomogi.webp";
import tapciifyWebImage from "@public/projects/tapciify-web.webp";
import tapciifyImage from "@public/projects/tapciify.webp";

import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

import styles from "./projects.module.css";

export default function Projects(props: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  const projects = [
    {
      name: "Tapciify web",
      url: "https://tapciify.ru",
      image: tapciifyWebImage,
      description: t.projectsData.tapciifyWeb.description,
      buildUsing: ["TypeScript", "Solid", "Vite", "Pico.css"],
    },
    {
      name: "tapciify",
      url: "https://github.com/tapciify/tapciify",
      image: tapciifyImage,
      description: t.projectsData.tapciify.description,
      buildUsing: ["Rust"],
    },
    {
      name: "forwarding-discord-telegram",
      url: "https://github.com/tapnisu/forwarding-discord-telegram",
      description: t.projectsData.forwardingDiscordTelegram.description,
      buildUsing: ["TypeScript"],
    },
    {
      name: "dsc-tg-forwarder",
      url: "https://github.com/tapnisu/dsc-tg-forwarder",
      description: t.projectsData.forwardingDiscordTelegram.description,
      buildUsing: ["Rust"],
    },
    {
      name: "tapni.su",
      url: "https://github.com/tapnisu/tapni.su",
      image: websiteImage,
      description: t.projectsData.website.description,
      buildUsing: ["TypeScript", "Next.js", "React"],
    },
    {
      name: "leshapomogi.ru",
      url: "https://leshapomogi.ru",
      image: leshapomogiImage,
      description: t.projectsData.leshapomogi.description,
      buildUsing: ["TypeScript", "Preact", "FreshJS", "TailwindCSS"],
    },
    // {
    //   name: "Tapciify GUI",
    //   url: "https://github.com/tapciify/tapciify-gui",
    //   image: tapciifyWebImage,
    //   description: t.projectsData.tapciifyGui.description,
    //   buildUsing: ["Tauri", "TypeScript", "Rust", "Solid", "Vite", "Pico.css"],
    // },
  ];

  return (
    <div {...props}>
      <h2 className="text-center">{t.projectsTitle}</h2>

      <div className={styles.projects}>
        {projects?.map(({ name, image, url, description, buildUsing }) => (
          <Card
            title={name}
            image={image}
            url={url}
            description={description}
            comments={`${t.projectsData.madeWith} ${buildUsing.join(", ")}`}
            key={name}
          />
        ))}
      </div>
    </div>
  );
}
