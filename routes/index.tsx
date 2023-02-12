import { Head } from "$fresh/runtime.ts";
import { Button } from "../components/FakeButton.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import SetupCard, { SetupCardProps } from "../components/SetupCard.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tapnisu - Home</title>
        <link rel="stylesheet" href="/globals.css" type="text/css" />
      </Head>

      <div className="bg-black text-white min-h-screen flex flex-col justify-between">
        <div className="flex flex-col items-center bg-gradient-to-b from-[#0d0e1a] to-transparent">
          <Navbar />
          <div className="flex flex-col justify-center items-center w-max">
            <img
              src="/avatar.png"
              class="w-72 h-72 rounded-full m-2 border-2 border-gray-800"
              alt="Avatar"
            />

            <div className="flex flex-col flex-wrap items-center justify-center p-2 h-full">
              <h1 className="text-3xl">
                Oh, hi! I am{" "}
                <span class="text-indigo-400 font-mono">Tapnisu</span>!
              </h1>

              <p>
                My name is{" "}
                <span className="text-indigo-400 font-mono">Alexiy Rybin</span>.
                <br />
                I am 15 y.o. a developer based in Russia.
                <br />
                Currently using Rust for my projects.
                <br />
                Still in school btw
              </p>

              <a href="/projects">
                <Button>Checkout projects</Button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-center">My tech stack</h2>

          <div className="grid p-4 grid-cols-1 md:grid-cols-2">
            {[
              { name: "Deno", description: "Scripting things" },
              {
                name: "Fresh",
                description: "Framework for deno\nThis website uses it",
              },
              { name: "Rust", description: "Rewrite it in Rust" },
              {
                name: "Tailwind CSS",
                description: "I think it looks good\nBut it Doesn't",
              },
            ].map((info: SetupCardProps) => (
              <SetupCard
                name={info.name}
                description={info.description}
                imageAlt={info.imageAlt}
                imageURL={info.imageURL}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
