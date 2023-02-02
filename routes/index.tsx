import { Head } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import SetupCard from "../components/SetupCard.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tapnisu - Home</title>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="/globals.css" type="text/css" />
      </Head>

      <div className="bg-black text-white min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center p-2">
            <img
              src="/avatar.png"
              class="w-72 h-72 rounded-full"
              alt="Avatar"
            />
          </div>

          <h1 className="text-3xl p-2">
            Oh, hi! I am <u>Tapnisu</u>!
          </h1>

          <p className="p-2">
            My name is <u>Alexiy Rybin</u>.
            <br />
            I am 15 y.o. a developer based in Russia.
            <br />
            Currently using rust for my projects.
            <br />
            Still in school :D.
          </p>
          <a href="/projects">
            <Button>Checkout projects</Button>
          </a>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-center">My tech stack</h2>

          <div className="grid p-4 grid-cols-1 md:grid-cols-2 md:w-[768px]">
            <SetupCard
              name="Deno"
              description={
                "Scripting things"
              }
            />
            <SetupCard
              name="Fresh"
              description={
                "Framework for deno\nThis website uses it"
              }
            />
            <SetupCard name="Rust" description="Rewrite it in Rust" />
            <SetupCard
              name="Tailwind CSS"
              description={"I think it looks good\nBut it Doesn't"}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
