import BasePageLayout from "@components/basePageLayout";
import Card from "@components/card";
import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

export default function ProjectsPage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  const projects = [
    {
      name: "Tapciify web",
      url: "https://tapciify.ru/",
      image: "/projects/tapciify-web.webp",
      description: t.projectsData.tapciifyWeb.description,
      buildUsing: ["TypeScript", "Solid", "Vite", "Pico.css"],
    },
    {
      name: "tapciify",
      url: "https://github.com/tapciify/tapciify/",
      image: "/projects/tapciify.webp",
      description: t.projectsData.tapciify.description,
      buildUsing: ["Rust"],
    },
    {
      name: "forwarding-discord-telegram",
      url: "https://github.com/tapnisu/forwarding-discord-telegram/",
      description: t.projectsData.forwardingDiscordTelegram.description,
      buildUsing: ["JavaScript"],
    },
    {
      name: "dsc-tg-forwarder",
      url: "https://github.com/tapnisu/dsc-tg-forwarder/",
      description: t.projectsData.forwardingDiscordTelegram.description,
      buildUsing: ["Rust"],
    },
    {
      name: "website",
      url: "https://github.com/tapnisu/website/",
      image: "/projects/website.webp",
      description: t.projectsData.website.description,
      buildUsing: ["TypeScript", "Next.js"],
    },
    {
      name: "лёшапомоги.рф",
      url: "https://лёшапомоги.рф/",
      description: t.projectsData.leshapomogi.description,
      buildUsing: ["TypeScript", "Preact", "Lume", "Pico.css"],
    },
    {
      name: "tapris",
      url: "https://tapris.tapni.su/",
      image: "/projects/tapris.webp",
      description: t.projectsData.tapris.description,
      buildUsing: ["TypeScript", "Deno"],
    },
  ];

  return (
    <BasePageLayout title={t.projects}>
      <h1>{t.projects}</h1>
      <div>
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
    </BasePageLayout>
  );
}
