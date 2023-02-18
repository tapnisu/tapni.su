import { Head } from "$fresh/runtime.ts";
import { Button } from "../components/FakeButton.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tapnisu - Home</title>
        <meta name="description" content="15 years old developer from Russia" />
        <link rel="stylesheet" href="/globals.css" type="text/css" />
      </Head>

      <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center w-max">
            <img
              src="/avatar.webp"
              class="w-72 h-72 rounded-full m-2 border-2 border-gray-300 dark:border-gray-800"
              alt="Avatar"
            />

            <div className="flex flex-col flex-wrap items-center justify-center p-2 h-full">
              <h1 className="text-3xl">
                Oh, hi! I am{" "}
                <span class="text-indigo-600 dark:text-indigo-400 font-mono">Tapnisu</span>!
              </h1>

              <p>
                My name is{" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-mono">Alexiy Rybin</span>.
                <br />
                I am 15 years old developer from Russia.
                <br />
                Currently using Rust for my projects.
                <br />
                Still in school btw :D
              </p>

              <a href="/projects">
                <Button>Checkout projects</Button>
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
