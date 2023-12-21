import BasePageLayout from "@components/basePageLayout";
import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaDiscord,
  FaGithub,
  FaMailBulk,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

export default function ContactPage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout title={t.contact}>
      <h1>{t.name}</h1>

      <div>
        {[
          {
            name: "Github",
            url: "https://github.com/tapnisu",
            icon: <FaGithub />,
          },
          {
            name: "Discord: tapnisu",
            url: "/discord",
            icon: <FaDiscord />,
          },
          {
            name: "Twitter",
            url: "/twitter",
            icon: <FaTwitter />,
          },
          {
            name: "Telegram",
            url: "/telegram",
            icon: <FaTelegram />,
          },
          {
            name: "Email: 0xalekseirybin@gmail.com",
            url: "/email",
            icon: <FaMailBulk />,
          },
        ]?.map((info: { name: string; url: string; icon: React.ReactNode }) => (
          <Link
            href={info.url}
            key={info.name}
            style={{
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: "row",
              textDecoration: "none",
            }}
          >
            <b>{info.icon}</b> <pre> </pre> {info.name}
          </Link>
        ))}
      </div>
    </BasePageLayout>
  );
}
