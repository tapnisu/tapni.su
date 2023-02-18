import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

export default function Setup() {
  return (
    <>
      <Head>
        <title>Tapnisu - Setup</title>
        <meta
          name="description"
          content="My setup: workstation and tech stack"
        />
        <link rel="stylesheet" href="/globals.css" type="text/css" />
      </Head>

      <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col justify-between">
        <Navbar />

        <div className="flex flex-col justify-center items-center">
          <div className="px-2 pl-6">
            <h2 className="text-2xl p-2">Workstation</h2>
            <ul className="list-circle">
              {[
                {
                  name: "PC",
                  description:
                    "My PC, standing on a chair with Intel Core i9 11900KF, 64GB RAM (16GB*4) and RTX 3080 12GB in it.",
                },
                {
                  name: "Keychron K2 V2",
                  description:
                    "Keyboard i type on. Gateron Red Switches and toilet paper modded.",
                },
                {
                  name: "Razer Viper V2 Pro",
                  description: "",
                },
              ].map((info) => (
                <li>
                  <h1 className="text-xl">{info.name}</h1>
                  <h2 className="text-gray-800 dark:text-gray-400">
                    {info.description}
                  </h2>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl p-2">Tech stack</h2>
            <ul className="list-circle">
              {[
                {
                  name:
                    "Dynamically typed (for discord, telegram bots and websites)",
                  description: "TypeScript & Deno",
                },
                {
                  name: "Main programming language",
                  description: "Rust",
                },
                {
                  name: "Visual Studio Code as a test editor",
                  description: "Had 167 extensions for some reason",
                },
              ].map((info) => (
                <li>
                  <h1 className="text-xl">{info.name}</h1>
                  <h2 className="text-gray-800 dark:text-gray-400">
                    {info.description}
                  </h2>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
