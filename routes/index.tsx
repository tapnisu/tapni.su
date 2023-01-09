import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tapnisu - Home</title>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar />

      <div className="min-h-screen flex flex-col justify-center items-center font-mono bg-black text-white">
        <div className="flex flex-col items-center p-2">
          <img
            src="/avatar.png"
            class="w-72 h-72 rounded-full"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </div>

        <h1 className="text-2xl p-2">
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
      </div>
    </>
  );
}