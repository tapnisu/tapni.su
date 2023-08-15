import BasePageLayout from "@components/basePageLayout";
import Link from "next/link";
import {
  FaDiscord,
  FaGithub,
  FaMailBulk,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <BasePageLayout
      title="Tapnisu - Contact"
      description="15 years old developer from Russia"
    >
      <h1>Contact tapnisu</h1>

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
          name: "Email",
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
          {info.icon} <pre> </pre> {info.name}
        </Link>
      ))}
    </BasePageLayout>
  );
};

export default ContactPage;
