import { Head } from "$fresh/runtime.ts";
import AccountCard from "../components/AccountCard.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Tapnisu - Contact</title>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        >
        </link>
      </Head>

      <div className="bg-black text-white min-h-screen flex flex-col justify-between">
        <Navbar />

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center">Contact</h1>
          <div className="grid p-4 grid-cols-1 md:grid-cols-2">
            <AccountCard
              username="tapnisu"
              website="Github"
              url="https://github.com/tapnisu"
            />
            <AccountCard
              username="tapnisu#7384"
              website="Discord"
              url="https://discord.com/users/586128640136445964"
            />
            <AccountCard
              username="tapnisu"
              website="Twitter"
              url="https://twitter.com/tapnisu"
            />
            <AccountCard
              username="tapnisu"
              website="Telegram"
              url="https://t.me/tapnisu"
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
